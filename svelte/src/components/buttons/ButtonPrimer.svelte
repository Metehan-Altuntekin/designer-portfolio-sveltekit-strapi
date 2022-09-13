<script lang="ts">
  export let sm: boolean = false
  export let md: boolean = false
  export let lg: boolean = false
  export let href: string = '#'
</script>

<a {href} class:sm class:md class:lg><slot /></a>

<style lang="scss">
  a {
    @include button;
  }
</style>
