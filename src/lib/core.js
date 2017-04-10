import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';
import { ReactiveVar } from 'meteor/reactive-var';
import { Spacebars } from 'meteor/spacebars';
import { _ } from 'meteor/underscore';

Template.$ = new Template('Template.$', function () {
  const templateName = Reflect.apply(Spacebars, this, this.lookup('template'));
  const template = Template[templateName];

  if (!template) {
    throw new Error(`There is no such template called: ${templateName}`);
  }

  const props = _.clone(Blaze._parentData(0));

  // Deleting template property from props
  Reflect.deleteProperty(props, 'template');

  // Assign the props to the template instance
  // We need to run this onCreated hook at the beginning
  // That's why we do this
  template._callbacks.created.unshift(function () {
    const templateInstance = this;

    // Assign props to the template instance
    this.props = props;
    const reactiveState = {};
    const nonReactiveState = {};

    // Set a state
    this.setState = (key, value) => {
      if (!reactiveState[key]) {
        reactiveState[key] = new ReactiveVar();
        const helpers = { [`$${key}`]: () => reactiveState[key].get() };

        templateInstance.view.template.helpers(helpers);
      }

      reactiveState[key].set(value);
      nonReactiveState[key] = value;
    };

    // Get a state
    this.getState = (key) => {
      const state = nonReactiveState[key];

      if (!state) {
        return undefined;
      }

      return state;
    };
  });

  const view = template.constructView();

  return view;
});
