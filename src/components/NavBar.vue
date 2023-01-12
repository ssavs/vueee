<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid" style="flex-direction: column;">
      <a class="navbar-brand nav">NAVBAR</a>
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
  font-weight: bold;
}

.navbarrr{
  font-size: x-large;


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

</style>
