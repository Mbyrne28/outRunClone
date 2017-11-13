SCREENWIDTH = 800
SCREENHEIGHT = 600
ROADHEIGHT = SCREENHEIGHT/2

var car;
var roads = [];
var distance = 0;
var grass = 0;

function setup() {
  console.log(":::setup:::")
  createCanvas(SCREENWIDTH, SCREENHEIGHT);
  background("lightblue");

  	for (var y=ROADHEIGHT;y<SCREENHEIGHT;y++){
  		//Generate Road segments
  		roads[y-ROADHEIGHT] = new Road(0,y,SCREENWIDTH,1);
  		//Apply Scaling
  		roads[y-ROADHEIGHT].roadScale = 0.8*(ROADHEIGHT-y)/ROADHEIGHT
      i = y-ROADHEIGHT
      distance += 0.5;
      grass = 20*Math.sin(Math.pow(i+distance,2)/ROADHEIGHT)
      console.log("grass: ",grass)
      if(grass<0){
        roads[i].grassColour="lightgreen" 
      }else{
        roads[i].grassColour="green"
      }

  		//Show road
  		roads[y-ROADHEIGHT].show()
	}

}

function draw() {

	for (var i=0;i<roads.length;i++){
		//Apply 3D Colours
    /*distance += 0.01;
    grass = Math.sin(1 - Math.pow((i/roads.length),3) - distance)
    console.log("grass: ",grass)
		if(grass<0.3){
			roads[i].grassColour="lightgreen" 
		}else{
      roads[i].grassColour="green"
    }
    roads[i].show()*/
    distance += 1;
      grass = 120*Math.sin(Math.pow(i,2)/ROADHEIGHT + distance*0.1)
      //console.log("grass: ",grass)
      if(grass<0){
        roads[i].grassColour="lightgreen" 
      }else{
        roads[i].grassColour="green"
      }
      roads[i].show()
  }
}