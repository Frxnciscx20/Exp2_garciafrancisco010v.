function validacion()
    {
        nombre= document.getElementById('nom').value;
        email = document.getElementById('ema').value; 

        if(nombre == null || nombre.length==0 || /^\s+$/.test(nombre))
        {
            alert('Error... debes ingresar un nombre válido.');
            document.datos.nom.focus();
            return false;
        }

        if(email == null || email.length==0 || /^\s+$/.test(email))
        {
            alert('Error... debes ingresar un correo válido.');
            document.datos.ema.focus();
            return false;
        }
            
        return true;             
    }

    $(function(){
        var actualizarHora = function(){
          var fecha = new Date(),
              hora = fecha.getHours(),
              minutos = fecha.getMinutes(),
              segundos = fecha.getSeconds(),
              diaSemana = fecha.getDay(),
              dia = fecha.getDate(),
              mes = fecha.getMonth(),
              anio = fecha.getFullYear(),
              ampm;
          
          var $pHoras = $("#horas"),
              $pSegundos = $("#segundos"),
              $pMinutos = $("#minutos"),
              $pAMPM = $("#ampm"),
              $pDiaSemana = $("#diaSemana"),
              $pDia = $("#dia"),
              $pMes = $("#mes"),
              $pAnio = $("#anio");
          var semana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
          var meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
          
          $pDiaSemana.text(semana[diaSemana]);
          $pDia.text(dia);
          $pMes.text(meses[mes]);
          $pAnio.text(anio);
          if(hora>=12){
            hora = hora - 12;
            ampm = "PM";
          }else{
            ampm = "AM";
          }
          if(hora == 0){
            hora = 12;
          }
          if(hora<10){$pHoras.text("0"+hora)}else{$pHoras.text(hora)};
          if(minutos<10){$pMinutos.text("0"+minutos)}else{$pMinutos.text(minutos)};
          if(segundos<10){$pSegundos.text("0"+segundos)}else{$pSegundos.text(segundos)};
          $pAMPM.text(ampm);
          
        };
        
        
        actualizarHora();
        var intervalo = setInterval(actualizarHora,1000);
      });
