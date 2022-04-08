/*
11. Crea una función validar() para validar la entrada de datos de un formulario
    a. Para evitar que se envíe un formulario varias veces conviene deshabilitar el botón de envío tras enviarlo 
       una vez. Escribe un script para gestionar el envío del formulario:
    b. Deshabilita el botón "Enviar"
    c. Cambia el mensaje que muestra el botón de "Enviar" a "Enviando…"
    d. Cuando se haya enviado genera una página nueva indicando que se ha enviado correctamente y muestra la 
       información que se ha enviado.
*/

function validarUsuario(formulario) {
    // Validación de la edad: Comprueba si el dato ha sido introducido, si es un número y si es mayor de edad.
    if(formulario.edad.value.length>0){
        if(isNaN(parseInt(formulario.edad.value))) {
            alert('Escriba correctamente su edad.');
            return false; 
        }else{
            if((parseInt(formulario.edad.value))<18){
                alert('El registro es para mayores de 18 años.');
                return false;                 
            }
        }
    }else{
        alert('Falta por rellenar el campo "Edad"');
        return false;            
    }            
    
    // Validación del Código Postal (en España son 5 caracteres numéricos): Comprueba si el dato ha sido introducido y si cumple con el patrón indicado.
    var patronCP=/(^([0-9]{5,5})|^)$/;
    if(formulario.cp.value.length>0){
        if (!(patronCP.test(formulario.cp.value))) {
            alert('Contenido del código postal no es un código postal válido');
            return false; 
        }            
    }else{
        alert('Falta por rellenar el campo "Código Postal"');
        return false;                
    }
 
    // Validación de DNI: Comprueba si el DNI es correcto.
    if(formulario.dni.value.length>0){
        
        //Recogemos el valor del DNI en una variable.
        var dni = formulario.dni.value;
            
        // En caso que ponga el DNI con guión, se suprime.
        if((dni.length==10)&&(dni.indexOf('-') != -1)){            
            dni = dni.replace('-', '');
        }
        
        // En caso que ponga el guión pero le faltan números de identificación
        if(((formulario.dni.value.length<10)&&(formulario.dni.value.length>10))&&(formulario.dni.value.indexOf('-') != -1)){            
          alert("Debe de escribir un DNI correcto");
          return false;    
        }                
 
        //Se separan los números de la letra
        var letraDNI = dni.substring(8, 9).toUpperCase();
        var numDNI = parseInt(dni.substring(0, 8));
        
        //Se calcula la letra correspondiente al número
        var letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];
        var letraCorrecta = letras[numDNI % 23];
 
        if(letraDNI!= letraCorrecta){
          alert("Debe de escribir un DNI correcto");
          return false;    
        }
    }else{
          alert('Falta por rellenar el campo "DNI"');
          return false;                
    }
    
    // Validación del correo electrónico: Comprueba si el dato ha sido introducido y si es un correo electrónico */
    if(formulario.email.value.length>0){
        var patronEmail=/^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;       
        if (!(patronEmail.test(formulario.email.value))) {
            alert('Contenido del email no es un correo electrónico válido.');
            return false; 
        }            
    }else{
        alert('Falta por rellenar el campo "Email"');
        return false;                
    }
    // Validación del Sistema Operativo: Comprueba si el dato ha sido introducido */
    if(formulario.so.value.length<1){
        alert('Seleccione un Sistema Operativo.');
        return false;
    }    
    // Validación de horas de programación: Comprueba si el dato ha sido introducido */
    if(formulario.horas.value.length<1){
        alert('Seleccione cuántas horas ha programado.');
        return false;
    }                
    // Validación del correo electrónico: Comprueba si acepta enviar el formulario */
    if(!formulario.condiciones.checked){
        alert('Debe de aceptar el envío de este formulario.');
        return false;                
    }                
}