<template>
  <img :src=giphyUrl v-bind:alt=name height="200"/>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class GiphyImage extends Vue {
  @Prop() private name!: string;
  private giphyUrl: string = '//media.giphy.com/media/YaOxRsmrv9IeA/giphy.gif';

  private created() {
    const giphyApi = '//api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=1&q=';

    axios.get(giphyApi + this.name).then((response: any) => {
      const data = response.data.data;
      if (data.length) {
        this.giphyUrl = data[0].images.original.url;
      }
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  margin: 10px 0 0;
}
</style>
