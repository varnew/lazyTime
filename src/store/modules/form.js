const state = {
  list: [], // 操作数据
  active: {} // 当前需要设置参数的项
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
    state.list.splice(index, 0, ele)
  },
  deleteItem (state, index) { // 删除
    state.list.splice(index, 1)
  },
  upListData (state, list) { // 更新属性
    state.list = list
  },
  setActive (state, data) {
    if (data.type === 'end') {
      state.active = state.list[data.evt.newIndex]
      state.list[data.evt.newIndex].id = new Date().getTime().toString()
    } else if (data.type === 'click') {
      state.active = data.element
    } else if (data.type === 'edit') {
      //
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
