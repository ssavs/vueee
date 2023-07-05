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
@import url("https://fonts.googleapis.com/css?family=Anaheim");
#app {

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
   /* background:#536352 ; */
   background:#CEBFB6;
   min-height: 100vh;
   font-family: "Anaheim";
 
}
body::-webkit-scrollbar {
  display: none;

}

nav a{
  text-decoration: none;
  color: #000000;
}

nav a :hover {
  color:#bc84d6;
}

/* *{
  color: white;
} */

</style>
