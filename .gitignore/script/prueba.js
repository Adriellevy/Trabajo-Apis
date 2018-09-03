/* link de la api https://swapi.co/documentation*/
var Base_url ="https://swapi.co/api";
var Urlplanetas = "/planets/" ;
var people   = "https://swapi.co/api/people/";
var films    = "/films/";
var species  = "https://swapi.co/api/species/";
var starships= "https://swapi.co/api/starships/";
var vehicles = "https://swapi.co/api/vehicles/"
var i1 = 0; 
/*numero de planeta que quiero inverstigar */
var todos = "*/";
var datos;

function addElement (info, i,clase) { 
	var informacion = info;
  // crea un nuevo div 
  // y añade contenido 
  var newDiv = $(document.createElement("div")).attr('class', 'info'); 
  newDiv.attr('id', i);
  var newBoton = $(document.createElement("button")).attr('class', 'botones','id',i);
  newBoton.appendTo(newDiv);
  var newContent = document.createTextNode(informacion); 
  newDiv.append(newContent); 
  
  var currentDiv = document.getElementById("div1"); 
  //$('body').append(newDiv);
  newDiv.appendTo('main');
}

function addboton(){
  // crea un nuevo div 
  // y añade contenidobv

 	var newbotom = document.createElement("button");   
	document.body.insertBefore(newbotom,null); 
}
function addWindow(url) {
		var a = document.createElement("a");
		a.target = "_blank";
		a.href = url;
		a.click();
}

$.get(Base_url + Urlplanetas, function (data) {	
	console.log(data);
	    data.results.forEach((dato)=>{
	    	if ( i1 <= 8) {
		addElement(i1 + " planet" + ":" + " The planet's name " + dato.name + " the tarrain of the planet is" +  dato.terrain,i1,"infoplanetas");
		
		i1 ++;;
	}else{
		i1 = 0;
	}
	});	
}, 'json');
// arrgelar las clases que son intrducidas

$.get(starships, function (data) {	
	console.log(data);
	datos = data;
    data.results.forEach((dato)=>{
    	if ( i1 <= 9) {	
		addElement(i1 + " starship"  + ":" + " The starship's name is " + dato.name + " the people who made this starship were " +  dato.manufacturer,i1,"infonave");
		i1 ++;}
		else
		{
	i1 = 0;
		}
	});	
}, 'json');



/*
function ChequearOption() {
var selected = "Elige el planeta";
	$('#planetas').click(()=>{
    	selected = $('.planeta').attr("value");
    	console.log(selected);
    	$('#Terreno').append(selected);
    	})
}
$( "#planetas").click(function() 
{
	ChequearOption();
});*/ 
















