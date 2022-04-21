<template>
  <div id="" class="container mx-auto bg-gray-400 pb-4 mt-8">
    <div class="grid grid-cols-2">
      <div class="text-white flex flex-col justify-center sm:border-r-1 sm:border-r-gray-50 sm:mr-40">
          <h2>Average Rating</h2>
          <h2>4.5 star / 5</h2>
          <span class="block">estrellas</span>
          <span class="block">2 reviews</span>
      </div>
      <div class="ml-6n mt-4">
        <div class="flex items-center mt-0">
          <span class="text-sm font-medium text-white dark:text-blue-500"
            >5X</span
          >
          <div class="mx-4 w-2/4 h-5 bg-gray-200 dark:bg-gray-600">
            <div class="h-5 bg-yellow-600" style="width: 70%"></div>
          </div>
          <span class="text-sm font-medium text-white dark:text-blue-500"
            >1 vote</span
          >
        </div>
        <div class="flex items-center mt-0 sm:mt-4">
          <span class="text-sm font-medium text-white dark:text-blue-500"
            >4X</span
          >
          <div class="mx-4 w-2/4 h-5 bg-gray-200 dark:bg-gray-600">
            <div class="h-5 bg-yellow-600" style="width: 17%"></div>
          </div>
          <span class="text-sm font-medium text-white dark:text-blue-500"
            >1 vote</span
          >
        </div>
        <div class="flex items-center mt-0 sm:mt-4">
          <span class="text-sm font-medium text-white dark:text-blue-500"
            >3X</span
          >
          <div class="mx-4 w-2/4 h-5 bg-gray-200 dark:bg-gray-600">
            <div class="h-5 bg-yellow-600" style="width: 8%"></div>
          </div>
          <span class="text-sm font-medium text-white dark:text-blue-500"
            >0 votes</span
          >
        </div>
        <div class="flex items-center mt-0 sm:mt-4">
          <span class="text-sm font-medium text-white dark:text-blue-500"
            >2X</span
          >
          <div class="mx-4 w-2/4 h-5 bg-gray-200 dark:bg-gray-600">
            <div class="h-5 bg-yellow-600" style="width: 4%"></div>
          </div>
          <span class="text-sm font-medium text-white dark:text-blue-500"
            >0 votes</span
          >
        </div>
        <div class="flex items-center mt-0 sm:mt-4">
          <span class="text-sm font-medium text-white dark:text-blue-500"
            >1X</span
          >
          <div class="mx-4 w-2/4 h-5 bg-gray-200 dark:bg-gray-600">
            <div class="h-5 bg-yellow-600" style="width: 1%"></div>
          </div>
          <span class="text-sm font-medium text-white dark:text-blue-500"
            >0 votes</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.border-r-1{
    border-right: 1px solid rgb(255 255 255 / var(--tw-text-opacity));;
}
.ml-6n{
    margin-left: -6rem;
}
@media (max-width: 640px) {
  .ml-6n {
    margin-left: 0;
  }
}
</style>