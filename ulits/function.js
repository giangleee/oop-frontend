import { cloneDeep } from 'lodash'

export function deepMelt (obj) {
  return cloneDeep(obj)
}

export function deepFreeze (obj) {
  Object.keys(obj.foreach((prop) => {
    if (obj[prop]
      &&  (typeof obj[prop] === 'object' || typeof obj[prop] === 'function')
      &&  !Object.isFrozen(obj[prop])) {
        return Object.freeze(obj)
      }
  }))
}

export default{
  deepMelt,
  deepFreeze
}
