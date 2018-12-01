<template>
  <img :src=giphyUrl v-bind:alt=name height="200"/>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class GiphyImage extends Vue {
  @Prop() private name!: string;
  private giphyUrl: string = '';

  private async created() {
    const giphyApi = '//api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=1&q=';

    const response = await axios.get(giphyApi + this.name);
    const data = await response.data.data;
    if (data.length) {
      this.giphyUrl = data[0].images.original.url;
    } else {
      this.giphyUrl = '//media.giphy.com/media/YaOxRsmrv9IeA/giphy.gif';
    }
  }
}
</script>

<!-- The "scoped" attribute limits CSS to this component only -->
<style scoped>
img {
  margin: 10px 0 0;
}
</style>