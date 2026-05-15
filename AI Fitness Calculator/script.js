function calculate(){

  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value / 100;
  let goal = document.getElementById("goal").value;

  let bmi = (weight / (height * height)).toFixed(1);

  let suggestion = "";
  let calories = "";

  if(goal === "loss"){
    suggestion = "🔥 Do cardio 4 times a week";
    calories = 1800;
  }

  else if(goal === "maintain"){
    suggestion = "🥗 Maintain balanced diet";
    calories = 2200;
  }

  else{
    suggestion = "💪 Increase protein intake";
    calories = 2700;
  }

  // Bonus Calculations

  let protein = (weight * 1.5).toFixed(0);
  let water = (weight * 0.04).toFixed(1);
  let steps = 8000;

  // Main Result

  document.getElementById("result").innerHTML =
  `
    <h3>Your BMI: ${bmi}</h3>
    <p>${suggestion}</p>
  `;

  // Calories

  document.getElementById("calories").innerHTML =
  `
    <h3>Daily Calories: ${calories} kcal</h3>
  `;

  // Extras

  document.getElementById("extras").innerHTML =
  `
    <h3>💪 Protein Goal: ${protein}g</h3>
    <h3>💧 Water Intake: ${water}L</h3>
    <h3>👟 Daily Steps: ${steps}</h3>
  `;
}