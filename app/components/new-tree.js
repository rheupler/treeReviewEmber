import Ember from 'ember';

export default Ember.Component.extend({
  addNewTree: false,
  actions: {
    // newTreeShow() {
    //   this.set('addNewTree', true);
    // },

    save1() {
      var params = {
        name: this.get('name'),
        type: this.get('type'),
        address: this.get('address'),
        comments: this.get('comments'),
        image: this.get('image')
      };
      // this.set('addNewTree', false);
      this.sendAction('save2', params);
    }
  }
});
