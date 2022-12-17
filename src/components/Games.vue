<template>
  <div
      class="xl:basis-1/5 md:basis-4/12 mr-4 relative mb-6 mt-6 shadow-2xl shadow-stone-400 rounded-lg border-amber-100 cursor-default grayscale hover:grayscale-0">
    <img :src="`${item.thumbnail}`" alt="" class="rounded-t-lg w-screen"/>

    <div class="text-xs text-justify pt-2 bg-stone-50 p-2 w-full rounded-b-lg border-red-500">
      <p class="font-medium text-sm text-black px-2 normal-case">{{ item.title }}</p>
      <p class="mx-2 text-blue-700 mt-1 text-xs capitalize">{{ item.genre }}</p>
      <p class="text-justify p-2 w-full text-slate-500"> {{ item.short_description?.substring(0, 120) + "..." }} </p>
      <div class="flex justify-between items-center">
        <div>
          <a
              :href="`${item.game_url}`"
              class="inline-block px-4 py-2 mb-2 hover:bg-stone-600 bg-stone-700 text-white rounded shadow-lg text-xs mx-2 mt-2"
              target="_blank"
          >Read more</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Games",
  props: ["item"],
};
</script>

<style scoped></style>
