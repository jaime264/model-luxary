<template>

    <div class="flex flex-shrink-0 relative w-full sm:w-auto text-center">
      <img
        :src= modelo.image
        
        alt="sitting area"
        class="object-cover object-center w-full"
      />
      <div class="bg-gray-800 bg-opacity-30 absolute h-full p-6 w-full">
        <div class="flex h-full items-end pb-6 justify-center">
          <h3
            class="
              text-xl
              lg:text-2xl
              font-semibold
              leading-5
              lg:leading-6
              text-white
              dark:text-gray-900
            "
          >
            {{modelo.name}}
          </h3>
        </div>
      </div>
    </div>

</template>

<script>
export default {
    props:{
        modelo:{
            name:String,
            image:String
        }
    }
};
</script>

<style scoped>
img{
    width: 382px;
}
</style>