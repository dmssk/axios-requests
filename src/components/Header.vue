<template>
	<v-card>
		<v-app-bar
			color="deep-purple"
			dark
		>
			<v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

			<v-toolbar-title>Axios requests</v-toolbar-title>
		</v-app-bar>

		<v-navigation-drawer
			v-model="drawer"
			absolute
			temporary
			height="100vh"
		>
			<v-list
				nav
				dense
			>
				<v-list-item-group
					v-model="group"
					active-class="deep-purple--text text--accent-4"
				>
					<v-list-item v-for="page in pages" :key="page.name" :to="page.path">
						<v-list-item-icon>
							<v-icon>{{page.icon || 'mdi-note'}}</v-icon>
						</v-list-item-icon>
						<v-list-item-title >{{page.name}}</v-list-item-title>
					</v-list-item>

				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>
	</v-card>
</template>

<script>
  export default {
    name: "Header",
    data: () => ({
      drawer: false,
      group: null,
    }),
    computed: {
      pages() {
        return this.$router.options.routes
      }
    }
  }
</script>

<style scoped>

</style>