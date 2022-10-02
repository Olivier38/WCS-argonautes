<script setup lang="ts">
import TheHeader from "./components/Header.vue";
import CrewForm from "./components/CrewForm.vue";
import Crew from "./components/Crew.vue";
import TheFooter from "./components/Footer.vue";
</script>

<template>
  <div class="app-container">
    <TheHeader class="header" />
    <CrewForm class="crew-form" />
    <Crew class="crew" />
    <TheFooter class="footer b4" />
  </div>
</template>

<style lang="scss">
@import "./assets/base.scss";
@import "./assets/debug.scss";

.app-container {
  min-height: 100vh;
  min-width: 100%;
  display: grid;
  grid-template-areas: "header" "crew-form" "crew" "footer";
  grid-template-rows: 150px 30vh auto 48px;
}

.header {
  grid-area: header;
}
.crew-form {
  grid-area: crew-form;
}
.crew {
  grid-area: crew;
}
.footer {
  grid-area: footer;
}
</style>
