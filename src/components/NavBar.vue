<template>
  <nav class="navbar navbar-expand-lg">
    <img src="https://i.postimg.cc/rwBLKjnc/Black-and-Grey-Modern-Typography-Fashion-Logo-removebg-preview.png" alt="" width="100" height="70" class="d-inline-block align-text-top">
    <div class="container-fluid" style="flex-direction: column;">
      
      <button
      class="navbar-toggler d-flex"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
      style="position: absolute; right: 15px;">
      
      
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbarrr">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a
            class="nav-link active"
            aria-current="page"
              ><RouterLink to="/">Home</RouterLink></a>
            
          </li>
          <li class="nav-item">
            <a
            class="nav-link active"
            aria-current="page"
            ><RouterLink to="/about">About</RouterLink></a>
            
            
          </li>
          <li class="nav-item">
            <a
            class="nav-link active"
            aria-current="page"
            ><RouterLink to="/resume">Resume</RouterLink></a>
            
          </li>
          <li class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              ><RouterLink to="/projects">Projects</RouterLink></a>
              
            </li>
            <li class="nav-item">
              <a
              class="nav-link active"
              aria-current="page"
              ><RouterLink to="/testimonial">Testimonials</RouterLink></a>
              
            </li>
            <li class="nav-item">
              <a
              class="nav-link active"
              aria-current="page"
              ><RouterLink to="/contact">Contact</RouterLink></a>
              
            </li>
          </ul>
          <button type="button" href="/src/components/Contact.vue" class="btn btn-primary"
          ><RouterLink to="/contact"></RouterLink>Contact</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  padding: 10px;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 38px;
  
}

nav a {
  /* font-weight: bold; */
}

.navbar {
background-color: #EEEBED; 

}
.navbarrr{
  font-size: 1.5rem;
  justify-content: center;
  display: flex;
  align-items: center;


}
.nav {
  font-size: xx-large;
  
}
.navbar-toggler{
  display: none !important;
}

@media screen and (width <990px) {
  .navbar-toggler{
    display: block !important;
  }
}

.btn {
  color:white ;
  margin: auto;
  display: flex;
justify-content: space-between;
background-color: #B6A0BC;
border: none;
margin-left: 15rem;
font-size: 80%;
padding:10px 20px;
border-radius: 25px;
}

</style>
