import FrostListItem from 'ember-frost-list/components/frost-list-item'
import {PropTypes} from 'ember-prop-types'

import layout from './template'

export default FrostListItem.extend({

  // == Dependencies ==========================================================

  // == Keyword Properties ====================================================

  layout,

  // == PropTypes =============================================================

  propTypes: {
    itemMaps: PropTypes.object,
    buttonText: PropTypes.string
  },

  getDefaultProps () {
    return {
      buttonText: 'Click'
    }
  },

  // == Computed Properties ===================================================

  // == Functions =============================================================

  // == DOM Events ============================================================

  // == Lifecycle Hooks =======================================================

  // == Actions ===============================================================

  actions: {
    testBinding () {
      this.set('buttonText', 'I have been clicked!')
    }
  }

})
