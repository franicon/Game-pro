<template>

  <!--  Banner-->
  <div class="w-full h-96 p-96 relative overflow-hidden"
       style=" background-image: url(assets/img/god-of-war.webp); background-position: center; background-size: cover; background-repeat: no-repeat;">
    <div
        class="text-black bg-slate-900 text-white text-xl sm:w-1/2 h-fit m-auto absolute inset-0 text-center py-36 bg-opacity-75 shadow-2xl rounded ">
      <p class="font-normal text-2xl pt-10 sm:px-24 pt-2">Explore a generation of critically-acclaimed games, including
        blockbuster console exclusive games from PlayStation Studios,
        immersive PS VR titles, and innovative indies.
      </p>
    </div>
  </div>

  <!--  Loader-->
  <div v-if="loading" class=" transition-all duration-500 m-4 text-2xl text-white absolute top-0 right-0 font-sans ">
    <p class="text-sm">Processing...</p>
  </div>

  <!--  Games-->
  <div v-else class="flex flex-row justify-center items-center flex-wrap">
    <games-app v-for="item in pages[currentPage]" :key="item.id" :item="item"/>
  </div>

</template>
<script>
import {getAxios} from "/provider/axios";
import GamesApp from "@/components/Games.vue";

export default {
  name: "Home",
  components: {GamesApp},

  data() {
    return {
      datas: [],
      pages: [],
      loading: true,
      currentPage: 0,
      itemPerPage: 8,
      totalPages: null,
    };
  },

  created() {
    getAxios("games")
        .then((res) => {
          this.datas = res.data;
          const pagNum = this.datas.length / this.itemPerPage;
          for (let i = 0; i < pagNum; i++) {
            this.pages.push(
                this.datas.slice(i * this.itemPerPage, (i + 1) * this.itemPerPage)
            );
          }
          this.loading = false;
        })
        .catch(function (error) {
          console.error(error);
        });
  },
};
</script>
