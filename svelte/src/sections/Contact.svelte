<script lang="ts">
  import { CONTENT } from '../config'

  const {
    heading,
    availability,
    info: { location, email, phone, socialMedia },
  } = CONTENT.sections.contact

  import ContactForm from '../components/contact/ContactForm.svelte'
</script>

<section id="contact">
  <article class="info">
    <h1>{heading}</h1>
    {#if availability.status}
      <h2>{availability.heading}</h2>
    {/if}
    <address>
      <ul>
        <li>
          <h3>{location.title}</h3>
          <a href={location.link} target="_blank"><span>{location.text}</span></a>
        </li>
        <li>
          <h3>{email.title}</h3>
          <a href={`mailto:${email.value}`} target="_blank" title={email.title}
            ><img src="./assets/icons/mail.png" aria-hidden="true" alt={email.title} /><span>{email.value}</span></a
          >
        </li>
        <li>
          <h3>{phone.title}</h3>
          <a href={`https://wa.me/${phone.value.toString().replaceAll(' ', '')}`} target="_blank" title={phone.title}
            ><img src="./assets/icons/whatsapp.png" aria-hidden="true" alt={phone.title} /><span>{phone.value}</span></a
          >
        </li>
      </ul>
    </address>
    <ul class="social-media">
      {#each socialMedia.options as option}
        <li>
          <a href={option.link} target="_blank" title={option.name}> <img src={option.icon} alt={option.name} /></a>
        </li>
      {/each}
    </ul>
  </article>
  <ContactForm />
</section>

<style lang="scss">
  section {
    @include section;
    padding-bottom: 4rem;
    padding-top: 4rem;

    @include flex();
    flex-direction: column;
    gap: 100px;

    @include lg {
      flex-direction: row;
      // padding-bottom: unset;
      // padding-top: unset;
      // @include section;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @include lg {
      align-items: start;
    }
  }
  .info > h1 {
    font-size: clamp(1.2rem, 2.5vw, 2rem);
    line-height: 1;
    margin-bottom: 0.5em;
  }
  .info > h2 {
    line-height: 1;
    font-size: clamp(1.5rem, 3.5vw, 2.4rem);
    color: var(--color-primary);
    margin-bottom: 2em;
    vertical-align: middle;

    &::before {
      --size: 0.4em;
      content: '';
      color: inherit;
      display: inline-block;
      background-color: currentColor;
      height: var(--size);
      width: var(--size);
      margin-right: var(--size);
      border-radius: 999px;
      vertical-align: middle;
    }
  }

  .info > address {
    display: inherit;
    flex-direction: inherit;
    align-items: inherit;
  }
  .info > address > ul,
  .info > address > ul > li {
    display: inherit;
    flex-direction: inherit;
    align-items: inherit;
  }

  address > ul > li {
    h3 {
      font-size: clamp(0.75rem, 0.9vw, 1.1rem);
      color: #fff5;
      font-weight: 600;
      line-height: 1;
      margin-top: 1em;
      margin-bottom: 0.3em;
      // font-style: normal;
    }

    a {
      font-size: clamp(1rem, 1.2vw, 1.5rem);
      display: flex;
      align-items: center;
      font-weight: 400;
      font-style: normal;
    }

    img {
      height: 1em;
      margin-right: 0.5em;
    }
  }

  .info > .social-media {
    --size: 1.5rem;
    display: flex;
    align-items: center;
    gap: calc(var(--size) * 0.4);
    margin-top: calc(var(--size) * 2);
    img {
      height: var(--size);
      object-fit: contain;
    }
  }
</style>
