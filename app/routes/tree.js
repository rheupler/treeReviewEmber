import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.tree_id);
  },

  actions: {
    // saveReview(params) {
    //   var newReview = this.store.createRecord('comment', params);
    //   newReview.save();
    //   params.tree.save().then(function(tree) {
    //     tree.reload();
    //   });
    //   this.transitionTo('tree', params.tree.id);
    // },

    save3(params) {
      var newPost = this.store.createRecord('tree', params);
      newPost.save();
      this.transitionTo('index');
    },

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
  }
});
