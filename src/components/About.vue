<template>
  <main class="picture container-fluid">
    <div class="row">
      <div class="col-12 col-md-6 d-flex justify-content-space-between">
        <div class="bg img-fluid">
          <img src="https://i.postimg.cc/XYRjCq8r/0-DC51406-7582-4-D30-B6-BD-69-CF03545-C1-E-removebg-preview-1.png"
            alt="sav" width="500" height="600" class="responsive">
        </div>
      </div>

      <div class="col-12 col-md-6">

        <h2 class="about">About</h2>

        <div class="paragraph mb-3 mb-md-0 mt-2">
          <p class="lead">My name’s Savannah Leigh Samuels and I was born on the 09/04/2002.
            I matriculated in 2020 at South Peninsula High School in Deepriver. I’m an ambitious, goal-driven person who
            enjoys learning new things. I have a generous and outgoing personality. I believe I become very passionate
            about something I love. I’m a fun, people’s person who enjoys communicating with new people.
            My native language is English and my secondary language is Afrikaans.
          </p>
        </div>
        <h2 class="skills m-4">Skills</h2>
        <div class="col d-flex flex-column">
          <div class="col cols-md-5">
            <ion-icon name="logo-javascript"></ion-icon>
            <ion-icon name="logo-nodejs"></ion-icon>
            <ion-icon name="logo-html5"></ion-icon>
            <ion-icon name="logo-css3"></ion-icon>
            <ion-icon name="logo-vue"></ion-icon>
          </div>
          <h2 class="soft">Soft Skills</h2>
          <div class="row">
            <div class="column">
              <h4>Adaptability</h4>
              <h4>Communication</h4>
              <h4>Teamwork</h4>
            </div>
            <div class="column">
              <h4>Accountability</h4>
              <h4>Creativity</h4>
              <h4>Time Management</h4>
            </div>
          </div>
          <!-- <div class="card" v-for ="item in likings" key="item" style="width: 15rem; height: 20rem;">
  <img :src="item.image" class="card-img-top" alt="...">
  <div class="card-body ps-3">
          <h3>{{ item.name }}</h3>
  </div>
</div> -->

        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      likings: [
        {
          id: 1,
          name: "Being In Nature",
          image: "https://i.postimg.cc/qRQ4SRxv/renato-trentin-hwdv-BQ65a-V0-unsplash.jpg",
        },

      ]
    }
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Anaheim");

.text-center {
  float: right;
}

.responsive{
  max-width: 100%;
  height: auto;
}

* {
  box-sizing: border-box;
}

.row {
  display: flex;
}

/* Create two equal columns that sits next to each other */
.column {
  flex: 50%;
  padding: 10px;
  height: 300px;
  /* Should be removed. Only for demonstration */
}

main {
  /* background-color:rgb(83,99,82) ; */
  width: 100vw;
  font-family: "Anaheim";
}

.col {
  font-size: 50px;
  color: white;
}

.col:hover {
  color: black;
}

.row {
  width: 100%;
}

.bg img {
  width: 80%;
  max-width: 25rem;
  height: auto;
  margin-right: 35rem;

  /* max-height: 85vh; */
  /* border-radius: 10%; */

}

.text-left {
  font-size: 50px;
  color: rgb(201, 96, 168);
  padding: 20px;
}

.about{
  color: black;
  font-size: 50px;
}

.paragraph {
  display: flex;
  float: right;
  font-size: 28px;
  color: rgb(255, 255, 255);
  padding-top: 0.5%;
  /* word-break: break-all; */

}

.skills {
  color: black;
  margin-left: 650px;
  font-size: 50px;
  /* font-weight: bold; */
  /* text-decoration:underline; */
  justify-content: center;
  display: flex;
}

.soft {
  color: black;
  font-size: 50px;
}

h4 {
  color: white;
}


@media screen and (max-width:600px) {

  .row {
    flex-direction: column;
  }

  .paragraph p {
    font-size: 20px;
  }
}

img {
  margin-right: 80%;
  /* margin-bottom: 5%; */
  /* padding-bottom: 250px; */
  /* height: 5vh; */
}
</style>
