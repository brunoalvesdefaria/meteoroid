import { name } from 'meteor/brunoalvesdefaria:meteoroid';
import { chai } from 'meteor/practicalmeteor:chai';

describe('Mocha', function () {
  it('Meteoroid name test', function () {
    chai.assert.equal(name, 'meteoroid');
  });
});
