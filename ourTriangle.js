var pts = [];

function setup(){
  createCanvas(2200,1200);
  stroke(0);
  fill(0);
  strokeWeight(1);
  // var sideLen = width;
  // a = { x: width/2, y: 0};
  // b = { x: cos(radians(60))*sideLen+ a.x, y: sin(radians(60))*sideLen + a.y};
  // c = { x: b.x - sideLen, y: b.y};
  background(255);
  createButton('new').style("position",'absolute')
                    .style('right','0px')
                    .style('top','0px')
                    .mouseClicked(function(){
                      location.reload();
                    });
}

function draw(){
  if(pts.length<3){
    return;
  }else{
    background(255);
    drawFractal(pts[0], pts[1], pts[2], 7);
    noLoop();
  }
}


function drawTriangle(p1, p2, p3){
  beginShape();
  vertex(p1.x, p1.y);
  vertex(p2.x, p2.y);
  vertex(p3.x, p3.y);
  endShape(CLOSE);
}

function drawFractal(top, right, left, attempts){
  if(attempts>0){
    var rCent = {
      x: (top.x + right.x) / 2,
      y: (top.y + right.y) / 2
    };
    var bCent = {
      x: (right.x + left.x) / 2,
      y: (right.y + left.y) / 2
    };
    var lCent = {
      x: (left.x + top.x) / 2,
      y: (left.y + top.y) / 2
    };
    drawFractal(top, rCent, lCent, attempts-1);
    drawFractal(rCent, right, bCent, attempts-1);
    drawFractal(lCent, bCent, left, attempts-1);
  }else{
    drawTriangle(top, right, left);
  }
}

function mouseMoved(){
  if(pts.length<3){
    background(255);
    rect(1,1,width-2, height-2);
    noFill();
    ellipse(mouseX, mouseY, 8,8);
    pts.forEach((p)=>{
      ellipse(p.x, p.y, 6,6);
    });
  }
}

function mouseClicked(){
  if(pts.length<3){
    pts.push({x: mouseX, y: mouseY});
  }
}
