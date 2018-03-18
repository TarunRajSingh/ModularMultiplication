var NoOfPointsSlider =  document.getElementById("NoOfPoints");
var NoOfPointsValue = document.getElementById("NoOfPoints").value;
var NoOfPointsOutput = document.getElementById("NoOfPointsOutput");
NoOfPointsOutput.innerHTML = NoOfPointsValue;

var MultipleSlider = document.getElementById("Multiple");
var MultipleValue = document.getElementById("Multiple").value;
var MultipleOutput = document.getElementById("MultipleOutput");
MultipleOutput.innerHTML = MultipleValue;


function Draw() {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.clearRect(0, 0, c.width, c.height);

  NoOfPointsValue = document.getElementById("NoOfPoints").value;
  NoOfPointsOutput = document.getElementById("NoOfPointsOutput");
  NoOfPointsOutput.innerHTML = NoOfPointsValue;

  MultipleValue = document.getElementById("Multiple").value;
  MultipleOutput = document.getElementById("MultipleOutput");
  MultipleOutput.innerHTML = MultipleValue;


  var AngleDiff = 360/NoOfPointsValue;
  var CentreX = 300;
  var CentreY = 300;
  var Radius = 290;
  var DegToRad = Math.PI/180;
  var NewPointsX = [];
  var NewPointsY = [];
  for (var i = 0; i < NoOfPointsValue; i++) {
    var NewX =CentreX + Radius*Math.sin(i*DegToRad*AngleDiff)
    var NewY =CentreY - Radius*Math.cos(i*DegToRad*AngleDiff)
    ctx.beginPath();
    ctx.arc(NewX,NewY,2,0,2*Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.strokeStyle="red";
    ctx.stroke();
    NewPointsX.push(NewX);
    NewPointsY.push(NewY);
  }

  for (var i = 0; i < NoOfPointsValue; i++) {
    ctx.moveTo(NewPointsX[i],NewPointsY[i]);
    var x = (i*MultipleValue)%NoOfPointsValue;
    var y = (i*MultipleValue)%NoOfPointsValue;
    ctx.lineTo(NewPointsX[x],NewPointsY[y]);
    ctx.strokeStyle="black";
    ctx.stroke();
  }
}
Draw();

function NoOfPointsValueChange(value) {
  NoOfPointsValue = value
  NoOfPointsOutput.innerHTML = NoOfPointsValue;
  Draw();
}

function abc(value) {
  MultipleValue = value
  MultipleOutput.innerHTML = MultipleValue;
  Draw();
}
