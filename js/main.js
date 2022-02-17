var incomeInput = document.getElementById("income");

var foodInput = document.getElementById("food");
var rentInput = document.getElementById("rent");
var clothesInput = document.getElementById("clothes");

var saveInput = document.getElementById("save-input");

//checkValidation

function isNegative(value) {
  if (value < 0) {
    return true;
  } else {
    return false;
  }
}

// calculation total expance

function expanceCalculation() {
  const foodValue = parseFloat(foodInput.value);
  const rentValue = parseFloat(rentInput.value);
  const clothesValue = parseFloat(clothesInput.value);
  var totalCost = foodValue + rentValue + clothesValue;
  return totalCost;
}

//calculate button click

document.getElementById("calculate").addEventListener("click", function () {
  const incomeValue = parseFloat(incomeInput.value);

  var totalExpances = expanceCalculation();
  var balance = incomeValue - totalExpances;

  if (
    isNegative(incomeValue) ||
    isNegative(foodInput.value) ||
    isNegative(rentInput.value) ||
    isNegative(clothesInput.value)
  ) {
    document.querySelector(".error-nagetive").style.visibility = "visible";
  }

  //checking input values number or others
  if (isNaN(expanceCalculation()) || isNaN(incomeValue)) {
    document.querySelector(".error").style.visibility = "visible";
  } else {
    document.querySelector(".error").style.visibility = "hidden";
    document.getElementById("total-expance").innerText = totalExpances;
    document.getElementById("total-balance").innerText = balance;
  }

  //checking expance is morethan income or not

  if (totalExpances > incomeValue) {
    document.querySelector(".error-expance-income").style.display = "block";
    document.getElementById("total-expance").innerText = 0;
    document.getElementById("total-balance").innerText = 0;
  } else {
    document.querySelector(".error-expance-income").style.display = "none";
  }

  console.log(expanceCalculation());
});

function saveBtn() {
  var a = document.getElementById("total-balance").innerText; 
  a=Number(a)
 
  var percentageValue = saveInput.value;
  var totalBalance = parseFloat(incomeInput.value);
  function percentagee(num, per) {
    return (num / 100) * per;
  }
  //alert( percentagee(totalBalance,percentageValue))
  //alert(savingBalance)
  var remainingBalance = a - percentagee(totalBalance, percentageValue);
  // document.getElementById("saving-balance").innerText = percentagee(
  //   totalBalance,
  //   percentageValue
  // );

 

  // document.getElementById("remaining").innerText = remainingBalance; 


   if(a>percentagee(totalBalance,percentageValue)) {
      document.getElementById("saving-balance").innerText = percentagee(
        totalBalance,
        percentageValue
      );

      document.getElementById("remaining").innerText = remainingBalance; 
      document.querySelector(".error-saving").style.display = "none";
   }else{
     document.querySelector(".error-saving").style.display="block" 
        document.getElementById("saving-balance").innerText = 0

        document.getElementById("remaining").innerText = 0; 
   }
  

  console.log(percentagee(10000, 20));
}
