import './body.css';
import { Template } from 'meteor/templating';

Template.content.onCreated(() => {
  const instance = Template.instance();

  console.log(instance, 123);
});
