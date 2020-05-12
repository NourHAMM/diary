<template>

  <nav

    class="flex bg-blue-900 h-20 px-8 justify-between items-center text-white"

  >
   
    <div>

      <router-link class="font-bold text-xl tracking-tight" to="/"

        >Diary</router-link

      >

    </div>

    <div>

      

      <router-link

        v-if="!user"

        class="p-2 mx-1 hover:text-blue-900 hover:bg-gray-300"

        to="/login"

        >Login</router-link

      >

      <button

        v-if="user"

        class="p-2 mx-1 hover:text-blue-900 hover:bg-gray-300"
        to="/login"

        @click="logOut"

      >

        Logout

      </button>

     

      
    <router-link
      v-if="user" class="p-2 mx-1 text-white hover:text-purple-900 hover:bg-gray-300"
      to="/gooddeed"
      >Gooddeeds</router-link
    >
    <router-link
      v-if="user" class="p-2 mx-1 text-white hover:text-purple-900 hover:bg-gray-300"
      to="/grateful"
      >Grateful</router-link
    >
    <router-link
      v-if="user" class="p-2 mx-1 text-white hover:text-purple-900 hover:bg-gray-300"
      to="/reading"
      >Reading</router-link
    >
    <router-link
     v-if="user" class="p-2 mx-1 text-white hover:text-purple-900 hover:bg-gray-300"
      to="/motivation"
      >Motivation</router-link
    >
    <router-link
     v-if="user" class="p-2 mx-1 text-white hover:text-purple-900 hover:bg-gray-300"
      to="/graph"
      >Graph</router-link
    >

    </div>

  </nav>





</template>

<script>

export default {

  name: 'NavBar',

  computed: {

    user() {

      return this.$store.getters.getUser

    }

  },

  methods: {

    logOut() {

      this.$firebase.auth().signOut()

      this.$store.dispatch('setUser', '')

      this.$router.push('/')

    }

  }

}

</script>



<style lang="scss" scoped>

:not(.logo).router-link-exact-active {

  @apply font-bold text-blue-900 bg-white;}

</style>

