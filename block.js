var Block=function(x,y){
	var image=imageFromPath('block.png')
	var b={
		image:image,
		x:x,
		y:y,
		alive:true,
	}
	b.kill=function(){
		b.alive=false
	}
	return b
}