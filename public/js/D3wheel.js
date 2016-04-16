
import d3 from 'd3';

class D3Wheel {

    constructor(config){
        this.config = config;
    }

    get start (){
        this.show();
    }

    show () {

        var id = this.config._id;

        var canvas = d3.select(`#${id}`).append('svg')
            .attr('width', 100)
            .attr('height', 100);

        var group = canvas.append('g')
            .attr('transform', 'translate(50, 50)');


        var r = 40,
            p = Math.PI * 2;


        var arc = d3.svg.arc()
            .innerRadius(r - 10)
            .outerRadius(r)
            .startAngle(0)
            .endAngle(p - 2);

        group.append('path')
            .attr('d', arc)
            .attr('fill', '#89AA87');
    }

}

module.exports = D3Wheel;