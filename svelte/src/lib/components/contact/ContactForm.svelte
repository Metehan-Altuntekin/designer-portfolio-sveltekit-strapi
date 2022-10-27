<script lang="ts">
  import { progressStore, pending, sendMessage, schema, errors, FILES_TOTAL_MAX_SIZE } from '$lib/stores/contact'
  import type { Schema } from '$lib/stores/contact'

  import IconField from '../IconField.svelte'
  import FileUpload from '../FileUpload.svelte'

  let value: Schema = {
    fullName: '',
    email: '',
    tel: '',
    message: '',
    files: [] as File[],
  }

  function handleSubmit() {
    try {
      sendMessage(value)
      console.info(value)
    } catch (error) {
      console.error(error)
    }
  }
</script>

<form action="" method="post" on:submit|preventDefault={handleSubmit}>
  <h1>Send a Message</h1>
  <IconField
    bind:value={value.fullName}
    label="Full Name"
    icon="ic:round-account-circle"
    error={$errors.fullName}
    required
  />
  <IconField bind:value={value.email} label="Email" icon="ic:round-email" error={$errors.email} required />
  <IconField bind:value={value.tel} label="Telephone - optional" icon="ic:round-phone" error={$errors.tel} />
  <IconField bind:value={value.message} label="Your Message" textarea rows={5} error={$errors.message} required />
  <FileUpload bind:value={value.files} error={$errors.files} MAX_FILES={5} MAX_TOTAL_SIZE={FILES_TOTAL_MAX_SIZE} />
  <button type="submit" class="button sm" class:processing={$pending} disabled={$pending}>Send Message</button>
</form>

<style lang="scss">
  form {
    background-color: #112;
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    gap: 1rem;
    border-radius: 20px;
  }

  h1 {
    font-size: clamp(1rem, 2.3vw, 1.6rem);
    color: var(--color-primary);
    font-weight: 600;
  }

  button.processing {
    cursor: wait;
    color: transparent;
    filter: brightness(0.7);

    &:after {
      content: '';
      box-sizing: border-box;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 20px;
      height: 20px;
      margin-top: -10px;
      margin-left: -10px;
      border-radius: 50%;
      border: 3px solid #fff7;
      border-top-color: #fff;
      animation: spinner 0.6s linear infinite;
      transition: 1s;
    }
  }

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
</style>
