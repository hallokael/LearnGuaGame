var Ball=function(){
	var image=imageFromPath('ball.png')
	var b={
		image:image,
		x:150,
		y:250,
		Xspeed:5,
		Yspeed:5,
		Shoot:false,
	}
	b.shoot=function(){
		b.Shoot=true
	}
	b.move=function(){
		if(b.Shoot==false)
			return
		
			
		if(b.x+b.Xspeed>400 || b.x+b.Xspeed<0){
			b.Xspeed=-b.Xspeed
		}
		if(b.y+b.Yspeed>300 || b.y +b.Yspeed<0){
			b.Yspeed=-b.Yspeed
		}
		b.x+=b.Xspeed
		b.y+=b.Yspeed
	}
	b.collide=function(obj){
		if(b.x>obj.x && b.x<obj.x+obj.image.width && b.y>obj.y && b.y<obj.y+obj.image.height){
			return true
		}
		return false
	}
	b.back=function(){
		b.Yspeed*=-1
	}
	return b
}