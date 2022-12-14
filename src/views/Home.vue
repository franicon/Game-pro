<template>
  <div class="flex flex-row justify-center flex-wrap border-gray-400">
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
      currentPage: 6,
      itemPerPage: 8,
      pages: [],
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
        console.log(this.pages);
      })
      .catch(function (error) {
        console.error(error);
      });
  },

  methods: {
    setPage(page) {
      this.currentPage = page;
    },

    prev(page) {
      this.currentPage = page;
    },
  },
};
</script>
