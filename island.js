var pts = [];
var islandSize = 5;

function setup(){
  createCanvas(2200,1200);
  stroke(0);
  fill(0);
  strokeWeight(1);
  background(255);
  createButton('new').style("position",'absolute')
                     .style('right','0px')
                     .style('top','0px')
                     .style('font-size','30pt')
                     .style('width','150px')
                     .mouseClicked(function(){
                       location.reload();
                     });
  createButton('cut').style("position",'absolute')
                      .style('right','0px')
                      .style('top','60px')
                      .style('font-size','30pt')
                      .style('width','150px')
                      .mouseClicked(frac);
}

function draw(){
  if(pts.length >= islandSize){
    background(255);
    var i = 0; //= (pts.length > 2)? 0 : 1;
    for( i = 0; i< pts.length-1; i++){
      line(pts[i].x, pts[i].y, pts[i+1].x, pts[i+1].y);
    }
    line(pts[i].x, pts[i].y, pts[0].x, pts[0].y);
  }
}

function mouseMoved(){
  if(pts.length < islandSize){
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
  if(pts.length<islandSize){
    pts.push({x: mouseX, y: mouseY});
  }
}
