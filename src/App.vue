<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <Particle name="particle-js"/> -->
    <!-- <Login/> -->
    <router-view/>
  </div>
</template>

<script>
import Login from 'components/auth/Login.vue';
import Particle from 'components/layout/Particle.vue';

export default {
  name: 'App',
  components: {
    Login,
    Particle
  }
}
</script>

<style lang="scss">
@import 'assets/css/base.css';
</style>
  