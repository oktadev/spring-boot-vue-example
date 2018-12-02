<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <BeerList/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BeerList from '@/components/BeerList.vue';

@Component({
  components: {BeerList}
})
export default class Home extends Vue {}
</script>
