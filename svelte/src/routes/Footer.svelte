<script lang="ts">
  import { ROUTES, OWNER } from '$lib/config'
  import content from '$lib/stores/content'

  $: disclaimer = $content.sections.footer.disclaimer
  $: copyright = $content.sections.footer.copyright
  $: privacyPolicy = $content.sections.footer.privacyPolicy
</script>

<footer id="footer">
  <div class="logo-watermark"><img src={OWNER.logo} alt="Logo" aria-hidden="true" /></div>
  <div class="disclaimer-container">
    <h1>{copyright} <sup>ⓒ</sup></h1>
    <h2>{disclaimer}</h2>
  </div>
  <a href={ROUTES.PRIVACY_POLICY} title="Just kidding :D" class="privacy-policy">{privacyPolicy}</a>
</footer>

<style lang="scss">
  footer {
    --footer-bg-color: #112;

    @include section;

    display: flex;
    justify-content: space-between;
    align-items: end;

    position: relative;
    z-index: 1;

    background-color: var(--footer-bg-color);
    padding-top: clamp(15px, 3vw, 50px);
    padding-bottom: 50px;
  }

  .disclaimer-container > h1 {
    white-space: nowrap;
    font-size: clamp(1rem, 2vw, 1.5rem);
    font-weight: 400;
  }
  .disclaimer-container > h2 {
    font-size: clamp(0.7rem, 1vw, 0.9rem);
    font-weight: 600;
    color: #fff8;
  }

  .logo-watermark {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    z-index: -1;
    inset: 0;
    overflow: hidden;

    opacity: 0.1;

    > img {
      max-height: unset;
      height: 150%;
    }
  }

  .privacy-policy {
    font-size: clamp(0.7rem, 1vw, 0.9rem);
    color: #fff6;
  }
</style>
