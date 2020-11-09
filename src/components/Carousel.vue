<template>
	<v-carousel v-model="model">
		<v-carousel-item
			v-for="page in pages"
			:key="page.name"
		>
			<v-sheet
				color="#eee"
				height="100%"
				tile
			>
				<v-btn
					class="d-flex full-height-btn"
					align="center"
					justify="center"
					:to="page.path"
				>
					<div class="display-3">
						{{page.name}}
					</div>
				</v-btn>
			</v-sheet>
		</v-carousel-item>
	</v-carousel>
</template>


<script>
  export default {
    name: 'Carousel',
    data: () => ({
      model: 0,
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],
    }),
    computed: {
      pages() {
        const routes = this.$router.options.routes;
        const [, ...rest] = routes;
        return rest
      }
    }
  }
</script>

<style scoped>
	.full-height-btn {
		height: 100% !important;
	}
</style>