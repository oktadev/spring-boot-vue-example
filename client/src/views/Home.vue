<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <BeerList v-if="authenticated"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BeerList from '@/components/BeerList.vue'; // @ is an alias to /src

@Component({
  components: {
    BeerList,
  },
})
export default class Home extends Vue {
  private authenticated: boolean = false;

  private created() {
    this.isAuthenticated();
  }

  private async isAuthenticated() {
    this.authenticated = (this.$auth) ? await this.$auth.isAuthenticated() : false;
  }
}
</script>
