SCREENWIDTH = 800
SCREENHEIGHT = 600
ROADHEIGHT = SCREENHEIGHT/2

var car;
var roads = [];
var distance = 0;

function setup() {

  createCanvas(SCREENWIDTH, SCREENHEIGHT);
  background("lightblue");

  	for (var y=ROADHEIGHT;y<SCREENHEIGHT;y++){
  		//Generate Road segments
  		roads[y-ROADHEIGHT] = new Road(0,y,SCREENWIDTH,1);
  		//Apply Scaling
  		roads[y-ROADHEIGHT].roadScale = 0.8*(ROADHEIGHT-y)/ROADHEIGHT
  		//Show road
  		roads[y-ROADHEIGHT].show()
	}

}

function draw() {

	for (var i=0;i<roads.length;i++){
		//Apply 3D Colours
    distance += 0.01;
    var grass = Math.pow(Math.sin(1-distance),2)
    //console.log(grass, distance)
		if(grass>0.3){
			roads[i].grassColour="lightgreen" 
		}else{
      roads[i].grassColour="green"
    }
    roads[i].show()
  }
}