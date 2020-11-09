<template>
	<div class="pa-5">
		<h1>Covid</h1>
		<VInput action="getStatistic"/>
		<v-simple-table>
			<template v-slot:default>
				<thead>
				<tr>
					<th class="text-left">
						Name
					</th>
					<th class="text-left">
						Value
					</th>
				</tr>
				</thead>
				<tbody>
				<tr
					v-for="(data, val) in getLastCountry.data"
					:key="data.location"
				>
					<td>{{ val }}</td>
					<td>{{ data }}</td>
				</tr>
				</tbody>
			</template>
		</v-simple-table>

		<v-sheet color="rgba(0, 0, 0, .12)">
			<v-sparkline
				:value="graphArray"
				color="rgba(255, 255, 255, .7)"
				height="100"
				padding="24"
				stroke-linecap="round"
				smooth
			>
				<template v-slot:label="item">
					${{ item.value }}
				</template>
			</v-sparkline>
		</v-sheet>
	</div>
</template>

<script>
  import VInput from '@/components/VInput'
  import {mapGetters} from 'vuex'

  export default {
    name: "Covid",
    components: {
      VInput
    },
    data: () => {
      return {
        value: [
          {
            confirmed: this.getLastCountry.data.confirmed,
          },
          {
            death: this.getLastCountry.data.death,
          },
          {
            recovered: this.getLastCountry.data.recovered,
          },
        ],
      }
    },
    computed: {
      ...mapGetters([
        'getLastCountry'
      ]),
      graphArray() {
        let arr = [];
        arr.push(this.getLastCountry.data.confirmed)
        arr.push(this.getLastCountry.data.death)
        arr.push(this.getLastCountry.data.recovered)
        return arr;
      }
    }
  }
</script>

<style scoped>

</style>