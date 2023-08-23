function calculateBMI(weightKg, heightM) {
  if (weightKg <= 0 || heightM <= 0) {
    return "Invalid input. Weight and height must be positive values.";
  }

  const bmi = weightKg / (heightM * heightM);

  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Normal weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

const weight = parseFloat(prompt("Enter weight in kg:"));
const height = parseFloat(prompt("Enter height in meters:"));

if (isNaN(weight) || isNaN(height)) {
  console.log("Please enter valid numeric values for weight and height.");
} else {
  const bmiCategory = calculateBMI(weight, height);
  console.log(`BMI Category: ${bmiCategory}`);
}
