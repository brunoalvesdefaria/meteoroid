import { Meteoroid } from 'meteor/brunoalvesdefaria:meteoroid';
import { describe, it } from 'meteor/practicalmeteor:mocha';
import { chai } from 'meteor/practicalmeteor:chai';

describe('Mocha', () => {
  it('Meteoroid name test', () => {
    chai.assert.equal(Meteoroid.name, 'meteoroid');
  });
});
