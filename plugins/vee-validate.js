import Vue from 'vue'
import {
  ValidationProvider,
  ValidationObserver,
  extend,
  configure,
  setInteractionMode
} from 'vee-validate'

import * as rules from 'vee-validate/dist/rules'

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
setInteractionMode('eager')

Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule])
})


export default ({ app }) => {
  configure({
    defaultMessage: (_field_, values) => values._rule_
  })
}
