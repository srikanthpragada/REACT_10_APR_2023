import React from 'react'

export default function Bmi() {

    function calculateBMI() {
       // calculate bmi
       var weight = parseFloat(document.getElementById("txtWeight").value);
       var height = parseFloat(document.getElementById("txtHeight").value);
       var output = document.getElementById("output");

       var bmi = weight / (height * height);

       var msg = "Obesity";
       if (bmi < 18.5)
          msg = "Underweight";
       else 
         if(bmi < 25)
           msg = "Normal Weight";
         else
           if(bmi < 30)
              msg = "Overweight";
       
       output.innerHTML = `BMI : ${bmi}, Category: ${msg}`;
    }

    return (
        <>
            <h1>Calculate BMI</h1>
            Weight (KG) <input type="number" id="txtWeight" />
            <p></p>
            Height (Mtrs) <input type="number" id="txtHeight" />
            <p></p>
            <button onClick={calculateBMI}>Calculate</button>
            <h2 id="output"></h2>
        </>
    )
}
