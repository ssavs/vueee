import { createApp } from "vue";
import App from "./App.vue";
import router from "../router";
import store from "./store";
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap"

createApp(App).use(store).use(router).mount("#app");

localStorage.setItem(
  "awhile",
  JSON.stringify([
    {
      id: 1,
      name: "Jake Jansen",
      saying:
        "Savannah is communicative & pro-active ,when she doesn't know the solution, it becomes her mission to figure it out.",
        number:'0824749772',
      image: "https://i.postimg.cc/xTV7KMwD/me.jpg",
    },
    {
      id: 2,
      name: "Nabila Samsodien",
      saying:
        "Savannah is determined & is capable of conceptualizing & solving problems that arise with admirable professionalism.",
      number:'0824749772',
      image: "https://i.postimg.cc/d3306gk3/IMG-20221013-131514.jpg",
    },
    {
      id: 3,
      name: "Abdul.W Abrahams",
      saying:
        "Savannah's creative & is driven & determined & is not afraid to ask for help when needed. She would be a great asset to any company.",
      number: '0834004653',
      image: "https://i.postimg.cc/VNJYT2zb/20220302-124527.jpg",
    },
    {
      id: 4,
      name: "Keren Bruce",
      saying:
        "Savannah's personality will promote a refreshing atmosphere,she's a diligent learner who strives for greatness.",
        number:'0824749772',
      image: "https://i.postimg.cc/ry35PLc5/IMG-20221031-WA0030.jpg",
    },
    {
      id: 5,
      name: "Candice Amon",
      saying:
        "Savannah practices on having an open mind to increase her knowledge & grow as an individual & values every experience.",
        number:'0824749772',
      image: "https://i.postimg.cc/WzwSM2fR/candice-2022.jpg",
    },
    {
      id: 6,
      name: "Jia Daniels",
      saying:
        "Savannah is a very hardworking & efficient person. She's trustworthy & loyal. She always does her best in all she does.",
      number: '0832638024',
      image: "https://i.postimg.cc/MZBGzng3/IMG-9927.jpg",
    },
  ])
);