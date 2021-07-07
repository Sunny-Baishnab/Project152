AFRAME.registerComponent('car',{
    schema:{
        moveY:{type:'number',default:2},
        moveX:{type:'number',default:2}
    },
    tick:function(){
        window.addEventListener('click',(e)=>{
            this.data.moveY = this.data.moveY+0.005
            this.data.moveX = this.data.moveX+0.002

        })
        
        var rotate = this.el.getAttribute('rotation')
        var pos = this.el.getAttribute('position')

        rotate.y = this.data.moveY
        pos.x = this.data.moveX
        // rotate.x = this.data.moveZ
        // rotate.y=this.data.moveZ
        this.el.setAttribute('rotation',{x:rotate.x,y:rotate.y,z:rotate.z})
        this.el.setAttribute('position',{x:pos.x,y:pos.y,z:pos.z})
    }
})


        
        
        