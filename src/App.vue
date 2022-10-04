<script setup lang="ts">
import { ref } from "vue";
import type { NameInterface } from "./name.interface";
import TheHeader from "./components/Header.vue";
import TheFooter from "./components/Footer.vue";
import data from "./data/names";
import Crew from "./components/Crew.vue";

const names = ref<NameInterface[]>(data);
</script>

<template>
  <div class="app-container">
    <TheHeader class="header" />
    <Crew :names="names" class="crew" />
    <TheFooter class="footer" />
  </div>
</template>

<style lang="scss">
@import "./assets/base.scss";
@import "./assets/debug.scss";

.app-container {
  min-height: 100vh;
  min-width: 100%;
  display: grid;
  grid-template-areas: "header" "crew" "footer";
  grid-template-rows: 150px auto 48px;
}

.header {
  grid-area: header;
}

.crew {
  grid-area: crew;
}
.footer {
  grid-area: footer;
}
</style>
