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
  addItem (state, { element }) { // 添加
    console.log(element)
    const ele = JSON.parse(JSON.stringify(element))
    ele.id = new Date().getTime()
    state.list.push(ele)
  },
  deleteItem (state, index) { // 删除
    state.list.splice(index, 1)
  },
  upListData (state, list) { // 实现可拖拽排序
    list.map((item, index) => {
      if (!item.id) {
        list.splice(index, 1)
      }
    })
    state.list = list
  },
  setActive (state, data) {
    if (data.type === 'end') {
      state.active = state.list[data.evt.newIndex]
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
