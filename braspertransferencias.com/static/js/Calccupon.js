export function cupon (){
    var codtomcal=codcupcaladd.value;
    if(codtomcal===''){
        alert('Ingresar código válido');
    }else{
        var montocupon=inputmontoenviar.value
        if(montocupon===''){
            alert("INGRESE MONTO A DEPOSITAR")
        }else{
            fetch('/buscarcupon',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({ codtomcal: codtomcal})
            })
            .then(response => response.json())
            .then(data => {
                if (data.codigo) {

                    var operacioncupon=data.porcentaje*montocupon
                    var operacionporcentaje=montocupon-operacioncupon
                    var operacionahorro=montocupon-operacionporcentaje
                    alert('Código encontrado:\nCODIGO: '
                    +data.codigo+'\nPORCENTAJE: '
                    +data.porcentaje+'\nMONTO INGRESADO: '
                    +montocupon+'\nRESULTADO PORCENTAJE: '
                    +operacioncupon+'\nTOTAL DEPOSITAR: '
                    +operacionporcentaje+'\nAHORRO: '+operacionahorro)
                    ahorrando.innerHTML=operacionahorro
                    inputmontoenviar.innerHTML=operacionporcentaje
                    // Aquí puedes hacer lo que necesites con el código encontrado
                } else {
                    alert('Cupón no encontrado');
                }
            })
        }
    }
    
}