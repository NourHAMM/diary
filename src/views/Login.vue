<template>

  <div id="firebaseui-auth-container" class="mt-8"><img class="object-contain h-48 w-full" src="../assets/img/Welcome.jpg"></div>

</template>



<script>

export default {

  name: 'Login',

  mounted() {

    const uiConfig = {

      callbacks: {

        signInSuccessWithAuthResult: authResult => {

          this.$store.dispatch('setUser', authResult.user)

          this.$router.push('/src/views/.vue')

          return false

        }

      },

      signInOptions: [

        this.$firebase.auth.GoogleAuthProvider.PROVIDER_ID,

        this.$firebase.auth.EmailAuthProvider.PROVIDER_ID

      ]

    }

    this.$firebaseui.start('#firebaseui-auth-container', uiConfig)

  }

}

</script>



<style lang="scss" scoped></style>