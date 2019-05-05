/***********************************************
!PENDING!
Script by Mingxuan Xie (http://vrchitecture.org/)
MIT License
***********************************************/

AFRAME.registerComponent('3Ddanmaku', {
    schema: {
        text:{type: 'string', default: 'Hello, World!'},
        factor:{type: 'number', default: 0.05},
    },
    init: function () {
        var data = this.data;
        var el = this.el;
      },
    tick: function (time, timeDelta) {
        this.el.object3D.position.x += this.data.factor*(Math.random() - 0.5);
        this.el.object3D.position.y += this.data.factor*(Math.random() - 0.5);
        this.el.object3D.position.z += this.data.factor*(Math.random() - 0.5);
    }
});