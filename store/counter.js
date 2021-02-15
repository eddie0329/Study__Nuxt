export const state = () => ({
  count: 0
});

export const getters = {};

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

export const mutations = {
  [INCREMENT](state) {
    state.count++;
  },
  [DECREMENT](state) {
    state.count--;
  }
};

export const actions = {};
