<template>
  <div>
    <div class="container mx-auto">
      <h1
        class="text-white text-3xl sm:text-4xl font-bold mb-6 pt-1.5 ms:pt-3.5"
      >
        FEATURED MODELS
      </h1>
      <p
        class="
          text-justify
          sm:text-center
          text-gray-400 text-base
          sm:text-xl
          m-5
        "
      >
        Our hand picked featured models are sure to provide the ultimate
        experience to fulfill your desires and fantasies
      </p>
      <div>
        <div
          class="
            flex
            items-center
            justify-center
            w-full
            h-full
            py-2
            sm:py-8
            px-4
          "
        >
          <div class="w-full relative flex items-center justify-center">
            <button
              aria-label="slide backward"
              class="
                absolute
                z-30
                left-0
                ml-10
                focus:outline-none
                focus:bg-gray-400
                focus:ring-2
                focus:ring-offset-2
                focus:ring-gray-400
                cursor-pointer
              "
              @click="goPrev"
            >
              <svg
                class="dark:text-gray-900"
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <div
              class="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden"
            >
              <div
                id="slider"
                class="
                  h-full
                  flex
                  lg:gap-2
                  md:gap-2
                  gap-2
                  items-center
                  justify-start
                  transition
                  ease-out
                  duration-700
                "
              >
                <CardSlide
                  v-for="(item, index) in slideModels"
                  :key="index"
                  :modelo="item"
                />
              </div>
            </div>
            <button
              aria-label="slide forward"
              class="
                absolute
                z-30
                right-0
                mr-10
                focus:outline-none
                focus:bg-gray-400
                focus:ring-2
                focus:ring-offset-2
                focus:ring-gray-400
              "
              @click="goNext"
            >
              <svg
                class="dark:text-gray-900"
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto">
      <h1 class="text-white text-3xl mt-4 mb-6">Available Models</h1>
      <p class="text-gray-400 text-lg m-6 text-justify sm:text-center">
        Search our listings for a model that will satisfy your needs. Online
        model booking is also available for incall and outcall services.
      </p>
      <div
        class="
          flex
          justify-center
          flex-wrap
          pb-4
          pt-4
          sm:pt-4 sm:pb-10
          lg:pb-14
        "
      >
        <button
          href=""
          v-for="category in categories"
          v-bind:key="category.name"
          v-bind:category="category"
        >
          <div class="text-white bg-neutral-600 w-24 leading-9 h-10 m-1.5">
            {{ category.name }}
          </div>
        </button>
      </div>
      <div></div>
    </div>

    <div class="container mx-auto">
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
        <CardModel
          v-for="model in models"
          v-bind:key="model.name"
          v-bind:model="model"
          :modelo="model"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardSlide from "@/components/card-slide.component.vue";
import CardModel from "@/components/card-model.component.vue";

import Categories from "@/assets/json/categorias.json";
import SlideModels from "@/assets/json/slide-models.json";
import Models from "@/assets/json/models.json";

let defaultTransform = 0;

export default {
  name: "Home",
  components: {
    CardSlide,
    CardModel,
  },
  computed: {},
  data() {
    return {
      categories: Categories,
      slideModels: SlideModels,
      models: Models,
    };
  },
  methods: {
    goNext() {
      defaultTransform = defaultTransform - 398;
      var slider = document.getElementById("slider");
      if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.2)
        defaultTransform = 0;
      slider.style.transform = "translateX(" + defaultTransform + "px)";
    },
    goPrev() {
      var slider = document.getElementById("slider");
      if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
      else defaultTransform = defaultTransform + 398;
      slider.style.transform = "translateX(" + defaultTransform + "px)";
    },
  },
};
</script>

<style>
</style>