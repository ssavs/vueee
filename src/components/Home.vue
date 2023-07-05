<template>
  <main>
    <div class="row">
      <div class="container col-12">
        <div class="img">
          <img src="https://i.postimg.cc/fLGMPgRg/23-E21665-DF97-4-C27-AF65-7-C3-E2-A538-FAE-1-removebg-preview-1.png"
            alt="">
        </div>
        <div class="text">
          <h3>Welcome I'm</h3>
          <h1 class="animate__animated animate__zoomIn">Savannah Samuels</h1>
          <h3>Web Developer</h3>
          <button type="button" class="btn btn-primary">Learn More</button>
        </div>

      </div>
    </div>
  </main>
</template>
  
<script>
</script>
  
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Anaheim");

.container {
  margin: auto;
  display: flex;
  justify-content: space-between;
}


img {
  height: 650px;
  width: 400px;
  justify-content: center;
  padding-bottom: 15%;
  padding-left: 10%;
}

h3 {
  color: white;
}

h1 {
  color: black;
  font-size: 6vw;
  /* font-weight: bold; */
}

.row {
  width: 100%;
}

.text {
  align-items: center;
  padding-top: 175px;
}

.btn {
  color: white;
  margin: auto;
  display: flex;
  justify-content: space-between;
  background-color: #a98bb1;
  border: none;
  margin-left: 15rem;
  font-size: 1.25rem;
  padding: 10px 20px;
  border-radius: 25px;
  margin-top: 6%;
  margin-left: 40%;
}

.btn:hover {
  color: whitesmoke;
  background-color: #8b5e98;
}


/* @media screen and (max-width:600px) {
  
  } */
</style>