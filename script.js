const API_KEY = 'c8c79e6924b9ad12c2436fec';
let base='INR';
let URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${base}`;
const baseCurrency = document.getElementById('base-currency');
const convertedCurrency = document.getElementById('converted-currency');
const baseInput = document.getElementById('baseinput');
const convertedInput = document.getElementById('convertedinput')
const burgerIcon = document.getElementById('burger');
const hamburgerMenu = document.querySelector('#hamburger-container');
const crossIcon = document.getElementById('cross');
let conversionRate = 0.012;
const fetchCurrencies = fetch(`${URL}`).then((Response)=>Response.json()).then((data)=>{
    
    let clutter = Object.keys(data.conversion_rates);
    clutter.forEach((curr)=>{
        let newOption = document.createElement('option');
        newOption.value = curr;
        newOption.innerText = curr;
        baseCurrency.appendChild(newOption);
   
    })
    clutter.forEach((curr)=>{
        let newOption = document.createElement('option');
        newOption.value = curr;
        newOption.innerText = curr;
        convertedCurrency.appendChild(newOption);
    })
})

baseCurrency.addEventListener('change',()=>{
    base = baseCurrency.value;
})


baseInput.addEventListener('input',()=>{
    convertedInput.value = (baseInput.value * conversionRate).toFixed(2);
    
})
convertedInput.addEventListener('input',()=>{
    baseInput.value = (convertedInput.value/conversionRate).toFixed(2);
})
burgerIcon.addEventListener('click',()=>{
    hamburgerMenu.classList.remove('hidden');
})
crossIcon.addEventListener('click',()=>{
    hamburgerMenu.classList.add('hidden');
})