<template>
  <nav class="flex items-center justify-between flex-wrap bg-blue-800 p-6">
    <router-link
      to="/"
      class="flex items-center flex-shrink-0 text-white mr-6 "
    >
      <span class="font-semibold text-xl">Diary</span>
    </router-link>

    <router-link
      class="p-2 mx-1 text-white hover:text-purple-900 hover:bg-gray-300"
      to="/gooddeed"
      >Gooddeeds</router-link
    >
    <router-link
      class="p-2 mx-1 text-white hover:text-purple-900 hover:bg-gray-300"
      to="/grateful"
      >Grateful</router-link
    >
    <router-link
      class="p-2 mx-1 text-white hover:text-purple-900 hover:bg-gray-300"
      to="/reading"
      >Reading</router-link
    >
    <router-link
      class="p-2 mx-1 text-white hover:text-purple-900 hover:bg-gray-300"
      to="/motivation"
      >Motivation</router-link
    >
    <router-link
      class="p-2 mx-1 text-white hover:text-purple-900 hover:bg-gray-300"
      to="/graph"
      >Graph</router-link
    >
  </nav>
</template>

<script>
export default {
  name: "NavBar"
};
</script>
