<template>
  <div class="main">
    <h2>Get In Touch </h2>
    <form class="for" action="https://formspree.io/f/mknanyrd" method="POST">
      <div class="row m-5">
        <div class="col">
          <label for="name" class="form-label">Name</label>
          <input
            type="name"
            class="form-control"
            id="name"
            name="name"
            placeholder=""
            required
          />
        </div>
        <div class="col">
          <label for="name" class="form-label">Surname</label>
          <input
            type="name"
            class="form-control"
            id="name"
            name="name"
            placeholder=""
            required
          />
        </div>
        <div class="contact row m-2">
          <label for="email" class="form-label">Email Address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            name="email"
            placeholder="@gmail.com"
            required
          />

          <label for="message" class="form-label m-3">Message</label>
          <textarea
            class="form-control"
            id="textarea"
            rows="3"
            name="text"
            required
          ></textarea>
        </div>
        <button type="submit" class="btn submitbtn" value="Submit">
          Send
        </button>
      </div>
    </form>
    <div class="col-icons d-flex flex-col">
      <div class="col cols-md-5">
        <a href="https://www.linkedin.com/in/savannah-samuels-072377211/"><ion-icon name="logo-linkedin"></ion-icon></a>
        <a href="https://github.com/ssavs"><ion-icon name="logo-github"></ion-icon></a>
        <a href="https://www.instagram.com/savs_bby/"><ion-icon name="logo-instagram"></ion-icon></a>
        <a href="https://www.linkedin.com/in/savannah-samuels-072377211/"><ion-icon name="logo-linkedin"></ion-icon></a>
        <a href="https://twitter.com/savss_bby"><ion-icon name="logo-twitter"></ion-icon></a>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>

.main {
   /* background-color: rgb(83, 99, 82); */
  /*overflow: hidden;
  overflow-x: hidden;
  overflow-y: hidden; */
  height: 100vh;
  
}

h2 {
 
  margin-top: 0.5%;
  text-decoration: underline;
  color: white;
}

.col-icons a {
  font-size: 70px;
  text-decoration: none;
  color: rgb(224, 218, 227);
  padding: 1%;
}


.submitbtn {
  margin: auto;
  justify-content: center;
  align-items: center;
  background-color: rgb(18, 20, 21);
  color: white;
  width: 70px;
}

.btn:hover {
  background-color: rgba(33, 37, 41, 0.719) !important;
  color: white;
}

@media screen and (min-width: 350px) {
  col-icons {
    font-size: 30px;
  }
}

</style>
