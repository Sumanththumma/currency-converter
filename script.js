const API_KEY = 'c8c79e6924b9ad12c2436fec';
let base='USD';
let URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${base}`;
const baseCurrency = document.getElementById('base-currency');

baseCurrency.addEventListener('change',()=>{
    
})

const fetchCurrencies = fetch('')