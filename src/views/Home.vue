<template>
  <div class="container px-24 text-2xl text-white" v-if="loading">
    loading...
  </div>
  <div class="flex flex-row justify-center flex-wrap border-gray-400" v-else>
    <games-app v-for="item in pages[currentPage]" :key="item.id" :item="item" />
  </div>
</template>
<script>
import { getAxios } from "@/provider/axios";
import GamesApp from "@/components/Games.vue";

export default {
  name: "Home",
  components: { GamesApp },

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
