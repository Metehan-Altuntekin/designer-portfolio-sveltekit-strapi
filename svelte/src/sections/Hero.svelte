<script lang="ts">
  import ButtonPrimer from '../components/buttons/ButtonPrimer.svelte'
  import ButtonSeconder from '../components/buttons/ButtonSeconder.svelte'
</script>

<section>
  <h1>Welcome to the awesome portfolio site</h1>
  <p>This portfolio site project made with PHP & Svelte! It runs on Apache server and doesn't require Node.js!</p>
  <div class="CTAs">
    <ButtonPrimer href="#services" lg>Services</ButtonPrimer>
    <ButtonSeconder href="#portfolio" lg>Portfolio</ButtonSeconder>
  </div>
  <div class="image"><img src="./assets/hero-image.png" alt="Figure" /></div>
</section>

<style lang="scss">
  section {
    @include section;
    height: 100vh;
    display: grid;
    align-items: center;
    align-content: center;
    justify-content: center;

    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fit, auto);
    grid-template-areas:
      'headg'
      'subhd'
      'image'
      'ctas ';
    column-gap: 5vw;

    @include md {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto auto;
      grid-template-areas:
        'headg image'
        'subhd image'
        'ctas  image';
    }

    h1 {
      grid-area: headg;
      font-size: clamp(2rem, 7vmin, 5rem);
      font-weight: 600;
      max-width: 30em;
      line-height: 0.85;
      margin-bottom: 1em;
    }
    p {
      grid-area: subhd;
      font-size: clamp(1rem, 2vmin, 2rem);
      font-family: Montserrat;
      max-width: 30em;

      @include sm {
        margin-bottom: 5em;
      }
    }
    .CTAs {
      grid-area: ctas;
      justify-self: start;
      display: flex;
      gap: 1rem;
      flex-direction: column;

      @include sm {
        flex-direction: row;
      }
    }
    .image {
      grid-area: image;
      display: flex;
      justify-content: end;
      height: 30vh;
      width: 100%;

      @include md {
        height: 100%;
        width: unset;
      }

      img {
        transform: translate(35%);
        @include sm {
          transform: translate(0);
        }
      }
    }
  }
</style>
