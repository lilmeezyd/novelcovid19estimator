import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-covid-estimator',
  templateUrl: './covid-estimator.component.html',
  styleUrls: ['./covid-estimator.component.css']
})
export class CovidEstimatorComponent implements OnInit {
    
    title = 'THE COVID-19 ESTIMATOR';

	newEstimateForm: FormGroup;
	region: FormControl;
	age: FormControl;
	dailyIncome: FormControl;
	dailyIncomePopulation: FormControl;
	period: FormControl;
	time: FormControl;
	reportedCases: FormControl;
	population: FormControl;
	hospitalBeds: FormControl;

	ngOnInit() {
		this.region = new FormControl('', Validators.required);
		this.age = new FormControl('', Validators.required);
		this.dailyIncome = new FormControl('', Validators.required);
		this.dailyIncomePopulation = new FormControl('', Validators.required);
		this.period = new FormControl('', Validators.required);
		this.time = new FormControl('', Validators.required);
		this.reportedCases = new FormControl('', Validators.required);
		this.population = new FormControl('', Validators.required);
		this.hospitalBeds = new FormControl('', Validators.required);

		this.newEstimateForm = new FormGroup({
			region: this.region,
			age: this.age,
			dailyIncome: this.dailyIncome,
			dailyIncomePopulation: this.dailyIncomePopulation,
			period: this.period,
			time: this.time,
			reportedCases: this.reportedCases,
			population: this.population,
			hospitalBeds: this.hospitalBeds
		});

	}



}
