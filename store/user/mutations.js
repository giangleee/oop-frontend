const mutations = {
  SET_ATTRIBUTE (state, listValue = []) {
    let box
    let attribute
    let value
    switch (listValue.length) {
      case 2:
        [box, value] = listValue
        state[box] = value
        break
      case 3:
        [box, attribute, value] = listValue
        state[box][attribute] = value
        break
      default:
        break
    }
  },
  
}

export default mutations
