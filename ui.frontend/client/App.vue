<script setup lang="ts">
import imgLogoTestIcon from '@/assets/icons/sap-logo.svg';
import testImg from '@/assets/logo.svg';
import pizda from '@/assets/icons/archive.svg';
import TheWelcome from './components/TheWelcome.vue';
import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      :src="imgLogoTestIcon"
      width="125"
      height="125"
    />
    <img alt="test logo" class="logo" :src="testImg" width="125" height="125" />
    <img
      alt="another test logo"
      class="logo"
      :src="pizda"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!vvcdd" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    background-image: url('@/assets/icons/projects.svg');
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .testChuj {
    display: flex;
    place-items: center;
    flex-wrap: wrap;
  }
}
</style>
