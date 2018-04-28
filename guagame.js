var GuaGame=function(){
	var g={
		actions:{},
		keydowns:{},
	}
	var canvas = document.querySelector('#id-canvas')
	var context = canvas.getContext('2d')
	g.canvas=canvas
	g.context=context
			var imageFromPath=function(path){
				var img =new Image()
				img.src=path
				return img
			}
	//draw
	g.drawImage=function(guaImage){
		g.context.drawImage(guaImage.image,guaImage.x,guaImage.y)
	}
	
	//events
	window.addEventListener('keydown',function(event){
		g.keydowns[event.key]=true
	})
	window.addEventListener('keyup',function(event){
		g.keydowns[event.key]=false
	})
	
	
	g.registerAction=function(key,callback){
		g.actions[key]=callback
	}
	
	setInterval(function(){
		//events
		var actions=Object.keys(g.actions)
		for (var i=0;i<actions.length;i++) {
			var key=actions[i]
			if(g.keydowns[key]){
				g.actions[key]()
			}
		}
		//update
		g.update()
		context.clearRect(0,0,canvas.width,canvas.height)
		g.draw()
	},1000/60)
	return g
}
