<script lang="ts">
  import { progress, sendMessage, schema, errors } from '$lib/stores/contact'
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
  <IconField bind:value={value.tel} label="Phone Number" icon="ic:round-phone" error={$errors.tel} />
  <IconField bind:value={value.message} label="Your Message" textarea rows={5} error={$errors.message} required />
  <FileUpload bind:value={value.files} error={$errors.files} />
  <button type="submit" class="button sm">Send Message</button>
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
</style>
