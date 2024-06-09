document.getElementById('convertBtn').addEventListener('click', () => {
        const temperature = parseFloat(document.getElementById('temperature').value);
        const convertFrom = document.getElementById('convertFrom').value;
        const convertTo = document.getElementById('convertTo').value;
        let result;

        if (isNaN(temperature)) {
            showError('Please enter a valid temperature');
            return;
        }

        if (convertFrom === 'Celsius') {
            if (convertTo === 'Fahrenheit') {
                result = (temperature * 9 / 5) + 32 +' '+('Farenheit');
            } else if (convertTo === 'Kelvin') {
                result = temperature + 273.15 +' '+('Kelvin');
            } else {
                result = temperature +' '+('Celsius');
            }
        } else if (convertFrom === 'Fahrenheit') {
            if (convertTo === 'Celsius') {
                result = (temperature - 32) * 5 / 9 +' '+('Celsius');
            } else if (convertTo === 'Kelvin') {
                result = (temperature - 32) * 5 / 9 + 273.15 +' '+('Kelvin');
            } else {
                result = temperature +' '+('Farenheit');
            }
        } else if (convertFrom === 'Kelvin') {
            if (convertTo === 'Celsius') {
                result = temperature - 273.15 +' '+('Celsius');
            } else if (convertTo === 'Fahrenheit') {
                result = (temperature - 273.15) * 9 / 5 + 32 +' '+('Farenheit');
            } else {
                result = temperature +' '+('Kelvin');
            }
        }

        showResult(`${result}`);
    });


const showResult = (message) => {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = message;
    resultDiv.classList.remove('d-none');
    resultDiv.classList.remove('alert-danger');
};

const showError = (message) => {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = message;
    resultDiv.classList.remove('d-none');
    resultDiv.classList.add('alert-danger');
};
