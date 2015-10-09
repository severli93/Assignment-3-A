//Set up the drawing environment here
var margin = {t:20,r:20,b:20,l:20};
var width = document.getElementById('plot').clientWidth-margin.l-margin.r,
    height = document.getElementById('plot').clientHeight-margin.t-margin.b;
var plot = d3.select('.canvas')
    .append('svg')
    .attr('width',width+margin.l+margin.r)
    .attr('height',height+margin.t+margin.b)
    .append('g')
    .attr('class','plot')
    .attr('transform','translate('+margin.l+','+margin.r+')')//--> complete this line here


//Start with 100 symbols
var numOfSymbols = 100;//100

//Create an array, generate objects to push into the array
var symbols=[];

//generate random colors
function get_random_color() {
    function c() {
        return Math.floor(Math.random()*255).toString(16);
    }
    return "#"+c()+c()+c();
}

//generate object storing drawing data of each point
// --> x position: between 0 and width
// --> y position: betewen 0 and height
// --> size: between 0 and 100x100
// --> type: circle or square
// --> color
Obj=function(){

    this.x=Math.random()*width,
        this.y=Math.random()*height,
        this.size=Math.random()*50,
        //generate random colors for each obj
        this.color=get_random_color(),
        this.type=Math.round(Math.random());
}

//Attributes of these symbols are
for(var i=0; i<numOfSymbols;i++){
    //Obj.x=Math.random()*width,
    //    Obj.y=Math.random()*height,
    //    Obj.size=Math.random()*50,
    //    Obj.color='rgb(255,100,100)',
    //    Obj.type=Math.round(Math.random());
    newObj=new Obj();
    symbols.push(newObj)
    symbols[i];
    console.log("once!");
}
console.log(symbols);

//With the array you've created and populated, draw circles to represent these symbols
symbols.forEach(DrawFunc);

function DrawFunc(symbol) {
    if (symbol.type == 1) {
        plot
            .append('rect')
            .attr('x', symbol.x)
            .attr('y', symbol.y)
            .attr('width', symbol.size)
            .attr('height', symbol.size)
            .style('fill', symbol.color)
    }
    else {
        plot
            .append('circle')
            .attr('cx', symbol.x)
            .attr('cy', symbol.y)
            .attr('r', symbol.size)
            .style('fill', symbol.color)
    }
}

