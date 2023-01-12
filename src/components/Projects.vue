<template>
  <!-- <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-label="Slide 1" aria-current="true"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>

        <div class="container">
          <div class="carousel-caption text-start">
            <h1>Example headline.</h1>
            <p>Some representative placeholder content for the first slide of the carousel.</p>
            <p><a class="btn btn-lg btn-primary" href="#">Sign up today</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>

        <div class="container">
          <div class="carousel-caption">
            <h1>Another example headline.</h1>
            <p>Some representative placeholder content for the second slide of the carousel.</p>
            <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>

        <div class="container">
          <div class="carousel-caption text-end">
            <h1>One more for good measure.</h1>
            <p>Some representative placeholder content for the third slide of this carousel.</p>
            <p><a class="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div> -->
  <div class="card mt-4" v-for="item in projects">
    <div class="card-body">
      <h5 class=" cards card-title">{{ item.name }}</h5>
      <img :src="item.image">
      <a :href="item.github" class="github card-link">Github</a>
      <a :href="item.netlify" class="netlify card-link">Netlify</a>
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
        },
      ],
    };
  },
};
</script>

<style scoped>
main {
  width: 5rem;
}


img {
  width: 30%;
  height: 25%;
  justify-content: center;
  align-items: center;
  display: flex;
}

.cards {
    font-size: x-large;
}

</style>
