<template>
  <!-- <h2>Projects</h2> -->
  <div class="row justify-content-center">
    <div class="card mt-4" v-for="item in projects">
    <div class="card-body">
      <h5 class=" cards card-title">{{ item.name }}</h5>
      <img :src="item.image" class="my-3">
      <div>
        <a :href="item.github" class="github card-link"><ion-icon  name="logo-github"></ion-icon></a>
      <a :href="item.netlify" class="netlify card-link"><ion-icon name="link"></ion-icon></a>
      </div>
    </div>
  </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          name: "Calculator project",
          image:
            "https://i.postimg.cc/DZTfzfC4/Screenshot-2023-01-12-133958.jpg",
          github: "https://github.com/ssavs/calculator.git",
          netlify: "https://caaalculator.netlify.app"
        },
        {
          id: 2,
          name: "JavaScript EOM project",
          image:
            "https://i.postimg.cc/wBT84tbV/Screenshot-2023-01-12-133848.jpg",
          github: "https://github.com/ssavs/bookstore.git",
          netlify: "https://booookstore.netlify.app"
        },

        {
          id: 3,
          name: "HTML,CSS & Bootstrap EOM project",
          image:
            "https://i.postimg.cc/LXttqX2c/Screenshot-2023-01-12-134046.jpg",
          github: "https://github.com/ssavs/module_project.git",
          netlify: "https://savmodulee.netlify.app"
        },
        {
          id: 4,
          name: "Attempted Carousel",
          image:
            "https://i.postimg.cc/WpQDRjVr/Screenshot-2022-11-03-153651.jpg",
          github: "https://github.com/ssavs/testtt.git",
          netlify: "https://teeestt.netlify.app"
        },
        {
          id: 4,
          name: "First Portfolio",
          image: "https://i.postimg.cc/PfZXwDGp/image-3.jpg",
          github: "https://github.com/ssavs/sav_portfolio.git",
          netlify: "testportfolioooo.netlify.app"
        },
        {
          id: 5,
          name: "Cryptocurrency",
          image: "https://i.postimg.cc/gJpxwHMD/image-1.jpg",
          github: "https://github.com/ssavs/crypto.git",
          netlify: "https://cryptoooo.netlify.app"
        }
      ],
    };
  },
};
</script>

<style scoped>
h5{
  color: black !important;
}
main {
  width: 2rem;
}
h2{
  text-decoration: underline;
  color: white;
}




img {
  width: 35%;
  height: 45%;
}

.card{
  width: 40%;
  margin: 0.5rem;
  background-color: #e1d9e3;
  margin-bottom: 5%;

}
.cards {
    font-size: x-large;
    
}

.card-body {
  flex-direction: column;
  display: flex;
  align-items: center;
}

.github {
  font-size: xx-large;
  text-decoration: none;
  color:black;
  justify-content: center;
  font-weight:bold
}

.netlify {
  font-size: xx-large;
  text-decoration: none;
  justify-content: center;
  font-weight: bold;
  color: black;

}

.github :hover{
  text-decoration: underline;
}

.netlify :hover{
  text-decoration: underline;
}

</style>
