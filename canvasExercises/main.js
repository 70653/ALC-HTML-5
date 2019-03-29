var canvas1 = document.getElementById("myCanvas");
var ctx = canvas1.getContext("2d");


//ctx.moveTo(0, 0);
//ctx.lineTo(600, 300);
//ctx.stroke();

fillRectangle();
drawCircle();
createLinearGradient();
drawPentagram();


// functions

function fillRectangle()
{
    // fill with color
    ctx.fillStyle = "#FF0000";

    // fillRect(x, y, width, height)
    ctx.fillRect(0, 0, 400, 200); // canvas2 is 200 x 100
}

function drawCircle()
{
    // draw a circle
    ctx.beginPath();

    // arc(x, y, radius, startAngle, endAngle)
    ctx.arc(300, 300, 300, 0, 2 * Math.PI);
    ctx.stroke();
}

function createLinearGradient()
{
    // create a gradient

    // createLinearGradient(x, y, x1, y1)
    var grd = ctx.createLinearGradient(0, 0, 200, 0);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "white");

    // fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(10, 10, 150, 80);
}

function drawPentagram()
{
    // draw a pentagram
    // the length of each line is 564
    
    ctx.moveTo(300, 0);
    ctx.lineTo(331, 456);
    ctx.stroke();
    
    ctx.moveTo(331, 456);
    ctx.lineTo(18, 200);
    ctx.stroke();
    
    ctx.moveTo(18, 200);
    ctx.lineTo(582, 200);
    ctx.stroke();
    
    
}