<template>
  <div id="app">
    <Navbar />

    <!-- <Footer /> -->
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

// import Footer from "@/components/Footer.vue";
export default {
  components: {
    Navbar,

    // Footer,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}

@import "~bootstrap/dist/css/bootstrap.css";
</style>
