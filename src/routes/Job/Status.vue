<style scoped>
.chart-height-limit {
	max-height: 320px;
}
</style>

<template>
	<div class="d-flex flex-column pt-2">
		<job-progress></job-progress>

		<v-row>
			<v-col cols="12" sm="12" md="4" xl="4">
				<v-row align="center">
					<v-col cols="12">
						<job-control-panel></job-control-panel>
					</v-col>
					<v-col>
					<macro-list></macro-list>
					</v-col>
				</v-row>
			</v-col>

			<v-col  cols="12" md="8" xl="8" >
				<v-row>
					<v-col cols="12">
						<job-estimations-panel></job-estimations-panel>
					</v-col>
					<v-col cols="12">
						<job-data-panel></job-data-panel>
					</v-col>
					<v-col cols="12">
						<job-info-panel></job-info-panel>
					</v-col>
					<v-col cols="12">
						<movement-panel></movement-panel>
					</v-col>
				</v-row>
			</v-col>


			
		</v-row>
	</div>
</template>
