var Paddle = function(){
	var image=imageFromPath('pd.png')
	var o={
		image:image,
		x:100,
		y:200,
		speed:5,
	}
	o.move=function(x){
		if(x<0){
			o.x=0
		}
		else if(x>400-o.image.width){
			o.x=400-o.image.width
		}else{
			o.x=x
		}
	}
	o.moveLeft=function(){
		o.move(o.x-o.speed)
	}
	o.moveRight=function(){
		o.move(o.x+o.speed)
	}
	return o
}