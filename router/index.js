import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../src/views/HomeView.vue";
import AboutView from "../src/views/AboutView.vue";
import ResumeView from "../src/views/ResumeView.vue";
import ProjectsView from "../src/views/ProjectsView.vue";
import TestimonialsView from "../src/views/TestimonialsView.vue";
import ContactView from "../src/views/ContactView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/resume",
    name: "resume",
    component: ResumeView,
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectsView,
  },
  {
    path: "/testimonial",
    name: "testimonials",
    component: TestimonialsView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
