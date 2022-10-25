<script lang="ts">
  import * as zod from 'zod'

  import IconField from '../IconField.svelte'
  import FileUpload from '../FileUpload.svelte'

  const phoneRegExp = /^(?:\+\d{1,3}|0\d{1,3}|00\d{1,2})?(?:\s?\(\d+\))?(?:[-\/\s.]|\d)+$/
  const FILES_TOTAL_MAX_SIZE = 1000 * 1000 * 10 // 10MB

  const schema = zod.object({
    fullName: zod
      .string()
      .min(4, 'Name should be at least 4 characters')
      .max(30, 'Name should be at most 30 characters'),

    email: zod.string().email('Email should be a valid email address'),

    // tel is either a valid phone number or empty
    tel: zod
      .union([
        zod
          .string()
          .min(7, "Number can't be less than 7 characters")
          .max(20, 'Number should be at most 20 characters.')
          .regex(phoneRegExp, 'Phone number is not valid'),
        zod.string().length(0),
      ])
      .optional(),

    message: zod
      .string()
      .min(10, 'Your message must be at least 10 characters')
      .max(1000, 'Your message must be at most 1000 characters'),

    files: zod
      .array(zod.any())
      .refine((files) => files.length <= 5, {
        message: 'You can only upload a maximum of 5 files',
      })
      .refine((files) => files.reduce((acc, file) => acc + file.size, 0) <= FILES_TOTAL_MAX_SIZE, {
        message: `Total size of files should be at most ${FILES_TOTAL_MAX_SIZE / 1000 / 1000}MB`,
      }),
  })

  type Schema = zod.infer<typeof schema>

  let value: Schema = {
    fullName: '',
    email: '',
    tel: '',
    message: '',
    files: [] as File[],
  }

  let errors: {
    [key in keyof Schema]?: string
  } = {}

  function handleSubmit() {
    try {
      schema.parse(value)
      console.info(value)
      errors = {}
    } catch (error) {
      errors = error.formErrors.fieldErrors
      console.log(error)
    }
  }
</script>

<form action="" method="post" on:submit|preventDefault={handleSubmit}>
  <h1>Send a Message</h1>
  <IconField
    bind:value={value.fullName}
    label="Full Name"
    icon="ic:round-account-circle"
    error={errors.fullName}
    required
  />
  <IconField bind:value={value.email} label="Email" icon="ic:round-email" error={errors.email} required />
  <IconField bind:value={value.tel} label="Phone Number" icon="ic:round-phone" error={errors.tel} />
  <IconField bind:value={value.message} label="Your Message" textarea rows={5} error={errors.message} required />
  <FileUpload bind:value={value.files} error={errors.files} />
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
