window.onload = () => {
    const inputs = document.querySelectorAll("input");

    inputs.forEach(input => {
        input.addEventListener('change', calculate)
    })
}

function calculate () {
    const Petrol_Price = document.querySelector('#petrolcost').value;
    const liters = document.querySelector('#liters').value;

    if (!Petrol_Price || !liters) return; 

    const totalAmount = Petrol_Price * liters;

    document.querySelector('#totalAmount').innerHTML = "$" + totalAmount.toFixed(2);
}