<template>
  <nav-bar />
  <div
    class="w-full h-96"
    style="
      background-image: url(assets/img/god-of-war.webp);
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    "
  >
    <h1 class="text-white text-xl"></h1>
    <!--    <img src="@/assets/img/god-of-war.webp" alt="" class="w-full h-auto" />-->
  </div>
  <RouterView />
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "App",
  components: { NavBar },
};
</script>
