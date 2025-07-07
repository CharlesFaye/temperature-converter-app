let number = document.getElementById('number');
const initialValue = document.getElementById('initial-value');
const finalValue = document.getElementById('final-value');
const convertBtn = document.getElementById('convert-btn');
const result = document.getElementById('result');
const resultParagraph = document.querySelector('#result > p');
let startingValue = initialValue.value;
let endingValue = finalValue.value;


const displayResult = () => {
    const val = number.value.trim();
    if (val === "") {
        alert('Veuillez entrer un nombre svp !');
        return;
    }
    const num = Number(val);
    let output, text;

    if (startingValue === endingValue) {
        text = `${startingValue} et ${endingValue} sont identiques`;
    } else if (startingValue === "°C" && endingValue === "°F") {
        output = num * 9/5 + 32;
        text = `${val} °C équivaut à ${output.toFixed(2)} °F`;
    } else if (startingValue === "°F" && endingValue === "°C") {
        output = (num - 32) * 5/9;
        text = `${val} °F équivaut à ${output.toFixed(2)} °C`;
    } else if (startingValue === "°C" && endingValue === "K") {
        output = num + 273.15;
        text = `${val} °C équivaut à ${output} K`;
    } else if (startingValue === "K" && endingValue === "°C") {
        output = num - 273.15;
        text = `${val} K équivaut à ${output.toFixed(2)} °C`;
    } else if (startingValue === "K" && endingValue === "°F") {
        output = (num - 273.15) * 9/5 + 32;
        text = `${val} K équivaut à ${output.toFixed(2)} °F`;
    } else if (startingValue === "°F" && endingValue === "K") {
        output = (num - 32) * 5/9 + 273.15;
        text = `${val} °F équivaut à ${output.toFixed(2)} K`;
    } else {
        text = "Conversion non prise en charge.";
    }

    resultParagraph.textContent = text;
    result.append(resultParagraph);
};


initialValue.addEventListener('change', function() {
    startingValue = this.value;
});
finalValue.addEventListener('change', function() {
    endingValue = this.value;
});
convertBtn.addEventListener('click', displayResult);