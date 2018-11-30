<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ImplicitCallback extends Vue {

  private async created() {
    await this.$auth.handleAuthentication();
    this.$router.replace({
      path: this.$auth.getFromUri(),
    });
  }

  private render() {
    // empty
  }
}
</script>
