<template>
  <Form edit :note="note" />
</template>

<script>
import Form from '../components/Form'

export default {
    name: 'Edit',
    data() {
        return {
           note: {}
        }
    },
    components: {
        Form,
    },  
    methods: {
        goTogoodeeds() {
            this.$router.push('/')
        }
    },
    mounted () {
        if (this.$route.query?.id) {
            const note = this.$store.getters.getNote(this.$route.query.id)
            if (note) {
                this.note = note
            } else{
            this.goTogoodeeds()
            }
        } else {
            this.goTogoodeeds()
        }
    }
}
</script>

<style>

</style>