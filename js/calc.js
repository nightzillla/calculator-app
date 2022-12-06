// I am creating variables so we can access the inputs and buttons

const billInput = document.getElementById("billTotalInput");

const tipInput = document.getElementById("tipInput")

const numberOfPeopleDiv = document.getElementById("numberOfPeople")

const perPersonTotalDiv = document.getElementById("perPersonTotal")

let numberOfPeople = Number(numberOfPeopleDiv.innerText)



function calculateBill(){
    const bill = Number(billInput.value)
    const tipPercentage = Number(tipInput.value) / 100;
    const tipAmount = bill * tipPercentage;
    const total = bill + tipAmount;
    const perPersonTotal = total / numberOfPeople;
    console.log(perPersonTotal)
    perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`
}


function decreasePeople(){
    if (numberOfPeople <= 1){
        alert("You can't go below 1")
        return
    }
    numberOfPeople --
    numberOfPeopleDiv.innerText = numberOfPeople
    calculateBill();
}

function increasePeople() {
    numberOfPeople ++
    numberOfPeopleDiv.innerText = numberOfPeople
    calculateBill()
}