import Ember from 'ember'
const {Mixin, on} = Ember
import computed from 'ember-computed-decorators'

export default Mixin.create({
  initListCoreMixin: on('init', function () {
    Ember.defineProperty(this, '_listItems', Ember.computed.alias(this.listConfig.items))
  }),

  @computed('_listItems.[]')
  listItems (listItems) {
    let wrapper = []
    return listItems.map((item) => {
      return wrapper.pushObject(Ember.Object.create({
        id: item.id,
        record: item
      }))
    })
  },

  @computed('listItems.[]', 'selectedItems', 'expandedItems')
  StatefulListItems (listItems, selectedItems, expandedItems) {
    return listItems.map((item) => {
      item.set('isSelected', selectedItems.getWithDefault(item.id, false))
      item.set('isExpanded', expandedItems.getWithDefault(item.id, false))
      return item
    })
  }
})
