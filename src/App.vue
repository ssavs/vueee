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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
   /* background:#536352 ; */
   background: linear-gradient(#536352, #000);
   min-height: 100vh;
 
}
body::-webkit-scrollbar {
  display: none;

}

nav a{
  text-decoration: none;
  color: rgb(221,229,190);
}

nav a :hover {
  color:rgb(130, 191, 136);
}

/* *{
  color: white;
} */

</style>
