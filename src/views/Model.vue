<template>
  <div class="container mx-auto">
    <h1 class="text-3xl sm:text-6xl uppercase font-bold text-white">Francesca</h1>
    <div>
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
                class="text-white"
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
                <SlideModel
                  v-for="(item, index) in slideModel"
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
                class="text-white"
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
    <div>
      <div class="flex flex-row flex-wrap-reverse">
        <div class="p-8 w-full sm:w-8/12">
          <h2 class="text-white text-3xl text-left pb-6">About Francesca</h2>
          <p class="text-white text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
            voluptatem, qui, veritatis, sunt reiciendis dolor cupiditate
            voluptatibus non, deleniti voluptatum consequatur recusandae earum
            accusantium eos.
          </p>
          <p class="text-white text-justify">
            Labore dolores iure commodi obcaecati pariatur illo officia sit
            sapiente corrupti, dicta fugit quae nostrum incidunt, animi
            similique necessitatibus repellendus omnis! Eos recusandae, numquam
            error?
          </p>
          <h2 class="text-white text-3xl text-left pb-6 pt-6">
            distinctio unde delectus sint
          </h2>
          <p class="text-white text-justify">
            Eius incidunt debitis inventore saepe explicabo, dolorem veniam,
            culpa esse laborum deserunt accusantium aliquam blanditiis. Rem
            iste, eum nam laborum esse exercitationem sapiente incidunt
            provident distinctio unde delectus sint doloribus quo maxime quia,
            animi rerum in officia pariatur beatae explicabo ipsa, libero odit
            eaque.
          </p>

          <p class="text-white text-justify">
            Modi a quas in eos explicabo cupiditate et saepe voluptatem hic,
            expedita perspiciatis tenetur facere veritatis aut nisi ipsum
            adipisci, similique tempore deleniti laboriosam provident delectus
            repudiandae doloribus exercitationem consectetur?
          </p>

          <p class="text-white text-justify">
            Nemo sint eligendi est, beatae perspiciatis, distinctio perferendis
            laborum dolorem quis aperiam, cupiditate officia ipsum earum eaque,
            quas deserunt commodi nesciunt. Quae consectetur, iure qui?
          </p>

          <Rating />
        </div>

        <div class="w-full sm:w-4/12 px-6 py-4 text-white">
          <div
            class="grid grid-cols-1 divide-y border border-slate-400 text-left bg-gray-400"
          >
            <div class="text-2xl p-3">Profile</div>
            <div class="flex justify-between text-lg p-2">
              Phone: <span>(000) 000-0000</span>
            </div>
            <div class="flex justify-between text-lg p-2">Age: <span>25</span></div>
            <div class="flex justify-between text-lg p-2">Height: <span>5ft 6in</span></div>
            <div class="flex justify-between text-lg p-2">Weight: <span>110</span></div>
            <div class="flex justify-between text-lg p-2">Hair Color: <span>Black</span></div>
            <div class="flex justify-between text-lg p-2">Eye Color: <span>Brown</span></div>
            <div class="flex justify-between text-lg p-2">Bust: <span>30</span></div>
            <div class="flex justify-between text-lg p-2">Waist: <span>23</span></div>
            <div class="flex justify-between text-lg p-2">Hips: <span>35</span></div>
            <div class="flex justify-between text-lg p-2">Location: <span>New York</span></div>
            <div class="flex justify-between text-lg p-2">Availability: <span>Outcall, Travel</span></div>
            <div class="flex justify-between text-lg p-2">Services: <span>GFE, Massaage, Companion</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Rating from "@/components/rating.component.vue";
import SlideModel from "@/components/slideModel.component.vue";

import SlideModelJson from "@/assets/json/slide-model.json";

let defaultTransform = 0;

export default {
  components: {
    Rating,
    SlideModel
  },
  data() {
    return {
      slideModel: SlideModelJson,
 
    };
  },
  methods: {
    goNext() {
      defaultTransform = defaultTransform - 398;
      var slider = document.getElementById("slider");
      if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7)
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