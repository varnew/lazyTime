const state = {
  list: []
}

// getters
const getters = {
  currntList: (state, getters, rootState) => {
    return state.list
  }
}

// actions
const actions = {
  action ({ commit, state }, products) {}
}

// mutations
const mutations = {
  copyItem (state, { index, ele }) { // 复制
    console.log('----------d')
    console.log(ele)
    console.log('----------d')
    state.list.splice(index, 0, ele)
  },
  deleteItem (state, index) { // 删除
    state.list.splice(index, 1)
  },
  upListData (state, list) { // 更新属性
    state.list = list
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
