export default {
  namespace: 'games',
  state: [],
  reducers: {
    delete(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
    run(state, {payload: id}) {
      alert(1111);
    }
  },
};
