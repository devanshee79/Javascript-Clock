const canva = document.getElementById("myCanva");
setInterval(drawClock, 1000);

const ctx = canva.getContext("2d");
const ctx1 = canva.getContext("2d");

ctx.translate(680, 290);
// ctx1.translate(680, 290);

// drawClock();
// drawClock();


function drawClock(){
    var now = new Date();
    drawCircle(ctx);
    drawingCentre(ctx);
    drawNumbers(ctx);
    time(ctx, now);
    console.log("script is drwan");

}

// ///////////////////DRAWING THE CIRCLE FOR CLOCK ///////////////////////////
function drawCircle(ctx){
    // const radius = 255;
    ctx.beginPath();
    ctx.arc(0, 0, 255, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.strokeWidth = 2;
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fill();

}

///////////////////CREATING SMALL CIRCLE FOR HANDS //////////////////////////
function drawingCentre(ctx){
    ctx.beginPath();
    ctx.arc(680, 290, 10, 0, 2*Math.PI);
    ctx.fillStyle = "rgb(160, 157, 103)";
    ctx.fill();
    ctx.stroke();
}

////////////////// MAKING THE NUMBERS ON CLOCK //////////////////////////////

function drawNumbers(ctx){
    let ang;
    let num;
    const radius = 235;
    ctx.font = 100 + "px ariel";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";

    for(num = 1; num < 13; num++)
    {
        if(num == 3 || num == 12 || num == 9 || num == 6)
        {
            ctx.fillStyle = "white";
        }
        else if(num == 1 || num == 8)
        {
            ctx.fillStyle = "rgb(219, 18, 172)";
        }
        else if(num == 5 || num == 10)
        {
            ctx.fillStyle = "yellow";
        }
        else if(num == 2 || num == 4)
        {
            ctx.fillStyle = "rgb(219, 58, 18)";
        }
        else if(num == 11)
        {
            ctx.fillStyle = "rgb(47, 255, 0)";
        }
        else{
            ctx.fillStyle = "rgb(80, 246, 246)";
        }

        ang = (num * Math.PI) / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius*0.86);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius*0.86);
        ctx.rotate(-ang);

    }
}

////////////////////////// MAKING THE CLOCK HANDS ///////////////////////////////

function drawHand(ctx1, pos, length,  width) {
    // console.log(pos);
    ctx1.beginPath();
    ctx1.strokeStyle = "white";
    ctx1.lineCap = "square"; 
    ctx1.moveTo(0,0);
    ctx1.rotate(pos);
    ctx1.lineTo(0, -length);
    ctx1.lineWidth = width;
    ctx1.stroke();
    ctx1.rotate(-pos);
  } 

function time(ctx1, now){
    const radius1 = 235;
    var hour = now.getHours();
    var minute = now.getMinutes();   
    var second = now.getSeconds();

    console.log(hour,minute, second);
    //hour
    hour = hour%12;
    hour = (hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
    drawHand(ctx1, hour, radius1*0.5, radius1*0.07);
    //minute
    minute = (minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx1, minute, radius1*0.7, radius1*0.07);
    // second
    second = (second*Math.PI/30);
    drawHand(ctx1, second, radius1*0.8, radius1*0.02);
}  

