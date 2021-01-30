const firstPushbtn = document.getElementById('Firstpushbtn')

firstPushbtn.addEventListener('click', function() {

    firstClassticket(true)
})


const firstminBtn = document.getElementById('firstminBtn')

firstminBtn.addEventListener('click', function() {
    firstClassticket(false)

    faminus.style.background = "red"
    console.log(faminus)

})

function firstClassticket(isIncrese) {

    const firstClassinput = document.getElementById('firstClassinput')
    const firstClassinputConvert = parseFloat(firstClassinput.value);

    // const firstClassinputIncrese = firstClassinputConvert - 1;
    let firstClassinputIncrese = 0;
    if (isIncrese == true) {
        firstClassinputIncrese = firstClassinputConvert + 1
    }
    if (isIncrese == false && firstClassinput.value > 0) {
        firstClassinputIncrese = firstClassinputConvert - 1
    }
    firstClassinput.value = firstClassinputIncrese;
    const totaltFirstPrice = firstClassinputIncrese * 150;

    tolal()
}







///////////////ECONOMY//////////////////////

const economyPushBtn = document.getElementById('economyPushBtn');
economyPushBtn.addEventListener('click', function() {
    economyClassticket(true)
})

function economyClassticket(isIncerseEconomy) {
    const EconomyInput = document.getElementById('EconomyInput');
    const EconomyInputConvert = parseFloat(EconomyInput.value);
    // const EconomyInputIncrese = EconomyInputConvert - 1
    let EconomyInputIncrese = 0
    if (isIncerseEconomy == true) {
        EconomyInputIncrese = EconomyInputConvert + 1
    }
    if (isIncerseEconomy == false && EconomyInput.value > 0) {
        EconomyInputIncrese = EconomyInputConvert - 1
    }
    EconomyInput.value = EconomyInputIncrese;
    const totalEconomyprice = EconomyInputIncrese * 100



    tolal()

}

const economyMinBtn = document.getElementById('economyMinBtn');
economyMinBtn.addEventListener('click', function() {
    economyClassticket(false)

})

function tolal() {
    const EconomyInput = document.getElementById('EconomyInput');
    const EconomyInputConvert = parseFloat(EconomyInput.value);
    const firstClassinput = document.getElementById('firstClassinput')
    const firstClassinputConvert = parseFloat(firstClassinput.value);
    const subTotal = (EconomyInputConvert * 100) + (firstClassinputConvert * 150);
    const tax = (subTotal * 10) / 100

    document.getElementById('Subtotal').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    const total = subTotal + tax;

    document.getElementById('total').innerText = total;
}

///booking section///


const bookNow = document.getElementById('bookNow')
bookNow.addEventListener('click', function() {
    const remove = document.getElementById('remove');
    const show = document.getElementById('show');
    remove.style.display = "none"
    show.style.display = "block"
})
console.log(bookNow)