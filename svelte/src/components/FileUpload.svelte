<script lang="ts">
  let input: HTMLInputElement

  let id = `${(Math.random() * 1000000).toFixed()}`

  // $: files = input.files
</script>

<div>
  <label for={id} class="button secondary sm">Browse Files</label>
  <input type="file" {id} bind:this={input} multiple />
</div>

<style lang="scss">
  input {
    display: none;
  }
</style>
