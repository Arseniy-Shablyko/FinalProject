(async function getCurrencyByn(){
    const response = await fetch('https://api.nbrb.by/exrates/rates/431')
    const data = await response.json()
    const BYN_TO_USD = data['Cur_OfficialRate']
    const currencyNode  = document.getElementById('headerCurrency')
    currencyNode.textContent = `$ ${BYN_TO_USD}`;
})()