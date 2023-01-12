<template>
  <NavBar />
  <router-view />
  <Footer />
  
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: { NavBar, Footer },
};
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
   background-color:rgb(83,99,82) ;
   min-height: 100vh;
  /* box-sizing: border-box;
  padding: 0;
  margin: 0; */
}

nav a{
  text-decoration: none;
  color: rgb(221,229,190);
}

nav a :hover {
  color:rgb(130, 191, 136);
}


</style>
