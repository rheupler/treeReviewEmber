import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('tree');
  },

    actions: {
      save3(params) {
        var newTree = this.store.createRecord('tree', params);
        newTree.save();
        this.transitionTo('index');
      },
    }
});
