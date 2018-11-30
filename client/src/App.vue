<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
            |
            <router-link to="/about">About</router-link>
        </div>
        <button v-if="authenticated" v-on:click="logout">Logout</button>
        <button v-else v-on:click="login">Login</button>
        <router-view/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  public authenticated: boolean = false;

  private created() {
    this.isAuthenticated();
  }

  private async isAuthenticated() {
    this.authenticated = await this.$auth.isAuthenticated();
  }

  private async login() {
    await this.$auth.loginRedirect();
  }

  private async logout() {
    await this.$auth.logout();
    await this.isAuthenticated();

    // Navigate back to home
    this.$router.push({path: '/'});
  }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
