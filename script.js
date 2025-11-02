const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const kelvinInput = document.getElementById('kelvin');

function celsiusParaOutros(valor) {
    const f = (valor * 9 / 5) + 32;
    const k = valor + 273.15;
    fahrenheitInput.value = f.toFixed(2) + '°F';
    kelvinInput.value = k.toFixed(2) + 'K';
}

function fahrenheitParaOutros(valor) {
    const c = (valor - 32) * 5 / 9;
    const k = c + 273.15;
    celsiusInput.value = c.toFixed(2) + '°C';
    kelvinInput.value = k.toFixed(2) + 'K';
}

function kelvinParaOutros(valor) {
    const c = valor - 273.15;
    const f = (c * 9 / 5) + 32;
    celsiusInput.value = c.toFixed(2) + '°C';
    fahrenheitInput.value = f.toFixed(2) + '°F';
}

celsiusInput.addEventListener('input', () => {
    const val = parseFloat(celsiusInput.value);
    if (isNaN(val)) {
        fahrenheitInput.value = '';
        kelvinInput.value = '';
        return;
    }
    celsiusParaOutros(val);
});

fahrenheitInput.addEventListener('input', () => {
    const val = parseFloat(fahrenheitInput.value);
    if (isNaN(val)) {
        celsiusInput.value = '';
        kelvinInput.value = '';
        return;
    }
    fahrenheitParaOutros(val);
});

kelvinInput.addEventListener('input', () => {
    const val = parseFloat(kelvinInput.value);
    if (isNaN(val)) {
        celsiusInput.value = '';
        fahrenheitInput.value = '';
        return;
    }
    kelvinParaOutros(val);
});