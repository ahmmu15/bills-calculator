// inputs
var gasBillInput = $('#gasBill'),
powerBillInput = $('#powerBill'),
waterBillInput = $('#waterBill'),
internetBillInput = $('#internetBill'),
// dropdowns
gasDivision = $('#gasDivision'),
powerDivision = $('#powerDivision'),
waterDivision = $('#waterDivision'),
internetDivision = $('#internetDivision'),
// per person inputs
gasBillPerPerson = $('#gasBillPerPerson'),
powerBillPerPerson = $('#powerBillPerPerson'),
waterBillPerPerson = $('#waterBillPerPerson'),
internetBillPerPerson = $('#internetBillPerPerson'),
// results
calcBtn = $('#calcBtn'),
total = $('#total');


// ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
// ]]]]]]]]]]]]]]]]]]]]]]]]]]
// ]]]]]]]]]]]]]]]]]]
// ]]]] GAS
// ]]]]]]]]]]]]]]]]]]
// ]]]]]]]]]]]]]]]]]]]]]]]]]]
// ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]


// get the input value on keyup [GAS]
$(gasBillInput).keyup(function(){
  gasValue = $(this).val();
  // check if the value is number
  if (isNaN(gasValue)) {
    $(this).val("");
    alertify.alert('Please enter a number!');
  }
  // check for input length
  if (gasValue.length >= 6) {
    alertify.alert('No more than 6 numbers please!');
  }
  // convert input value to number
  parseInt(gasValue);
  return gasValue
});
// dropdown menu change [GAS]
$(gasDivision).change(function(){
  var divisionDropdown = $(this).val();
  gasBillPerPersonPrice = Math.round(parseInt(gasValue) / parseInt(divisionDropdown));
  $(gasBillPerPerson).attr('placeholder', gasBillPerPersonPrice);
});
// on input blur get the vlaue and place it as a result [GAS]
$(gasBillInput).blur(function(){
  gasValue = $(this).val();
  parseInt(gasValue);
  var divisionDropdown = $(gasDivision).val();
  gasBillPerPersonPrice = Math.round(parseInt(gasValue) / parseInt(divisionDropdown));
  if (gasValue == "") {
    $(gasBillPerPerson).attr('placeholder', "");
  } else {
    $(gasBillPerPerson).attr('placeholder', gasBillPerPersonPrice);
  }
});


// ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
// ]]]]]]]]]]]]]]]]]]]]]]]]]]
// ]]]]]]]]]]]]]]]]]]
// ]]]] POWER
// ]]]]]]]]]]]]]]]]]]
// ]]]]]]]]]]]]]]]]]]]]]]]]]]
// ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]


// get the input value on keyup [POWER]
$(powerBillInput).keyup(function(){
  powerValue = $(this).val();
  // check if the value is number
  if (isNaN(powerValue)) {
    $(this).val("");
    alertify.alert('Please enter a number!');
  }
  // check for input length
  if (powerValue.length >= 6) {
    alertify.alert('No more than 6 numbers please!');
  }
  // convert input value to number
  parseInt(powerValue);
  return powerValue
});
// dropdown menu change [POWER]
$(powerDivision).change(function(){
  var divisionDropdown = $(this).val();
  powerBillPerPersonPrice = Math.round(parseInt(powerValue) / parseInt(divisionDropdown));
  $(powerBillPerPerson).attr('placeholder', powerBillPerPersonPrice);
});
// on input blur get the vlaue and place it as a result [POWER]
$(powerBillInput).blur(function(){
  powerValue = $(this).val();
  parseInt(powerValue);
  var divisionDropdown = $(powerDivision).val();
  powerBillPerPersonPrice = Math.round(parseInt(powerValue) / parseInt(divisionDropdown));
  if (powerValue == "") {
    $(powerBillPerPerson).attr('placeholder', "");
  } else {
    $(powerBillPerPerson).attr('placeholder', powerBillPerPersonPrice);
  }
});


// ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
// ]]]]]]]]]]]]]]]]]]]]]]]]]]
// ]]]]]]]]]]]]]]]]]]
// ]]]] WATER
// ]]]]]]]]]]]]]]]]]]
// ]]]]]]]]]]]]]]]]]]]]]]]]]]
// ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]


// get the input value on keyup [WATER]
$(waterBillInput).keyup(function(){
  waterValue = $(this).val();
  // check if the value is number
  if (isNaN(waterValue)) {
    $(this).val("");
    alertify.alert('Please enter a number!');
  }
  // check for input length
  if (waterValue.length >= 6) {
    alertify.alert('No more than 6 numbers please!');
  }
  // convert input value to number
  parseInt(waterValue);
  return waterValue
});
// dropdown menu change [WATER]
$(waterDivision).change(function(){
  var divisionDropdown = $(this).val();
  waterBillPerPersonPrice = Math.round(parseInt(waterValue) / parseInt(divisionDropdown));
  $(waterBillPerPerson).attr('placeholder', waterBillPerPersonPrice);
});
// on input blur get the vlaue and place it as a result [WATER]
$(waterBillInput).blur(function(){
  waterValue = $(this).val();
  parseInt(waterValue);
  var divisionDropdown = $(waterDivision).val();
  waterBillPerPersonPrice = Math.round(parseInt(waterValue) / parseInt(divisionDropdown));
  if (waterValue == "") {
    $(waterBillPerPerson).attr('placeholder', "");
  } else {
    $(waterBillPerPerson).attr('placeholder', waterBillPerPersonPrice);
  }
});


// ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
// ]]]]]]]]]]]]]]]]]]]]]]]]]]
// ]]]]]]]]]]]]]]]]]]
// ]]]] INTERNET
// ]]]]]]]]]]]]]]]]]]
// ]]]]]]]]]]]]]]]]]]]]]]]]]]
// ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]


// get the input value on keyup [INTERNET]
$(internetBillInput).keyup(function(){
  internetValue = $(this).val();
  // check if the value is number
  if (isNaN(internetValue)) {
    $(this).val("");
    alertify.alert('Please enter a number!');
  }
  // check for input length
  if (internetValue.length >= 6) {
    alertify.alert('No more than 6 numbers please!');
  }
  // convert input value to number
  parseInt(internetValue);
  return internetValue
});
// dropdown menu change [INTERNET]
$(internetDivision).change(function(){
  var divisionDropdown = $(this).val();
  internetBillPerPersonPrice = Math.round(parseInt(internetValue) / parseInt(divisionDropdown));
  $(internetBillPerPerson).attr('placeholder', internetBillPerPersonPrice);
});
// on input blur get the vlaue and place it as a result [INTERNET]
$(internetBillInput).blur(function(){
  internetValue = $(this).val();
  parseInt(internetValue);
  var divisionDropdown = $(internetDivision).val();
  internetBillPerPersonPrice = Math.round(parseInt(internetValue) / parseInt(divisionDropdown));
  if (internetValue == "") {
    $(internetBillPerPerson).attr('placeholder', "");
  } else {
    $(internetBillPerPerson).attr('placeholder', internetBillPerPersonPrice);
  }
});


// ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
// ]]]]]]]]]]]]]]]]]]]]]]]]]]
// ]]]]]]]]]]]]]]]]]]
// ]]]] GET TOTAL RESULT
// ]]]]]]]]]]]]]]]]]]
// ]]]]]]]]]]]]]]]]]]]]]]]]]]
// ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]


$(calcBtn).click(function(e){
  e.preventDefault();
  // get gas placeholder value
  var gasPlaceholder = $(gasBillPerPerson).attr('placeholder');
  // get power placeholder value
  var powerPlaceholder = $(powerBillPerPerson).attr('placeholder');
  // get water placeholder value
  var waterPlaceholder = $(waterBillPerPerson).attr('placeholder');
  // get internet placeholder value
  var internetPlaceholder = $(internetBillPerPerson).attr('placeholder');
  // check if the placeholder is empty
  if (gasPlaceholder == "") {
    gasPlaceholder = 0
  }
  if (powerPlaceholder == "") {
    powerPlaceholder = 0
  }
  if (waterPlaceholder == "") {
    waterPlaceholder = 0
  }
  if (internetPlaceholder == "") {
    internetPlaceholder = 0
  }
  // get the sum of those values
  var totalPrice = parseInt(gasPlaceholder) + parseInt(powerPlaceholder) + parseInt(waterPlaceholder) + parseInt(internetPlaceholder);
  $(total).val(totalPrice);
});
