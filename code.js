setScreen("startScreen");
onEvent("button21", "click", function( ) {
  setScreen("mainScreen");
});
var firstinput = " ";
var secondinput = " ";
var inputcheck = true;
var calText = " ";
var operation = " ";
var value1,value2,result = " ";
var finalcalText = " ";
onEvent("button1", "click", function( ) {
  if (inputcheck==true) {
  firstinput = firstinput + "1";
  setText("label2",firstinput);
  } else {
  secondinput =secondinput + "1";
  setText("label2",calText + secondinput);
  }
});
onEvent("button2", "click", function( ) {
  if (inputcheck==true) {
  firstinput = firstinput + "2";
  setText("label2",firstinput);
  } else {
  secondinput =secondinput + "2";
  setText("label2",calText + secondinput);
  }
});
onEvent("button3", "click", function( ) {
  if (inputcheck==true) {
  firstinput = firstinput + "3";
  setText("label2",firstinput);
  } else {
  secondinput =secondinput + "3";
  setText("label2",calText + secondinput);
  }
});
onEvent("button4", "click", function( ) {
  if (inputcheck==true) {
  firstinput = firstinput + "4";
  setText("label2",firstinput);
  } else {
  secondinput =secondinput + "4";
  setText("label2",calText + secondinput);
  }
});
onEvent("button5", "click", function( ) {
  if (inputcheck==true) {
  firstinput = firstinput + "5";
  setText("label2",firstinput);
  } else {
  secondinput =secondinput + "5";
  setText("label2",calText + secondinput);
  }
});
onEvent("button6", "click", function( ) {
  if (inputcheck==true) {
  firstinput = firstinput + "6";
  setText("label2",firstinput);
  } else {
  secondinput =secondinput + "6";
  setText("label2",calText + secondinput);
  }
});
onEvent("button7", "click", function( ) {
  if (inputcheck==true) {
  firstinput = firstinput + "7";
  setText("label2",firstinput);
  } else {
  secondinput =secondinput + "7";
  setText("label2",calText + secondinput);
  }
});
onEvent("button8", "click", function( ) {
  if (inputcheck==true) {
  firstinput = firstinput + "8";
  setText("label2",firstinput);
  } else {
  secondinput =secondinput + "8";
  setText("label2",calText + secondinput);
  }
});
onEvent("button9", "click", function( ) {
  if (inputcheck==true) {
  firstinput = firstinput + "9";
  setText("label2",firstinput);
  } else {
  secondinput =secondinput + "9";
  setText("label2",calText + secondinput);
  }
});
onEvent("button10", "click", function( ) {
  if (inputcheck==true) {
  firstinput = firstinput + "0";
  setText("label2",firstinput);
  } else {
  secondinput =secondinput + "0";
  setText("label2",calText + secondinput);
  }
});
onEvent("button11", "click", function( ) {
  if (inputcheck==true) {
  firstinput = firstinput + ".";
  setText("label2",firstinput);
  } else {
  secondinput =secondinput + ".";
  setText("label2",calText + secondinput);
  }
});
onEvent("button15", "click", function( ) {
inputcheck = false;
operation = "add";
calText = firstinput + " + ";
setText("label2",calText);
});
onEvent("button16", "click", function( ) {
inputcheck = false;
operation = "subtract";
calText = firstinput + " - ";
setText("label2",calText);
});
onEvent("button17", "click", function( ) {
inputcheck = false;
operation = "multiply";
calText = firstinput + " x ";
setText("label2",calText);
});
onEvent("button18", "click", function( ) {
inputcheck = false;
operation = "divide";
calText = firstinput + " / ";
setText("label2",calText);
});
onEvent("button12", "click", function ( ){
inputcheck = false;
operation = "percentage";
calText = firstinput + " % ";
setText("label2",calText);
});
onEvent("button19", "click", function ( ){
value1= parseFloat(firstinput);
value2 = parseFloat(secondinput);
if (operation=="add") {
  result = value1 + value2;
} else if (operation=="subtract") {
  result = value1 - value2;
} else if (operation=="multiply") {
  result = value1 * value2;
} else if ((operation == "divide" && value2 != 0)) {
  result = (value1/value2).toFixed(3);
} else if (operation=="percentage"&&value2!=0){
result =(value1/value2)*100;
} else {
result = "error";
}
finalcalText = getText("label2")+" = "+result;
setText("label2",finalcalText);
});
onEvent("button14", "click", function( ) {
  setText("label2", " ");
firstinput = "";
secondinput = "";
inputcheck = true;
calText = "";
result = "";
operation = "";
finalcalText = "";
});
onEvent("button13", "click", function( ) {
if (result != "") {
return;
}
if (secondinput != "") {
secondinput = "";
setText("label2",calText);
}
if (secondinput == "" && operation != "") {
return;
}
if (secondinput==""&& operation==""&& firstinput!="") {
firstinput = "";
setText("label2","");
return;
}

});
