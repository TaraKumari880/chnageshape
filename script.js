var arrColor = ["purple", "black", "red","yellow","green","orange"];

var arrShape =["square","circle", "oval",
					"triangle-up","triangle-down", "triangle-top-left",
					 "triangle-bottom-left", "triangle-bottom-right", 
					 "triangle-left", "triangle-right"];

var changeColor = document.getElementById("Change_Color");
var changeShape = document.getElementById("Change_Shape");
var border = document.getElementById("border");

var arrColorlength = arrColor.length;
var arrShapelength = arrShape.length;

changeColor.addEventListener('click',function(){
	var min=0; 
    var max=arrColorlength+1;  
    var index = Math.floor(Math.random() * (+max - +min)) + +min;
    index = index.toString();
   // console.log(typeof(index));  
    border.style.backgroundColor = arrColor[index];
});

changeShape.addEventListener('click',function(){
	var min=0; 
    var max=arrShapelength; 
    //console.log('max ',max);
    var index = Math.floor(Math.random() * (+max - +min)) + +min;
    index = index.toString();
    console.log(index);
    var className = arrShape[index];
    console.log(className);
    var parent = border.children[0];
    parent.className = className;
});