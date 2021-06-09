export default {
  saveToken: (context,payload) => {
    context.commit('SAVE_USER_TOKEN',payload);
  },
  saveUserId: (context,payload) => {
    context.commit('SAVE_USER_ID',payload);
  }
}