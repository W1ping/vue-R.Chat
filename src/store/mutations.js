export default {
  SAVE_USER_TOKEN: (state, payload) => {
    state.token = payload;
  },
  SAVE_USER_ID: (state, payload) => {
    state.userId = payload;
  }
}