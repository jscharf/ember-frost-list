import Ember from 'ember'
const {Route} = Ember

export default Route.extend({
  model () {
    return [
      {id: 1, label: 'Hello', type: 'a'},
      {id: 2, label: 'Salut', type: 'b'}
    ]
  }
})
