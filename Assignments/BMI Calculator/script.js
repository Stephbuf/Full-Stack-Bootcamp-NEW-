
document.getElementById("btn").addEventListener("click", function() {

    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);

 
     if (!height || !weight) {
        document.getElementById("result").innerHTML = "Please enter valid numbers.";
        return;
    }

    // Calculate BMI
    let bmi = weight / Math.pow(height, 2);

    // Determine category
    let category = '';

    if (bmi <= 18.5) {
        category = 'Underweight';
    } else if (bmi <= 24.9) {
        category = 'Normal Weight';
    } else if (bmi <= 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }

    // Display result
    document.getElementById("result").innerHTML = `Your Body Type Is ${category}`;
});
