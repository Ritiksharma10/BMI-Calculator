function CalculateBMI() {

    let wheat = document.getElementById("wheat").value;
    let heightFeet = document.getElementById("heightFeet").value;

    if (wheat === "" || heightFeet === "") {
        alert("please enter valied value");
        return;
    }

    let heightMeters = heightFeet * 0.3048;
    let bmi = (wheat / (heightMeters * heightMeters)).toFixed(2);
    let category = "";

    if (bmi < 18.5) {
        category = "Underweight 😔";
        } else if (bmi < 25) {
            category = "Normal weight 😊";
            } else if (bmi < 30) {
                category = "Overweight 😟"
                } else {
                    category = "Obese 😨";
                }

                document.getElementById("result").innerHTML = `Your BMI : <b>${bmi}</b> <br> Category : <b>${category}</b>`;



}

