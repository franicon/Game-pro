<template>
  <Banner/>
  <Loader v-if="loading"/>
  <div v-else class="flex flex-row justify-center items-center flex-wrap">
    <games-app v-for="item in pages[currentPage]" :key="item.id" :item="item"/>
  </div>

</template>
<script>
import {getAxios} from "/provider/axios";
import GamesApp from "@/components/Games.vue";
import Banner from "@/components/Banner.vue";
import Loader from "@/components/Loader.vue";

export default {
  name: "Home",
  components: {Loader, Banner, GamesApp},

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
