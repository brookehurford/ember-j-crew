import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('product');
  },
  actions: {
    saveProduct(params) {
      console.log(params);
      var newProduct = this.store.createRecord('product', params);
      newProduct.save();
      this.transitionTo('admin');
    }
  }
});
