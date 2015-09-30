import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('tree', {path: '/tree/:tree_id'});
  this.route('about');
});

export default Router;
