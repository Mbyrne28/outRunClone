function Road (x,y,width,height){
	this.x = x;
	this.y = y;
	this.height = height;
	this.width = width;

	this.roadScale = 1
	this.grassScale = 0.6
	this.edgeScale = 0.1
	this.grassColour = "green"

	this.show = function(){
		//console.log("road", this.y)
		noStroke()
		fill(this.grassColour)
		rect(0, this.y, this.width, this.height)
	
		noStroke()
		fill("grey")
		rect((this.width-(this.width*this.roadScale))/2, this.y, this.width*this.roadScale, this.height)
	}
}