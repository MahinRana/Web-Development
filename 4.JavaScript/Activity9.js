function bmiCalculator(weight, height) {
    var bmi = weight / (height * height);
    return bmi;
}
var myBmi = bmiCalculator(60, 1.52);
console.log(myBmi); 