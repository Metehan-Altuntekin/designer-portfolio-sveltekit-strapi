<script lang="ts">
  import Icon from '@iconify/svelte'
  export let value: File[] = []

  export let files: FileList | null = null
  export let error: string | undefined = undefined

  export let MAX_TOTAL_SIZE: number = 1000 * 1000 * 100 // 100MB
  export let MAX_FILES: number = 5

  let id = `${(Math.random() * 1000000).toFixed()}`

  // get files from input element and update value
  $: files, addFiles()
  function addFiles() {
    value = [...value, ...Array.from(files ?? []).filter((file) => !value.some((f) => f.name === file.name))]
  }

  function removeFile(file: File) {
    value = value.filter((f) => f.name !== file.name)
  }
</script>

<div>
  <div class="helper">
    Max total size can't exceed {MAX_TOTAL_SIZE / 1000 / 1000}MB and max files: {MAX_FILES}
  </div>
  <input type="file" {id} multiple bind:files disabled={value.length >= MAX_FILES} />
  <label for={id} class="button secondary xs" class:error>Add Files</label>
  {#if !!files}
    <ul class="files-preview" class:error>
      {#each value as file (file.name)}
        <li>
          <span class="chip" title={file.name}
            >{file.name}
            <div class="remove-button" on:click={() => removeFile(file)}>
              <Icon icon="eva:close-fill" />
            </div>
          </span>
        </li>
      {/each}
    </ul>
  {/if}
  {#if error}
    <div class="error-helper">{error}</div>
  {/if}
</div>

<style lang="scss">
  .helper {
    font-size: 0.8rem;
    color: #aaa;
    margin-bottom: 0.5rem;
  }

  input {
    display: none;
  }

  input:disabled + label {
    cursor: not-allowed;
    filter: contrast(0.4);
  }

  .files-preview {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 1rem 0;

    li > span {
      max-width: 10em;
      overflow: hidden;
      text-overflow: ellipsis;

      position: relative;
      .remove-button {
        visibility: hidden !important;
        position: absolute;
        inset: 0 0 0 auto;
        font-size: 1.6em;
        cursor: pointer;
        background-color: #555;

        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 0.2em;

        &:hover {
          background-color: #777;
        }
      }

      &:hover {
        .remove-button {
          visibility: visible !important;
        }
      }
    }
  }

  .files-preview.error {
    border: 1px solid red;
  }

  .error-helper {
    color: #f26;
    font-weight: 400;
    font-family: Poppins, Kanit, Segoe UI, sans-serif;
    font-size: 0.85rem;
    line-height: 1;
    padding: 0.5em 1em 0 1em;
  }
</style>
