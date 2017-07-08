function findRandMid(p1, p2){
    var ranDist = dist(p1.x, p1.y, p2.x, p2.y) / 4;  //smaller denominator == more variation in midpoints
    var mid = {
      x: (p1.x + p2.x) / 2,
      y: (p1.y + p2.y) / 2
    }
    mid.x += ( cos(random(2*PI)) * ranDist );
    mid.y += ( sin(random(2*PI)) * ranDist );
    return mid;
}

function frac(){
  var i = 0;
  var tempPts = [];
  for( i = 0; i< pts.length-1; i++){
    var p1 = pts[i],
        p2 = pts[i+1];

    var mid = findRandMid(p1, p2);
    tempPts.push(mid);
  }
  var lastOne = findRandMid(pts[i], pts[0]); //for island only

  i = pts.length-1;
  tempi = tempPts.length-2;
  while( i>0){
    pts.splice(i--, 0, tempPts.pop());//tempPts[tempi--]);
  }
  pts.splice(0,0,lastOne);
}
