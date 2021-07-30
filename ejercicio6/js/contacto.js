const correo = document.getElementById('email')
const comentario = document.getElementById('comentario')


const form = document.getElementById('form');
if(form)
{

  form.addEventListener('submit', logSubmit);
}


function logSubmit(event) {
  
  event.preventDefault();

  var error = "";
   
 	if (correo.validity.typeMismatch || correo.value.length == 0) {
    	error = "Correo invalido \n "
 	} 

	if (comentario.value.length < 10 || comentario.value.length >20) {
    	error = error + "Comentario invalido \n "
  	} 
  	if (error.length != 0) {
    	alert(error + "Atencion **** \n");
  	} else {
  		correo.value="";
  		comentario.value="";
  		alert("Formulario enviado correctamente");
  		window.open('https://www.youtube.com/watch?v=DEr4wv3eXFo', '_blank');
  	}
  		
}
 
 //segunda forma de hacer el procedimiento Nota: le faltan validaciones
/*function logSubmit2(event) {
  
  event.preventDefault();
  
 	if (correo.validity.typeMismatch || correo.value.length == 0) {
    
 		alert("Correo invalido");
 	
  	} else if (comentario.value.length == 0) {
    
 		alert("Comentario invalido");
 	
  	} 
  		
}*/

  

