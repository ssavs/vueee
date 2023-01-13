<template>
  <div class="col-4"></div>
  <h2 class="testimonials mt-2">Testimonials</h2>
  <div class="test container mx-auto">
    <div class="row gap-2 justify-content-center">
      <div class="card col-4" v-for="item in colleagues" :key="item">
        <img :src="item.image" class="card-img-top" alt="..." />
        <h2 class="mt-1">{{ item.name }}</h2>
        <div class="card-body ps-3">
          <h3>{{ item.saying }}</h3>
          <h4>{{ item.number }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colleagues: [
        {
          id: 1,
          name: "Jake Jansen",
          saying:
            "Savannah is communicative & pro-active, when she doesn't know the solution,it becomes her mission to figure it out.",
          number: "0824749772",
          image: "https://i.postimg.cc/KvX9LscN/IMG-3360-626.jpg",
        },
        {
          id: 2,
          name: "Nabila Samsodien",
          saying:
            "Savannah is determined and is capable of conceptualizing and solving problems that arise with admirable professionalism.",
          number: "0824749772",
          image: "https://i.postimg.cc/qqc22wQb/IMG-20221013-131514.jpg",
        },
        {
          id: 3,
          name: "Abdul Abrahams",
          saying:
            "Savannah's creative,and driven and determined and is not afraid to ask for help when needed. She would be a great asset to any company.",
          number: "0834004653",
          image: "https://i.postimg.cc/kXfb9BHb/IMG-20210429-163315-254.jpg",
        },
        {
          id: 4,
          name: "Keren Bruce",
          saying:
            "Savannah's personality will promote a refreshing atmosphere,she's a diligent learner who strives for greatness.",
          number: "0824749772",
          image: "https://i.postimg.cc/PfFHjH4q/IMG-20221031-WA0030.jpg",
        },
        {
          id: 5,
          name: "Candice Amon",
          saying:
            "Savannah practices on having an open mind to increase her knowledge and grow as an individual and values every experience.",
          number: "0824749772",
          image: "https://i.postimg.cc/WzwSM2fR/candice-2022.jpg",
        },
        {
          id: 6,
          name: "Jia Daniels",
          saying:
            "Savannah is a very hardworking and efficient person. She's trustworthy and loyal. She always does her best in all she does.",
          number: "0832638024",
          image: "https://i.postimg.cc/DmVYwx0x/IMG-9927.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
h2 {
  align-items: center;
  justify-content: center;
  text-decoration: underline;

}
h2, h3, p{
  color: black;
}

.card {
  width: 18rem;
  height: 25rem;
}

h3 {
  font-size: large;
  /* text-align: justify; */
  /* word-break: break-all; */
}

h4 {
  font-size: large;
}

.card-body {
  height: 30vh;
}

.gap-2 {
  gap: 2.5rem !important;
  padding: 50px !important;
}


.test {
  justify-content: center;
  align-items: center;

  /* float: right; */
}
.testimonials{
  color: white;
} 
</style>
