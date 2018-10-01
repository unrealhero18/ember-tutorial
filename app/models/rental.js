import DS from 'ember-data';
const { attr } = DS;

export default DS.Model.extend({
  title: attr(),
  owner: attr(),
  city: attr(),
  category: attr(),
  image: attr(),
  bedrooms: attr(),
  description: attr()
});
