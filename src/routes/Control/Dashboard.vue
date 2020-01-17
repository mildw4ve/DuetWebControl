<template>
	<v-row>
		<v-col xs="12" sm="7" md="8" xl="8">
			<movement-panel></movement-panel>
			<v-row v-if="!state.mode || state.mode === 'FFF'">
				<v-col v-if="!state.mode || state.mode === 'FFF'" sm="12" :md="(state.atxPower !== null) ? 9 : 12" :lg="(state.atxPower !== null) ? 9 : 12" :xl="(state.atxPower !== null) ? 10 : 12">
					<extrude-panel></extrude-panel>
				</v-col>

				<v-col v-if="state.atxPower !== null" class="hidden-sm-and-down" md="3" lg="3" xl="2" align-self="center">
					<atx-panel></atx-panel>
				</v-col>
				<v-col>
				<layer-chart class="chart-height-limit" :class="{ 'my-3': $vuetify.breakpoint.mdAndUp }"></layer-chart>
				</v-col>
			</v-row>

			<v-row>
				<v-col v-if="state.atxPower !== null" :class="{ 'hidden-md-and-up': !state.mode || state.mode === 'FFF' }" cols="3">
					<atx-panel></atx-panel>
				</v-col>
			</v-row>
		</v-col>

		
		<v-col cols="12" sm="5" md="4" xl="4">
				<v-row>
					<v-col cols="12">
						<speed-factor-panel></speed-factor-panel>
					</v-col>
					<v-col cols="12">
						<fan-panel></fan-panel>
					</v-col>
					<v-col cols="12">
						<extrusion-factors-panel></extrusion-factors-panel>
					</v-col>
					<v-col cols="12">
						<babystepping-panel></babystepping-panel>
					</v-col>
				</v-row>
			</v-col>
	</v-row>
</template>

<script>

import { mapState } from 'vuex'

export default {
	computed: mapState('machine/model', ['state'])
}
</script>
