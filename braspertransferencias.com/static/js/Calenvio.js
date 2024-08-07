export function envio(){
    ventanacalculadora.style.display='none';
    var tipocamb=tcambio.value;
    var tipocomi=tcomisi.value;
    var tipoimpu=timpues.value;
    var tipotota=ttotale.value;
    var tipoenvi=tenviar.value;
    var tiporeci=trecibe.value;
    cantidadorigen.innerHTML=tipoenvi;
    cantidadcambio.innerHTML=tipocamb;
    cantidadcomision.innerHTML=tipocomi;
    cantidadimpuestos.innerHTML=tipoimpu;
    cantidadenviar.innerHTML=tipotota;
    cantidadrecibe.innerHTML=tiporeci;
    btnsiguiente.style.display='block';
    
    //alert('tipo de cambio'+tipocamb+'\n comision'+tipocomi+'\n impuesto'+tipoimpu+'\n total'+tipotota+'\n enviar'+tipoenvi+'\n recibe'+tiporeci);
}