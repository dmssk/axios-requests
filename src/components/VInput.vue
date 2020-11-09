<template>
	<v-form
		v-model="valid"
		lazy-validation
		@submit.prevent="onSubmit"
	>
		<v-text-field
			v-model="name"
			:rules="nameRules"
			label="Country"
			required
			:loading="getLoadingState"
		></v-text-field>
	</v-form>
</template>

<script>

	import {mapGetters} from 'vuex'
  export default {
    name: 'VInput',
    props: {
      action: {
        type: String,
        required: true
      }
    },
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Country is required',
      ],
    }),
    methods: {
      onSubmit() {
        this.$store.dispatch(this.action, this.name)
      }
    },
    computed: {
      ...mapGetters(['getLoadingState'])
    }
  }
</script>

<style scoped>

</style>