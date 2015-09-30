import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('tree', params.tree_id);
  },

  actions: {
    save3(params) {
      var newTree = this.store.createRecord('tree', params);
      newTree.save();
      this.transitionTo('index');
    },
  }
});
    // saveReview(params) {
    //   var newReview = this.store.createRecord('comment', params);
    //   newReview.save();
    //   params.tree.save().then(function(tree) {
    //     tree.reload();
    //   });
    //   this.transitionTo('tree', params.tree.id);
    // },


    // update(tree, params) {
    //   Object.keys(params).forEach(function(key) {
    //     if(params[key]!==undefined) {
    //       tree.set(key,params[key]);
    //     }
    //   });
    //   tree.save();
    //   this.transitionTo('tree', params.tree.id);
    // },

    // delete(tree) {
    //   tree.destroyRecord();
    //   this.transitionTo('index');
    // }
