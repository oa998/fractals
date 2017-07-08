var s = 0;

function setup(){
  createCanvas(800,800);
  stroke(0);
  fill(0);
  strokeWeight(1);
  background(255);
  drawFractal({x : 0, y: 0}, width, 5);
  noLoop();
  console.log(s);
}

function draw(){
  //nah
}

function drawFractal(p, wide, attempts){
  if(attempts>0){
    var w = floor(wide/3);
    var p1 = {x: p.x         , y: p.y };
    var p2 = {x: p.x + w     , y: p.y };
    var p3 = {x: p.x + w + w , y: p.y };

    var p4 = {x: p.x         , y: p.y + w };
    //skip middle square
    var p5 = {x: p3.x        , y: p4.y };

    var p6 = {x: p.x         , y: p1.y + w + w };
    var p7 = {x: p2.x        , y: p6.y };
    var p8 = {x: p3.x        , y: p6.y };

    drawFractal(p1, w, attempts-1);
    drawFractal(p2, w, attempts-1);
    drawFractal(p3, w, attempts-1);
    drawFractal(p4, w, attempts-1);
    drawFractal(p5, w, attempts-1);
    drawFractal(p6, w, attempts-1);
    drawFractal(p7, w, attempts-1);
    drawFractal(p8, w, attempts-1);
  }else{
    s+=1;
    rect(p.x, p.y, wide, wide);
  }
}
