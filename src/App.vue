<script setup lang="ts">
import { ref, onMounted, reactive } from "vue";
import type { NameInterface } from "./name.interface";
import TheHeader from "./components/Header.vue";
import TheFooter from "./components/Footer.vue";
import Crew from "./components/Crew.vue";
import {
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
} from "firebase/firestore";
import { db } from "@/firebase";

const names = ref<NameInterface[]>([]);

onMounted(() => {
  // const q = query(collection(db, "crew"));
  // let crewNames = reactive([]);
  // const querySnapshot = await getDocs(q);
  // querySnapshot.forEach((doc) => {
  //   console.log(doc.id, " => ", doc.data());
  //   const crewName = reactive({
  //     id: doc.id,
  //     name: doc.data().name,
  //   });
  //   crewNames.push(crewName);
  // });
  // names.value = crewNames;
  // console.log("names populated");
  onSnapshot(collection(db, "crew"), (querySnapshot) => {
    let crewNames = reactive([]);
    querySnapshot.forEach((doc) => {
      const crewName = reactive({
        id: doc.id,
        name: doc.data().name,
      });
      crewNames.push(crewName);
    });
    names.value = crewNames;
  });
});
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
