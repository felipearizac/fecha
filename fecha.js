
    function ValidarFecha(){
      var Fecha = document.getElementById('TxtFecha').value;
      var Mensaje = '';
 
        if(Fecha.length == 8){
          var Anio = Fecha.substr(0, 4); 
          var Mes = parseFloat(Fecha.substr(4, 2)) - 1;
          var Dia = Fecha.substr(6, 2); 
  
          var VFecha = new Date(Anio, Mes, Dia);

     if((VFecha.getFullYear() == Anio) && (VFecha.getMonth() == Mes) && (VFecha.getDate() == Dia)){
          if((Anio>=1990)&&(Mes>=1)&&(Dia>=1)){
            if((Anio%4==0)&&(Anio%100!=0)||(Anio%400==0)){
         
               Mensaje = 'Fecha correcta';
              Mensaje = 'Es bisiesto';
          }
      }
        else {
          Mensaje = 'Lo siento, El año ingresado no es bisieto'
      }
     }
        else{
            Mensaje = 'Fecha incorrecta';
      }
    }
       
    document.getElementById('Mensaje').innerHTML = Mensaje;

}
  