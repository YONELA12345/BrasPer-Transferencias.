export function whatsapp(){
    if(inputmontoenviar.value<100){
        errorenvio.style.display='block';
        errorenvio.innerHTML='Ingrese Monto mayor a 100';
    }else{
        if(inputmontoenviar.value>5000){
            errorenvio.style.display='block';
            errorenvio.innerHTML='Ingrese Monto menor o igual a 10000';
        }else{
            errorenvio.style.display='none';
            var valeletipmonenv=eletipmonenv.value;
            var valtipodemoneaenvioss=tmoneda.value;
            switch(valtipodemoneaenvioss){
                    case('Real a Dolar'):
                        window.open('https://api.whatsapp.com/send/?phone=51966991933&text=Monto%20Ingresado:%20'+tenviar.value+'%20BRL%0ATipo%20de%20Cambio:%20'+tcambio.value+'%20%0AComisión:%20'+tcomisi.value+'%20BRL%0AImpuestos:%20'+timpues.value+'%20BRL%0ATotal%20a%20Enviar:%20'+ttotale.value+'%20BRL%0ARecibe:%20'+trecibe.value+'%20USD','_blank');
                        break;
                    case('Sol a Real'):
                        window.open('https://api.whatsapp.com/send/?phone=51966991933&text=Monto%20Ingresado:%20'+tenviar.value+'%20PEN%0ATipo%20de%20Cambio:%20'+tcambio.value+'%20%0AComisión:%20'+tcomisi.value+'%20PEN%0AImpuestos:%20'+timpues.value+'%20PEN%0ATotal%20a%20Enviar:%20'+ttotale.value+'%20PEN%0ARecibe:%20'+trecibe.value+'%20BRL','_blank');
                        break;
                    case('Dolar a Real'):
                        window.open('https://api.whatsapp.com/send/?phone=51966991933&text=Monto%20Ingresado:%20'+tenviar.value+'%20USD%0ATipo%20de%20Cambio:%20'+tcambio.value+'%20%0AComisión:%20'+tcomisi.value+'%20USD%0AImpuestos:%20'+timpues.value+'%20USD%0ATotal%20a%20Enviar:%20'+ttotale.value+'%20USD%0ARecibe:%20'+trecibe.value+'%20BRL','_blank');
                        break;
                    case('Real a Sol'):
                        window.open('https://api.whatsapp.com/send/?phone=51966991933&text=Monto%20Ingresado:%20'+tenviar.value+'%20BRL%0ATipo%20de%20Cambio:%20'+tcambio.value+'%20%0AComisión:%20'+tcomisi.value+'%20BRL%0AImpuestos:%20'+timpues.value+'%20BRL%0ATotal%20a%20Enviar:%20'+ttotale.value+'%20BRL%0ARecibe:%20'+trecibe.value+'%20PEN','_blank');
                        break;
                    case('Real a Dolar'):
                        window.open('https://api.whatsapp.com/send/?phone=51966991933&text=Monto%20Ingresado:%20'+tenviar.value+'%20BRL%0ATipo%20de%20Cambio:%20'+tcambio.value+'%20%0AComisión:%20'+tcomisi.value+'%20BRL%0AImpuestos:%20'+timpues.value+'%20BRL%0ATotal%20a%20Enviar:%20'+ttotale.value+'%20BRL%0ARecibe:%20'+trecibe.value+'%20USD','_blank');
                        break;
            }
            //alert('tipo de cambio: '+tcambio.value+'\nComision: '+tcomisi.value+'\nImpuesto: '+timpues.value+'\nTotal a Enviar: '+ttotale.value+'\nMonto Ingresado: '+tenviar.value+'\nRecibe: '+trecibe.value+'\nMoneda'+valtipodemoneaenvioss);

            //Envias:BRL200(brasil) tipo de cambio: USD 1=0.201 RECIBE USD 38.90(Perú) comision de envio BRL 5.50 Impuestos 0.99 Subtotal BRL 6.49 Total a covertir BRL 193.511
        }
    }
}