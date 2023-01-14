<template>
    <main class="picture container-fluid">
<div class="row">
<div class="col-12 col-md-6">
      <div class="bg my-5">
  <img src="https://i.postimg.cc/prP8DKFC/IMG-20211022-143550-810-278-removebg-preview.png" alt="sav" width="300" height="300">
</div>
</div>

<div class="col-12 col-md-6">

  <h2 class="about m-2">About</h2>

<div class="paragraph mb-3 mb-md-0 mt-5">
<p class="lead">My name's Savannah Leigh Samuels and I am 20 years old. I matriculated in 2020 at South Peninsula High School in Deep River. 
   I passed with a Bachelor's Pass. I'm an ambitious, goal-driven person who enjoys learning new things. I have a generous and easy-going personality.
   I believe I become very passionate about something I love. I'm a fun, people's person who enjoys communicating with new people. 
   I aspire to inspire people who wants to gain knowledge and put it to action. I aspire to help individuals who can't help themselves or have difficulties getting there. </p>
</div>
</div>
</div>
</main>
</template>

<script>
export default {

}
</script>

<style scoped>

.text-center{
  float: right;
}

main {
  /* background-color:rgb(83,99,82) ; */
  width: 100vw;
  font-family:Arial, Helvetica, sans-serif;

}

.row{
  width: 100%;
}

.bg img{
  width: 80%;
  max-width: 20rem;
  height: auto;
  max-height: 70vh;
  border-radius: 1rem;
}
.text-left {
  font-size: 50px;
  color: rgb(201, 96, 168);
  padding: 20px;
}

h2{
  color: white !important;
}

.paragraph{
  display: flex;
  float: right;
  font-size: 28px;
  color: rgb(202,212,171);
  padding-top: 25px;
  /* word-break: break-all; */

}

.about {
  color: rgb(49, 49, 49);
  margin-left: 650px;
  font-size: 50px;
  font-weight: bold;
  text-decoration:underline;
  justify-content: center;
  display: flex;
}


@media screen and (max-width:600px) {
  
  .row{
    flex-direction: column;
  }
  
    .paragraph p{
      font-size: 20px;
    }
  }



</style>
