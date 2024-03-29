import { generateReturnsArray } from './src/investmentGoals';

const form = document.getElementById('investment-form');
// const calculateButton = document.getElementById('calculate-results');

function renderProgression(evt) {
  evt.preventDefault();
  // const startingAmount = Number(form['startingAmount'].value);  // usando os names nos inputs(HTML) pra pegar os values
	const startingAmount = Number(
		document.getElementById('starting-amount').value
	);
	const additionalContribution = Number(
		document.getElementById('additional-contribution').value
	);
	const timeAmount = Number(document.getElementById('time-amount').value);
	const timeAmountPeriod = document.getElementById('time-amount-period').value;
	const returnRate = Number(document.getElementById('return-rate').value);
	const ReturnRatePeriod = document.getElementById('evaluation-period').value;
	const taxRate = Number(document.getElementById('tax-rate').value);

	const returnsArray = generateReturnsArray(
		startingAmount,
		timeAmount,
		timeAmountPeriod,
		additionalContribution,
		returnRate,
		ReturnRatePeriod
	);

	console.log(returnsArray);
}

form.addEventListener('submit', renderProgression);
// calculateButton.addEventListener('click', renderProgression);
