<style scoped>
.chart-height-limit {
	max-height: 320px;
}
</style>

<template>
	<div class="d-flex flex-column pt-2">
		<job-progress></job-progress>

		<v-row>
			<v-col  cols="12" md="3" xl="3">
		
				<v-row>
					<v-col cols="12">
						<job-control-panel></job-control-panel>
					</v-col>
					<v-col cols="12">
						<job-estimations-panel></job-estimations-panel>
					</v-col>
					<v-col cols="12">
						<job-data-panel></job-data-panel>
					</v-col>
					
				</v-row>
				
			</v-col>
			<v-col  cols="12" md="9" xl="7">
		
				<v-row>
					<v-col cols="12">
						<movement-panel></movement-panel>
					</v-col>
					<v-col cols="12">
						<webcam-panel></webcam-panel>
					</v-col>
				</v-row>
				
			</v-col>
			<v-col cols="12" md="12" xl="2">
			
				<v-row align="center">			
					<v-col cols="12">
						<macro-list></macro-list>
					</v-col>
					<v-col cols="12">
						<job-info-panel></job-info-panel>
					</v-col>
				</v-row>
			
			</v-col>

			
		</v-row>
	</div>
</template>
