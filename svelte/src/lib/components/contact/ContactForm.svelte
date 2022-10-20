<script lang="ts">
  import IconField from '../IconField.svelte'
  import FileUpload from '../FileUpload.svelte'

  let value = {
    fullName: '',
    email: '',
    tel: '',
    message: '',
  }
  $: console.info(value)
</script>

<form action="" method="post">
  <h1>Send a Message</h1>
  <IconField bind:value={value.fullName} label="Full Name" icon="ic:round-account-circle" />
  <IconField bind:value={value.email} label="Email" icon="ic:round-email" />
  <IconField bind:value={value.tel} label="Phone Number" icon="ic:round-phone" />
  <IconField bind:value={value.message} label="Your Message" textarea rows={5} />
  <FileUpload />
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
