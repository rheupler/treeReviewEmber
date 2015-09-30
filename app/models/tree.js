import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  type: DS.attr(),
  address: DS.attr(),
  comments: DS.attr(),
  image: DS.attr()
});
