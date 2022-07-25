<template>
  <intersect @enter="active = true">
    <div class="intersect-block" :class="{ active: active }">
      <slot />
    </div>
  </intersect>
</template>

<script >
import Vue from 'vue'
import Intersect from 'vue-intersect'
export default Vue.extend({
  name: 'BlockAnimation',
  components: {
    Intersect,
  },
  data () {
    return {
      active: false
    }
  },
})
</script>

<style lang="scss" scoped>
.intersect-block {
  opacity: 0;
  transform: translate(0, 5rem);
  transition: opacity 0.5s ease, transform 0.5s ease;
  transition-delay: 0.4s;
  @include tablet_desktop {
    width: calc(32.05%);
  }
  &.active {
    opacity: 1;
    transform: translateZ(0);
  }
}
</style>
