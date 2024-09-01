<script setup>
import infoOne from '@/images/background/info1.jpg'
import infoOneBig from '@/images/background/info1Big.jpg'
import infoTwo from '@/images/background/info2.jpg'
import infoTwoBig from '@/images/background/info2Big.jpg'
import UIContainer from '@/components/UI/UIContainer.vue'
</script>

<template>
  <section class="info">
    <div class="info--slogan-box">
      <h2 class="info--slogan">
        A brand built on the love of craftmanship, quality and outstanding customer service
      </h2>
    </div>
    <div class="info--content">
      <UIContainer
        class="info--container"
        title="From a studio in London to a global brand with over 400 outlets"
        text="When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.<br>Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community."
        button-text="Get in touch"
        has-info-purpose
      />
      <picture class="info--image">
        <source :srcset="infoOne" media="(max-width: 1000px)" />
        <img :src="infoOneBig" alt="Interior" />
      </picture>
      <picture class="info--image">
        <source :srcset="infoTwo" media="(max-width: 1000px)" />
        <img :src="infoTwoBig" alt="Interior" />
      </picture>
      <UIContainer
        class="info--container"
        title="Our service isn’t just personal, it’s actually hyper personally exquisite"
        text="When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.<br>Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community."
        button-text="Get in touch"
        has-info-purpose
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/styles/scss/mixins.scss';
@import '@/styles/scss/extensions.scss';
@import '@/styles/scss/variables.scss';
@import '@/styles/scss/fonts.scss';

.info {
  @include size(100%, auto);
  max-width: 1440px;
  @include flex(column, start, stretch, 0);

  &--slogan-box {
    @include size(100%, auto);
    padding-block: 70px;

    @include media_md {
      padding-block: 24px 34px;
    }
  }

  &--slogan {
    @include size(55%, auto);
    margin-inline: auto;
    @include h1($dark-primary, center);

    @include media_md {
      @include size(88%, auto);
      margin-inline: auto;
      @include h2($dark-primary, left);
    }
  }

  &--content {
    @include size(100%, auto);
    display: grid;
    grid-template: repeat(2, minmax(auto, 603px)) / repeat(2, 1fr);

    @include media_md {
      grid-template: repeat(4, auto) / 1fr;
    }
  }

  &--image {
    @include size(100%, 100%);

    @include media_md {
      height: 358px;
    }

    img {
      @include size(100%, 100%);
      @extend %pic;
    }
  }
}
</style>
