/*
Make a-object move randomly
@author   Mingxuan Xie <http://mingxuan.fun/>
@license  MIT
*/

// let factor;
// let oldfactor;

AFRAME.registerComponent('hypermove', {
    schema: {
        factor:{type: 'number', default: 0.05},
    },
    init: function(){
        var cursorbox = document.getElementById("cursorbox"); // get cursor box to hide
        var el = this.el;
        // factor = this.data.factor;
        // oldfactor = factor;
        el.addEventListener('raycaster-intersected',function(){
            // factor = 0;
            cursorbox.setAttribute('visible', false);
            this.setAttribute('factor', 0)
            // console.log("hovered") 
        });
        el.addEventListener('raycaster-intersected-cleared',function(){
            // factor = oldfactor;
            cursorbox.setAttribute('visible', true);
            // console.log("leaved") 
        });
       },
    tick: function (time, timeDelta) {
        this.el.object3D.position.x += this.data.factor*(Math.random() - 0.5);
        this.el.object3D.position.y += this.data.factor*(Math.random() - 0.5);
        this.el.object3D.position.z += this.data.factor*(Math.random() - 0.5);
    }
});