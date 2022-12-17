import { defineStore } from "pinia";

export default defineStore("navbar", {
  state: () => ({
    userNavbar: ["home", "about"],
    show: false,
    dashboard: [""],
  }),
});
