<template>
  <div class="xl:basis-1/5 md:basis-4/12 mr-4 relative mb-6 mt-6">
    <img
      :src="`${item.thumbnail}`"
      alt=""
      class="rounded-t-lg shadow-xl mx-2 object-fit w-full"
    />
    <div
      class="text-xs mx-2 text-justify pt-2 bg-stone-50 p-2 w-full shadow-xl rounded-b-lg border-red-500"
    >
      <p class="font-medium text-sm text-black px-2">{{ item.title }}</p>
      <p class="mx-2 text-blue-700 mt-1 text-xs">{{ item.genre }}</p>

      <p class="text-justify p-2 w-full text-slate-500">
        {{ item.short_description?.substring(0, 120) + "..." }}
      </p>
      <div class="flex justify-between items-center">
        <div class="">
          <a
            :href="`${item.game_url}`"
            target="_blank"
            class="inline-block px-4 py-2 mb-2 hover:bg-stone-600 bg-stone-700 text-white rounded shadow-lg text-xs mx-2 mt-2"
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
