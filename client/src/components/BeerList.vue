<template>
    <div>
        <h1>Beer List</h1>

        <div class="grid">
            <div v-for="beer in beers">
                {{ beer.name }}<br/>
                <GiphyImage :name="beer.name"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import GiphyImage from '@/components/GiphyImage.vue';
import { Prop } from 'vue/types/options';

export interface Beer {
  id: number;
  name: string;
  giphyUrl: string;
}

@Component({
  components: {GiphyImage},
})
export default class BeerList extends Vue {
  public beers: Beer[] = [];

  private async created() {
    // axios.defaults.headers.common.Authorization = `Bearer ${await Auth.getAccessToken()}`;

    axios.get('/good-beers', {
      headers: {
        Authorization: `Bearer ${await this.$auth.getAccessToken()}`,
      },
    }).then((response: any) => {
      this.beers = response.data;
    });
  }
}
</script>

<style scoped>
/* https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout */
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(100px, auto);
    width: 80%;
    margin: 0 auto;
}
</style>