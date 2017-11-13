SCREENWIDTH = 800
SCREENHEIGHT = 600

var car;
var roads = [];

function setup() {

  createCanvas(SCREENWIDTH, SCREENHEIGHT);
  background("lightblue");

  	for (var y=0;y<(SCREENHEIGHT/2)/8;y++){
  		//console.log(y,y/SCREENHEIGHT )
  		roads[y] = new Road(0,(SCREENHEIGHT/2)+y*8,SCREENWIDTH,8);
  		
  		roads[y].roadScale = (y/SCREENHEIGHT * 10) +0.05


  		roads[y].show()
	}

}

function draw() {
  // put drawing code here
  	console.log("grass")
  	for (var i=0;i<roads.length;i++){
  		//roads[i].show()
  		var grass = Math.abs(Math.sin(20*Math.pow((roads.length/i),3)))
  		if(grass>0.5){
  			roads[i].grassColour="lightgreen"
  			roads[i].show()	
  		}
	}
}