var btnsiguientese=document.getElementById('btnsiguientese');
btnsiguientese.style.display='none';
var posiciona=document.getElementById('posiciona');
var ventanacalculadora=document.getElementById('ventanacalculadora');
ventanacalculadora.style.height='490px'
ventanacalculadora.style.width='350px'
ventanacalculadora.style.display='block';
var errorenvio=document.getElementById('errorenvio');
errorenvio.style.display='none';
var eletipmonenv=document.getElementById('eletipmonenv');

var comision100a199=document.getElementById("comision100a199");
var comision200a299=document.getElementById("comision200a299");
var comision300a499=document.getElementById("comision300a499");
var comision500a999=document.getElementById("comision500a999");
var comision1000a4999=document.getElementById("comision1000a4999");
var comision5000a10000=document.getElementById("comision5000a10000");
var inversacomision100a199=document.getElementById("inversacomision100a199");
var inversacomision200a299=document.getElementById("inversacomision200a299");
var inversacomision300a499=document.getElementById("inversacomision300a499");
var inversacomision500a999=document.getElementById("inversacomision500a999");
var inversacomision1000a4999=document.getElementById("inversacomision1000a4999");
var inversacomision5000a10000=document.getElementById("inversacomision5000a10000");

var co1000a5000usdbrl=0.035;//3.5%
var co1000a5000brlusd=0.035;//3.5%
var in1000a5000usdbrl=0.9587;//3.5%
var in1000a5000brlusd=0.9587;//3.5

/**penabrl**/
var co100a199penabrl=document.getElementById('co100a199penabrl');
var co200a299penabrl=document.getElementById('co200a299penabrl');
var co300a499penabrl=document.getElementById('co300a499penabrl');
var co500a999penabrl=document.getElementById('co500a999penabrl');
var co1000a4999penabrl=document.getElementById('co1000a4999penabrl');
var co5000a10000penabrl=document.getElementById('co5000a10000penabrl');
var in100a199penabrl=document.getElementById('in100a199penabrl');
var in200a299penabrl=document.getElementById('in200a299penabrl');
var in300a499penabrl=document.getElementById('in300a499penabrl');
var in500a999penabrl=document.getElementById('in500a999penabrl');
var in1000a4999penabrl=document.getElementById('in1000a4999penabrl');
var in5000a10000penabrl=document.getElementById('in5000a10000penabrl');

/**brlapen**/
var co100a199brlapen=document.getElementById('co100a199brlapen');
var co200a299brlapen=document.getElementById('co200a299brlapen');
var co300a499brlapen=document.getElementById('co300a499brlapen');
var co500a999brlapen=document.getElementById('co500a999brlapen');
var co1000a4999brlapen=document.getElementById('co1000a4999brlapen');
var co5000a10000brlapen=document.getElementById('co5000a10000brlapen');
var in100a199brlapen=document.getElementById('in100a199brlapen');
var in200a299brlapen=document.getElementById('in200a299brlapen');
var in300a499brlapen=document.getElementById('in300a499brlapen');
var in500a999brlapen=document.getElementById('in500a999brlapen');
var in1000a4999brlapen=document.getElementById('in1000a4999brlapen');
var in5000a10000brlapen=document.getElementById('in5000a10000brlapen');
/**brlausd**/
var co100a199brlausd=document.getElementById('co100a199brlausd');
var co200a299brlausd=document.getElementById('co200a299brlausd');
var co300a499brlausd=document.getElementById('co300a499brlausd');
var co500a999brlausd=document.getElementById('co500a999brlausd');
var co1000a4999brlausd=document.getElementById('co1000a4999brlausd');
var co5000a10000brlausd=document.getElementById('co5000a10000brlausd');
var in100a199brlausd=document.getElementById('in100a199brlausd');
var in200a299brlausd=document.getElementById('in200a299brlausd');
var in300a499brlausd=document.getElementById('in300a499brlausd');
var in500a999brlausd=document.getElementById('in500a999brlausd');
var in1000a4999brlausd=document.getElementById('in1000a4999brlausd');
var in5000a10000brlausd=document.getElementById('in5000a10000brlausd');
/**usdabrl**/
var co100a199usdabrl=document.getElementById('co100a199usdabrl');
var co200a299usdabrl=document.getElementById('co200a299usdabrl');
var co300a499usdabrl=document.getElementById('co300a499usdabrl');
var co500a999usdabrl=document.getElementById('co500a999usdabrl');
var co1000a4999usdabrl=document.getElementById('co1000a4999usdabrl');
var co5000a10000usdabrl=document.getElementById('co5000a10000usdabrl');
var in100a199usdabrl=document.getElementById('in100a199usdabrl');
var in200a299usdabrl=document.getElementById('in200a299usdabrl');
var in300a499usdabrl=document.getElementById('in300a499usdabrl');
var in500a999usdabrl=document.getElementById('in500a999usdabrl');
var in1000a4999usdabrl=document.getElementById('in1000a4999usdabrl');
var in5000a10000usdabrl=document.getElementById('in5000a10000usdabrl');
/**penausd**/
var co100a199penausd=document.getElementById('co100a199penausd');
var co200a299penausd=document.getElementById('co200a299penausd');
var co300a499penausd=document.getElementById('co300a499penausd');
var co500a999penausd=document.getElementById('co500a999penausd');
var co1000a4999penausd=document.getElementById('co1000a4999penausd');
var co5000a10000penausd=document.getElementById('co5000a10000penausd');
var in100a199penausd=document.getElementById('in100a199penausd');
var in200a299penausd=document.getElementById('in200a299penausd');
var in300a499penausd=document.getElementById('in300a499penausd');
var in500a999penausd=document.getElementById('in500a999penausd');
var in1000a4999penausd=document.getElementById('in1000a4999penausd');
var in5000a10000penausd=document.getElementById('in5000a10000penausd');
/**usdapen**/
var co100a199usdapen=document.getElementById('co100a199usdapen');
var co200a299usdapen=document.getElementById('co200a299usdapen');
var co300a499usdapen=document.getElementById('co300a499usdapen');
var co500a999usdapen=document.getElementById('co500a999usdapen');
var co1000a4999usdapen=document.getElementById('co1000a4999usdapen');
var co5000a10000usdapen=document.getElementById('co5000a10000usdapen');
var in100a199usdapen=document.getElementById('in100a199usdapen');
var in200a299usdapen=document.getElementById('in200a299usdapen');
var in300a499usdapen=document.getElementById('in300a499usdapen');
var in500a999usdapen=document.getElementById('in500a999usdapen');
var in1000a4999usdapen=document.getElementById('in1000a4999usdapen');
var co5000a10000usdapen=document.getElementById('co5000a10000usdapen');


var inversa;
var comision;
var impuesto=0.18;
var recibemoneda=document.getElementById('recibemoneda');
var enviomoneda=document.getElementById('enviomoneda');
var valcomision;
var valcomenviar;
var valimpuestos;
var valtotalcomimp;
var valtotalenviar;
var tipodeimpuestos=document.getElementById('tipodeimpuestos');
var tipodecambio=document.getElementById('tipodecambio');
var tipodecomision=document.getElementById('tipodecomision');
var tipototalenviar=document.getElementById('tipototalenviar');
var valtotalrecibe=document.getElementById('valtotalrecibe');
var tipototalrecibe=document.getElementById('tipototalrecibe');
var numcomision=document.getElementById('numcomision');
var btnsiguiente=document.getElementById('btnsiguiente');
var tmoneda=document.getElementById('tmoneda');
btnsiguiente.style.display='none';
inputmontoenviar.addEventListener('change',function(){
    calculadora.cambio();
});
tipototalrecibe.addEventListener('change',function(){
    calculadora.abajaso();
});
var tcambio=document.getElementById('tcambio');
var tcomisi=document.getElementById('tcomisi');
var timpues=document.getElementById('timpues');
var ttotale=document.getElementById('ttotale');
var tenviar=document.getElementById('tenviar');
var trecibe=document.getElementById('trecibe');
var cantidadorigen=document.getElementById('cantidadorigen');
var cantidadcambio=document.getElementById('cantidadcambio');
var cantidadcomision=document.getElementById('cantidadcomision');
var cantidadimpuestos=document.getElementById('cantidadimpuestos');
var cantidadenviar=document.getElementById('cantidadenviar');
var cantidadrecibe=document.getElementById('cantidadrecibe');

var codcupcaladd=document.getElementById('codcupcaladd');
var calcajcup=document.getElementById('calcajcup');

var moneda
var operacioncupon
var operacionporcentaje
var operacionahorro
var montocupon
var montofinalcupon
var codtomcal
var nombredecupon
var operacionporcentajecupon
var numcomisioncupon
var numimpuestocupon
var operaciontotalenviarcupon
var numcambiocupon
var totalrecibecupon
var operaciones=document.getElementById('operaciones')
var operacionescupon=document.getElementById('operacionescupon')
operacionescupon.style.display='none'
operacionescupon.style.padding='14px'
var opcomision=document.getElementById('opcomision')
var openviar=document.getElementById('openviar')
var terminosycondiciones=document.getElementById('terminosycondiciones')
var finalenvios=document.getElementById('finalenvios')


var calculadora={
    cambio:function(){
        var valeletipmonenv=eletipmonenv.value;
        calculadora.resultado(valeletipmonenv);
    },
    resultado:function(e){
        posiciona.value='arriva';
        var valeletipmonenv=eletipmonenv.value;
        var soladol=document.getElementById('soladol').value;
        var solareal=document.getElementById('solareal').value;
        var usdasol=document.getElementById('usdasol').value;
        var usdareal=document.getElementById('usdareal').value;
        var realapen=document.getElementById('realapen').value;
        var realausd=document.getElementById('realausd').value;
        var valsoldol=parseFloat(soladol).toFixed(3);
        var valsolrea=parseFloat(solareal).toFixed(3);
        var valusdasol=parseFloat(usdasol).toFixed(3);
        var valusdareal=parseFloat(usdareal).toFixed(3);
        var valrealapen=parseFloat(realapen).toFixed(3);
        var valrealausd=parseFloat(realausd).toFixed(3);
        switch(e){
            case('penbrl'):
                operacionescupon.style.display='none'
                operaciones.style.display='block'
                moneda='penbrl'
                ventanacalculadora.style.height='580px'
                eletipmonenv.value=e;
                enviomoneda.innerHTML=`
                    <ul class="nav">
                        <li class="fontbebas">
                            <div onclick="" style="display:flex;justify-content: flex-end;">
                                <img src='static/img/pen.png' class="imagenbanderas">
                                <div class="txtbanderas">&nbsp;PEN</div>
                                <div class="cuadrosbanderaflex"></div>
                            </div>
                            <ul>
                                <li>
                                    <div onclick="calculadora.resultado('usdbrl')" style="display:flex;justify-content: flex-end;">
                                        <img src='static/img/pen.png' class="imagenbanderas">
                                        <div class="txtbanderas">&nbsp;USD</div>
                                    </div>
                                </li>
                                <li>
                                    <div onclick="calculadora.resultado('brlpen')" style="display:flex;justify-content: flex-end;padding:3px;">
                                        <img src='static/img/bra.png' class="imagenbanderas">
                                        <div class="txtbanderas">&nbsp;BRL</div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                `;
                recibemoneda.innerHTML=`
                    <div style="display:flex;justify-content: flex-end;padding:3px;">
                        <img src="static/img/bra.png" class="imagenbanderas">
                        <div class="txtbanderas">&nbsp;BRL</div>
                    </div>
                `;
                var valmonto=inputmontoenviar.value;
                if(valmonto<100){
                    errorenvio.style.display='block';
                    errorenvio.innerHTML='Ingrese Monto mayor a 100';
                    tipodeimpuestos.innerHTML="0.00";
                    tipodecambio.innerHTML="0.00";
                    tipodecomision.innerHTML="0.00";
                    tipototalenviar.innerHTML="0.00";
                    tipototalrecibe.value="0.00";
                    numcomision.innerHTML="0.00";
                    tcambio.value=0;
                    tcomisi.value=0;
                    timpues.value=0;
                    ttotale.value=0;
                    tenviar.value=0;
                    trecibe.value=0;
                    tmoneda.value='Sol a Real';
                    btnsiguiente.style.display='none';
                }else{
                    if(valmonto<200){
                        comision=co100a199penabrl.value;
                        errorenvio.style.display='none';
                        valcomision=(parseFloat(comision)*100).toFixed(2);//3 porciento
                        valcomenviar=(parseFloat(valmonto)*parseFloat(comision)).toFixed(2);//monto por 3 porciento
                        valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);//18% por resultado del 3% del monto
                        valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);//3% mas 18% del monto a enviar
                        valtotalenviar=(parseFloat(valmonto)-parseFloat(valtotalcomimp)).toFixed(2);//monto menos suma del 3%y18%
                        tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;PEN";//resultado 3%
                        tipodecambio.innerHTML=valsolrea;//tipo de cambio
                        tipodecomision.innerHTML=+valcomenviar+" PEN";//3% del monto
                        tipototalenviar.innerHTML=valtotalenviar+"&nbsp;PEN";//monto menos suma 3%y!8%
                        valtotalrecibe=(parseFloat(valtotalenviar)*parseFloat(valsolrea)).toFixed(2);//monto menos 3%18% po tipo de cambio
                        tipototalrecibe.value=valtotalrecibe;
                        numcomision.innerHTML=valcomision+"% : &nbsp;";
                        tcambio.value=valsolrea;
                        tcomisi.value=valcomenviar;
                        timpues.value=valimpuestos;
                        ttotale.value=valtotalenviar;
                        tenviar.value=valmonto;
                        trecibe.value=valtotalrecibe;
                        tmoneda.value='Sol a Real';
                        btnsiguiente.style.display='block'; 
                    }else{
                        if(valmonto<300){
                            comision=co200a299penabrl.value;
                            errorenvio.style.display='none';
                            valcomision=(parseFloat(comision)*100).toFixed(2);//3 porciento
                            valcomenviar=(parseFloat(valmonto)*parseFloat(comision)).toFixed(2);//monto por 3 porciento
                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);//18% por resultado del 3% del monto
                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);//3% mas 18% del monto a enviar
                            valtotalenviar=(parseFloat(valmonto)-parseFloat(valtotalcomimp)).toFixed(2);//monto menos suma del 3%y18%
                            tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;PEN";//resultado 3%
                            tipodecambio.innerHTML=valsolrea;//tipo de cambio
                            tipodecomision.innerHTML=+valcomenviar+" PEN";//3% del monto
                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;PEN";//monto menos suma 3%y!8%
                            valtotalrecibe=(parseFloat(valtotalenviar)*parseFloat(valsolrea)).toFixed(2);//monto menos 3%18% po tipo de cambio
                            tipototalrecibe.value=valtotalrecibe;
                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                            tcambio.value=valsolrea;
                            tcomisi.value=valcomenviar;
                            timpues.value=valimpuestos;
                            ttotale.value=valtotalenviar;
                            tenviar.value=valmonto;
                            trecibe.value=valtotalrecibe;
                            tmoneda.value='Sol a Real';
                            btnsiguiente.style.display='block';
                        }else{
                            if(valmonto<500){
                                comision=co300a499penabrl.value;
                                errorenvio.style.display='none';
                                valcomision=(parseFloat(comision)*100).toFixed(2);//3 porciento
                                valcomenviar=(parseFloat(valmonto)*parseFloat(comision)).toFixed(2);//monto por 3 porciento
                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);//18% por resultado del 3% del monto
                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);//3% mas 18% del monto a enviar
                                valtotalenviar=(parseFloat(valmonto)-parseFloat(valtotalcomimp)).toFixed(2);//monto menos suma del 3%y18%
                                tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;PEN";//resultado 3%
                                tipodecambio.innerHTML=valsolrea;//tipo de cambio
                                tipodecomision.innerHTML=+valcomenviar+" PEN";//3% del monto
                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;PEN";//monto menos suma 3%y!8%
                                valtotalrecibe=(parseFloat(valtotalenviar)*parseFloat(valsolrea)).toFixed(2);//monto menos 3%18% po tipo de cambio
                                tipototalrecibe.value=valtotalrecibe;
                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                tcambio.value=valsolrea;
                                tcomisi.value=valcomenviar;
                                timpues.value=valimpuestos;
                                ttotale.value=valtotalenviar;
                                tenviar.value=valmonto;
                                trecibe.value=valtotalrecibe;
                                tmoneda.value='Sol a Real';
                                btnsiguiente.style.display='block';
                            }else{
                                if(valmonto<1000){
                                    comision=co500a999penabrl.value;
                                    errorenvio.style.display='none';
                                    valcomision=(parseFloat(comision)*100).toFixed(2);//3 porciento
                                    valcomenviar=(parseFloat(valmonto)*parseFloat(comision)).toFixed(2);//monto por 3 porciento
                                    valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);//18% por resultado del 3% del monto
                                    valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);//3% mas 18% del monto a enviar
                                    valtotalenviar=(parseFloat(valmonto)-parseFloat(valtotalcomimp)).toFixed(2);//monto menos suma del 3%y18%
                                    tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;PEN";//resultado 3%
                                    tipodecambio.innerHTML=valsolrea;//tipo de cambio
                                    tipodecomision.innerHTML=+valcomenviar+" PEN";//3% del monto
                                    tipototalenviar.innerHTML=valtotalenviar+"&nbsp;PEN";//monto menos suma 3%y!8%
                                    valtotalrecibe=(parseFloat(valtotalenviar)*parseFloat(valsolrea)).toFixed(2);//monto menos 3%18% po tipo de cambio
                                    tipototalrecibe.value=valtotalrecibe;
                                    numcomision.innerHTML=valcomision+"% : &nbsp;";
                                    tcambio.value=valsolrea;
                                    tcomisi.value=valcomenviar;
                                    timpues.value=valimpuestos;
                                    ttotale.value=valtotalenviar;
                                    tenviar.value=valmonto;
                                    trecibe.value=valtotalrecibe;
                                    tmoneda.value='Sol a Real';
                                    btnsiguiente.style.display='block';
                                }else{
                                    if(valmonto<5000){
                                        comision=co1000a4999penabrl.value;
                                        errorenvio.style.display='none';
                                        valcomision=(parseFloat(comision)*100).toFixed(2);//3 porciento
                                        valcomenviar=(parseFloat(valmonto)*parseFloat(comision)).toFixed(2);//monto por 3 porciento
                                        valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);//18% por resultado del 3% del monto
                                        valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);//3% mas 18% del monto a enviar
                                        valtotalenviar=(parseFloat(valmonto)-parseFloat(valtotalcomimp)).toFixed(2);//monto menos suma del 3%y18%
                                        tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;PEN";//resultado 3%
                                        tipodecambio.innerHTML=valsolrea;//tipo de cambio
                                        tipodecomision.innerHTML=+valcomenviar+" PEN";//3% del monto
                                        tipototalenviar.innerHTML=valtotalenviar+"&nbsp;PEN";//monto menos suma 3%y!8%
                                        valtotalrecibe=(parseFloat(valtotalenviar)*parseFloat(valsolrea)).toFixed(2);//monto menos 3%18% po tipo de cambio
                                        tipototalrecibe.value=valtotalrecibe;
                                        numcomision.innerHTML=valcomision+"% : &nbsp;";
                                        tcambio.value=valsolrea;
                                        tcomisi.value=valcomenviar;
                                        timpues.value=valimpuestos;
                                        ttotale.value=valtotalenviar;
                                        tenviar.value=valmonto;
                                        trecibe.value=valtotalrecibe;
                                        tmoneda.value='Sol a Real';
                                        btnsiguiente.style.display='block'; 
                                    }else{
                                         if(valmonto<=10000){
                                            comision=co5000a10000penabrl.value;
                                            errorenvio.style.display='none';
                                            valcomision=(parseFloat(comision)*100).toFixed(2);//3 porciento
                                            valcomenviar=(parseFloat(valmonto)*parseFloat(comision)).toFixed(2);//monto por 3 porciento
                                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);//18% por resultado del 3% del monto
                                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);//3% mas 18% del monto a enviar
                                            valtotalenviar=(parseFloat(valmonto)-parseFloat(valtotalcomimp)).toFixed(2);//monto menos suma del 3%y18%
                                            tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;PEN";//resultado 3%
                                            tipodecambio.innerHTML=valsolrea;//tipo de cambio
                                            tipodecomision.innerHTML=+valcomenviar+" PEN";//3% del monto
                                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;PEN";//monto menos suma 3%y!8%
                                            valtotalrecibe=(parseFloat(valtotalenviar)*parseFloat(valsolrea)).toFixed(2);//monto menos 3%18% po tipo de cambio
                                            tipototalrecibe.value=valtotalrecibe;
                                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                                            tcambio.value=valsolrea;
                                            tcomisi.value=valcomenviar;
                                            timpues.value=valimpuestos;
                                            ttotale.value=valtotalenviar;
                                            tenviar.value=valmonto;
                                            trecibe.value=valtotalrecibe;
                                            tmoneda.value='Sol a Real';
                                            btnsiguiente.style.display='block'; 
                                        }else{
                                            errorenvio.style.display='block';
                                            errorenvio.innerHTML='Ingrese Monto menor o igual a 10000';
                                            tipodeimpuestos.innerHTML="0.00";
                                            tipodecambio.innerHTML="0.00";
                                            tipodecomision.innerHTML="0.00";
                                            tipototalenviar.innerHTML="0.00";
                                            tipototalrecibe.value="0.00";
                                            numcomision.innerHTML="0.00";
                                            tcambio.value=0;
                                            tcomisi.value=0;
                                            timpues.value=0;
                                            ttotale.value=0;
                                            tenviar.value=0;
                                            trecibe.value=0;
                                            tmoneda.value='Sol a Real';
                                            btnsiguiente.style.display='none';
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                break;
            case('usdbrl'):
                operacionescupon.style.display='none'
                operaciones.style.display='block'
                moneda='usdbrl'
                ventanacalculadora.style.height='580px'
                eletipmonenv.value=e
                enviomoneda.innerHTML=`
                    <ul class="nav">
                        <li class="fontbebas">
                            <div onclick="" style="display:flex;justify-content: flex-end;">
                                <img src='static/img/pen.png' class="imagenbanderas">
                                <div class="txtbanderas">&nbsp;USD</div>
                                <div class="cuadrosbanderaflex"></div>
                             </div>
                            <ul>
                                <li>
                                    <div onclick="calculadora.resultado('penbrl')" style="display:flex;justify-content: flex-end;">
                                    <img src="static/img/pen.png" class="imagenbanderas">
                                    <div class="txtbanderas">&nbsp;PEN</div>
                                </div>
                                </li>
                                <li>
                                    <div onclick="calculadora.resultado('brlpen')" style="display:flex;justify-content: flex-end;">
                                        <img src="static/img/bra.png" class="imagenbanderas">
                                        <div class="txtbanderas">&nbsp;BRL</div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                `;
                recibemoneda.innerHTML=`
                    <div style="display:flex;justify-content: flex-end;padding:3px;">
                        <img src="static/img/bra.png" class="imagenbanderas">
                        <div class="txtbanderas">&nbsp;BRL</div>
                    </div>
                `;
                var valmonto=inputmontoenviar.value;
                if(valmonto<100){
                    errorenvio.style.display='block';
                    errorenvio.innerHTML='Ingrese Monto mayor a 100';
                    tipodeimpuestos.innerHTML="0.00";
                    tipodecambio.innerHTML="0.00";
                    tipodecomision.innerHTML="0.00";
                    tipototalenviar.innerHTML="0.00";
                    tipototalrecibe.value="0.00";
                    numcomision.innerHTML="0.00";
                    tcambio.value=0;
                    tcomisi.value=0;
                    timpues.value=0;
                    ttotale.value=0;
                    tenviar.value=0;
                    trecibe.value=0;
                    tmoneda.value='Dolar a Real';
                    btnsiguiente.style.display='none';
                }else{
                    if(valmonto<200){
                        comision=co100a199usdabrl.value;
                        errorenvio.style.display='none';
                        valcomision=(parseFloat(comision)*100).toFixed(2);
                        valcomenviar=(parseFloat(valmonto)*parseFloat(comision)).toFixed(3);
                        valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                        valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                        valtotalenviar=parseFloat(valmonto)-parseFloat(valtotalcomimp);
                        tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;USD";
                        tipodecambio.innerHTML=valusdareal;
                        tipodecomision.innerHTML=+valcomenviar+" USD";
                        tipototalenviar.innerHTML=valtotalenviar+"&nbsp;USD";
                        valtotalrecibe=(parseFloat(valtotalenviar)*parseFloat(valusdareal)).toFixed(2);
                        tipototalrecibe.value=valtotalrecibe;
                        numcomision.innerHTML=valcomision+"% : &nbsp;";
                        tcambio.value=valusdareal;
                        tcomisi.value=valcomenviar;
                        timpues.value=valimpuestos;
                        ttotale.value=valtotalenviar;
                        tenviar.value=valmonto;
                        trecibe.value=valtotalrecibe;
                        tmoneda.value='Dolar a Real';
                        btnsiguiente.style.display='block';
                    }else{
                        if(valmonto<300){
                            comision=co200a299usdabrl.value;
                            errorenvio.style.display='none';
                            valcomision=(parseFloat(comision)*100).toFixed(2);
                            valcomenviar=parseFloat(valmonto)*parseFloat(comision);
                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                            valtotalenviar=parseFloat(valmonto)-parseFloat(valtotalcomimp);
                            tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;USD";
                            tipodecambio.innerHTML=valusdareal+"&nbsp;USD";
                            tipodecomision.innerHTML=+valcomenviar+" USD";
                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;USD";
                            valtotalrecibe=(parseFloat(valtotalenviar)*parseFloat(valusdareal)).toFixed(2);
                            tipototalrecibe.value=valtotalrecibe;
                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                            tcambio.value=valusdareal;
                            tcomisi.value=valcomenviar;
                            timpues.value=valimpuestos;
                            ttotale.value=valtotalenviar;
                            tenviar.value=valmonto;
                            trecibe.value=valtotalrecibe;
                            tmoneda.value='Dolar a Real';
                            btnsiguiente.style.display='block';
                        }else{
                            if(valmonto<500){
                                comision=co300a499usdabrl.value;
                                errorenvio.style.display='none';
                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                valcomenviar=(parseFloat(valmonto)*parseFloat(comision)).toFixed(3);
                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                valtotalenviar=parseFloat(valmonto)-parseFloat(valtotalcomimp);
                                tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;USD";
                                tipodecambio.innerHTML=valusdareal;
                                tipodecomision.innerHTML=+valcomenviar+" USD";
                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;USD";
                                valtotalrecibe=(parseFloat(valtotalenviar)*parseFloat(valusdareal)).toFixed(2);
                                tipototalrecibe.value=valtotalrecibe;
                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                tcambio.value=valusdareal;
                                tcomisi.value=valcomenviar;
                                timpues.value=valimpuestos;
                                ttotale.value=valtotalenviar;
                                tenviar.value=valmonto;
                                trecibe.value=valtotalrecibe;
                                tmoneda.value='Dolar a Real';
                                btnsiguiente.style.display='block';
                            }else{
                                if(valmonto<1000){
                                    comision=co500a999usdabrl.value;
                                    errorenvio.style.display='none';
                                    valcomision=(parseFloat(comision)*100).toFixed(2);
                                    valcomenviar=(parseFloat(valmonto)*parseFloat(comision)).toFixed(3);
                                    valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                    valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                    valtotalenviar=parseFloat(valmonto)-parseFloat(valtotalcomimp);
                                    tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;USD";
                                    tipodecambio.innerHTML=valusdareal;
                                    tipodecomision.innerHTML=+valcomenviar+" USD";
                                    tipototalenviar.innerHTML=valtotalenviar+"&nbsp;USD";
                                    valtotalrecibe=(parseFloat(valtotalenviar)*parseFloat(valusdareal)).toFixed(2);
                                    tipototalrecibe.value=valtotalrecibe;
                                    numcomision.innerHTML=valcomision+"% : &nbsp;";
                                    tcambio.value=valusdareal;
                                    tcomisi.value=valcomenviar;
                                    timpues.value=valimpuestos;
                                    ttotale.value=valtotalenviar;
                                    tenviar.value=valmonto;
                                    trecibe.value=valtotalrecibe;
                                    tmoneda.value='Dolar a Real';
                                    btnsiguiente.style.display='block';
                                }else{
                                    if(valmonto<5000){
                                        //comision=comision1000a5000.value;
                                        //comision=co1000a5000usdbrl;
                                        comision=co1000a4999usdabrl.value;
                                        errorenvio.style.display='none';
                                        valcomision=(parseFloat(comision)*100).toFixed(2);
                                        valcomenviar=(parseFloat(valmonto)*parseFloat(comision)).toFixed(3);
                                        valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                        valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                        valtotalenviar=parseFloat(valmonto)-parseFloat(valtotalcomimp);
                                        tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;USD";
                                        tipodecambio.innerHTML=valusdareal;
                                        tipodecomision.innerHTML=+valcomenviar+" USD";
                                        tipototalenviar.innerHTML=valtotalenviar+"&nbsp;USD";
                                        valtotalrecibe=(parseFloat(valtotalenviar)*parseFloat(valusdareal)).toFixed(2);
                                        tipototalrecibe.value=valtotalrecibe;
                                        numcomision.innerHTML=valcomision+"% : &nbsp;";
                                        tcambio.value=valusdareal;
                                        tcomisi.value=valcomenviar;
                                        timpues.value=valimpuestos;
                                        ttotale.value=valtotalenviar;
                                        tenviar.value=valmonto;
                                        trecibe.value=valtotalrecibe;
                                        tmoneda.value='Dolar a Real';
                                        btnsiguiente.style.display='block';
                                    }else{
                                        if(valmonto<=10000){
                                            //comision=comision1000a5000.value;
                                            //comision=co1000a5000usdbrl;
                                            comision=co5000a10000usdabrl.value;
                                            errorenvio.style.display='none';
                                            valcomision=(parseFloat(comision)*100).toFixed(2);
                                            valcomenviar=(parseFloat(valmonto)*parseFloat(comision)).toFixed(3);
                                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                            valtotalenviar=parseFloat(valmonto)-parseFloat(valtotalcomimp);
                                            tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;USD";
                                            tipodecambio.innerHTML=valusdareal;
                                            tipodecomision.innerHTML=+valcomenviar+" USD";
                                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;USD";
                                            valtotalrecibe=(parseFloat(valtotalenviar)*parseFloat(valusdareal)).toFixed(2);
                                            tipototalrecibe.value=valtotalrecibe;
                                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                                            tcambio.value=valusdareal;
                                            tcomisi.value=valcomenviar;
                                            timpues.value=valimpuestos;
                                            ttotale.value=valtotalenviar;
                                            tenviar.value=valmonto;
                                            trecibe.value=valtotalrecibe;
                                            tmoneda.value='Dolar a Real';
                                            btnsiguiente.style.display='block';
                                        }else{
                                            errorenvio.style.display='block';
                                            errorenvio.innerHTML='Ingrese Monto menor o igual a 10000';
                                            tipodeimpuestos.innerHTML="0.00";
                                            tipodecambio.innerHTML="0.00";
                                            tipodecomision.innerHTML="0.00";
                                            tipototalenviar.innerHTML="0.00";
                                            tipototalrecibe.value="0.00";
                                            numcomision.innerHTML="0.00";
                                            tcambio.value=0;
                                            tcomisi.value=0;
                                            timpues.value=0;
                                            ttotale.value=0;
                                            tenviar.value=0;
                                            trecibe.value=0;
                                            tmoneda.value='Dolar a Real';
                                            btnsiguiente.style.display='none';
                                        }
                                    }
                                }
                            }
                        }        
                    }
                }
                //alert(valeletipmonenv);
                break;
            case('brlpen'):
                operacionescupon.style.display='none'
                operaciones.style.display='block'
                moneda='brlpen'
                ventanacalculadora.style.height='580px'
                eletipmonenv.value=e
                enviomoneda.innerHTML=`
                    <ul class="nav">
                        <li class="fontbebas">
                             <div onclick="calculadora.resultado('brlpen')" style="display:flex;justify-content: flex-end;">
                                <img src="static/img/bra.png" class="imagenbanderas">
                                <div class="txtbanderas">&nbsp;BRL</div>
                                <div class="cuadrosbanderaflex"></div>
                            </div>
                            <ul>
                                <li>
                                    <div onclick="calculadora.resultado('penbrl')" style="display:flex;justify-content: flex-end;">
                                        <img src="static/img/pen.png" class="imagenbanderas">
                                        <div class="txtbanderas">&nbsp;PEN</div>
                                    </div>
                                </li>
                                <li>
                                    <div onclick="calculadora.resultado('usdbrl')" style="display:flex;justify-content: flex-end;">
                                        <img src="static/img/pen.png" class="imagenbanderas">
                                        <div class="txtbanderas">&nbsp;USD</div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                `;
                recibemoneda.innerHTML=`
                    <ul class="nav">
                        <li class="fontbebas">
                             <div onclick="calculadora.resultado('brlpen')" style="display:flex;justify-content: flex-end;">
                                <img src="static/img/pen.png" class="imagenbanderas">
                                <div class="txtbanderas">&nbsp;PEN</div>
                                <div class="cuadrosbanderaflex"></div>
                            </div>
                            <ul>
                                <li>
                                    <div onclick="calculadora.resultado('brlusd')" style="display:flex;justify-content: flex-end;">
                                        <img src="static/img/pen.png" class="imagenbanderas">
                                        <div class="txtbanderas">&nbsp;USD</div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                `;
                var valmonto=inputmontoenviar.value;
                if(valmonto<100){
                    errorenvio.style.display='block';
                    errorenvio.innerHTML='Ingrese Monto mayor a 100';
                    tipodeimpuestos.innerHTML="0.00";
                    tipodecambio.innerHTML="0.00";
                    tipodecomision.innerHTML="0.00";
                    tipototalenviar.innerHTML="0.00";
                    tipototalrecibe.value="0.00";
                    numcomision.innerHTML="0.00";
                    tcambio.value=0;
                    tcomisi.value=0;
                    timpues.value=0;
                    ttotale.value=0;
                    tenviar.value=0;
                    trecibe.value=0;
                    tmoneda.value='Real a Sol';
                    btnsiguiente.style.display='none';
                }else{
                    if(valmonto<200){
                        comision=co100a199brlapen.value;
                        errorenvio.style.display='none';
                        valcomision=(parseFloat(comision)*100).toFixed(2);
                        valcomenviar=(parseFloat(valmonto)*parseFloat(comision)).toFixed(2);
                        valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                        valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                        valtotalenviar=parseFloat(valmonto)-parseFloat(valtotalcomimp);
                        tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                        tipodecambio.innerHTML=valrealapen;
                        tipodecomision.innerHTML=+valcomenviar+" BRL";
                        tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                        valtotalrecibe=(parseFloat(valtotalenviar)*parseFloat(valrealapen)).toFixed(2);
                        tipototalrecibe.value=valtotalrecibe;
                        numcomision.innerHTML=valcomision+"% : &nbsp;";
                        tcambio.value=valrealapen;
                        tcomisi.value=valcomenviar;
                        timpues.value=valimpuestos;
                        ttotale.value=valtotalenviar;
                        tenviar.value=valmonto;
                        trecibe.value=valtotalrecibe;
                        tmoneda.value='Real a Sol';
                        btnsiguiente.style.display='block';
                    }else{
                        if(valmonto<300){
                            comision=co200a299brlapen.value;
                            errorenvio.style.display='none';
                            valcomision=(parseFloat(comision)*100).toFixed(2);
                            valcomenviar=(parseFloat(valmonto)*parseFloat(comision)).toFixed(2);
                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                            valtotalenviar=parseFloat(valmonto)-parseFloat(valtotalcomimp);
                            tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                            tipodecambio.innerHTML=valrealapen;
                            tipodecomision.innerHTML=+valcomenviar+" BRL";
                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                            valtotalrecibe=(parseFloat(valtotalenviar)*parseFloat(valrealapen)).toFixed(2);
                            tipototalrecibe.value=valtotalrecibe;
                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                            tcambio.value=valrealapen;
                            tcomisi.value=valcomenviar;
                            timpues.value=valimpuestos;
                            ttotale.value=valtotalenviar;
                            tenviar.value=valmonto;
                            trecibe.value=valtotalrecibe;
                            tmoneda.value='Real a Sol';
                            btnsiguiente.style.display='block';
                        }else{
                            if(valmonto<500){
                                comision=co300a499brlapen.value;
                                errorenvio.style.display='none';
                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                valcomenviar=(parseFloat(valmonto)*parseFloat(comision)).toFixed(2);
                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                valtotalenviar=parseFloat(valmonto)-parseFloat(valtotalcomimp);
                                tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                tipodecambio.innerHTML=valrealapen;
                                tipodecomision.innerHTML=+valcomenviar+" BRL";
                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                valtotalrecibe=(parseFloat(valtotalenviar)*parseFloat(valrealapen)).toFixed(2);
                                tipototalrecibe.value=valtotalrecibe;
                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                tcambio.value=valrealapen;
                                tcomisi.value=valcomenviar;
                                timpues.value=valimpuestos;
                                ttotale.value=valtotalenviar;
                                tenviar.value=valmonto;
                                trecibe.value=valtotalrecibe;
                                tmoneda.value='Real a Sol';
                                btnsiguiente.style.display='block';
                            }else{
                                if(valmonto<1000){
                                    comision=co500a999brlapen.value;
                                    errorenvio.style.display='none';
                                    valcomision=(parseFloat(comision)*100).toFixed(2);
                                    valcomenviar=(parseFloat(valmonto)*parseFloat(comision)).toFixed(2);
                                    valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                    valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                    valtotalenviar=parseFloat(valmonto)-parseFloat(valtotalcomimp);
                                    tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                    tipodecambio.innerHTML=valrealapen;
                                    tipodecomision.innerHTML=+valcomenviar+" BRL";
                                    tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                    valtotalrecibe=(parseFloat(valtotalenviar)*parseFloat(valrealapen)).toFixed(2);
                                    tipototalrecibe.value=valtotalrecibe;
                                    numcomision.innerHTML=valcomision+"% : &nbsp;";
                                    tcambio.value=valrealapen;
                                    tcomisi.value=valcomenviar;
                                    timpues.value=valimpuestos;
                                    ttotale.value=valtotalenviar;
                                    tenviar.value=valmonto;
                                    trecibe.value=valtotalrecibe;
                                    tmoneda.value='Real a Sol';
                                    btnsiguiente.style.display='block';
                                }else{
                                    if(valmonto<5000){
                                        comision=co1000a4999brlapen.value;
                                        errorenvio.style.display='none';
                                        valcomision=(parseFloat(comision)*100).toFixed(2);
                                        valcomenviar=(parseFloat(valmonto)*parseFloat(comision)).toFixed(2);
                                        valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                        valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                        valtotalenviar=parseFloat(valmonto)-parseFloat(valtotalcomimp);
                                        tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                        tipodecambio.innerHTML=valrealapen;
                                        tipodecomision.innerHTML=+valcomenviar+" BRL";
                                        tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                        valtotalrecibe=(parseFloat(valtotalenviar)*parseFloat(valrealapen)).toFixed(2);
                                        tipototalrecibe.value=valtotalrecibe;
                                        numcomision.innerHTML=valcomision+"% : &nbsp;";
                                        tcambio.value=valrealapen;
                                        tcomisi.value=valcomenviar;
                                        timpues.value=valimpuestos;
                                        ttotale.value=valtotalenviar;
                                        tenviar.value=valmonto;
                                        trecibe.value=valtotalrecibe;
                                        tmoneda.value='Real a Sol';
                                        btnsiguiente.style.display='block';
                                    }else{
                                        if(valmonto<=10000){
                                            comision=co5000a10000brlapen.value;
                                            errorenvio.style.display='none';
                                            valcomision=(parseFloat(comision)*100).toFixed(2);
                                            valcomenviar=(parseFloat(valmonto)*parseFloat(comision)).toFixed(2);
                                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                            valtotalenviar=parseFloat(valmonto)-parseFloat(valtotalcomimp);
                                            tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                            tipodecambio.innerHTML=valrealapen;
                                            tipodecomision.innerHTML=+valcomenviar+" BRL";
                                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                            valtotalrecibe=(parseFloat(valtotalenviar)*parseFloat(valrealapen)).toFixed(2);
                                            tipototalrecibe.value=valtotalrecibe;
                                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                                            tcambio.value=valrealapen;
                                            tcomisi.value=valcomenviar;
                                            timpues.value=valimpuestos;
                                            ttotale.value=valtotalenviar;
                                            tenviar.value=valmonto;
                                            trecibe.value=valtotalrecibe;
                                            tmoneda.value='Real a Sol';
                                            btnsiguiente.style.display='block';
                                        }else{
                                            errorenvio.style.display='block';
                                            errorenvio.innerHTML='Ingrese Monto menor o igual a 10000';
                                            tipodeimpuestos.innerHTML="0.00";
                                            tipodecambio.innerHTML="0.00";
                                            tipodecomision.innerHTML="0.00";
                                            tipototalenviar.innerHTML="0.00";
                                            tipototalrecibe.value="0.00";
                                            numcomision.innerHTML="0.00";
                                            tcambio.value=0;
                                            tcomisi.value=0;
                                            timpues.value=0;
                                            ttotale.value=0;
                                            tenviar.value=0;
                                            trecibe.value=0;
                                            tmoneda.value='Real a Sol';
                                            btnsiguiente.style.display='none';
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                //alert(valeletipmonenv);
                break;
            case('brlusd'):
                operacionescupon.style.display='none'
                operaciones.style.display='block'
                monea='brlusd';
                ventanacalculadora.style.height='580px'
                eletipmonenv.value=e
                enviomoneda.innerHTML=`
                    <ul class="nav">
                        <li class="fontbebas">
                             <div onclick="calculadora.resultado('brlpen')" style="display:flex;justify-content: flex-end;">
                                <img src="static/img/bra.png" class="imagenbanderas">
                                <div class="txtbanderas">&nbsp;BRL</div>
                                <div class="cuadrosbanderaflex"></div>
                            </div>
                            <ul>
                                <li>
                                    <div onclick="calculadora.resultado('penbrl')" style="display:flex;justify-content: flex-end;">
                                        <img src="static/img/pen.png" class="imagenbanderas">
                                        <div class="txtbanderas">&nbsp;PEN</div>
                                        <div class="cuadrosbanderaflex"></div>
                                    </div>
                                </li>
                                <li>
                                    <div onclick="calculadora.resultado('usdbrl')" style="display:flex;justify-content: flex-end;">
                                        <img src="static/img/pen.png" class="imagenbanderas">
                                        <div class="txtbanderas">&nbsp;USD</div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                `;
                recibemoneda.innerHTML=`
                    <ul class="nav">
                        <li class="fontbebas">
                            <div onclick="calculadora.resultado('brlusd')" style="display:flex;justify-content: flex-end;">
                                <img src="static/img/pen.png" class="imagenbanderas">
                                <div class="txtbanderas">&nbsp;USD</div>
                                <div class="cuadrosbanderaflex"></div>

                            </div>
                            <ul>
                                <li>
                                    <div onclick="calculadora.resultado('brlpen')" style="display:flex;justify-content: flex-end;">
                                        <img src="static/img/pen.png" class="imagenbanderas">
                                        <div class="txtbanderas">&nbsp;PEN</div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                `;
                var valmonto=inputmontoenviar.value;
                if(valmonto<100){
                    errorenvio.style.display='block';
                    errorenvio.innerHTML='Ingrese Monto mayor a 100';
                    tipodeimpuestos.innerHTML="0.00";
                    tipodecambio.innerHTML="0.00";
                    tipodecomision.innerHTML="0.00";
                    tipototalenviar.innerHTML="0.00";
                    tipototalrecibe.value="0.00";
                    numcomision.innerHTML="0.00";
                    tcambio.value=0;
                    tcomisi.value=0;
                    timpues.value=0;
                    ttotale.value=0;
                    tenviar.value=0;
                    trecibe.value=0;
                    tmoneda.value='Real a Dolar';
                    btnsiguiente.style.display='none';
                }else{
                    if(valmonto<200){
                        comision=co100a199brlausd.value;
                        errorenvio.style.display='none';
                        valcomision=(parseFloat(comision)*100).toFixed(2);
                        valcomenviar=(parseFloat(valmonto)*parseFloat(comision)).toFixed(3);
                        valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                        valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                        valtotalenviar=parseFloat(valmonto)-parseFloat(valtotalcomimp);
                        tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                        tipodecambio.innerHTML=valrealausd;
                        tipodecomision.innerHTML=+valcomenviar+" BRL";
                        tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                        valtotalrecibe=(parseFloat(valtotalenviar)*parseFloat(valrealausd)).toFixed(2);
                        tipototalrecibe.value=valtotalrecibe;
                        numcomision.innerHTML=valcomision+"% : &nbsp;";
                        tcambio.value=valrealausd;
                        tcomisi.value=valcomenviar;
                        timpues.value=valimpuestos;
                        ttotale.value=valtotalenviar;
                        tenviar.value=valmonto;
                        trecibe.value=valtotalrecibe;
                        tmoneda.value='Real a Dolar';
                        btnsiguiente.style.display='block';
                    }else{
                        if(valmonto<300){
                            comision=co200a299brlausd.value;
                            errorenvio.style.display='none';
                            valcomision=(parseFloat(comision)*100).toFixed(2);
                            valcomenviar=(parseFloat(valmonto)*parseFloat(comision)).toFixed(3);
                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                            valtotalenviar=parseFloat(valmonto)-parseFloat(valtotalcomimp);
                            tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                            tipodecambio.innerHTML=valrealausd;
                            tipodecomision.innerHTML=+valcomenviar+" BRL";
                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                            valtotalrecibe=(parseFloat(valtotalenviar)*parseFloat(valrealausd)).toFixed(2);
                            tipototalrecibe.value=valtotalrecibe;
                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                            tcambio.value=valrealausd;
                            tcomisi.value=valcomenviar;
                            timpues.value=valimpuestos;
                            ttotale.value=valtotalenviar;
                            tenviar.value=valmonto;
                            trecibe.value=valtotalrecibe;
                            tmoneda.value='Real a Dolar';
                            btnsiguiente.style.display='block';
                        }else{
                            if(valmonto<500){
                                comision=co300a499brlausd.value;
                                errorenvio.style.display='none';
                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                valcomenviar=(parseFloat(valmonto)*parseFloat(comision)).toFixed(3);
                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                valtotalenviar=parseFloat(valmonto)-parseFloat(valtotalcomimp);
                                tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                tipodecambio.innerHTML=valrealausd;
                                tipodecomision.innerHTML=+valcomenviar+" BRL";
                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                valtotalrecibe=(parseFloat(valtotalenviar)*parseFloat(valrealausd)).toFixed(2);
                                tipototalrecibe.value=valtotalrecibe;
                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                tcambio.value=valrealausd;
                                tcomisi.value=valcomenviar;
                                timpues.value=valimpuestos;
                                ttotale.value=valtotalenviar;
                                tenviar.value=valmonto;
                                trecibe.value=valtotalrecibe;
                                tmoneda.value='Real a Dolar';
                                btnsiguiente.style.display='block';
                            }else{
                                if(valmonto<1000){
                                    comision=co500a999brlausd.value;
                                    errorenvio.style.display='none';
                                    valcomision=(parseFloat(comision)*100).toFixed(2);
                                    valcomenviar=(parseFloat(valmonto)*parseFloat(comision)).toFixed(3);
                                    valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                    valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                    valtotalenviar=parseFloat(valmonto)-parseFloat(valtotalcomimp);
                                    tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                    tipodecambio.innerHTML=valrealausd;
                                    tipodecomision.innerHTML=+valcomenviar+" BRL";
                                    tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                    valtotalrecibe=(parseFloat(valtotalenviar)*parseFloat(valrealausd)).toFixed(2);
                                    tipototalrecibe.value=valtotalrecibe;
                                    numcomision.innerHTML=valcomision+"% : &nbsp;";
                                    tcambio.value=valrealausd;
                                    tcomisi.value=valcomenviar;
                                    timpues.value=valimpuestos;
                                    ttotale.value=valtotalenviar;
                                    tenviar.value=valmonto;
                                    trecibe.value=valtotalrecibe;
                                    tmoneda.value='Real a Dolar';
                                    btnsiguiente.style.display='block';
                                }else{
                                    if(valmonto<5000){
                                        //comision=comision1000a5000.value;
                                        //comision=co1000a5000brlusd;
                                        comision=co1000a4999brlausd.value;
                                        errorenvio.style.display='none';
                                        valcomision=(parseFloat(comision)*100).toFixed(2);
                                        valcomenviar=(parseFloat(valmonto)*parseFloat(comision)).toFixed(3);
                                        valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                        valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                        valtotalenviar=parseFloat(valmonto)-parseFloat(valtotalcomimp);
                                        tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                        tipodecambio.innerHTML=valrealausd;
                                        tipodecomision.innerHTML=+valcomenviar+" BRL";
                                        tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                        valtotalrecibe=(parseFloat(valtotalenviar)*parseFloat(valrealausd)).toFixed(2);
                                        tipototalrecibe.value=valtotalrecibe;
                                        numcomision.innerHTML=valcomision+"% : &nbsp;";
                                        tcambio.value=valrealausd;
                                        tcomisi.value=valcomenviar;
                                        timpues.value=valimpuestos;
                                        ttotale.value=valtotalenviar;
                                        tenviar.value=valmonto;
                                        trecibe.value=valtotalrecibe;
                                        tmoneda.value='Real a Dolar';
                                        btnsiguiente.style.display='block';
                                    }else{
                                        if(valmonto<=10000){
                                            //comision=comision1000a5000.value;
                                            //comision=co1000a5000brlusd;
                                            comision=co5000a10000brlausd.value;
                                            errorenvio.style.display='none';
                                            valcomision=(parseFloat(comision)*100).toFixed(2);
                                            valcomenviar=(parseFloat(valmonto)*parseFloat(comision)).toFixed(3);
                                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                            valtotalenviar=parseFloat(valmonto)-parseFloat(valtotalcomimp);
                                            tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                            tipodecambio.innerHTML=valrealausd;
                                            tipodecomision.innerHTML=+valcomenviar+" BRL";
                                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                            valtotalrecibe=(parseFloat(valtotalenviar)*parseFloat(valrealausd)).toFixed(2);
                                            tipototalrecibe.value=valtotalrecibe;
                                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                                            tcambio.value=valrealausd;
                                            tcomisi.value=valcomenviar;
                                            timpues.value=valimpuestos;
                                            ttotale.value=valtotalenviar;
                                            tenviar.value=valmonto;
                                            trecibe.value=valtotalrecibe;
                                            tmoneda.value='Real a Dolar';
                                            btnsiguiente.style.display='block';
                                        }else{
                                            errorenvio.style.display='block';
                                            errorenvio.innerHTML='Ingrese Monto menor o igual a 10000';
                                            tipodeimpuestos.innerHTML="0.00";
                                            tipodecambio.innerHTML="0.00";
                                            tipodecomision.innerHTML="0.00";
                                            tipototalenviar.innerHTML="0.00";
                                            tipototalrecibe.value="0.00";
                                            numcomision.innerHTML="0.00";
                                            tcambio.value=valrealausd;
                                            tcomisi.value=valcomenviar;
                                            timpues.value=valimpuestos;
                                            ttotale.value=valtotalenviar;
                                            tenviar.value=valtotalenviar;
                                            trecibe.value=valtotalrecibe;
                                            tmoneda.value='Real a Dolar';
                                            btnsiguiente.style.display='none';
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            break;
        }
    },
    envio:function(){
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
    },
    whatsapp:function(){
        if(inputmontoenviar.value<100){
            errorenvio.style.display='block';
            errorenvio.innerHTML='Ingrese Monto mayor a 100';
        }else{
            if(inputmontoenviar.value>10000){
                errorenvio.style.display='block';
                errorenvio.innerHTML='Ingrese Monto menor o igual a 10000';
            }else{
                errorenvio.style.display='none';
                var valeletipmonenv=eletipmonenv.value;
                var valtipodemoneaenvioss=tmoneda.value;
                switch(valtipodemoneaenvioss){
                        case('Real a Dolar'):
                            window.open('https://api.whatsapp.com/send/?phone=51966991933&text=Monto%20Ingresado:%20'+tenviar.value+'%20BRL%0ATipo%20de%20Cambio:%20'+tcambio.value+'%20%0AComisión:%20'+tcomisi.value+'%20BRL%0AImpuestos:%20'+timpues.value+'%20BRL%0ATotal%20a%20Enviar:%20'+ttotale.value+'%20BRL%0ARecibe:%20'+trecibe.value+'%20USD','_blank');
                            window.open('https://braspertransferencias.com/','_self')
                            break;
                        case('Sol a Real'):
                            window.open('https://api.whatsapp.com/send/?phone=51966991933&text=Monto%20Ingresado:%20'+tenviar.value+'%20PEN%0ATipo%20de%20Cambio:%20'+tcambio.value+'%20%0AComisión:%20'+tcomisi.value+'%20PEN%0AImpuestos:%20'+timpues.value+'%20PEN%0ATotal%20a%20Enviar:%20'+ttotale.value+'%20PEN%0ARecibe:%20'+trecibe.value+'%20BRL','_blank');
                            window.open('https://braspertransferencias.com/','_self')
                            break;
                        case('Dolar a Real'):
                            window.open('https://api.whatsapp.com/send/?phone=51966991933&text=Monto%20Ingresado:%20'+tenviar.value+'%20USD%0ATipo%20de%20Cambio:%20'+tcambio.value+'%20%0AComisión:%20'+tcomisi.value+'%20USD%0AImpuestos:%20'+timpues.value+'%20USD%0ATotal%20a%20Enviar:%20'+ttotale.value+'%20USD%0ARecibe:%20'+trecibe.value+'%20BRL','_blank');
                            window.open('https://braspertransferencias.com/','_self')
                            break;
                        case('Real a Sol'):
                            window.open('https://api.whatsapp.com/send/?phone=51966991933&text=Monto%20Ingresado:%20'+tenviar.value+'%20BRL%0ATipo%20de%20Cambio:%20'+tcambio.value+'%20%0AComisión:%20'+tcomisi.value+'%20BRL%0AImpuestos:%20'+timpues.value+'%20BRL%0ATotal%20a%20Enviar:%20'+ttotale.value+'%20BRL%0ARecibe:%20'+trecibe.value+'%20PEN','_blank');
                            break;
                        case('Real a Dolar'):
                            window.open('https://api.whatsapp.com/send/?phone=51966991933&text=Monto%20Ingresado:%20'+tenviar.value+'%20BRL%0ATipo%20de%20Cambio:%20'+tcambio.value+'%20%0AComisión:%20'+tcomisi.value+'%20BRL%0AImpuestos:%20'+timpues.value+'%20BRL%0ATotal%20a%20Enviar:%20'+ttotale.value+'%20BRL%0ARecibe:%20'+trecibe.value+'%20USD','_blank');
                            window.open('https://braspertransferencias.com/','_self')
                            break;
                }
                //alert('tipo de cambio: '+tcambio.value+'\nComision: '+tcomisi.value+'\nImpuesto: '+timpues.value+'\nTotal a Enviar: '+ttotale.value+'\nMonto Ingresado: '+tenviar.value+'\nRecibe: '+trecibe.value+'\nMoneda'+valtipodemoneaenvioss);

                //Envias:BRL200(brasil) tipo de cambio: USD 1=0.201 RECIBE USD 38.90(Perú) comision de envio BRL 5.50 Impuestos 0.99 Subtotal BRL 6.49 Total a covertir BRL 193.511
            }
        }
    },
    abajaso:function(){
        posiciona.value='abajo';
        var resultadoinicial;
        var valabajo=tipototalrecibe.value;
        var valeletipmonenv=eletipmonenv.value;
        var soladol=document.getElementById('soladol').value;
        var solareal=document.getElementById('solareal').value;
        var usdasol=document.getElementById('usdasol').value;
        var usdareal=document.getElementById('usdareal').value;
        var realapen=document.getElementById('realapen').value;
        var realausd=document.getElementById('realausd').value;
        var valsoldol=parseFloat(soladol).toFixed(3);
        var valsolrea=parseFloat(solareal).toFixed(3);
        var valusdasol=parseFloat(usdasol).toFixed(3);
        var valusdareal=parseFloat(usdareal).toFixed(3);
        var valrealapen=parseFloat(realapen).toFixed(3);
        var valrealausd=parseFloat(realausd).toFixed(3);
        switch(valeletipmonenv){
            case('penbrl'):
                var valmontoinit=inputmontoenviar.value;
                var valmonto=valabajo;
                if(valmonto<0){
                    errorenvio.style.display='block';
                    errorenvio.innerHTML='Ingrese Monto mayor a 100';
                    tipodeimpuestos.innerHTML="0.00";
                    tipodecambio.innerHTML="0.00";
                    tipodecomision.innerHTML="0.00";
                    tipototalenviar.innerHTML="0.00";
                    tipototalrecibe.value="0.00";
                    numcomision.innerHTML="0.00";
                    tcambio.value=0;
                    tcomisi.value=0;
                    timpues.value=0;
                    ttotale.value=0;
                    tenviar.value=0;
                    trecibe.value=0;
                    tmoneda.value='Real a Sol';
                    btnsiguiente.style.display='none';
                }else{
                    if(valmonto<200){
                        if(valmonto<200){
                            comision=co100a199penabrl.value;
                            inversa=in100a199penabrl.value;
                            //inversa=inversacomision100a199.value;
                            errorenvio.style.display='none';
                            valcomision=(parseFloat(comision)*100).toFixed(2);
                            resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valsolrea)).toFixed(2);//modificar
                            valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                            valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                            tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;PEN";
                            tipodecambio.innerHTML=valsolrea;
                            tipodecomision.innerHTML=+valcomenviar+" PEN";
                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;PEN";
                            valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                            inputmontoenviar.value=valtotalrecibe;
                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                            tcambio.value=valsolrea;
                            tcomisi.value=valcomenviar;
                            timpues.value=valimpuestos;
                            ttotale.value=valtotalenviar;
                            tenviar.value=resultadoinicial;//modificar
                            //tmoneda.value='Real a Sol';
                            //trecibe.value=valtotalrecibe;
                            tmoneda.value='Sol a Real';
                            trecibe.value=tipototalrecibe.value;
                            btnsiguiente.style.display='block';
                        }else{
                            if(valmonto<300){
                                comision=co200a299penabrl.value;
                                inversa=in200a299penabrl.value;
                                //inversa=inversacomision200a299.value;
                                errorenvio.style.display='none';
                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valsolrea)).toFixed(2);//modificar
                                valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;PEN";
                                tipodecambio.innerHTML=valsolrea;
                                tipodecomision.innerHTML=+valcomenviar+" PEN";
                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;PEN";
                                valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                inputmontoenviar.value=valtotalrecibe;
                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                tcambio.value=valsolrea;
                                tcomisi.value=valcomenviar;
                                timpues.value=valimpuestos;
                                ttotale.value=valtotalenviar;
                                tenviar.value=resultadoinicial;//modificar
                                //tmoneda.value='Real a Sol';
                                //trecibe.value=valtotalrecibe;
                                tmoneda.value='Sol a Real';
                                trecibe.value=tipototalrecibe.value;
                                btnsiguiente.style.display='block';
                            }else{
                                if(valmonto<500){
                                    comision=co300a499penabrl.value;
                                    inversa=in300a499penabrl.value;
                                    //inversa=inversacomision300a399.value;
                                    errorenvio.style.display='none';
                                    valcomision=(parseFloat(comision)*100).toFixed(2);
                                    resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valsolrea)).toFixed(2);//modificar
                                    valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                    valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                    valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                    valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                    tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;PEN";
                                    tipodecambio.innerHTML=valsolrea;
                                    tipodecomision.innerHTML=+valcomenviar+" PEN";
                                    tipototalenviar.innerHTML=valtotalenviar+"&nbsp;PEN";
                                    valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                    inputmontoenviar.value=valtotalrecibe;
                                    numcomision.innerHTML=valcomision+"% : &nbsp;";
                                    tcambio.value=valsolrea;
                                    tcomisi.value=valcomenviar;
                                    timpues.value=valimpuestos;
                                    ttotale.value=valtotalenviar;
                                    tenviar.value=resultadoinicial;//modificar
                                    //tmoneda.value='Real a Sol';
                                    //trecibe.value=valtotalrecibe;
                                    tmoneda.value='Sol a Real';
                                    trecibe.value=tipototalrecibe.value;
                                    btnsiguiente.style.display='block';
                                }else{
                                    if(valmonto<1000){
                                        comision=co500a999penabrl.value;
                                        inversa=in500a999penabrl.value;
                                        //inversa=inversacomision400a999.value;
                                        errorenvio.style.display='none';
                                        valcomision=(parseFloat(comision)*100).toFixed(2);
                                        resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valsolrea)).toFixed(2);//modificar
                                        valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                        valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                        valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                        valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                        tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;PEN";
                                        tipodecambio.innerHTML=valsolrea;
                                        tipodecomision.innerHTML=+valcomenviar+" PEN";
                                        tipototalenviar.innerHTML=valtotalenviar+"&nbsp;PEN";
                                        valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                        inputmontoenviar.value=valtotalrecibe;
                                        numcomision.innerHTML=valcomision+"% : &nbsp;";
                                        tcambio.value=valsolrea;
                                        tcomisi.value=valcomenviar;
                                        timpues.value=valimpuestos;
                                        ttotale.value=valtotalenviar;
                                        tenviar.value=resultadoinicial;//modificar
                                        //tmoneda.value='Real a Sol';
                                        //trecibe.value=valtotalrecibe;
                                        tmoneda.value='Sol a Real';
                                        trecibe.value=tipototalrecibe.value;
                                        btnsiguiente.style.display='block';
                                    }else{
                                        if(valmonto<5000){
                                            comision=co1000a4999penabrl.value;
                                            inversa=in1000a4999penabrl.value;
                                            //inversa=comision1000a5000.value;
                                            errorenvio.style.display='none';
                                            valcomision=(parseFloat(comision)*100).toFixed(2);
                                            resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valsolrea)).toFixed(2);//modificar
                                            valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                            valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                            tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;PEN";
                                            tipodecambio.innerHTML=valsolrea;
                                            tipodecomision.innerHTML=+valcomenviar+" PEN";
                                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;PEN";
                                            valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                            inputmontoenviar.value=valtotalrecibe;
                                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                                            tcambio.value=valsolrea;
                                            tcomisi.value=valcomenviar;
                                            timpues.value=valimpuestos;
                                            ttotale.value=valtotalenviar;
                                            tenviar.value=resultadoinicial;//modificar
                                            //tmoneda.value='Real a Sol';
                                            //trecibe.value=valtotalrecibe;
                                            tmoneda.value='Sol a Real';
                                            trecibe.value=tipototalrecibe.value;
                                            btnsiguiente.style.display='block';
                                        }else{
                                            if(valmonto<=10000){
                                            comision=co5000a10000penabrl.value;
                                            inversa=in5000a10000penabrl.value;
                                            //inversa=comision1000a5000.value;
                                            errorenvio.style.display='none';
                                            valcomision=(parseFloat(comision)*100).toFixed(2);
                                            resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valsolrea)).toFixed(2);//modificar
                                            valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                            valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                            tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;PEN";
                                            tipodecambio.innerHTML=valsolrea;
                                            tipodecomision.innerHTML=+valcomenviar+" PEN";
                                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;PEN";
                                            valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                            inputmontoenviar.value=valtotalrecibe;
                                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                                            tcambio.value=valsolrea;
                                            tcomisi.value=valcomenviar;
                                            timpues.value=valimpuestos;
                                            ttotale.value=valtotalenviar;
                                            tenviar.value=resultadoinicial;//modificar
                                            //tmoneda.value='Real a Sol';
                                            //trecibe.value=valtotalrecibe;
                                            tmoneda.value='Sol a Real';
                                            trecibe.value=tipototalrecibe.value;
                                            btnsiguiente.style.display='block';
                                        }else{
                                            comision=co5000a10000penabrl.value;
                                            inversa=in5000a10000penabrl.value;
                                            //inversa=inversacomision1000a5000.value;
                                            errorenvio.style.display='none';
                                            valcomision=(parseFloat(comision)*100).toFixed(2);
                                            resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valsolrea)).toFixed(2);//modificar
                                            valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                            valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                            tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;PEN";
                                            tipodecambio.innerHTML=valsolrea;
                                            tipodecomision.innerHTML=+valcomenviar+" PEN";
                                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;PEN";
                                            valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                            inputmontoenviar.value=valtotalrecibe;
                                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                                            tcambio.value=valsolrea;
                                            tcomisi.value=valcomenviar;
                                            timpues.value=valimpuestos;
                                            ttotale.value=valtotalenviar;
                                            tenviar.value=resultadoinicial;//modificar
                                            //tmoneda.value='Real a Sol';
                                            //trecibe.value=valtotalrecibe;
                                            tmoneda.value='Sol a Real';
                                            trecibe.value=tipototalrecibe.value;
                                            btnsiguiente.style.display='block';
                                        }
                                        }
                                    }
                                }
                            }
                        }
                    }else{
                        if(valmonto<300){
                            if(valmonto<200){
                                comision=co100a199penabrl.value;
                                inversa=in100a199penabrl.value;
                                //inversa=inversacomision100a199.value;
                                errorenvio.style.display='none';
                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valsolrea)).toFixed(2);//modificar
                                valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;PEN";
                                tipodecambio.innerHTML=valsolrea;
                                tipodecomision.innerHTML=+valcomenviar+" PEN";
                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;PEN";
                                valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                inputmontoenviar.value=valtotalrecibe;
                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                tcambio.value=valsolrea;
                                tcomisi.value=valcomenviar;
                                timpues.value=valimpuestos;
                                ttotale.value=valtotalenviar;
                                tenviar.value=resultadoinicial;//modificar
                                //tmoneda.value='Real a Sol';
                                //trecibe.value=valtotalrecibe;
                                tmoneda.value='Sol a Real';
                                trecibe.value=tipototalrecibe.value;
                                btnsiguiente.style.display='block';
                        }else{
                            if(valmonto<300){
                                comision=co200a299penabrl.value;
                                inversa=in200a299penabrl.value;
                                //inversa=inversacomision200a299.value;
                                errorenvio.style.display='none';
                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valsolrea)).toFixed(2);//modificar
                                valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;PEN";
                                tipodecambio.innerHTML=valsolrea;
                                tipodecomision.innerHTML=+valcomenviar+" PEN";
                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;PEN";
                                valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                inputmontoenviar.value=valtotalrecibe;
                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                tcambio.value=valsolrea;
                                tcomisi.value=valcomenviar;
                                timpues.value=valimpuestos;
                                ttotale.value=valtotalenviar;
                                tenviar.value=resultadoinicial;//modificar
                                //tmoneda.value='Real a Sol';
                                //trecibe.value=valtotalrecibe;
                                tmoneda.value='Sol a Real';
                                trecibe.value=tipototalrecibe.value;
                                btnsiguiente.style.display='block';
                            }else{
                                if(valmonto<500){
                                    comision=co300a499penabrl.value;
                                    inversa=in300a499penabrl.value;
                                    //inversa=inversacomision300a399.value;
                                    errorenvio.style.display='none';
                                    valcomision=(parseFloat(comision)*100).toFixed(2);
                                    resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valsolrea)).toFixed(2);//modificar
                                    valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                    valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                    valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                    valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                    tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;PEN";
                                    tipodecambio.innerHTML=valsolrea;
                                    tipodecomision.innerHTML=+valcomenviar+" PEN";
                                    tipototalenviar.innerHTML=valtotalenviar+"&nbsp;PEN";
                                    valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                    inputmontoenviar.value=valtotalrecibe;
                                    numcomision.innerHTML=valcomision+"% : &nbsp;";
                                    tcambio.value=valsolrea;
                                    tcomisi.value=valcomenviar;
                                    timpues.value=valimpuestos;
                                    ttotale.value=valtotalenviar;
                                    tenviar.value=resultadoinicial;//modificar
                                    //tmoneda.value='Real a Sol';
                                    //trecibe.value=valtotalrecibe;
                                    tmoneda.value='Sol a Real';
                                    trecibe.value=tipototalrecibe.value;
                                    btnsiguiente.style.display='block';
                                }else{
                                    if(valmonto<1000){
                                        comision=co500a999penabrl.value;
                                        inversa=in500a999penabrl.value;
                                        //inversa=inversacomision400a999.value;
                                        errorenvio.style.display='none';
                                        valcomision=(parseFloat(comision)*100).toFixed(2);
                                        resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valsolrea)).toFixed(2);//modificar
                                        valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                        valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                        valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                        valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                        tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;PEN";
                                        tipodecambio.innerHTML=valsolrea;
                                        tipodecomision.innerHTML=+valcomenviar+" PEN";
                                        tipototalenviar.innerHTML=valtotalenviar+"&nbsp;PEN";
                                        valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                        inputmontoenviar.value=valtotalrecibe;
                                        numcomision.innerHTML=valcomision+"% : &nbsp;";
                                        tcambio.value=valsolrea;
                                        tcomisi.value=valcomenviar;
                                        timpues.value=valimpuestos;
                                        ttotale.value=valtotalenviar;
                                        tenviar.value=resultadoinicial;//modificar
                                        //tmoneda.value='Real a Sol';
                                        //trecibe.value=valtotalrecibe;
                                        tmoneda.value='Sol a Real';
                                        trecibe.value=tipototalrecibe.value;
                                        btnsiguiente.style.display='block';
                                    }else{
                                        if(valmonto<5000){
                                            comision=co1000a4999penabrl.value;
                                            inversa=in1000a4999penabrl.value;
                                            //inversa=inversacomision1000a5000.value;
                                            errorenvio.style.display='none';
                                            valcomision=(parseFloat(comision)*100).toFixed(2);
                                            resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valsolrea)).toFixed(2);//modificar
                                            valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                            valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                            tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;PEN";
                                            tipodecambio.innerHTML=valsolrea;
                                            tipodecomision.innerHTML=+valcomenviar+" PEN";
                                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;PEN";
                                            valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                            inputmontoenviar.value=valtotalrecibe;
                                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                                            tcambio.value=valsolrea;
                                            tcomisi.value=valcomenviar;
                                            timpues.value=valimpuestos;
                                            ttotale.value=valtotalenviar;
                                            tenviar.value=resultadoinicial;//modificar
                                            //tmoneda.value='Real a Sol';
                                            //trecibe.value=valtotalrecibe;
                                            tmoneda.value='Sol a Real';
                                            trecibe.value=tipototalrecibe.value;
                                            btnsiguiente.style.display='block';
                                        }else{
                                            if(valmonto<=10000){
                                                comision=co5000a10000penabrl.value;
                                                inversa=in5000a10000penabrl.value;
                                                //inversa=inversacomision1000a5000.value;
                                                errorenvio.style.display='none';
                                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                                resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valsolrea)).toFixed(2);//modificar
                                                valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;PEN";
                                                tipodecambio.innerHTML=valsolrea;
                                                tipodecomision.innerHTML=+valcomenviar+" PEN";
                                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;PEN";
                                                valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                inputmontoenviar.value=valtotalrecibe;
                                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                tcambio.value=valsolrea;
                                                tcomisi.value=valcomenviar;
                                                timpues.value=valimpuestos;
                                                ttotale.value=valtotalenviar;
                                                tenviar.value=resultadoinicial;//modificar
                                                //tmoneda.value='Real a Sol';
                                                //trecibe.value=valtotalrecibe;
                                                tmoneda.value='Sol a Real';
                                                trecibe.value=tipototalrecibe.value;
                                                btnsiguiente.style.display='block';
                                            }else{
                                                comision=co5000a10000penabrl.value;
                                                inversa=in5000a10000penabrl.value;
                                                //inversa=inversacomision1000a5000.value;
                                                errorenvio.style.display='none';
                                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                                resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valsolrea)).toFixed(2);//modificar
                                                valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;PEN";
                                                tipodecambio.innerHTML=valsolrea;
                                                tipodecomision.innerHTML=+valcomenviar+" PEN";
                                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;PEN";
                                                valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                inputmontoenviar.value=valtotalrecibe;
                                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                tcambio.value=valsolrea;
                                                tcomisi.value=valcomenviar;
                                                timpues.value=valimpuestos;
                                                ttotale.value=valtotalenviar;
                                                tenviar.value=resultadoinicial;//modificar
                                                //tmoneda.value='Real a Sol';
                                                //trecibe.value=valtotalrecibe;
                                                tmoneda.value='Sol a Real';
                                                trecibe.value=tipototalrecibe.value;
                                                btnsiguiente.style.display='block';
                                            }
                                        }
                                    }
                                }
                            }
                        } 
                        }else{
                            if(valmonto<500){
                                if(valmonto<200){
                                    comision=co100a199penabrl.value;
                                    inversa=in100a199penabrl.value;
                                    //inversa=inversacomision100a199.value;
                                    errorenvio.style.display='none';
                                    valcomision=(parseFloat(comision)*100).toFixed(2);
                                    resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valsolrea)).toFixed(2);//modificar
                                    valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                    valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                    valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                    valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                    tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;PEN";
                                    tipodecambio.innerHTML=valsolrea;
                                    tipodecomision.innerHTML=+valcomenviar+" PEN";
                                    tipototalenviar.innerHTML=valtotalenviar+"&nbsp;PEN";
                                    valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                    inputmontoenviar.value=valtotalrecibe;
                                    numcomision.innerHTML=valcomision+"% : &nbsp;";
                                    tcambio.value=valsolrea;
                                    tcomisi.value=valcomenviar;
                                    timpues.value=valimpuestos;
                                    ttotale.value=valtotalenviar;
                                    tenviar.value=resultadoinicial;//modificar
                                    //tmoneda.value='Real a Sol';
                                    //trecibe.value=valtotalrecibe;
                                    tmoneda.value='Sol a Real';
                                    trecibe.value=tipototalrecibe.value;
                                    btnsiguiente.style.display='block';
                                }else{
                                    if(valmonto<300){
                                        comision=co200a299penabrl.value;
                                        inversa=in200a299penabrl.value;
                                        //inversa=inversacomision200a299.value;
                                        errorenvio.style.display='none';
                                        valcomision=(parseFloat(comision)*100).toFixed(2);
                                        resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valsolrea)).toFixed(2);//modificar
                                        valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                        valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                        valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                        valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                        tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;PEN";
                                        tipodecambio.innerHTML=valsolrea;
                                        tipodecomision.innerHTML=+valcomenviar+" PEN";
                                        tipototalenviar.innerHTML=valtotalenviar+"&nbsp;PEN";
                                        valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                        inputmontoenviar.value=valtotalrecibe;
                                        numcomision.innerHTML=valcomision+"% : &nbsp;";
                                        tcambio.value=valsolrea;
                                        tcomisi.value=valcomenviar;
                                        timpues.value=valimpuestos;
                                        ttotale.value=valtotalenviar;
                                        tenviar.value=resultadoinicial;//modificar
                                        //tmoneda.value='Real a Sol';
                                        //trecibe.value=valtotalrecibe;
                                        tmoneda.value='Sol a Real';
                                        trecibe.value=tipototalrecibe.value;
                                        btnsiguiente.style.display='block';
                                    }else{
                                        if(valmonto<500){
                                            comision=co300a499penabrl.value;
                                            inversa=in300a499penabrl.value;
                                            //inversa=inversacomision300a399.value;
                                            errorenvio.style.display='none';
                                            valcomision=(parseFloat(comision)*100).toFixed(2);
                                            resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valsolrea)).toFixed(2);//modificar
                                            valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                            valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                            tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;PEN";
                                            tipodecambio.innerHTML=valsolrea;
                                            tipodecomision.innerHTML=+valcomenviar+" PEN";
                                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;PEN";
                                            valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                            inputmontoenviar.value=valtotalrecibe;
                                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                                            tcambio.value=valsolrea;
                                            tcomisi.value=valcomenviar;
                                            timpues.value=valimpuestos;
                                            ttotale.value=valtotalenviar;
                                            tenviar.value=resultadoinicial;//modificar
                                            //tmoneda.value='Real a Sol';
                                            //trecibe.value=valtotalrecibe;
                                            tmoneda.value='Sol a Real';
                                            trecibe.value=tipototalrecibe.value;
                                            btnsiguiente.style.display='block';
                                        }else{
                                            if(valmonto<1000){
                                                comision=co500a999penabrl.value;
                                                inversa=in500a999penabrl.value;
                                                //inversa=inversacomision400a999.value;
                                                errorenvio.style.display='none';
                                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                                resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valsolrea)).toFixed(2);//modificar
                                                valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;PEN";
                                                tipodecambio.innerHTML=valsolrea;
                                                tipodecomision.innerHTML=+valcomenviar+" PEN";
                                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;PEN";
                                                valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                inputmontoenviar.value=valtotalrecibe;
                                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                tcambio.value=valsolrea;
                                                tcomisi.value=valcomenviar;
                                                timpues.value=valimpuestos;
                                                ttotale.value=valtotalenviar;
                                                tenviar.value=resultadoinicial;//modificar
                                                //tmoneda.value='Real a Sol';
                                                //trecibe.value=valtotalrecibe;
                                                tmoneda.value='Sol a Real';
                                                trecibe.value=tipototalrecibe.value;
                                                btnsiguiente.style.display='block';
                                            }else{
                                                if(valmonto<5000){
                                                    comision=co1000a4999penabrl.value;
                                                    inversa=in1000a4999penabrl.value;
                                                    //inversa=inversacomision1000a5000.value;
                                                    errorenvio.style.display='none';
                                                    valcomision=(parseFloat(comision)*100).toFixed(2);
                                                    resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valsolrea)).toFixed(2);//modificar
                                                    valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                    valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                    valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                    valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                    tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;PEN";
                                                    tipodecambio.innerHTML=valsolrea;
                                                    tipodecomision.innerHTML=+valcomenviar+" PEN";
                                                    tipototalenviar.innerHTML=valtotalenviar+"&nbsp;PEN";
                                                    valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                    inputmontoenviar.value=valtotalrecibe;
                                                    numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                    tcambio.value=valsolrea;
                                                    tcomisi.value=valcomenviar;
                                                    timpues.value=valimpuestos;
                                                    ttotale.value=valtotalenviar;
                                                    tenviar.value=resultadoinicial;//modificar
                                                    //tmoneda.value='Real a Sol';
                                                    //trecibe.value=valtotalrecibe;
                                                    tmoneda.value='Sol a Real';
                                                    trecibe.value=tipototalrecibe.value;
                                                    btnsiguiente.style.display='block';
                                                }else{
                                                    if(valmonto<=10000){
                                                        comision=co5000a10000penabrl.value;
                                                        inversa=in5000a10000penabrl.value;
                                                        //inversa=inversacomision1000a5000.value;
                                                        errorenvio.style.display='none';
                                                        valcomision=(parseFloat(comision)*100).toFixed(2);
                                                        resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valsolrea)).toFixed(2);//modificar
                                                        valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                        valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                        valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                        valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                        tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;PEN";
                                                        tipodecambio.innerHTML=valsolrea;
                                                        tipodecomision.innerHTML=+valcomenviar+" PEN";
                                                        tipototalenviar.innerHTML=valtotalenviar+"&nbsp;PEN";
                                                        valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                        inputmontoenviar.value=valtotalrecibe;
                                                        numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                        tcambio.value=valsolrea;
                                                        tcomisi.value=valcomenviar;
                                                        timpues.value=valimpuestos;
                                                        ttotale.value=valtotalenviar;
                                                        tenviar.value=resultadoinicial;//modificar
                                                        //tmoneda.value='Real a Sol';
                                                        //trecibe.value=valtotalrecibe;
                                                        tmoneda.value='Sol a Real';
                                                        trecibe.value=tipototalrecibe.value;
                                                        btnsiguiente.style.display='block';
                                                    }else{
                                                        comision=co5000a10000penabrl.value;
                                                        inversa=in5000a10000penabrl.value;
                                                        //inversa=inversacomision1000a5000.value;
                                                        errorenvio.style.display='none';
                                                        valcomision=(parseFloat(comision)*100).toFixed(2);
                                                        resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valsolrea)).toFixed(2);//modificar
                                                        valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                        valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                        valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                        valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                        tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                        tipodecambio.innerHTML=valsolrea;
                                                        tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                        tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                        valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                        inputmontoenviar.value=valtotalrecibe;
                                                        numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                        tcambio.value=valsolrea;
                                                        tcomisi.value=valcomenviar;
                                                        timpues.value=valimpuestos;
                                                        ttotale.value=valtotalenviar;
                                                        tenviar.value=resultadoinicial;//modificar
                                                        tmoneda.value='Real a Sol';
                                                        trecibe.value=valtotalrecibe;
                                                        btnsiguiente.style.display='block';
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }else{
                                if(valmonto<1000){
                                    if(valmonto<200){
                                        comision=co100a199penabrl.value;
                                        inversa=in100a199penabrl.value;
                                        //inversa=inversacomision100a199.value;
                                        errorenvio.style.display='none';
                                        valcomision=(parseFloat(comision)*100).toFixed(2);
                                        resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valsolrea)).toFixed(2);//modificar
                                        valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                        valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                        valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                        valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                        tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;PEN";
                                        tipodecambio.innerHTML=valsolrea;
                                        tipodecomision.innerHTML=+valcomenviar+" PEN";
                                        tipototalenviar.innerHTML=valtotalenviar+"&nbsp;PEN";
                                        valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                        inputmontoenviar.value=valtotalrecibe;
                                        numcomision.innerHTML=valcomision+"% : &nbsp;";
                                        tcambio.value=valsolrea;
                                        tcomisi.value=valcomenviar;
                                        timpues.value=valimpuestos;
                                        ttotale.value=valtotalenviar;
                                        tenviar.value=resultadoinicial;//modificar
                                        //tmoneda.value='Real a Sol';
                                        //trecibe.value=valtotalrecibe;
                                        tmoneda.value='Sol a Real';
                                        trecibe.value=tipototalrecibe.value;
                                        btnsiguiente.style.display='block';
                                    }else{
                                        if(valmonto<300){
                                            comision=co200a299penabrl.value;
                                            inversa=in200a299penabrl.value;
                                            //inversa=inversacomision200a299.value;
                                            errorenvio.style.display='none';
                                            valcomision=(parseFloat(comision)*100).toFixed(2);
                                            resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valsolrea)).toFixed(2);//modificar
                                            valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                            valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                            tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;PEN";
                                            tipodecambio.innerHTML=valsolrea;
                                            tipodecomision.innerHTML=+valcomenviar+" PEN";
                                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;PEN";
                                            valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                            inputmontoenviar.value=valtotalrecibe;
                                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                                            tcambio.value=valsolrea;
                                            tcomisi.value=valcomenviar;
                                            timpues.value=valimpuestos;
                                            ttotale.value=valtotalenviar;
                                            tenviar.value=resultadoinicial;//modificar
                                            //tmoneda.value='Real a Sol';
                                            //trecibe.value=valtotalrecibe;
                                            tmoneda.value='Sol a Real';
                                            trecibe.value=tipototalrecibe.value;
                                            btnsiguiente.style.display='block';
                                        }else{
                                            if(valmonto<500){
                                                comision=co300a499penabrl.value;
                                                inversa=in300a499penabrl.value;
                                                //inversa=inversacomision300a399.value;
                                                errorenvio.style.display='none';
                                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                                resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valsolrea)).toFixed(2);//modificar
                                                valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;PEN";
                                                tipodecambio.innerHTML=valsolrea;
                                                tipodecomision.innerHTML=+valcomenviar+" PEN";
                                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;PEN";
                                                valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                inputmontoenviar.value=valtotalrecibe;
                                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                tcambio.value=valsolrea;
                                                tcomisi.value=valcomenviar;
                                                timpues.value=valimpuestos;
                                                ttotale.value=valtotalenviar;
                                                tenviar.value=resultadoinicial;//modificar
                                                //tmoneda.value='Real a Sol';
                                                //trecibe.value=valtotalrecibe;
                                                tmoneda.value='Sol a Real';
                                                trecibe.value=tipototalrecibe.value;
                                                btnsiguiente.style.display='block';
                                            }else{
                                                if(valmonto<1000){
                                                    comision=co500a999penabrl.value;
                                                    inversa=in500a999penabrl.value;
                                                    //inversa=inversacomision400a999.value;
                                                    errorenvio.style.display='none';
                                                    valcomision=(parseFloat(comision)*100).toFixed(2);
                                                    resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valsolrea)).toFixed(2);//modificar
                                                    valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                    valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                    valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                    valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                    tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;PEN";
                                                    tipodecambio.innerHTML=valsolrea;
                                                    tipodecomision.innerHTML=+valcomenviar+" PEN";
                                                    tipototalenviar.innerHTML=valtotalenviar+"&nbsp;PEN";
                                                    valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                    inputmontoenviar.value=valtotalrecibe;
                                                    numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                    tcambio.value=valsolrea;
                                                    tcomisi.value=valcomenviar;
                                                    timpues.value=valimpuestos;
                                                    ttotale.value=valtotalenviar;
                                                    tenviar.value=resultadoinicial;//modificar
                                                    //tmoneda.value='Real a Sol';
                                                    //trecibe.value=valtotalrecibe;
                                                    tmoneda.value='Sol a Real';
                                                    trecibe.value=tipototalrecibe.value;
                                                    btnsiguiente.style.display='block';
                                                }else{
                                                    if(valmonto<5000){
                                                        comision=co1000a4999penabrl.value;
                                                        inversa=in1000a4999penabrl.value;
                                                        //inversa=inversacomision1000a5000.value;
                                                        errorenvio.style.display='none';
                                                        valcomision=(parseFloat(comision)*100).toFixed(2);
                                                        resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valsolrea)).toFixed(2);//modificar
                                                        valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                        valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                        valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                        valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                        tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;PEN";
                                                        tipodecambio.innerHTML=valsolrea;
                                                        tipodecomision.innerHTML=+valcomenviar+" PEN";
                                                        tipototalenviar.innerHTML=valtotalenviar+"&nbsp;PEN";
                                                        valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                        inputmontoenviar.value=valtotalrecibe;
                                                        numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                        tcambio.value=valsolrea;
                                                        tcomisi.value=valcomenviar;
                                                        timpues.value=valimpuestos;
                                                        ttotale.value=valtotalenviar;
                                                        tenviar.value=resultadoinicial;//modificar
                                                        //tmoneda.value='Real a Sol';
                                                        //trecibe.value=valtotalrecibe;
                                                        tmoneda.value='Sol a Real';
                                                        trecibe.value=tipototalrecibe.value;
                                                        btnsiguiente.style.display='block';
                                                    }else{
                                                        if(valmonto<=10000){
                                                            comision=co5000a10000penabrl.value;
                                                            inversa=in5000a10000penabrl.value;
                                                            //inversa=inversacomision1000a5000.value;
                                                            errorenvio.style.display='none';
                                                            valcomision=(parseFloat(comision)*100).toFixed(2);
                                                            resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valsolrea)).toFixed(2);//modificar
                                                            valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                            valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                            tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;PEN";
                                                            tipodecambio.innerHTML=valsolrea;
                                                            tipodecomision.innerHTML=+valcomenviar+" PEN";
                                                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;PEN";
                                                            valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                            inputmontoenviar.value=valtotalrecibe;
                                                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                            tcambio.value=valsolrea;
                                                            tcomisi.value=valcomenviar;
                                                            timpues.value=valimpuestos;
                                                            ttotale.value=valtotalenviar;
                                                            tenviar.value=resultadoinicial;//modificar
                                                            //tmoneda.value='Real a Sol';
                                                            //trecibe.value=valtotalrecibe;
                                                            tmoneda.value='Sol a Real';
                                                            trecibe.value=tipototalrecibe.value;
                                                            btnsiguiente.style.display='block';
                                                        }else{
                                                            comision=co5000a10000penabrl.value;
                                                            inversa=in5000a10000penabrl.value;
                                                            //inversa=inversacomision1000a5000.value;
                                                            errorenvio.style.display='none';
                                                            valcomision=(parseFloat(comision)*100).toFixed(2);
                                                            resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valsolrea)).toFixed(2);//modificar
                                                            valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                            valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                            tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;PEN";
                                                            tipodecambio.innerHTML=valsolrea;
                                                            tipodecomision.innerHTML=+valcomenviar+" PEN";
                                                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;PEN";
                                                            valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                            inputmontoenviar.value=valtotalrecibe;
                                                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                            tcambio.value=valsolrea;
                                                            tcomisi.value=valcomenviar;
                                                            timpues.value=valimpuestos;
                                                            ttotale.value=valtotalenviar;
                                                            tenviar.value=resultadoinicial;//modificar
                                                            //tmoneda.value='Real a Sol';
                                                            //trecibe.value=valtotalrecibe;
                                                            tmoneda.value='Sol a Real';
                                                            trecibe.value=tipototalrecibe.value;
                                                            btnsiguiente.style.display='block';
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }else{
                                    if(valmonto<5000){
                                        if(valmonto<200){
                                            comision=co100a199penabrl.value;
                                            inversa=in100a199penabrl.value;
                                            //inversa=inversacomision100a199.value;
                                            errorenvio.style.display='none';
                                            valcomision=(parseFloat(comision)*100).toFixed(2);
                                            resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valsolrea)).toFixed(2);//modificar
                                            valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                            valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                            tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;PEN";
                                            tipodecambio.innerHTML=valsolrea;
                                            tipodecomision.innerHTML=+valcomenviar+" PEN";
                                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;PEN";
                                            valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                            inputmontoenviar.value=valtotalrecibe;
                                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                                            tcambio.value=valsolrea;
                                            tcomisi.value=valcomenviar;
                                            timpues.value=valimpuestos;
                                            ttotale.value=valtotalenviar;
                                            tenviar.value=resultadoinicial;//modificar
                                            //tmoneda.value='Real a Sol';
                                            //trecibe.value=valtotalrecibe;
                                            tmoneda.value='Sol a Real';
                                            trecibe.value=tipototalrecibe.value;
                                            btnsiguiente.style.display='block';
                                        }else{
                                            if(valmonto<300){
                                                comision=co200a299penabrl.value;
                                                inversa=in200a299penabrl.value;
                                                //inversa=inversacomision200a299.value;
                                                errorenvio.style.display='none';
                                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                                resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valsolrea)).toFixed(2);//modificar
                                                valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;PEN";
                                                tipodecambio.innerHTML=valsolrea;
                                                tipodecomision.innerHTML=+valcomenviar+" PEN";
                                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;PEN";
                                                valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                inputmontoenviar.value=valtotalrecibe;
                                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                tcambio.value=valsolrea;
                                                tcomisi.value=valcomenviar;
                                                timpues.value=valimpuestos;
                                                ttotale.value=valtotalenviar;
                                                tenviar.value=resultadoinicial;//modificar
                                                //tmoneda.value='Real a Sol';
                                                //trecibe.value=valtotalrecibe;
                                                tmoneda.value='Sol a Real';
                                                trecibe.value=tipototalrecibe.value;
                                                btnsiguiente.style.display='block';
                                            }else{
                                                if(valmonto<500){
                                                    comision=co300a499penabrl.value;
                                                    inversa=in300a499penabrl.value;
                                                    //inversa=inversacomision300a399.value;
                                                    errorenvio.style.display='none';
                                                    valcomision=(parseFloat(comision)*100).toFixed(2);
                                                    resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valsolrea)).toFixed(2);//modificar
                                                    valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                    valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                    valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                    valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                    tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;PEN";
                                                    tipodecambio.innerHTML=valsolrea;
                                                    tipodecomision.innerHTML=+valcomenviar+" PEN";
                                                    tipototalenviar.innerHTML=valtotalenviar+"&nbsp;PEN";
                                                    valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                    inputmontoenviar.value=valtotalrecibe;
                                                    numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                    tcambio.value=valsolrea;
                                                    tcomisi.value=valcomenviar;
                                                    timpues.value=valimpuestos;
                                                    ttotale.value=valtotalenviar;
                                                    tenviar.value=resultadoinicial;//modificar
                                                    //tmoneda.value='Real a Sol';
                                                    //trecibe.value=valtotalrecibe;
                                                    tmoneda.value='Sol a Real';
                                                    trecibe.value=tipototalrecibe.value;
                                                    btnsiguiente.style.display='block';
                                                }else{
                                                    if(valmonto<1000){
                                                        comision=co500a999penabrl.value;
                                                        inversa=in500a999penabrl.value;
                                                        //inversa=inversacomision400a999.value;
                                                        errorenvio.style.display='none';
                                                        valcomision=(parseFloat(comision)*100).toFixed(2);
                                                        resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valsolrea)).toFixed(2);//modificar
                                                        valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                        valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                        valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                        valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                        tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;PEN";
                                                        tipodecambio.innerHTML=valsolrea;
                                                        tipodecomision.innerHTML=+valcomenviar+" PEN";
                                                        tipototalenviar.innerHTML=valtotalenviar+"&nbsp;PEN";
                                                        valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                        inputmontoenviar.value=valtotalrecibe;
                                                        numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                        tcambio.value=valsolrea;
                                                        tcomisi.value=valcomenviar;
                                                        timpues.value=valimpuestos;
                                                        ttotale.value=valtotalenviar;
                                                        tenviar.value=resultadoinicial;//modificar
                                                        //tmoneda.value='Real a Sol';
                                                        //trecibe.value=valtotalrecibe;
                                                        tmoneda.value='Sol a Real';
                                                        trecibe.value=tipototalrecibe.value;
                                                        btnsiguiente.style.display='block';
                                                    }else{
                                                        if(valmonto<5000){
                                                            comision=co1000a4999penabrl.value;
                                                            inversa=in1000a4999penabrl.value;
                                                            //inversa=inversacomision1000a5000.value;
                                                            errorenvio.style.display='none';
                                                            valcomision=(parseFloat(comision)*100).toFixed(2);
                                                            resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valsolrea)).toFixed(2);//modificar
                                                            valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                            valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                            tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;PEN";
                                                            tipodecambio.innerHTML=valsolrea;
                                                            tipodecomision.innerHTML=+valcomenviar+" PEN";
                                                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;PEN";
                                                            valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                            inputmontoenviar.value=valtotalrecibe;
                                                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                            tcambio.value=valsolrea;
                                                            tcomisi.value=valcomenviar;
                                                            timpues.value=valimpuestos;
                                                            ttotale.value=valtotalenviar;
                                                            tenviar.value=resultadoinicial;//modificar
                                                            //tmoneda.value='Real a Sol';
                                                            //trecibe.value=valtotalrecibe;
                                                            tmoneda.value='Sol a Real';
                                                            trecibe.value=tipototalrecibe.value;
                                                            btnsiguiente.style.display='block';
                                                        }else{
                                                            if(valmonto<=10000){
                                                                comision=co5000a10000penabrl.value;
                                                                inversa=in5000a10000penabrl.value;
                                                                //inversa=inversacomision1000a5000.value;
                                                                errorenvio.style.display='none';
                                                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                                                resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valsolrea)).toFixed(2);//modificar
                                                                valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                                valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                                tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;PEN";
                                                                tipodecambio.innerHTML=valsolrea;
                                                                tipodecomision.innerHTML=+valcomenviar+" PEN";
                                                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;PEN";
                                                                valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                                inputmontoenviar.value=valtotalrecibe;
                                                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                                tcambio.value=valsolrea;
                                                                tcomisi.value=valcomenviar;
                                                                timpues.value=valimpuestos;
                                                                ttotale.value=valtotalenviar;
                                                                tenviar.value=resultadoinicial;//modificar
                                                                //tmoneda.value='Real a Sol';
                                                                //trecibe.value=valtotalrecibe;
                                                                tmoneda.value='Sol a Real';
                                                                trecibe.value=tipototalrecibe.value;
                                                                btnsiguiente.style.display='block';
                                                            }else{
                                                                comision=co5000a10000penabrl.value;
                                                                inversa=in5000a10000penabrl.value;
                                                                //inversa=inversacomision1000a5000.value;
                                                                errorenvio.style.display='none';
                                                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                                                resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valsolrea)).toFixed(2);//modificar
                                                                valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                                valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                                tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;PEN";
                                                                tipodecambio.innerHTML=valsolrea;
                                                                tipodecomision.innerHTML=+valcomenviar+" PEN";
                                                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;PEN";
                                                                valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                                inputmontoenviar.value=valtotalrecibe;
                                                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                                tcambio.value=valsolrea;
                                                                tcomisi.value=valcomenviar;
                                                                timpues.value=valimpuestos;
                                                                ttotale.value=valtotalenviar;
                                                                tenviar.value=resultadoinicial;//modificar
                                                                //tmoneda.value='Real a Sol';
                                                                //trecibe.value=valtotalrecibe;
                                                                tmoneda.value='Sol a Real';
                                                                trecibe.value=tipototalrecibe.value;
                                                                btnsiguiente.style.display='block';
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }else{
                                        if(valmonto<=10000){
                                            if(valmonto<200){
                                                comision=co100a199penabrl.value;
                                                inversa=in100a199penabrl.value;
                                                //inversa=inversacomision100a199.value;
                                                errorenvio.style.display='none';
                                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                                resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valsolrea)).toFixed(2);//modificar
                                                valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;PEN";
                                                tipodecambio.innerHTML=valsolrea;
                                                tipodecomision.innerHTML=+valcomenviar+" PEN";
                                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;PEN";
                                                valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                inputmontoenviar.value=valtotalrecibe;
                                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                tcambio.value=valsolrea;
                                                tcomisi.value=valcomenviar;
                                                timpues.value=valimpuestos;
                                                ttotale.value=valtotalenviar;
                                                tenviar.value=resultadoinicial;//modificar
                                                //tmoneda.value='Real a Sol';
                                                //trecibe.value=valtotalrecibe;
                                                tmoneda.value='Sol a Real';
                                                trecibe.value=tipototalrecibe.value;
                                                btnsiguiente.style.display='block';
                                            }else{
                                                if(valmonto<300){
                                                    comision=co200a299penabrl.value;
                                                    inversa=in200a299penabrl.value;
                                                    //inversa=inversacomision200a299.value;
                                                    errorenvio.style.display='none';
                                                    valcomision=(parseFloat(comision)*100).toFixed(2);
                                                    resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valsolrea)).toFixed(2);//modificar
                                                    valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                    valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                    valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                    valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                    tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;PEN";
                                                    tipodecambio.innerHTML=valsolrea;
                                                    tipodecomision.innerHTML=+valcomenviar+" PEN";
                                                    tipototalenviar.innerHTML=valtotalenviar+"&nbsp;PEN";
                                                    valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                    inputmontoenviar.value=valtotalrecibe;
                                                    numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                    tcambio.value=valsolrea;
                                                    tcomisi.value=valcomenviar;
                                                    timpues.value=valimpuestos;
                                                    ttotale.value=valtotalenviar;
                                                    tenviar.value=resultadoinicial;//modificar
                                                    //tmoneda.value='Real a Sol';
                                                    //trecibe.value=valtotalrecibe;
                                                    tmoneda.value='Sol a Real';
                                                    trecibe.value=tipototalrecibe.value;
                                                    btnsiguiente.style.display='block';
                                                }else{
                                                    if(valmonto<500){
                                                        comision=co300a499penabrl.value;
                                                        inversa=in300a499penabrl.value;
                                                        //inversa=inversacomision300a399.value;
                                                        errorenvio.style.display='none';
                                                        valcomision=(parseFloat(comision)*100).toFixed(2);
                                                        resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valsolrea)).toFixed(2);//modificar
                                                        valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                        valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                        valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                        valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                        tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;PEN";
                                                        tipodecambio.innerHTML=valsolrea;
                                                        tipodecomision.innerHTML=+valcomenviar+" PEN";
                                                        tipototalenviar.innerHTML=valtotalenviar+"&nbsp;PEN";
                                                        valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                        inputmontoenviar.value=valtotalrecibe;
                                                        numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                        tcambio.value=valsolrea;
                                                        tcomisi.value=valcomenviar;
                                                        timpues.value=valimpuestos;
                                                        ttotale.value=valtotalenviar;
                                                        tenviar.value=resultadoinicial;//modificar
                                                        //tmoneda.value='Real a Sol';
                                                        //trecibe.value=valtotalrecibe;
                                                        tmoneda.value='Sol a Real';
                                                        trecibe.value=tipototalrecibe.value;
                                                        btnsiguiente.style.display='block';
                                                    }else{
                                                        if(valmonto<1000){
                                                            comision=co500a999penabrl.value;
                                                            inversa=in500a999penabrl.value;
                                                            //inversa=inversacomision400a999.value;
                                                            errorenvio.style.display='none';
                                                            valcomision=(parseFloat(comision)*100).toFixed(2);
                                                            resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valsolrea)).toFixed(2);//modificar
                                                            valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                            valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                            tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;PEN";
                                                            tipodecambio.innerHTML=valsolrea;
                                                            tipodecomision.innerHTML=+valcomenviar+" PEN";
                                                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;PEN";
                                                            valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                            inputmontoenviar.value=valtotalrecibe;
                                                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                            tcambio.value=valsolrea;
                                                            tcomisi.value=valcomenviar;
                                                            timpues.value=valimpuestos;
                                                            ttotale.value=valtotalenviar;
                                                            tenviar.value=resultadoinicial;//modificar
                                                            //tmoneda.value='Real a Sol';
                                                            //trecibe.value=valtotalrecibe;
                                                            tmoneda.value='Sol a Real';
                                                            trecibe.value=tipototalrecibe.value;
                                                            btnsiguiente.style.display='block';
                                                        }else{
                                                            if(valmonto<5000){
                                                                comision=co1000a4999penabrl.value;
                                                                inversa=in1000a4999penabrl.value;
                                                                //inversa=inversacomision1000a5000.value;
                                                                errorenvio.style.display='none';
                                                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                                                resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valsolrea)).toFixed(2);//modificar
                                                                valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                                valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                                tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;PEN";
                                                                tipodecambio.innerHTML=valsolrea;
                                                                tipodecomision.innerHTML=+valcomenviar+" PEN";
                                                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;PEN";
                                                                valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                                inputmontoenviar.value=valtotalrecibe;
                                                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                                tcambio.value=valsolrea;
                                                                tcomisi.value=valcomenviar;
                                                                timpues.value=valimpuestos;
                                                                ttotale.value=valtotalenviar;
                                                                tenviar.value=resultadoinicial;//modificar
                                                                //tmoneda.value='Real a Sol';
                                                                //trecibe.value=valtotalrecibe;
                                                                tmoneda.value='Sol a Real';
                                                                trecibe.value=tipototalrecibe.value;
                                                                btnsiguiente.style.display='block';
                                                            }else{
                                                                if(valmonto<=10000){
                                                                    comision=co5000a10000penabrl.value;
                                                                    inversa=in5000a10000penabrl.value;
                                                                    //inversa=inversacomision1000a5000.value;
                                                                    errorenvio.style.display='none';
                                                                    valcomision=(parseFloat(comision)*100).toFixed(2);
                                                                    resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valsolrea)).toFixed(2);//modificar
                                                                    valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                                    valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                                    valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                                    valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                                    tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;PEN";
                                                                    tipodecambio.innerHTML=valsolrea;
                                                                    tipodecomision.innerHTML=+valcomenviar+" PEN";
                                                                    tipototalenviar.innerHTML=valtotalenviar+"&nbsp;PEN";
                                                                    valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                                    inputmontoenviar.value=valtotalrecibe;
                                                                    numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                                    tcambio.value=valsolrea;
                                                                    tcomisi.value=valcomenviar;
                                                                    timpues.value=valimpuestos;
                                                                    ttotale.value=valtotalenviar;
                                                                    tenviar.value=resultadoinicial;//modificar
                                                                    //tmoneda.value='Real a Sol';
                                                                    //trecibe.value=valtotalrecibe;
                                                                    tmoneda.value='Sol a Real';
                                                                    trecibe.value=tipototalrecibe.value;
                                                                    btnsiguiente.style.display='block';
                                                                }else{
                                                                    comision=co5000a10000penabrl.value;
                                                                    inversa=in5000a10000penabrl.value;
                                                                    //inversa=inversacomision1000a5000.value;
                                                                    errorenvio.style.display='none';
                                                                    valcomision=(parseFloat(comision)*100).toFixed(2);
                                                                    resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valsolrea)).toFixed(2);//modificar
                                                                    valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                                    valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                                    valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                                    valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                                    tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;PEN";
                                                                    tipodecambio.innerHTML=valsolrea;
                                                                    tipodecomision.innerHTML=+valcomenviar+" PEN";
                                                                    tipototalenviar.innerHTML=valtotalenviar+"&nbsp;PEN";
                                                                    valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                                    inputmontoenviar.value=valtotalrecibe;
                                                                    numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                                    tcambio.value=valsolrea;
                                                                    tcomisi.value=valcomenviar;
                                                                    timpues.value=valimpuestos;
                                                                    ttotale.value=valtotalenviar;
                                                                    tenviar.value=resultadoinicial;//modificar
                                                                    //tmoneda.value='Real a Sol';
                                                                    //trecibe.value=valtotalrecibe;
                                                                    tmoneda.value='Sol a Real';
                                                                    trecibe.value=tipototalrecibe.value;
                                                                    btnsiguiente.style.display='block';
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }else{
                                            comision=co5000a10000penabrl.value;
                                            inversa=in5000a10000penabrl.value;
                                            //inversa=inversacomision1000a5000.value;
                                            errorenvio.style.display='none';
                                            valcomision=(parseFloat(comision)*100).toFixed(2);
                                            resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valsolrea)).toFixed(2);//modificar
                                            valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                            valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                            tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;PEN";
                                            tipodecambio.innerHTML=valsolrea;
                                            tipodecomision.innerHTML=+valcomenviar+" PEN";
                                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;PEN";
                                            valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                            inputmontoenviar.value=valtotalrecibe;
                                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                                            tcambio.value=valsolrea;
                                            tcomisi.value=valcomenviar;
                                            timpues.value=valimpuestos;
                                            ttotale.value=valtotalenviar;
                                            tenviar.value=resultadoinicial;//modificar
                                            //tmoneda.value='Real a Sol';
                                            //trecibe.value=valtotalrecibe;
                                            tmoneda.value='Sol a Real';
                                            trecibe.value=tipototalrecibe.value;
                                            btnsiguiente.style.display='block';
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                break;
            case('usdbrl'):
                var valmontoinit=inputmontoenviar.value;
                var valmonto=valabajo;
                if(valmonto<0){
                    errorenvio.style.display='block';
                    errorenvio.innerHTML='Ingrese Monto mayor a 100';
                    tipodeimpuestos.innerHTML="0.00";
                    tipodecambio.innerHTML="0.00";
                    tipodecomision.innerHTML="0.00";
                    tipototalenviar.innerHTML="0.00";
                    tipototalrecibe.value="0.00";
                    numcomision.innerHTML="0.00";
                    tcambio.value=0;
                    tcomisi.value=0;
                    timpues.value=0;
                    ttotale.value=0;
                    tenviar.value=0;
                    trecibe.value=0;
                    tmoneda.value='Real a Dolar';
                    btnsiguiente.style.display='none';
                }else{
                    if(valmonto<200){
                        if(valmonto<200){
                            comision=co100a199usdabrl.value;
                            inversa=in100a199usdabrl.value;
                            //inversa=inversacomision100a199.value;
                            errorenvio.style.display='none';
                            valcomision=(parseFloat(comision)*100).toFixed(2);
                            resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valusdareal)).toFixed(2);//modificar
                            valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                            valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                            tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                            tipodecambio.innerHTML=valusdareal;
                            tipodecomision.innerHTML=+valcomenviar+" BRL";
                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                            valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                            inputmontoenviar.value=valtotalrecibe;
                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                            tcambio.value=valusdareal;
                            tcomisi.value=valcomenviar;
                            timpues.value=valimpuestos;
                            ttotale.value=valtotalenviar;
                            tenviar.value=resultadoinicial;//modificar
                            trecibe.value=valtotalrecibe;
                            tmoneda.value='Real a Dolar';
                            btnsiguiente.style.display='block';
                        }else{
                            if(valmonto<300){
                                comision=co200a299usdabrl.value;
                                inversa=in200a299usdabrl.value;
                                //inversa=inversacomision200a299.value;
                                errorenvio.style.display='none';
                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valusdareal)).toFixed(2);//modificar
                                valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                tipodecambio.innerHTML=valusdareal;
                                tipodecomision.innerHTML=+valcomenviar+" BRL";
                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                inputmontoenviar.value=valtotalrecibe;
                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                tcambio.value=valusdareal;
                                tcomisi.value=valcomenviar;
                                timpues.value=valimpuestos;
                                ttotale.value=valtotalenviar;
                                tenviar.value=resultadoinicial;//modificar
                                trecibe.value=valtotalrecibe;
                                tmoneda.value='Real a Dolar';
                                btnsiguiente.style.display='block';
                            }else{
                                if(valmonto<500){
                                    comision=co300a499usdabrl.value;
                                    inversa=in300a499usdabrl.value;
                                    //inversa=inversacomision300a399.value;
                                    errorenvio.style.display='none';
                                    valcomision=(parseFloat(comision)*100).toFixed(2);
                                    resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valusdareal)).toFixed(2);//modificar
                                    valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                    valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                    valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                    valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                    tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                    tipodecambio.innerHTML=valusdareal;
                                    tipodecomision.innerHTML=+valcomenviar+" BRL";
                                    tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                    valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                    inputmontoenviar.value=valtotalrecibe;
                                    numcomision.innerHTML=valcomision+"% : &nbsp;";
                                    tcambio.value=valusdareal;
                                    tcomisi.value=valcomenviar;
                                    timpues.value=valimpuestos;
                                    ttotale.value=valtotalenviar;
                                    tenviar.value=resultadoinicial;//modificar
                                    trecibe.value=valtotalrecibe;
                                    tmoneda.value='Real a Dolar';
                                    btnsiguiente.style.display='block';
                                }else{
                                    if(valmonto<1000){
                                        comision=co500a999usdabrl.value;
                                        inversa=in500a999usdabrl.value;
                                        //inversa=inversacomision400a999.value;
                                        errorenvio.style.display='none';
                                        valcomision=(parseFloat(comision)*100).toFixed(2);
                                        resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valusdareal)).toFixed(2);//modificar
                                        valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                        valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                        valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                        valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                        tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                        tipodecambio.innerHTML=valusdareal;
                                        tipodecomision.innerHTML=+valcomenviar+" BRL";
                                        tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                        valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                        inputmontoenviar.value=valtotalrecibe;
                                        numcomision.innerHTML=valcomision+"% : &nbsp;";
                                        tcambio.value=valusdareal;
                                        tcomisi.value=valcomenviar;
                                        timpues.value=valimpuestos;
                                        ttotale.value=valtotalenviar;
                                        tenviar.value=resultadoinicial;//modificar
                                        trecibe.value=valtotalrecibe;
                                        tmoneda.value='Real a Dolar';
                                        btnsiguiente.style.display='block';
                                    }else{
                                        if(valmonto<5000){
                                            comision=co1000a4999usdabrl.value;
                                            inversa=in1000a4999usdabrl.value;
                                            //inversa=in1000a5000usdbrl;
                                            //comision=comision1000a5000.value;
                                            //inversa=inversacomision1000a5000.value;
                                            errorenvio.style.display='none';
                                            valcomision=(parseFloat(comision)*100).toFixed(2);
                                            resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valusdareal)).toFixed(2);//modificar
                                            valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                            valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                            tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                            tipodecambio.innerHTML=valusdareal;
                                            tipodecomision.innerHTML=+valcomenviar+" BRL";
                                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                            valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                            inputmontoenviar.value=valtotalrecibe;
                                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                                            tcambio.value=valusdareal;
                                            tcomisi.value=valcomenviar;
                                            timpues.value=valimpuestos;
                                            ttotale.value=valtotalenviar;
                                            tenviar.value=resultadoinicial;//modificar
                                            trecibe.value=valtotalrecibe;
                                            tmoneda.value='Real a Dolar';
                                            btnsiguiente.style.display='block';
                                        }else{
                                            if(valmonto<=10000){
                                                comision=co5000a10000usdabrl.value;
                                                inversa=in5000a10000usdabrl.value;
                                                //inversa=in1000a5000usdbrl;
                                                //comision=comision1000a5000.value;
                                                //inversa=inversacomision1000a5000.value;
                                                errorenvio.style.display='none';
                                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                                resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valusdareal)).toFixed(2);//modificar
                                                valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                tipodecambio.innerHTML=valusdareal;
                                                tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                inputmontoenviar.value=valtotalrecibe;
                                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                tcambio.value=valusdareal;
                                                tcomisi.value=valcomenviar;
                                                timpues.value=valimpuestos;
                                                ttotale.value=valtotalenviar;
                                                tenviar.value=resultadoinicial;//modificar
                                                trecibe.value=valtotalrecibe;
                                                tmoneda.value='Real a Dolar';
                                                btnsiguiente.style.display='block';
                                            }else{
                                                comision=co5000a10000usdabrl.value;
                                                inversa=in5000a10000usdabrl.value;
                                                //inversa=in1000a5000usdbrl;
                                                //comision=comision1000a5000.value;
                                                //inversa=inversacomision1000a5000.value;
                                                errorenvio.style.display='none';
                                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                                resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valusdareal)).toFixed(2);//modificar
                                                valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                tipodecambio.innerHTML=valusdareal;
                                                tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                inputmontoenviar.value=valtotalrecibe;
                                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                tcambio.value=valusdareal;
                                                tcomisi.value=valcomenviar;
                                                timpues.value=valimpuestos;
                                                ttotale.value=valtotalenviar;
                                                tenviar.value=resultadoinicial;//modificar
                                                trecibe.value=valtotalrecibe;
                                                tmoneda.value='Real a Dolar';
                                                btnsiguiente.style.display='block'; 
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }else{
                        if(valmonto<300){
                            if(valmonto<200){
                                comision=co100a199usdabrl.value;
                                inversa=in100a199usdabrl.value;
                                //inversa=inversacomision100a199.value;
                                errorenvio.style.display='none';
                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valusdareal)).toFixed(2);//modificar
                                valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                tipodecambio.innerHTML=valusdareal;
                                tipodecomision.innerHTML=+valcomenviar+" BRL";
                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                inputmontoenviar.value=valtotalrecibe;
                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                tcambio.value=valusdareal;
                                tcomisi.value=valcomenviar;
                                timpues.value=valimpuestos;
                                ttotale.value=valtotalenviar;
                                tenviar.value=resultadoinicial;//modificar
                                trecibe.value=valtotalrecibe;
                                tmoneda.value='Real a Dolar';
                                btnsiguiente.style.display='block';
                            }else{
                                if(valmonto<300){
                                    comision=co200a299usdabrl.value;
                                    inversa=in200a299usdabrl.value;
                                    //inversa=inversacomision200a299.value;
                                    errorenvio.style.display='none';
                                    valcomision=(parseFloat(comision)*100).toFixed(2);
                                    resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valusdareal)).toFixed(2);//modificar
                                    valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                    valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                    valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                    valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                    tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                    tipodecambio.innerHTML=valusdareal;
                                    tipodecomision.innerHTML=+valcomenviar+" BRL";
                                    tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                    valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                    inputmontoenviar.value=valtotalrecibe;
                                    numcomision.innerHTML=valcomision+"% : &nbsp;";
                                    tcambio.value=valusdareal;
                                    tcomisi.value=valcomenviar;
                                    timpues.value=valimpuestos;
                                    ttotale.value=valtotalenviar;
                                    tenviar.value=resultadoinicial;//modificar
                                    trecibe.value=valtotalrecibe;
                                    tmoneda.value='Real a Dolar';
                                    btnsiguiente.style.display='block';
                                }else{
                                    if(valmonto<500){
                                        comision=co300a499usdabrl.value;
                                        inversa=in300a499usdabrl.value;
                                        //inversa=inversacomision300a399.value;
                                        errorenvio.style.display='none';
                                        valcomision=(parseFloat(comision)*100).toFixed(2);
                                        resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valusdareal)).toFixed(2);//modificar
                                        valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                        valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                        valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                        valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                        tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                        tipodecambio.innerHTML=valusdareal;
                                        tipodecomision.innerHTML=+valcomenviar+" BRL";
                                        tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                        valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                        inputmontoenviar.value=valtotalrecibe;
                                        numcomision.innerHTML=valcomision+"% : &nbsp;";
                                        tcambio.value=valusdareal;
                                        tcomisi.value=valcomenviar;
                                        timpues.value=valimpuestos;
                                        ttotale.value=valtotalenviar;
                                        tenviar.value=resultadoinicial;//modificar
                                        trecibe.value=valtotalrecibe;
                                        tmoneda.value='Real a Dolar';
                                        btnsiguiente.style.display='block';
                                    }else{
                                        if(valmonto<1000){
                                            comision=co500a999usdabrl.value;
                                            inversa=in500a999usdabrl.value;
                                            //inversa=inversacomision400a999.value;
                                            errorenvio.style.display='none';
                                            valcomision=(parseFloat(comision)*100).toFixed(2);
                                            resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valusdareal)).toFixed(2);//modificar
                                            valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                            valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                            tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                            tipodecambio.innerHTML=valusdareal;
                                            tipodecomision.innerHTML=+valcomenviar+" BRL";
                                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                            valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                            inputmontoenviar.value=valtotalrecibe;
                                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                                            tcambio.value=valusdareal;
                                            tcomisi.value=valcomenviar;
                                            timpues.value=valimpuestos;
                                            ttotale.value=valtotalenviar;
                                            tenviar.value=resultadoinicial;//modificar
                                            trecibe.value=valtotalrecibe;
                                            tmoneda.value='Real a Dolar';
                                            btnsiguiente.style.display='block';
                                        }else{
                                            if(valmonto<5000){
                                                comision=co1000a4999usdabrl.value;
                                                inversa=in1000a4999usdabrl.value;
                                                //inversa=in1000a5000usdbrl;
                                                //comision=comision1000a5000.value;
                                                //inversa=inversacomision1000a5000.value;
                                                errorenvio.style.display='none';
                                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                                resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valusdareal)).toFixed(2);//modificar
                                                valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                tipodecambio.innerHTML=valusdareal;
                                                tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                inputmontoenviar.value=valtotalrecibe;
                                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                tcambio.value=valusdareal;
                                                tcomisi.value=valcomenviar;
                                                timpues.value=valimpuestos;
                                                ttotale.value=valtotalenviar;
                                                tenviar.value=resultadoinicial;//modificar
                                                trecibe.value=valtotalrecibe;
                                                tmoneda.value='Real a Dolar';
                                                btnsiguiente.style.display='block';
                                            }else{
                                                if(valmonto<=10000){
                                                    comision=co5000a10000usdabrl.value;
                                                    inversa=in5000a10000usdabrl.value;
                                                    //inversa=in1000a5000usdbrl;
                                                    //comision=comision1000a5000.value;
                                                    //inversa=inversacomision1000a5000.value;
                                                    errorenvio.style.display='none';
                                                    valcomision=(parseFloat(comision)*100).toFixed(2);
                                                    resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valusdareal)).toFixed(2);//modificar
                                                    valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                    valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                    valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                    valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                    tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                    tipodecambio.innerHTML=valusdareal;
                                                    tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                    tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                    valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                    inputmontoenviar.value=valtotalrecibe;
                                                    numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                    tcambio.value=valusdareal;
                                                    tcomisi.value=valcomenviar;
                                                    timpues.value=valimpuestos;
                                                    ttotale.value=valtotalenviar;
                                                    tenviar.value=resultadoinicial;//modificar
                                                    trecibe.value=valtotalrecibe;
                                                    tmoneda.value='Real a Dolar';
                                                    btnsiguiente.style.display='block';
                                                }else{
                                                    comision=co5000a10000usdabrl.value;
                                                    inversa=in5000a10000usdabrl.value;
                                                    //inversa=in1000a5000usdbrl;
                                                    //comision=comision1000a5000.value;
                                                    //inversa=inversacomision1000a5000.value;
                                                    errorenvio.style.display='none';
                                                    valcomision=(parseFloat(comision)*100).toFixed(2);
                                                    resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valusdareal)).toFixed(2);//modificar
                                                    valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                    valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                    valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                    valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                    tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                    tipodecambio.innerHTML=valusdareal;
                                                    tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                    tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                    valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                    inputmontoenviar.value=valtotalrecibe;
                                                    numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                    tcambio.value=valusdareal;
                                                    tcomisi.value=valcomenviar;
                                                    timpues.value=valimpuestos;
                                                    ttotale.value=valtotalenviar;
                                                    tenviar.value=resultadoinicial;//modificar
                                                    trecibe.value=valtotalrecibe;
                                                    tmoneda.value='Real a Dolar';
                                                    btnsiguiente.style.display='block'; 
                                                } 
                                            }
                                        }
                                    }
                                }
                            }
                        }else{
                            if(valmonto<500){
                                if(valmonto<200){
                                    comision=co100a199usdabrl.value;
                                    inversa=in100a199usdabrl.value;
                                    //inversa=inversacomision100a199.value;
                                    errorenvio.style.display='none';
                                    valcomision=(parseFloat(comision)*100).toFixed(2);
                                    resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valusdareal)).toFixed(2);//modificar
                                    valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                    valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                    valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                    valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                    tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                    tipodecambio.innerHTML=valusdareal;
                                    tipodecomision.innerHTML=+valcomenviar+" BRL";
                                    tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                    valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                    inputmontoenviar.value=valtotalrecibe;
                                    numcomision.innerHTML=valcomision+"% : &nbsp;";
                                    tcambio.value=valusdareal;
                                    tcomisi.value=valcomenviar;
                                    timpues.value=valimpuestos;
                                    ttotale.value=valtotalenviar;
                                    tenviar.value=resultadoinicial;//modificar
                                    trecibe.value=valtotalrecibe;
                                    tmoneda.value='Real a Dolar';
                                    btnsiguiente.style.display='block';
                                }else{
                                    if(valmonto<300){
                                        comision=co200a299usdabrl.value;
                                        inversa=in200a299usdabrl.value;
                                        //inversa=inversacomision200a299.value;
                                        errorenvio.style.display='none';
                                        valcomision=(parseFloat(comision)*100).toFixed(2);
                                        resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valusdareal)).toFixed(2);//modificar
                                        valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                        valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                        valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                        valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                        tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                        tipodecambio.innerHTML=valusdareal;
                                        tipodecomision.innerHTML=+valcomenviar+" BRL";
                                        tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                        valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                        inputmontoenviar.value=valtotalrecibe;
                                        numcomision.innerHTML=valcomision+"% : &nbsp;";
                                        tcambio.value=valusdareal;
                                        tcomisi.value=valcomenviar;
                                        timpues.value=valimpuestos;
                                        ttotale.value=valtotalenviar;
                                        tenviar.value=resultadoinicial;//modificar
                                        trecibe.value=valtotalrecibe;
                                        tmoneda.value='Real a Dolar';
                                        btnsiguiente.style.display='block';
                                    }else{
                                        if(valmonto<500){
                                            comision=co300a499usdabrl.value;
                                            inversa=in300a499usdabrl.value;
                                            //inversa=inversacomision300a399.value;
                                            errorenvio.style.display='none';
                                            valcomision=(parseFloat(comision)*100).toFixed(2);
                                            resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valusdareal)).toFixed(2);//modificar
                                            valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                            valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                            tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                            tipodecambio.innerHTML=valusdareal;
                                            tipodecomision.innerHTML=+valcomenviar+" BRL";
                                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                            valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                            inputmontoenviar.value=valtotalrecibe;
                                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                                            tcambio.value=valusdareal;
                                            tcomisi.value=valcomenviar;
                                            timpues.value=valimpuestos;
                                            ttotale.value=valtotalenviar;
                                            tenviar.value=resultadoinicial;//modificar
                                            trecibe.value=valtotalrecibe;
                                            tmoneda.value='Real a Dolar';
                                            btnsiguiente.style.display='block';
                                        }else{
                                            if(valmonto<1000){
                                                comision=co500a999usdabrl.value;
                                                inversa=in500a999usdabrl.value;
                                                //inversa=inversacomision400a999.value;
                                                errorenvio.style.display='none';
                                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                                resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valusdareal)).toFixed(2);//modificar
                                                valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                tipodecambio.innerHTML=valusdareal;
                                                tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                inputmontoenviar.value=valtotalrecibe;
                                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                tcambio.value=valusdareal;
                                                tcomisi.value=valcomenviar;
                                                timpues.value=valimpuestos;
                                                ttotale.value=valtotalenviar;
                                                tenviar.value=resultadoinicial;//modificar
                                                trecibe.value=valtotalrecibe;
                                                tmoneda.value='Real a Dolar';
                                                btnsiguiente.style.display='block';
                                            }else{
                                                if(valmonto<5000){
                                                    comision=co1000a4999usdabrl.value;
                                                    inversa=in1000a4999usdabrl.value;
                                                    //inversa=in1000a5000usdbrl;
                                                    //comision=comision1000a5000.value;
                                                    //inversa=inversacomision1000a5000.value;
                                                    errorenvio.style.display='none';
                                                    valcomision=(parseFloat(comision)*100).toFixed(2);
                                                    resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valusdareal)).toFixed(2);//modificar
                                                    valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                    valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                    valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                    valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                    tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                    tipodecambio.innerHTML=valusdareal;
                                                    tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                    tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                    valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                    inputmontoenviar.value=valtotalrecibe;
                                                    numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                    tcambio.value=valusdareal;
                                                    tcomisi.value=valcomenviar;
                                                    timpues.value=valimpuestos;
                                                    ttotale.value=valtotalenviar;
                                                    tenviar.value=resultadoinicial;//modificar
                                                    trecibe.value=valtotalrecibe;
                                                    tmoneda.value='Real a Dolar';
                                                    btnsiguiente.style.display='block';
                                                }else{
                                                    if(valmonto<=10000){
                                                        comision=co5000a10000usdabrl.value;
                                                        inversa=in5000a10000usdabrl.value;
                                                        //inversa=in1000a5000usdbrl;
                                                        //comision=comision1000a5000.value;
                                                        //inversa=inversacomision1000a5000.value;
                                                        errorenvio.style.display='none';
                                                        valcomision=(parseFloat(comision)*100).toFixed(2);
                                                        resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valusdareal)).toFixed(2);//modificar
                                                        valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                        valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                        valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                        valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                        tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                        tipodecambio.innerHTML=valusdareal;
                                                        tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                        tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                        valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                        inputmontoenviar.value=valtotalrecibe;
                                                        numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                        tcambio.value=valusdareal;
                                                        tcomisi.value=valcomenviar;
                                                        timpues.value=valimpuestos;
                                                        ttotale.value=valtotalenviar;
                                                        tenviar.value=resultadoinicial;//modificar
                                                        trecibe.value=valtotalrecibe;
                                                        tmoneda.value='Real a Dolar';
                                                        btnsiguiente.style.display='block';
                                                    }else{
                                                        comision=co5000a10000usdabrl.value;
                                                        inversa=in5000a10000usdabrl.value;
                                                        //inversa=in1000a5000usdbrl;
                                                        //comision=comision1000a5000.value;
                                                        //inversa=inversacomision1000a5000.value;
                                                        errorenvio.style.display='none';
                                                        valcomision=(parseFloat(comision)*100).toFixed(2);
                                                        resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valusdareal)).toFixed(2);//modificar
                                                        valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                        valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                        valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                        valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                        tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                        tipodecambio.innerHTML=valusdareal;
                                                        tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                        tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                        valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                        inputmontoenviar.value=valtotalrecibe;
                                                        numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                        tcambio.value=valusdareal;
                                                        tcomisi.value=valcomenviar;
                                                        timpues.value=valimpuestos;
                                                        ttotale.value=valtotalenviar;
                                                        tenviar.value=resultadoinicial;//modificar
                                                        trecibe.value=valtotalrecibe;
                                                        tmoneda.value='Real a Dolar';
                                                        btnsiguiente.style.display='block'; 
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }else{
                                if(valmonto<1000){
                                    if(valmonto<200){
                                        comision=co100a199usdabrl.value;
                                        inversa=in100a199usdabrl.value;
                                        //inversa=inversacomision100a199.value;
                                        errorenvio.style.display='none';
                                        valcomision=(parseFloat(comision)*100).toFixed(2);
                                        resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valusdareal)).toFixed(2);//modificar
                                        valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                        valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                        valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                        valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                        tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                        tipodecambio.innerHTML=valusdareal;
                                        tipodecomision.innerHTML=+valcomenviar+" BRL";
                                        tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                        valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                        inputmontoenviar.value=valtotalrecibe;
                                        numcomision.innerHTML=valcomision+"% : &nbsp;";
                                        tcambio.value=valusdareal;
                                        tcomisi.value=valcomenviar;
                                        timpues.value=valimpuestos;
                                        ttotale.value=valtotalenviar;
                                        tenviar.value=resultadoinicial;//modificar
                                        trecibe.value=valtotalrecibe;
                                        tmoneda.value='Real a Dolar';
                                        btnsiguiente.style.display='block';
                                    }else{
                                        if(valmonto<300){
                                            comision=co200a299usdabrl.value;
                                            inversa=in200a299usdabrl.value;
                                            //inversa=inversacomision200a299.value;
                                            errorenvio.style.display='none';
                                            valcomision=(parseFloat(comision)*100).toFixed(2);
                                            resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valusdareal)).toFixed(2);//modificar
                                            valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                            valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                            tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                            tipodecambio.innerHTML=valusdareal;
                                            tipodecomision.innerHTML=+valcomenviar+" BRL";
                                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                            valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                            inputmontoenviar.value=valtotalrecibe;
                                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                                            tcambio.value=valusdareal;
                                            tcomisi.value=valcomenviar;
                                            timpues.value=valimpuestos;
                                            ttotale.value=valtotalenviar;
                                            tenviar.value=resultadoinicial;//modificar
                                            trecibe.value=valtotalrecibe;
                                            tmoneda.value='Real a Dolar';
                                            btnsiguiente.style.display='block';
                                        }else{
                                            if(valmonto<500){
                                                comision=co300a499usdabrl.value;
                                                inversa=in300a499usdabrl.value;
                                                //inversa=inversacomision300a399.value;
                                                errorenvio.style.display='none';
                                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                                resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valusdareal)).toFixed(2);//modificar
                                                valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                tipodecambio.innerHTML=valusdareal;
                                                tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                inputmontoenviar.value=valtotalrecibe;
                                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                tcambio.value=valusdareal;
                                                tcomisi.value=valcomenviar;
                                                timpues.value=valimpuestos;
                                                ttotale.value=valtotalenviar;
                                                tenviar.value=resultadoinicial;//modificar
                                                trecibe.value=valtotalrecibe;
                                                tmoneda.value='Real a Dolar';
                                                btnsiguiente.style.display='block';
                                            }else{
                                                if(valmonto<1000){
                                                    comision=co500a999usdabrl.value;
                                                    inversa=in500a999usdabrl.value;
                                                    //inversa=inversacomision400a999.value;
                                                    errorenvio.style.display='none';
                                                    valcomision=(parseFloat(comision)*100).toFixed(2);
                                                    resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valusdareal)).toFixed(2);//modificar
                                                    valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                    valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                    valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                    valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                    tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                    tipodecambio.innerHTML=valusdareal;
                                                    tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                    tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                    valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                    inputmontoenviar.value=valtotalrecibe;
                                                    numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                    tcambio.value=valusdareal;
                                                    tcomisi.value=valcomenviar;
                                                    timpues.value=valimpuestos;
                                                    ttotale.value=valtotalenviar;
                                                    tenviar.value=resultadoinicial;//modificar
                                                    trecibe.value=valtotalrecibe;
                                                    tmoneda.value='Real a Dolar';
                                                    btnsiguiente.style.display='block';
                                                }else{
                                                    if(valmonto<5000){
                                                        comision=co1000a4999usdabrl.value;
                                                        inversa=in1000a4999usdabrl.value;
                                                        //inversa=in1000a5000usdbrl;
                                                        //comision=comision1000a5000.value;
                                                        //inversa=inversacomision1000a5000.value;
                                                        errorenvio.style.display='none';
                                                        valcomision=(parseFloat(comision)*100).toFixed(2);
                                                        resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valusdareal)).toFixed(2);//modificar
                                                        valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                        valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                        valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                        valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                        tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                        tipodecambio.innerHTML=valusdareal;
                                                        tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                        tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                        valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                        inputmontoenviar.value=valtotalrecibe;
                                                        numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                        tcambio.value=valusdareal;
                                                        tcomisi.value=valcomenviar;
                                                        timpues.value=valimpuestos;
                                                        ttotale.value=valtotalenviar;
                                                        tenviar.value=resultadoinicial;//modificar
                                                        trecibe.value=valtotalrecibe;
                                                        tmoneda.value='Real a Dolar';
                                                        btnsiguiente.style.display='block';
                                                    }else{
                                                        if(valmonto<=10000){
                                                            comision=co5000a10000usdabrl.value;
                                                            inversa=in5000a10000usdabrl.value;
                                                            //inversa=in1000a5000usdbrl;
                                                            //comision=comision1000a5000.value;
                                                            //inversa=inversacomision1000a5000.value;
                                                            errorenvio.style.display='none';
                                                            valcomision=(parseFloat(comision)*100).toFixed(2);
                                                            resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valusdareal)).toFixed(2);//modificar
                                                            valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                            valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                            tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                            tipodecambio.innerHTML=valusdareal;
                                                            tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                            valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                            inputmontoenviar.value=valtotalrecibe;
                                                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                            tcambio.value=valusdareal;
                                                            tcomisi.value=valcomenviar;
                                                            timpues.value=valimpuestos;
                                                            ttotale.value=valtotalenviar;
                                                            tenviar.value=resultadoinicial;//modificar
                                                            trecibe.value=valtotalrecibe;
                                                            tmoneda.value='Real a Dolar';
                                                            btnsiguiente.style.display='block';
                                                        }else{
                                                            comision=co5000a10000usdabrl.value;
                                                            inversa=in5000a10000usdabrl.value;
                                                            //inversa=in1000a5000usdbrl;
                                                            //comision=comision1000a5000.value;
                                                            //inversa=inversacomision1000a5000.value;
                                                            errorenvio.style.display='none';
                                                            valcomision=(parseFloat(comision)*100).toFixed(2);
                                                            resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valusdareal)).toFixed(2);//modificar
                                                            valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                            valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                            tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                            tipodecambio.innerHTML=valusdareal;
                                                            tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                            valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                            inputmontoenviar.value=valtotalrecibe;
                                                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                            tcambio.value=valusdareal;
                                                            tcomisi.value=valcomenviar;
                                                            timpues.value=valimpuestos;
                                                            ttotale.value=valtotalenviar;
                                                            tenviar.value=resultadoinicial;//modificar
                                                            trecibe.value=valtotalrecibe;
                                                            tmoneda.value='Real a Dolar';
                                                            btnsiguiente.style.display='block'; 
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }else{
                                    if(valmonto<5000){
                                        if(valmonto<200){
                                            comision=co100a199usdabrl.value;
                                            inversa=in100a199usdabrl.value;
                                            //inversa=inversacomision100a199.value;
                                            errorenvio.style.display='none';
                                            valcomision=(parseFloat(comision)*100).toFixed(2);
                                            resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valusdareal)).toFixed(2);//modificar
                                            valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                            valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                            tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                            tipodecambio.innerHTML=valusdareal;
                                            tipodecomision.innerHTML=+valcomenviar+" BRL";
                                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                            valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                            inputmontoenviar.value=valtotalrecibe;
                                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                                            tcambio.value=valusdareal;
                                            tcomisi.value=valcomenviar;
                                            timpues.value=valimpuestos;
                                            ttotale.value=valtotalenviar;
                                            tenviar.value=resultadoinicial;//modificar
                                            trecibe.value=valtotalrecibe;
                                            tmoneda.value='Real a Dolar';
                                            btnsiguiente.style.display='block';
                                        }else{
                                            if(valmonto<300){
                                                comision=co200a299usdabrl.value;
                                                inversa=in200a299usdabrl.value;
                                                //inversa=inversacomision200a299.value;
                                                errorenvio.style.display='none';
                                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                                resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valusdareal)).toFixed(2);//modificar
                                                valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                tipodecambio.innerHTML=valusdareal;
                                                tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                inputmontoenviar.value=valtotalrecibe;
                                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                tcambio.value=valusdareal;
                                                tcomisi.value=valcomenviar;
                                                timpues.value=valimpuestos;
                                                ttotale.value=valtotalenviar;
                                                tenviar.value=resultadoinicial;//modificar
                                                trecibe.value=valtotalrecibe;
                                                tmoneda.value='Real a Dolar';
                                                btnsiguiente.style.display='block';
                                            }else{
                                                if(valmonto<500){
                                                    comision=co300a499usdabrl.value;
                                                    inversa=in300a499usdabrl.value;
                                                    //inversa=inversacomision300a399.value;
                                                    errorenvio.style.display='none';
                                                    valcomision=(parseFloat(comision)*100).toFixed(2);
                                                    resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valusdareal)).toFixed(2);//modificar
                                                    valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                    valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                    valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                    valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                    tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                    tipodecambio.innerHTML=valusdareal;
                                                    tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                    tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                    valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                    inputmontoenviar.value=valtotalrecibe;
                                                    numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                    tcambio.value=valusdareal;
                                                    tcomisi.value=valcomenviar;
                                                    timpues.value=valimpuestos;
                                                    ttotale.value=valtotalenviar;
                                                    tenviar.value=resultadoinicial;//modificar
                                                    trecibe.value=valtotalrecibe;
                                                    tmoneda.value='Real a Dolar';
                                                    btnsiguiente.style.display='block';
                                                }else{
                                                    if(valmonto<1000){
                                                        comision=co500a999usdabrl.value;
                                                        inversa=in500a999usdabrl.value;
                                                        //inversa=inversacomision400a999.value;
                                                        errorenvio.style.display='none';
                                                        valcomision=(parseFloat(comision)*100).toFixed(2);
                                                        resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valusdareal)).toFixed(2);//modificar
                                                        valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                        valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                        valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                        valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                        tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                        tipodecambio.innerHTML=valusdareal;
                                                        tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                        tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                        valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                        inputmontoenviar.value=valtotalrecibe;
                                                        numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                        tcambio.value=valusdareal;
                                                        tcomisi.value=valcomenviar;
                                                        timpues.value=valimpuestos;
                                                        ttotale.value=valtotalenviar;
                                                        tenviar.value=resultadoinicial;//modificar
                                                        trecibe.value=valtotalrecibe;
                                                        tmoneda.value='Real a Dolar';
                                                        btnsiguiente.style.display='block';
                                                    }else{
                                                        if(valmonto<5000){
                                                            comision=co1000a4999usdabrl.value;
                                                            inversa=in1000a4999usdabrl.value;
                                                            //inversa=in1000a5000usdbrl;
                                                            //comision=comision1000a5000.value;
                                                            //inversa=inversacomision1000a5000.value;
                                                            errorenvio.style.display='none';
                                                            valcomision=(parseFloat(comision)*100).toFixed(2);
                                                            resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valusdareal)).toFixed(2);//modificar
                                                            valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                            valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                            tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                            tipodecambio.innerHTML=valusdareal;
                                                            tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                            valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                            inputmontoenviar.value=valtotalrecibe;
                                                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                            tcambio.value=valusdareal;
                                                            tcomisi.value=valcomenviar;
                                                            timpues.value=valimpuestos;
                                                            ttotale.value=valtotalenviar;
                                                            tenviar.value=resultadoinicial;//modificar
                                                            trecibe.value=valtotalrecibe;
                                                            tmoneda.value='Real a Dolar';
                                                            btnsiguiente.style.display='block';
                                                        }else{
                                                            if(valmonto<=10000){
                                                                comision=co5000a10000usdabrl.value;
                                                                inversa=in5000a10000usdabrl.value;
                                                                //inversa=in1000a5000usdbrl;
                                                                //comision=comision1000a5000.value;
                                                                //inversa=inversacomision1000a5000.value;
                                                                errorenvio.style.display='none';
                                                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                                                resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valusdareal)).toFixed(2);//modificar
                                                                valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                                valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                                tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                                tipodecambio.innerHTML=valusdareal;
                                                                tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                                valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                                inputmontoenviar.value=valtotalrecibe;
                                                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                                tcambio.value=valusdareal;
                                                                tcomisi.value=valcomenviar;
                                                                timpues.value=valimpuestos;
                                                                ttotale.value=valtotalenviar;
                                                                tenviar.value=resultadoinicial;//modificar
                                                                trecibe.value=valtotalrecibe;
                                                                tmoneda.value='Real a Dolar';
                                                                btnsiguiente.style.display='block';
                                                            }else{
                                                                comision=co5000a10000usdabrl.value;
                                                                inversa=in5000a10000usdabrl.value;
                                                                //inversa=in1000a5000usdbrl;
                                                                //comision=comision1000a5000.value;
                                                                //inversa=inversacomision1000a5000.value;
                                                                errorenvio.style.display='none';
                                                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                                                resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valusdareal)).toFixed(2);//modificar
                                                                valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                                valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                                tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                                tipodecambio.innerHTML=valusdareal;
                                                                tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                                valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                                inputmontoenviar.value=valtotalrecibe;
                                                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                                tcambio.value=valusdareal;
                                                                tcomisi.value=valcomenviar;
                                                                timpues.value=valimpuestos;
                                                                ttotale.value=valtotalenviar;
                                                                tenviar.value=resultadoinicial;//modificar
                                                                trecibe.value=valtotalrecibe;
                                                                tmoneda.value='Real a Dolar';
                                                                btnsiguiente.style.display='block'; 
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }else{
                                        if(valmonto<=10000){
                                            if(valmonto<200){
                                                comision=co100a199usdabrl.value;
                                                inversa=in100a199usdabrl.value;
                                                //inversa=inversacomision100a199.value;
                                                errorenvio.style.display='none';
                                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                                resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valusdareal)).toFixed(2);//modificar
                                                valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                tipodecambio.innerHTML=valusdareal;
                                                tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                inputmontoenviar.value=valtotalrecibe;
                                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                tcambio.value=valusdareal;
                                                tcomisi.value=valcomenviar;
                                                timpues.value=valimpuestos;
                                                ttotale.value=valtotalenviar;
                                                tenviar.value=resultadoinicial;//modificar
                                                trecibe.value=valtotalrecibe;
                                                tmoneda.value='Real a Dolar';
                                                btnsiguiente.style.display='block';
                                            }else{
                                                if(valmonto<300){
                                                    comision=co200a299usdabrl.value;
                                                    inversa=in200a299usdabrl.value;
                                                    //inversa=inversacomision200a299.value;
                                                    errorenvio.style.display='none';
                                                    valcomision=(parseFloat(comision)*100).toFixed(2);
                                                    resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valusdareal)).toFixed(2);//modificar
                                                    valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                    valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                    valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                    valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                    tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                    tipodecambio.innerHTML=valusdareal;
                                                    tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                    tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                    valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                    inputmontoenviar.value=valtotalrecibe;
                                                    numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                    tcambio.value=valusdareal;
                                                    tcomisi.value=valcomenviar;
                                                    timpues.value=valimpuestos;
                                                    ttotale.value=valtotalenviar;
                                                    tenviar.value=resultadoinicial;//modificar
                                                    trecibe.value=valtotalrecibe;
                                                    tmoneda.value='Real a Dolar';
                                                    btnsiguiente.style.display='block';
                                                }else{
                                                    if(valmonto<500){
                                                        comision=co300a499usdabrl.value;
                                                        inversa=in300a499usdabrl.value;
                                                        //inversa=inversacomision300a399.value;
                                                        errorenvio.style.display='none';
                                                        valcomision=(parseFloat(comision)*100).toFixed(2);
                                                        resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valusdareal)).toFixed(2);//modificar
                                                        valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                        valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                        valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                        valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                        tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                        tipodecambio.innerHTML=valusdareal;
                                                        tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                        tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                        valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                        inputmontoenviar.value=valtotalrecibe;
                                                        numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                        tcambio.value=valusdareal;
                                                        tcomisi.value=valcomenviar;
                                                        timpues.value=valimpuestos;
                                                        ttotale.value=valtotalenviar;
                                                        tenviar.value=resultadoinicial;//modificar
                                                        trecibe.value=valtotalrecibe;
                                                        tmoneda.value='Real a Dolar';
                                                        btnsiguiente.style.display='block';
                                                    }else{
                                                        if(valmonto<1000){
                                                            comision=co500a999usdabrl.value;
                                                            inversa=in500a999usdabrl.value;
                                                            //inversa=inversacomision400a999.value;
                                                            errorenvio.style.display='none';
                                                            valcomision=(parseFloat(comision)*100).toFixed(2);
                                                            resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valusdareal)).toFixed(2);//modificar
                                                            valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                            valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                            tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                            tipodecambio.innerHTML=valusdareal;
                                                            tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                            valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                            inputmontoenviar.value=valtotalrecibe;
                                                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                            tcambio.value=valusdareal;
                                                            tcomisi.value=valcomenviar;
                                                            timpues.value=valimpuestos;
                                                            ttotale.value=valtotalenviar;
                                                            tenviar.value=resultadoinicial;//modificar
                                                            trecibe.value=valtotalrecibe;
                                                            tmoneda.value='Real a Dolar';
                                                            btnsiguiente.style.display='block';
                                                        }else{
                                                            if(valmonto<5000){
                                                                comision=co1000a4999usdabrl.value;
                                                                inversa=in1000a4999usdabrl.value;
                                                                //inversa=in1000a5000usdbrl;
                                                                //comision=comision1000a5000.value;
                                                                //inversa=inversacomision1000a5000.value;
                                                                errorenvio.style.display='none';
                                                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                                                resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valusdareal)).toFixed(2);//modificar
                                                                valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                                valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                                tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                                tipodecambio.innerHTML=valusdareal;
                                                                tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                                valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                                inputmontoenviar.value=valtotalrecibe;
                                                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                                tcambio.value=valusdareal;
                                                                tcomisi.value=valcomenviar;
                                                                timpues.value=valimpuestos;
                                                                ttotale.value=valtotalenviar;
                                                                tenviar.value=resultadoinicial;//modificar
                                                                trecibe.value=valtotalrecibe;
                                                                tmoneda.value='Real a Dolar';
                                                                btnsiguiente.style.display='block';
                                                            }else{
                                                                if(valmonto<=10000){
                                                                    comision=co5000a10000usdabrl.value;
                                                                    inversa=in5000a10000usdabrl.value;
                                                                    //inversa=in1000a5000usdbrl;
                                                                    //comision=comision1000a5000.value;
                                                                    //inversa=inversacomision1000a5000.value;
                                                                    errorenvio.style.display='none';
                                                                    valcomision=(parseFloat(comision)*100).toFixed(2);
                                                                    resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valusdareal)).toFixed(2);//modificar
                                                                    valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                                    valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                                    valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                                    valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                                    tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                                    tipodecambio.innerHTML=valusdareal;
                                                                    tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                                    tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                                    valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                                    inputmontoenviar.value=valtotalrecibe;
                                                                    numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                                    tcambio.value=valusdareal;
                                                                    tcomisi.value=valcomenviar;
                                                                    timpues.value=valimpuestos;
                                                                    ttotale.value=valtotalenviar;
                                                                    tenviar.value=resultadoinicial;//modificar
                                                                    trecibe.value=valtotalrecibe;
                                                                    tmoneda.value='Real a Dolar';
                                                                    btnsiguiente.style.display='block';
                                                                }else{
                                                                    comision=co5000a10000usdabrl.value;
                                                                    inversa=in5000a10000usdabrl.value;
                                                                    //inversa=in1000a5000usdbrl;
                                                                    //comision=comision1000a5000.value;
                                                                    //inversa=inversacomision1000a5000.value;
                                                                    errorenvio.style.display='none';
                                                                    valcomision=(parseFloat(comision)*100).toFixed(2);
                                                                    resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valusdareal)).toFixed(2);//modificar
                                                                    valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                                    valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                                    valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                                    valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                                    tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                                    tipodecambio.innerHTML=valusdareal;
                                                                    tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                                    tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                                    valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                                    inputmontoenviar.value=valtotalrecibe;
                                                                    numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                                    tcambio.value=valusdareal;
                                                                    tcomisi.value=valcomenviar;
                                                                    timpues.value=valimpuestos;
                                                                    ttotale.value=valtotalenviar;
                                                                    tenviar.value=resultadoinicial;//modificar
                                                                    trecibe.value=valtotalrecibe;
                                                                    tmoneda.value='Real a Dolar';
                                                                    btnsiguiente.style.display='block'; 
                                                                } 
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }else{
                                            comision=co5000a10000usdabrl.value;
                                            inversa=in5000a10000usdabrl.value;
                                            //inversa=in1000a5000usdbrl;
                                            //comision=comision1000a5000.value;
                                            //inversa=inversacomision1000a5000.value;
                                            errorenvio.style.display='none';
                                            valcomision=(parseFloat(comision)*100).toFixed(2);
                                            resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valusdareal)).toFixed(2);//modificar
                                            valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                            valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                            tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                            tipodecambio.innerHTML=valusdareal;
                                            tipodecomision.innerHTML=+valcomenviar+" BRL";
                                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                            valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                            inputmontoenviar.value=valtotalrecibe;
                                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                                            tcambio.value=valusdareal;
                                            tcomisi.value=valcomenviar;
                                            timpues.value=valimpuestos;
                                            ttotale.value=valtotalenviar;
                                            tenviar.value=resultadoinicial;//modificar
                                            trecibe.value=valtotalrecibe;
                                            tmoneda.value='Real a Dolar';
                                            btnsiguiente.style.display='block'; 
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                break;
            case('brlpen'):
                var valmontoinit=inputmontoenviar.value;
                var valmonto=valabajo;
                if(valmonto<0){
                    errorenvio.style.display='block';
                    errorenvio.innerHTML='Ingrese Monto mayor a 100';
                    tipodeimpuestos.innerHTML="0.00";
                    tipodecambio.innerHTML="0.00";
                    tipodecomision.innerHTML="0.00";
                    tipototalenviar.innerHTML="0.00";
                    tipototalrecibe.value="0.00";
                    numcomision.innerHTML="0.00";
                    tcambio.value=0;
                    tcomisi.value=0;
                    timpues.value=0;
                    ttotale.value=0;
                    tenviar.value=0;
                    trecibe.value=0;
                    tmoneda.value='Sol a Real';
                    btnsiguiente.style.display='none';
                }else{
                    if(valmonto<200){
                        //inicia
                        if(valmonto<200){
                            comision=co100a199brlapen.value;
                            inversa=in100a199brlapen.value;
                            //inversa=inversacomision100a199.value;
                            errorenvio.style.display='none';
                            valcomision=(parseFloat(comision)*100).toFixed(2);
                            resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealapen)).toFixed(2);//modificar
                            valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                            valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                            tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                            tipodecambio.innerHTML=valrealapen;
                            tipodecomision.innerHTML=+valcomenviar+" BRL";
                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                            valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificarss
                            inputmontoenviar.value=valtotalrecibe;
                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                            tcambio.value=valrealapen;
                            tcomisi.value=valcomenviar;
                            timpues.value=valimpuestos;
                            ttotale.value=valtotalenviar;
                            tenviar.value=resultadoinicial;//modificar
                            //tmoneda.value='Sol a Real';
                            tmoneda.value='Real a Sol';
                            trecibe.value=tipototalrecibe.value;
                            btnsiguiente.style.display='block';
                        }else{
                            if(valmonto<300){
                                comision=co200a299brlapen.value;
                                inversa=in200a299brlapen.value;
                                //inversa=inversacomision200a299.value;
                                errorenvio.style.display='none';
                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealapen)).toFixed(2);//modificar
                                valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                tipodecambio.innerHTML=valrealapen;
                                tipodecomision.innerHTML=+valcomenviar+" BRL";
                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificarss
                                inputmontoenviar.value=valtotalrecibe;
                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                tcambio.value=valrealapen;
                                tcomisi.value=valcomenviar;
                                timpues.value=valimpuestos;
                                ttotale.value=valtotalenviar;
                                tenviar.value=resultadoinicial;//modificar
                                //tmoneda.value='Sol a Real';
                                tmoneda.value='Real a Sol';
                                trecibe.value=tipototalrecibe.value;
                                btnsiguiente.style.display='block';
                            }else{
                                if(valmonto<500){
                                    comision=co300a499brlapen.value;
                                    inversa=in300a499brlapen.value;
                                    //inversa=inversacomision300a399.value;
                                    errorenvio.style.display='none';
                                    valcomision=(parseFloat(comision)*100).toFixed(2);
                                    resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealapen)).toFixed(2);//modificar
                                    valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                    valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                    valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                    valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                    tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                    tipodecambio.innerHTML=valrealapen;
                                    tipodecomision.innerHTML=+valcomenviar+" BRL";
                                    tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                    valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificarss
                                    inputmontoenviar.value=valtotalrecibe;
                                    numcomision.innerHTML=valcomision+"% : &nbsp;";
                                    tcambio.value=valrealapen;
                                    tcomisi.value=valcomenviar;
                                    timpues.value=valimpuestos;
                                    ttotale.value=valtotalenviar;
                                    tenviar.value=resultadoinicial;//modificar
                                    //tmoneda.value='Sol a Real';
                                    tmoneda.value='Real a Sol';
                                    trecibe.value=tipototalrecibe.value;
                                    btnsiguiente.style.display='block';
                                }else{
                                    if(valmonto<1000){
                                        comision=co500a999brlapen.value;
                                        inversa=in500a999brlapen.value;
                                        //inversa=inversacomision400a999.value;
                                        errorenvio.style.display='none';
                                        valcomision=(parseFloat(comision)*100).toFixed(2);
                                        resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealapen)).toFixed(2);//modificar
                                        valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                        valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                        valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                        valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                        tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                        tipodecambio.innerHTML=valrealapen;
                                        tipodecomision.innerHTML=+valcomenviar+" BRL";
                                        tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                        valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificarss
                                        inputmontoenviar.value=valtotalrecibe;
                                        numcomision.innerHTML=valcomision+"% : &nbsp;";
                                        tcambio.value=valrealapen;
                                        tcomisi.value=valcomenviar;
                                        timpues.value=valimpuestos;
                                        ttotale.value=valtotalenviar;
                                        tenviar.value=resultadoinicial;//modificar
                                        //tmoneda.value='Sol a Real';
                                        tmoneda.value='Real a Sol';
                                        trecibe.value=tipototalrecibe.value;
                                        btnsiguiente.style.display='block';
                                    }else{
                                        if(valmonto<5000){
                                            comision=co1000a4999brlapen.value;
                                            inversa=in1000a4999brlapen.value;
                                            //inversa=inversacomision1000a5000.value;
                                            errorenvio.style.display='none';
                                            valcomision=(parseFloat(comision)*100).toFixed(2);
                                            resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealapen)).toFixed(2);//modificar
                                            valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                            valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                            tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                            tipodecambio.innerHTML=valrealapen;
                                            tipodecomision.innerHTML=+valcomenviar+" BRL";
                                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                            valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificarss
                                            inputmontoenviar.value=valtotalrecibe;
                                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                                            tcambio.value=valrealapen;
                                            tcomisi.value=valcomenviar;
                                            timpues.value=valimpuestos;
                                            ttotale.value=valtotalenviar;
                                            tenviar.value=resultadoinicial;//modificar
                                            //tmoneda.value='Sol a Real';
                                            tmoneda.value='Real a Sol';
                                            trecibe.value=tipototalrecibe.value;
                                            btnsiguiente.style.display='block';
                                        }else{
                                            if(valmonto<=10000){
                                                comision=co5000a10000brlapen.value;
                                                inversa=in5000a10000brlapen.value;
                                                //inversa=inversacomision1000a5000.value;
                                                errorenvio.style.display='none';
                                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                                resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealapen)).toFixed(2);//modificar
                                                valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                tipodecambio.innerHTML=valrealapen;
                                                tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificarss
                                                inputmontoenviar.value=valtotalrecibe;
                                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                tcambio.value=valrealapen;
                                                tcomisi.value=valcomenviar;
                                                timpues.value=valimpuestos;
                                                ttotale.value=valtotalenviar;
                                                tenviar.value=resultadoinicial;//modificar
                                                //tmoneda.value='Sol a Real';
                                                tmoneda.value='Real a Sol';
                                                trecibe.value=tipototalrecibe.value;
                                                btnsiguiente.style.display='block';
                                            }else{
                                                comision=co5000a10000brlapen.value;
                                                inversa=in5000a10000brlapen.value;
                                                //inversa=inversacomision1000a5000.value;
                                                errorenvio.style.display='none';
                                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                                resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealapen)).toFixed(2);//modificar
                                                valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                tipodecambio.innerHTML=valrealapen;
                                                tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificarss
                                                inputmontoenviar.value=valtotalrecibe;
                                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                tcambio.value=valrealapen;
                                                tcomisi.value=valcomenviar;
                                                timpues.value=valimpuestos;
                                                ttotale.value=valtotalenviar;
                                                tenviar.value=resultadoinicial;//modificar
                                                //tmoneda.value='Sol a Real';
                                                tmoneda.value='Real a Sol';
                                                trecibe.value=tipototalrecibe.value;
                                                btnsiguiente.style.display='block';
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        //termina
                    }else{
                        if(valmonto<300){
                            if(valmonto<200){
                                comision=co100a199brlapen.value;
                                inversa=in100a199brlapen.value;
                                //inversa=inversacomision100a199.value;
                                errorenvio.style.display='none';
                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealapen)).toFixed(2);//modificar
                                valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                tipodecambio.innerHTML=valrealapen;
                                tipodecomision.innerHTML=+valcomenviar+" BRL";
                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificarss
                                inputmontoenviar.value=valtotalrecibe;
                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                tcambio.value=valrealapen;
                                tcomisi.value=valcomenviar;
                                timpues.value=valimpuestos;
                                ttotale.value=valtotalenviar;
                                tenviar.value=resultadoinicial;//modificar
                                //tmoneda.value='Sol a Real';
                                tmoneda.value='Real a Sol';
                                trecibe.value=tipototalrecibe.value;
                                btnsiguiente.style.display='block';
                            }else{
                                if(valmonto<300){
                                    comision=co200a299brlapen.value;
                                    inversa=in200a299brlapen.value;
                                    //inversa=inversacomision200a299.value;
                                    errorenvio.style.display='none';
                                    valcomision=(parseFloat(comision)*100).toFixed(2);
                                    resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealapen)).toFixed(2);//modificar
                                    valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                    valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                    valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                    valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                    tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                    tipodecambio.innerHTML=valrealapen;
                                    tipodecomision.innerHTML=+valcomenviar+" BRL";
                                    tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                    valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificarss
                                    inputmontoenviar.value=valtotalrecibe;
                                    numcomision.innerHTML=valcomision+"% : &nbsp;";
                                    tcambio.value=valrealapen;
                                    tcomisi.value=valcomenviar;
                                    timpues.value=valimpuestos;
                                    ttotale.value=valtotalenviar;
                                    tenviar.value=resultadoinicial;//modificar
                                    //tmoneda.value='Sol a Real';
                                    tmoneda.value='Real a Sol';
                                    trecibe.value=tipototalrecibe.value;
                                    btnsiguiente.style.display='block';
                                }else{
                                    if(valmonto<500){
                                        comision=co300a499brlapen.value;
                                        inversa=in300a499brlapen.value;
                                        //inversa=inversacomision300a399.value;
                                        errorenvio.style.display='none';
                                        valcomision=(parseFloat(comision)*100).toFixed(2);
                                        resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealapen)).toFixed(2);//modificar
                                        valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                        valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                        valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                        valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                        tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                        tipodecambio.innerHTML=valrealapen;
                                        tipodecomision.innerHTML=+valcomenviar+" BRL";
                                        tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                        valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificarss
                                        inputmontoenviar.value=valtotalrecibe;
                                        numcomision.innerHTML=valcomision+"% : &nbsp;";
                                        tcambio.value=valrealapen;
                                        tcomisi.value=valcomenviar;
                                        timpues.value=valimpuestos;
                                        ttotale.value=valtotalenviar;
                                        tenviar.value=resultadoinicial;//modificar
                                        //tmoneda.value='Sol a Real';
                                        tmoneda.value='Real a Sol';
                                        trecibe.value=tipototalrecibe.value;
                                        btnsiguiente.style.display='block';
                                    }else{
                                        if(valmonto<1000){
                                            comision=co500a999brlapen.value;
                                            inversa=in500a999brlapen.value;
                                            //inversa=inversacomision400a999.value;
                                            errorenvio.style.display='none';
                                            valcomision=(parseFloat(comision)*100).toFixed(2);
                                            resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealapen)).toFixed(2);//modificar
                                            valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                            valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                            tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                            tipodecambio.innerHTML=valrealapen;
                                            tipodecomision.innerHTML=+valcomenviar+" BRL";
                                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                            valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificarss
                                            inputmontoenviar.value=valtotalrecibe;
                                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                                            tcambio.value=valrealapen;
                                            tcomisi.value=valcomenviar;
                                            timpues.value=valimpuestos;
                                            ttotale.value=valtotalenviar;
                                            tenviar.value=resultadoinicial;//modificar
                                            //tmoneda.value='Sol a Real';
                                            tmoneda.value='Real a Sol';
                                            trecibe.value=tipototalrecibe.value;
                                            btnsiguiente.style.display='block';
                                        }else{
                                            if(valmonto<5000){
                                                comision=co1000a4999brlapen.value;
                                                inversa=in1000a4999brlapen.value;
                                                //inversa=inversacomision1000a5000.value;
                                                errorenvio.style.display='none';
                                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                                resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealapen)).toFixed(2);//modificar
                                                valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                tipodecambio.innerHTML=valrealapen;
                                                tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificarss
                                                inputmontoenviar.value=valtotalrecibe;
                                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                tcambio.value=valrealapen;
                                                tcomisi.value=valcomenviar;
                                                timpues.value=valimpuestos;
                                                ttotale.value=valtotalenviar;
                                                tenviar.value=resultadoinicial;//modificar
                                                //tmoneda.value='Sol a Real';
                                                tmoneda.value='Real a Sol';
                                                trecibe.value=tipototalrecibe.value;
                                                btnsiguiente.style.display='block';
                                            }else{
                                                if(valmonto<=10000){
                                                    comision=co5000a10000brlapen.value;
                                                    inversa=in5000a10000brlapen.value;
                                                    //inversa=inversacomision1000a5000.value;
                                                    errorenvio.style.display='none';
                                                    valcomision=(parseFloat(comision)*100).toFixed(2);
                                                    resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealapen)).toFixed(2);//modificar
                                                    valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                    valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                    valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                    valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                    tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                    tipodecambio.innerHTML=valrealapen;
                                                    tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                    tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                    valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificarss
                                                    inputmontoenviar.value=valtotalrecibe;
                                                    numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                    tcambio.value=valrealapen;
                                                    tcomisi.value=valcomenviar;
                                                    timpues.value=valimpuestos;
                                                    ttotale.value=valtotalenviar;
                                                    tenviar.value=resultadoinicial;//modificar
                                                    //tmoneda.value='Sol a Real';
                                                    tmoneda.value='Real a Sol';
                                                    trecibe.value=tipototalrecibe.value;
                                                    btnsiguiente.style.display='block';
                                                }else{
                                                    comision=co5000a10000brlapen.value;
                                                    inversa=in5000a10000brlapen.value;
                                                    //inversa=inversacomision1000a5000.value;
                                                    errorenvio.style.display='none';
                                                    valcomision=(parseFloat(comision)*100).toFixed(2);
                                                    resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealapen)).toFixed(2);//modificar
                                                    valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                    valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                    valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                    valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                    tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                    tipodecambio.innerHTML=valrealapen;
                                                    tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                    tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                    valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificarss
                                                    inputmontoenviar.value=valtotalrecibe;
                                                    numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                    tcambio.value=valrealapen;
                                                    tcomisi.value=valcomenviar;
                                                    timpues.value=valimpuestos;
                                                    ttotale.value=valtotalenviar;
                                                    tenviar.value=resultadoinicial;//modificar
                                                    //tmoneda.value='Sol a Real';
                                                    tmoneda.value='Real a Sol';
                                                    trecibe.value=tipototalrecibe.value;
                                                    btnsiguiente.style.display='block';
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }else{
                            if(valmonto<500){
                                if(valmonto<200){
                                    comision=co100a199brlapen.value;
                                    inversa=in100a199brlapen.value;
                                    //inversa=inversacomision100a199.value;
                                    errorenvio.style.display='none';
                                    valcomision=(parseFloat(comision)*100).toFixed(2);
                                    resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealapen)).toFixed(2);//modificar
                                    valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                    valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                    valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                    valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                    tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                    tipodecambio.innerHTML=valrealapen;
                                    tipodecomision.innerHTML=+valcomenviar+" BRL";
                                    tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                    valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificarss
                                    inputmontoenviar.value=valtotalrecibe;
                                    numcomision.innerHTML=valcomision+"% : &nbsp;";
                                    tcambio.value=valrealapen;
                                    tcomisi.value=valcomenviar;
                                    timpues.value=valimpuestos;
                                    ttotale.value=valtotalenviar;
                                    tenviar.value=resultadoinicial;//modificar
                                    //tmoneda.value='Sol a Real';
                                    tmoneda.value='Real a Sol';
                                    trecibe.value=tipototalrecibe.value;
                                    btnsiguiente.style.display='block';
                                }else{
                                    if(valmonto<300){
                                        comision=co200a299brlapen.value;
                                        inversa=in200a299brlapen.value;
                                        //inversa=inversacomision200a299.value;
                                        errorenvio.style.display='none';
                                        valcomision=(parseFloat(comision)*100).toFixed(2);
                                        resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealapen)).toFixed(2);//modificar
                                        valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                        valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                        valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                        valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                        tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                        tipodecambio.innerHTML=valrealapen;
                                        tipodecomision.innerHTML=+valcomenviar+" BRL";
                                        tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                        valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificarss
                                        inputmontoenviar.value=valtotalrecibe;
                                        numcomision.innerHTML=valcomision+"% : &nbsp;";
                                        tcambio.value=valrealapen;
                                        tcomisi.value=valcomenviar;
                                        timpues.value=valimpuestos;
                                        ttotale.value=valtotalenviar;
                                        tenviar.value=resultadoinicial;//modificar
                                        //tmoneda.value='Sol a Real';
                                        tmoneda.value='Real a Sol';
                                        trecibe.value=tipototalrecibe.value;
                                        btnsiguiente.style.display='block';
                                    }else{
                                        if(valmonto<500){
                                            comision=co300a499brlapen.value;
                                            inversa=in300a499brlapen.value;
                                            //inversa=inversacomision300a399.value;
                                            errorenvio.style.display='none';
                                            valcomision=(parseFloat(comision)*100).toFixed(2);
                                            resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealapen)).toFixed(2);//modificar
                                            valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                            valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                            tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                            tipodecambio.innerHTML=valrealapen;
                                            tipodecomision.innerHTML=+valcomenviar+" BRL";
                                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                            valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificarss
                                            inputmontoenviar.value=valtotalrecibe;
                                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                                            tcambio.value=valrealapen;
                                            tcomisi.value=valcomenviar;
                                            timpues.value=valimpuestos;
                                            ttotale.value=valtotalenviar;
                                            tenviar.value=resultadoinicial;//modificar
                                            //tmoneda.value='Sol a Real';
                                            tmoneda.value='Real a Sol';
                                            trecibe.value=tipototalrecibe.value;
                                            btnsiguiente.style.display='block';
                                        }else{
                                            if(valmonto<1000){
                                                comision=co500a999brlapen.value;
                                                inversa=in500a999brlapen.value;
                                                //inversa=inversacomision400a999.value;
                                                errorenvio.style.display='none';
                                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                                resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealapen)).toFixed(2);//modificar
                                                valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                tipodecambio.innerHTML=valrealapen;
                                                tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificarss
                                                inputmontoenviar.value=valtotalrecibe;
                                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                tcambio.value=valrealapen;
                                                tcomisi.value=valcomenviar;
                                                timpues.value=valimpuestos;
                                                ttotale.value=valtotalenviar;
                                                tenviar.value=resultadoinicial;//modificar
                                                //tmoneda.value='Sol a Real';
                                                tmoneda.value='Real a Sol';
                                                trecibe.value=tipototalrecibe.value;
                                                btnsiguiente.style.display='block';
                                            }else{
                                                if(valmonto<5000){
                                                    comision=co1000a4999brlapen.value;
                                                    inversa=in1000a4999brlapen.value;
                                                    //inversa=inversacomision1000a5000.value;
                                                    errorenvio.style.display='none';
                                                    valcomision=(parseFloat(comision)*100).toFixed(2);
                                                    resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealapen)).toFixed(2);//modificar
                                                    valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                    valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                    valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                    valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                    tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                    tipodecambio.innerHTML=valrealapen;
                                                    tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                    tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                    valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificarss
                                                    inputmontoenviar.value=valtotalrecibe;
                                                    numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                    tcambio.value=valrealapen;
                                                    tcomisi.value=valcomenviar;
                                                    timpues.value=valimpuestos;
                                                    ttotale.value=valtotalenviar;
                                                    tenviar.value=resultadoinicial;//modificar
                                                    //tmoneda.value='Sol a Real';
                                                    tmoneda.value='Real a Sol';
                                                    trecibe.value=tipototalrecibe.value;
                                                    btnsiguiente.style.display='block';
                                                }else{
                                                    if(valmonto<=10000){
                                                        comision=co5000a10000brlapen.value;
                                                        inversa=in5000a10000brlapen.value;
                                                        //inversa=inversacomision1000a5000.value;
                                                        errorenvio.style.display='none';
                                                        valcomision=(parseFloat(comision)*100).toFixed(2);
                                                        resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealapen)).toFixed(2);//modificar
                                                        valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                        valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                        valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                        valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                        tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                        tipodecambio.innerHTML=valrealapen;
                                                        tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                        tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                        valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificarss
                                                        inputmontoenviar.value=valtotalrecibe;
                                                        numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                        tcambio.value=valrealapen;
                                                        tcomisi.value=valcomenviar;
                                                        timpues.value=valimpuestos;
                                                        ttotale.value=valtotalenviar;
                                                        tenviar.value=resultadoinicial;//modificar
                                                        //tmoneda.value='Sol a Real';
                                                        tmoneda.value='Real a Sol';
                                                        trecibe.value=tipototalrecibe.value;
                                                        btnsiguiente.style.display='block';
                                                    }else{
                                                        comision=co5000a10000brlapen.value;
                                                        inversa=in5000a10000brlapen.value;
                                                        //inversa=inversacomision1000a5000.value;
                                                        errorenvio.style.display='none';
                                                        valcomision=(parseFloat(comision)*100).toFixed(2);
                                                        resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealapen)).toFixed(2);//modificar
                                                        valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                        valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                        valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                        valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                        tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                        tipodecambio.innerHTML=valrealapen;
                                                        tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                        tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                        valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificarss
                                                        inputmontoenviar.value=valtotalrecibe;
                                                        numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                        tcambio.value=valrealapen;
                                                        tcomisi.value=valcomenviar;
                                                        timpues.value=valimpuestos;
                                                        ttotale.value=valtotalenviar;
                                                        tenviar.value=resultadoinicial;//modificar
                                                        //tmoneda.value='Sol a Real';
                                                        tmoneda.value='Real a Sol';
                                                        trecibe.value=tipototalrecibe.value;
                                                        btnsiguiente.style.display='block';
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }else{
                                if(valmonto<1000){
                                    if(valmonto<200){
                                        comision=co100a199brlapen.value;
                                        inversa=in100a199brlapen.value;
                                        //inversa=inversacomision100a199.value;
                                        errorenvio.style.display='none';
                                        valcomision=(parseFloat(comision)*100).toFixed(2);
                                        resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealapen)).toFixed(2);//modificar
                                        valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                        valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                        valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                        valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                        tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                        tipodecambio.innerHTML=valrealapen;
                                        tipodecomision.innerHTML=+valcomenviar+" BRL";
                                        tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                        valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificarss
                                        inputmontoenviar.value=valtotalrecibe;
                                        numcomision.innerHTML=valcomision+"% : &nbsp;";
                                        tcambio.value=valrealapen;
                                        tcomisi.value=valcomenviar;
                                        timpues.value=valimpuestos;
                                        ttotale.value=valtotalenviar;
                                        tenviar.value=resultadoinicial;//modificar
                                        //tmoneda.value='Sol a Real';
                                        tmoneda.value='Real a Sol';
                                        trecibe.value=tipototalrecibe.value;
                                        btnsiguiente.style.display='block';
                                    }else{
                                        if(valmonto<300){
                                            comision=co200a299brlapen.value;
                                            inversa=in200a299brlapen.value;
                                            //inversa=inversacomision200a299.value;
                                            errorenvio.style.display='none';
                                            valcomision=(parseFloat(comision)*100).toFixed(2);
                                            resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealapen)).toFixed(2);//modificar
                                            valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                            valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                            tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                            tipodecambio.innerHTML=valrealapen;
                                            tipodecomision.innerHTML=+valcomenviar+" BRL";
                                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                            valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificarss
                                            inputmontoenviar.value=valtotalrecibe;
                                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                                            tcambio.value=valrealapen;
                                            tcomisi.value=valcomenviar;
                                            timpues.value=valimpuestos;
                                            ttotale.value=valtotalenviar;
                                            tenviar.value=resultadoinicial;//modificar
                                            //tmoneda.value='Sol a Real';
                                            tmoneda.value='Real a Sol';
                                            trecibe.value=tipototalrecibe.value;
                                            btnsiguiente.style.display='block';
                                        }else{
                                            if(valmonto<500){
                                                comision=co300a499brlapen.value;
                                                inversa=in300a499brlapen.value;
                                                //inversa=inversacomision300a399.value;
                                                errorenvio.style.display='none';
                                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                                resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealapen)).toFixed(2);//modificar
                                                valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                tipodecambio.innerHTML=valrealapen;
                                                tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificarss
                                                inputmontoenviar.value=valtotalrecibe;
                                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                tcambio.value=valrealapen;
                                                tcomisi.value=valcomenviar;
                                                timpues.value=valimpuestos;
                                                ttotale.value=valtotalenviar;
                                                tenviar.value=resultadoinicial;//modificar
                                                //tmoneda.value='Sol a Real';
                                                tmoneda.value='Real a Sol';
                                                trecibe.value=tipototalrecibe.value;
                                                btnsiguiente.style.display='block';
                                            }else{
                                                if(valmonto<1000){
                                                    comision=co500a999brlapen.value;
                                                    inversa=in500a999brlapen.value;
                                                    //inversa=inversacomision400a999.value;
                                                    errorenvio.style.display='none';
                                                    valcomision=(parseFloat(comision)*100).toFixed(2);
                                                    resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealapen)).toFixed(2);//modificar
                                                    valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                    valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                    valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                    valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                    tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                    tipodecambio.innerHTML=valrealapen;
                                                    tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                    tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                    valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificarss
                                                    inputmontoenviar.value=valtotalrecibe;
                                                    numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                    tcambio.value=valrealapen;
                                                    tcomisi.value=valcomenviar;
                                                    timpues.value=valimpuestos;
                                                    ttotale.value=valtotalenviar;
                                                    tenviar.value=resultadoinicial;//modificar
                                                    //tmoneda.value='Sol a Real';
                                                    tmoneda.value='Real a Sol';
                                                    trecibe.value=tipototalrecibe.value;
                                                    btnsiguiente.style.display='block';
                                                }else{
                                                    if(valmonto<5000){
                                                        comision=co1000a4999brlapen.value;
                                                        inversa=in1000a4999brlapen.value;
                                                        //inversa=inversacomision1000a5000.value;
                                                        errorenvio.style.display='none';
                                                        valcomision=(parseFloat(comision)*100).toFixed(2);
                                                        resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealapen)).toFixed(2);//modificar
                                                        valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                        valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                        valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                        valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                        tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                        tipodecambio.innerHTML=valrealapen;
                                                        tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                        tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                        valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificarss
                                                        inputmontoenviar.value=valtotalrecibe;
                                                        numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                        tcambio.value=valrealapen;
                                                        tcomisi.value=valcomenviar;
                                                        timpues.value=valimpuestos;
                                                        ttotale.value=valtotalenviar;
                                                        tenviar.value=resultadoinicial;//modificar
                                                        //tmoneda.value='Sol a Real';
                                                        tmoneda.value='Real a Sol';
                                                        trecibe.value=tipototalrecibe.value;
                                                        btnsiguiente.style.display='block';
                                                    }else{
                                                        if(valmonto<=10000){
                                                            comision=co5000a10000brlapen.value;
                                                            inversa=in5000a10000brlapen.value;
                                                            //inversa=inversacomision1000a5000.value;
                                                            errorenvio.style.display='none';
                                                            valcomision=(parseFloat(comision)*100).toFixed(2);
                                                            resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealapen)).toFixed(2);//modificar
                                                            valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                            valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                            tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                            tipodecambio.innerHTML=valrealapen;
                                                            tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                            valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificarss
                                                            inputmontoenviar.value=valtotalrecibe;
                                                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                            tcambio.value=valrealapen;
                                                            tcomisi.value=valcomenviar;
                                                            timpues.value=valimpuestos;
                                                            ttotale.value=valtotalenviar;
                                                            tenviar.value=resultadoinicial;//modificar
                                                            //tmoneda.value='Sol a Real';
                                                            tmoneda.value='Real a Sol';
                                                            trecibe.value=tipototalrecibe.value;
                                                            btnsiguiente.style.display='block';
                                                        }else{
                                                            comision=co5000a10000brlapen.value;
                                                            inversa=in5000a10000brlapen.value;
                                                            //inversa=inversacomision1000a5000.value;
                                                            errorenvio.style.display='none';
                                                            valcomision=(parseFloat(comision)*100).toFixed(2);
                                                            resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealapen)).toFixed(2);//modificar
                                                            valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                            valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                            tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                            tipodecambio.innerHTML=valrealapen;
                                                            tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                            valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificarss
                                                            inputmontoenviar.value=valtotalrecibe;
                                                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                            tcambio.value=valrealapen;
                                                            tcomisi.value=valcomenviar;
                                                            timpues.value=valimpuestos;
                                                            ttotale.value=valtotalenviar;
                                                            tenviar.value=resultadoinicial;//modificar
                                                            //tmoneda.value='Sol a Real';
                                                            tmoneda.value='Real a Sol';
                                                            trecibe.value=tipototalrecibe.value;
                                                            btnsiguiente.style.display='block';
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }else{
                                    if(valmonto<5000){
                                        if(valmonto<200){
                                            comision=co100a199brlapen.value;
                                            inversa=in100a199brlapen.value;
                                            //inversa=inversacomision100a199.value;
                                            errorenvio.style.display='none';
                                            valcomision=(parseFloat(comision)*100).toFixed(2);
                                            resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealapen)).toFixed(2);//modificar
                                            valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                            valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                            tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                            tipodecambio.innerHTML=valrealapen;
                                            tipodecomision.innerHTML=+valcomenviar+" BRL";
                                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                            valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificarss
                                            inputmontoenviar.value=valtotalrecibe;
                                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                                            tcambio.value=valrealapen;
                                            tcomisi.value=valcomenviar;
                                            timpues.value=valimpuestos;
                                            ttotale.value=valtotalenviar;
                                            tenviar.value=resultadoinicial;//modificar
                                            //tmoneda.value='Sol a Real';
                                            tmoneda.value='Real a Sol';
                                            trecibe.value=tipototalrecibe.value;
                                            btnsiguiente.style.display='block';
                                        }else{
                                            if(valmonto<300){
                                                comision=co200a299brlapen.value;
                                                inversa=in200a299brlapen.value;
                                                //inversa=inversacomision200a299.value;
                                                errorenvio.style.display='none';
                                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                                resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealapen)).toFixed(2);//modificar
                                                valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                tipodecambio.innerHTML=valrealapen;
                                                tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificarss
                                                inputmontoenviar.value=valtotalrecibe;
                                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                tcambio.value=valrealapen;
                                                tcomisi.value=valcomenviar;
                                                timpues.value=valimpuestos;
                                                ttotale.value=valtotalenviar;
                                                tenviar.value=resultadoinicial;//modificar
                                                //tmoneda.value='Sol a Real';
                                                tmoneda.value='Real a Sol';
                                                trecibe.value=tipototalrecibe.value;
                                                btnsiguiente.style.display='block';
                                            }else{
                                                if(valmonto<500){
                                                    comision=co300a499brlapen.value;
                                                    inversa=in300a499brlapen.value;
                                                    //inversa=inversacomision300a399.value;
                                                    errorenvio.style.display='none';
                                                    valcomision=(parseFloat(comision)*100).toFixed(2);
                                                    resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealapen)).toFixed(2);//modificar
                                                    valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                    valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                    valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                    valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                    tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                    tipodecambio.innerHTML=valrealapen;
                                                    tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                    tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                    valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificarss
                                                    inputmontoenviar.value=valtotalrecibe;
                                                    numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                    tcambio.value=valrealapen;
                                                    tcomisi.value=valcomenviar;
                                                    timpues.value=valimpuestos;
                                                    ttotale.value=valtotalenviar;
                                                    tenviar.value=resultadoinicial;//modificar
                                                    //tmoneda.value='Sol a Real';
                                                    tmoneda.value='Real a Sol';
                                                    trecibe.value=tipototalrecibe.value;
                                                    btnsiguiente.style.display='block';
                                                }else{
                                                    if(valmonto<1000){
                                                        comision=co500a999brlapen.value;
                                                        inversa=in500a999brlapen.value;
                                                        //inversa=inversacomision400a999.value;
                                                        errorenvio.style.display='none';
                                                        valcomision=(parseFloat(comision)*100).toFixed(2);
                                                        resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealapen)).toFixed(2);//modificar
                                                        valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                        valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                        valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                        valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                        tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                        tipodecambio.innerHTML=valrealapen;
                                                        tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                        tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                        valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificarss
                                                        inputmontoenviar.value=valtotalrecibe;
                                                        numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                        tcambio.value=valrealapen;
                                                        tcomisi.value=valcomenviar;
                                                        timpues.value=valimpuestos;
                                                        ttotale.value=valtotalenviar;
                                                        tenviar.value=resultadoinicial;//modificar
                                                        //tmoneda.value='Sol a Real';
                                                        tmoneda.value='Real a Sol';
                                                        trecibe.value=tipototalrecibe.value;
                                                        btnsiguiente.style.display='block';
                                                    }else{
                                                        if(valmonto<5000){
                                                            comision=co1000a4999brlapen.value;
                                                            inversa=in1000a4999brlapen.value;
                                                            //inversa=inversacomision1000a5000.value;
                                                            errorenvio.style.display='none';
                                                            valcomision=(parseFloat(comision)*100).toFixed(2);
                                                            resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealapen)).toFixed(2);//modificar
                                                            valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                            valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                            tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                            tipodecambio.innerHTML=valrealapen;
                                                            tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                            valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificarss
                                                            inputmontoenviar.value=valtotalrecibe;
                                                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                            tcambio.value=valrealapen;
                                                            tcomisi.value=valcomenviar;
                                                            timpues.value=valimpuestos;
                                                            ttotale.value=valtotalenviar;
                                                            tenviar.value=resultadoinicial;//modificar
                                                            //tmoneda.value='Sol a Real';
                                                            tmoneda.value='Real a Sol';
                                                            trecibe.value=tipototalrecibe.value;
                                                            btnsiguiente.style.display='block';
                                                        }else{
                                                            if(valmonto<=10000){
                                                                comision=co5000a10000brlapen.value;
                                                                inversa=in5000a10000brlapen.value;
                                                                //inversa=inversacomision1000a5000.value;
                                                                errorenvio.style.display='none';
                                                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                                                resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealapen)).toFixed(2);//modificar
                                                                valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                                valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                                tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                                tipodecambio.innerHTML=valrealapen;
                                                                tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                                valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificarss
                                                                inputmontoenviar.value=valtotalrecibe;
                                                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                                tcambio.value=valrealapen;
                                                                tcomisi.value=valcomenviar;
                                                                timpues.value=valimpuestos;
                                                                ttotale.value=valtotalenviar;
                                                                tenviar.value=resultadoinicial;//modificar
                                                                //tmoneda.value='Sol a Real';
                                                                tmoneda.value='Real a Sol';
                                                                trecibe.value=tipototalrecibe.value;
                                                                btnsiguiente.style.display='block';
                                                            }else{
                                                                comision=co5000a10000brlapen.value;
                                                                inversa=in5000a10000brlapen.value;
                                                                //inversa=inversacomision1000a5000.value;
                                                                errorenvio.style.display='none';
                                                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                                                resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealapen)).toFixed(2);//modificar
                                                                valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                                valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                                tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                                tipodecambio.innerHTML=valrealapen;
                                                                tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                                valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificarss
                                                                inputmontoenviar.value=valtotalrecibe;
                                                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                                tcambio.value=valrealapen;
                                                                tcomisi.value=valcomenviar;
                                                                timpues.value=valimpuestos;
                                                                ttotale.value=valtotalenviar;
                                                                tenviar.value=resultadoinicial;//modificar
                                                                //tmoneda.value='Sol a Real';
                                                                tmoneda.value='Real a Sol';
                                                                trecibe.value=tipototalrecibe.value;
                                                                btnsiguiente.style.display='block';
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }else{
                                        if(valmonto<=10000){
                                            if(valmonto<200){
                                                comision=co100a199brlapen.value;
                                                inversa=in100a199brlapen.value;
                                                //inversa=inversacomision100a199.value;
                                                errorenvio.style.display='none';
                                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                                resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealapen)).toFixed(2);//modificar
                                                valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                tipodecambio.innerHTML=valrealapen;
                                                tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificarss
                                                inputmontoenviar.value=valtotalrecibe;
                                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                tcambio.value=valrealapen;
                                                tcomisi.value=valcomenviar;
                                                timpues.value=valimpuestos;
                                                ttotale.value=valtotalenviar;
                                                tenviar.value=resultadoinicial;//modificar
                                                //tmoneda.value='Sol a Real';
                                                tmoneda.value='Real a Sol';
                                                trecibe.value=tipototalrecibe.value;
                                                btnsiguiente.style.display='block';
                                            }else{
                                                if(valmonto<300){
                                                    comision=co200a299brlapen.value;
                                                    inversa=in200a299brlapen.value;
                                                    //inversa=inversacomision200a299.value;
                                                    errorenvio.style.display='none';
                                                    valcomision=(parseFloat(comision)*100).toFixed(2);
                                                    resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealapen)).toFixed(2);//modificar
                                                    valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                    valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                    valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                    valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                    tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                    tipodecambio.innerHTML=valrealapen;
                                                    tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                    tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                    valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificarss
                                                    inputmontoenviar.value=valtotalrecibe;
                                                    numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                    tcambio.value=valrealapen;
                                                    tcomisi.value=valcomenviar;
                                                    timpues.value=valimpuestos;
                                                    ttotale.value=valtotalenviar;
                                                    tenviar.value=resultadoinicial;//modificar
                                                    //tmoneda.value='Sol a Real';
                                                    tmoneda.value='Real a Sol';
                                                    trecibe.value=tipototalrecibe.value;
                                                    btnsiguiente.style.display='block';
                                                }else{
                                                    if(valmonto<500){
                                                        comision=co300a499brlapen.value;
                                                        inversa=in300a499brlapen.value;
                                                        //inversa=inversacomision300a399.value;
                                                        errorenvio.style.display='none';
                                                        valcomision=(parseFloat(comision)*100).toFixed(2);
                                                        resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealapen)).toFixed(2);//modificar
                                                        valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                        valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                        valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                        valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                        tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                        tipodecambio.innerHTML=valrealapen;
                                                        tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                        tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                        valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificarss
                                                        inputmontoenviar.value=valtotalrecibe;
                                                        numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                        tcambio.value=valrealapen;
                                                        tcomisi.value=valcomenviar;
                                                        timpues.value=valimpuestos;
                                                        ttotale.value=valtotalenviar;
                                                        tenviar.value=resultadoinicial;//modificar
                                                        //tmoneda.value='Sol a Real';
                                                        tmoneda.value='Real a Sol';
                                                        trecibe.value=tipototalrecibe.value;
                                                        btnsiguiente.style.display='block';
                                                    }else{
                                                        if(valmonto<1000){
                                                            comision=co500a999brlapen.value;
                                                            inversa=in500a999brlapen.value;
                                                            //inversa=inversacomision400a999.value;
                                                            errorenvio.style.display='none';
                                                            valcomision=(parseFloat(comision)*100).toFixed(2);
                                                            resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealapen)).toFixed(2);//modificar
                                                            valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                            valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                            tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                            tipodecambio.innerHTML=valrealapen;
                                                            tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                            valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificarss
                                                            inputmontoenviar.value=valtotalrecibe;
                                                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                            tcambio.value=valrealapen;
                                                            tcomisi.value=valcomenviar;
                                                            timpues.value=valimpuestos;
                                                            ttotale.value=valtotalenviar;
                                                            tenviar.value=resultadoinicial;//modificar
                                                            //tmoneda.value='Sol a Real';
                                                            tmoneda.value='Real a Sol';
                                                            trecibe.value=tipototalrecibe.value;
                                                            btnsiguiente.style.display='block';
                                                        }else{
                                                            if(valmonto<=10000){
                                                                comision=co5000a10000brlapen.value;
                                                                inversa=in5000a10000brlapen.value;
                                                                //inversa=inversacomision1000a5000.value;
                                                                errorenvio.style.display='none';
                                                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                                                resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealapen)).toFixed(2);//modificar
                                                                valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                                valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                                tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                                tipodecambio.innerHTML=valrealapen;
                                                                tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                                valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificarss
                                                                inputmontoenviar.value=valtotalrecibe;
                                                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                                tcambio.value=valrealapen;
                                                                tcomisi.value=valcomenviar;
                                                                timpues.value=valimpuestos;
                                                                ttotale.value=valtotalenviar;
                                                                tenviar.value=resultadoinicial;//modificar
                                                                //tmoneda.value='Sol a Real';
                                                                tmoneda.value='Real a Sol';
                                                                trecibe.value=tipototalrecibe.value;
                                                                btnsiguiente.style.display='block';
                                                            }else{
                                                                comision=co5000a10000brlapen.value;
                                                                inversa=in5000a10000brlapen.value;
                                                                //inversa=inversacomision1000a5000.value;
                                                                errorenvio.style.display='none';
                                                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                                                resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealapen)).toFixed(2);//modificar
                                                                valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                                valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                                tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                                tipodecambio.innerHTML=valrealapen;
                                                                tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                                valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificarss
                                                                inputmontoenviar.value=valtotalrecibe;
                                                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                                tcambio.value=valrealapen;
                                                                tcomisi.value=valcomenviar;
                                                                timpues.value=valimpuestos;
                                                                ttotale.value=valtotalenviar;
                                                                tenviar.value=resultadoinicial;//modificar
                                                                //tmoneda.value='Sol a Real';
                                                                tmoneda.value='Real a Sol';
                                                                trecibe.value=tipototalrecibe.value;
                                                                btnsiguiente.style.display='block';
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }else{
                                            comision=co5000a10000brlapen.value;
                                            inversa=in5000a10000brlapen.value;
                                            //inversa=inversacomision1000a5000.value;
                                            errorenvio.style.display='none';
                                            valcomision=(parseFloat(comision)*100).toFixed(2);
                                            resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealapen)).toFixed(2);//modificar
                                            valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                            valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                            tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                            tipodecambio.innerHTML=valrealapen;
                                            tipodecomision.innerHTML=+valcomenviar+" BRL";
                                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                            valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificarss
                                            inputmontoenviar.value=valtotalrecibe;
                                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                                            tcambio.value=valrealapen;
                                            tcomisi.value=valcomenviar;
                                            timpues.value=valimpuestos;
                                            ttotale.value=valtotalenviar;
                                            tenviar.value=resultadoinicial;//modificar
                                            //tmoneda.value='Sol a Real';
                                            tmoneda.value='Real a Sol';
                                            trecibe.value=tipototalrecibe.value;
                                            btnsiguiente.style.display='block';
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                break;
            case('brlusd'):
                var valmontoinit=inputmontoenviar.value;
                var valmonto=valabajo;
                if(valmonto<0){
                    errorenvio.style.display='block';
                    errorenvio.innerHTML='Ingrese Monto mayor a 100';
                    tipodeimpuestos.innerHTML="0.00";
                    tipodecambio.innerHTML="0.00";
                    tipodecomision.innerHTML="0.00";
                    tipototalenviar.innerHTML="0.00";
                    tipototalrecibe.value="0.00";
                    numcomision.innerHTML="0.00";
                    tcambio.value=0;
                    tcomisi.value=0;
                    timpues.value=0;
                    ttotale.value=0;
                    tenviar.value=0;
                    trecibe.value=0;
                    tmoneda.value='Dolar a Real';
                    btnsiguiente.style.display='none';
                }else{
                    if(valmonto<200){
                        //inicia
                        if(valmonto<200){
                            comision=co100a199brlausd.value;
                            inversa=in100a199brlausd.value;
                            //inversa=inversacomision100a199.value;
                            errorenvio.style.display='none';
                            valcomision=(parseFloat(comision)*100).toFixed(2);
                            resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealausd)).toFixed(2);//modificar
                            valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                            valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                            tipodeimpuestos.innerHTML=parseFloat(valimpuestos).toFixed(2)+"&nbsp;BRL";
                            tipodecambio.innerHTML=valrealausd;
                            tipodecomision.innerHTML=+valcomenviar+" BRL";
                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                            valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                            inputmontoenviar.value=valtotalrecibe;
                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                            tcambio.value=valrealausd;
                            tcomisi.value=valcomenviar;
                            timpues.value=valimpuestos;
                            ttotale.value=valtotalenviar;
                            tenviar.value=resultadoinicial;//modificar
                            trecibe.value=valtotalrecibe;
                            tmoneda.value='Dolar a Real';
                            btnsiguiente.style.display='block';
                        }else{
                            if(valmonto<300){
                                comision=co200a299brlausd.value;
                                inversa=in200a299brlausd.value;
                                //inversa=inversacomision200a299.value;
                                errorenvio.style.display='none';
                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealausd)).toFixed(2);//modificar
                                valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                tipodeimpuestos.innerHTML=parseFloat(valimpuestos).toFixed(2)+"&nbsp;BRL";
                                tipodecambio.innerHTML=valrealausd;
                                tipodecomision.innerHTML=+valcomenviar+" BRL";
                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                inputmontoenviar.value=valtotalrecibe;
                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                tcambio.value=valrealausd;
                                tcomisi.value=valcomenviar;
                                timpues.value=valimpuestos;
                                ttotale.value=valtotalenviar;
                                tenviar.value=resultadoinicial;//modificar
                                trecibe.value=valtotalrecibe;
                                tmoneda.value='Dolar a Real';
                                btnsiguiente.style.display='block';
                            }else{
                                if(valmonto<500){
                                    comision=co300a499brlausd.value;
                                    inversa=in300a499brlausd.value;
                                    //inversa=inversacomision300a399.value;
                                    errorenvio.style.display='none';
                                    valcomision=(parseFloat(comision)*100).toFixed(2);
                                    resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealausd)).toFixed(2);//modificar
                                    valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                    valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                    valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                    valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                    tipodeimpuestos.innerHTML=parseFloat(valimpuestos).toFixed(2)+"&nbsp;BRL";
                                    tipodecambio.innerHTML=valrealausd;
                                    tipodecomision.innerHTML=+valcomenviar+" BRL";
                                    tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                    valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                    inputmontoenviar.value=valtotalrecibe;
                                    numcomision.innerHTML=valcomision+"% : &nbsp;";
                                    tcambio.value=valrealausd;
                                    tcomisi.value=valcomenviar;
                                    timpues.value=valimpuestos;
                                    ttotale.value=valtotalenviar;
                                    tenviar.value=resultadoinicial;//modificar
                                    trecibe.value=valtotalrecibe;
                                    tmoneda.value='Dolar a Real';
                                    btnsiguiente.style.display='block';
                                }else{
                                    if(valmonto<1000){
                                        comision=co500a999brlausd.value;
                                        inversa=in500a999brlausd.value;
                                        //inversa=inversacomision400a999.value;
                                        errorenvio.style.display='none';
                                        valcomision=(parseFloat(comision)*100).toFixed(2);
                                        resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealausd)).toFixed(2);//modificar
                                        valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                        valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                        valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                        valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                        tipodeimpuestos.innerHTML=parseFloat(valimpuestos).toFixed(2)+"&nbsp;BRL";
                                        tipodecambio.innerHTML=valrealausd;
                                        tipodecomision.innerHTML=+valcomenviar+" BRL";
                                        tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                        valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                        inputmontoenviar.value=valtotalrecibe;
                                        numcomision.innerHTML=valcomision+"% : &nbsp;";
                                        tcambio.value=valrealausd;
                                        tcomisi.value=valcomenviar;
                                        timpues.value=valimpuestos;
                                        ttotale.value=valtotalenviar;
                                        tenviar.value=resultadoinicial;//modificar
                                        trecibe.value=valtotalrecibe;
                                        tmoneda.value='Dolar a Real';
                                        btnsiguiente.style.display='block';
                                    }else{
                                        if(valmonto<5000){
                                            comision=co1000a4999brlausd.value;
                                            inversa=in1000a4999brlausd.value;
                                            //inversa=in1000a5000brlusd;
                                            //comision=comision1000a5000.value;
                                            //inversa=inversacomision1000a5000.value;
                                            errorenvio.style.display='none';
                                            valcomision=(parseFloat(comision)*100).toFixed(2);
                                            resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealausd)).toFixed(2);//modificar
                                            valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                            valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                            tipodeimpuestos.innerHTML=parseFloat(valimpuestos).toFixed(2)+"&nbsp;BRL";
                                            tipodecambio.innerHTML=valrealausd;
                                            tipodecomision.innerHTML=+valcomenviar+" BRL";
                                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                            valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                            inputmontoenviar.value=valtotalrecibe;
                                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                                            tcambio.value=valrealausd;
                                            tcomisi.value=valcomenviar;
                                            timpues.value=valimpuestos;
                                            ttotale.value=valtotalenviar;
                                            tenviar.value=resultadoinicial;//modificar
                                            trecibe.value=valtotalrecibe;
                                            tmoneda.value='Dolar a Real';
                                            btnsiguiente.style.display='block';
                                        }else{
                                            if(valmonto<=10000){
                                                comision=co5000a10000brlausd.value;
                                                inversa=in5000a10000brlausd.value;
                                                //inversa=in1000a5000brlusd;
                                                //comision=comision1000a5000.value;
                                                //inversa=inversacomision1000a5000.value;
                                                errorenvio.style.display='none';
                                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                                resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealausd)).toFixed(2);//modificar
                                                valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                tipodeimpuestos.innerHTML=parseFloat(valimpuestos).toFixed(2)+"&nbsp;BRL";
                                                tipodecambio.innerHTML=valrealausd;
                                                tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                inputmontoenviar.value=valtotalrecibe;
                                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                tcambio.value=valrealausd;
                                                tcomisi.value=valcomenviar;
                                                timpues.value=valimpuestos;
                                                ttotale.value=valtotalenviar;
                                                tenviar.value=resultadoinicial;//modificar
                                                trecibe.value=valtotalrecibe;
                                                tmoneda.value='Dolar a Real';
                                                btnsiguiente.style.display='block';
                                            }else{
                                                comision=co5000a10000brlausd.value;
                                                inversa=in5000a10000brlausd.value;
                                                //inversa=in1000a5000brlusd;
                                                //comision=comision1000a5000.value;
                                                //inversa=inversacomision1000a5000.value;
                                                errorenvio.style.display='none';
                                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                                resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealausd)).toFixed(2);//modificar
                                                valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                tipodecambio.innerHTML=valrealausd;
                                                tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                inputmontoenviar.value=valtotalrecibe;
                                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                tcambio.value=valrealausd;
                                                tcomisi.value=valcomenviar;
                                                timpues.value=valimpuestos;
                                                ttotale.value=valtotalenviar;
                                                tenviar.value=resultadoinicial;//modificar
                                                trecibe.value=valtotalrecibe;
                                                tmoneda.value='Dolar a Real';
                                                btnsiguiente.style.display='block';
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        //termina
                    }else{
                        if(valmonto<300){
                            //inicia
                            if(valmonto<200){
                                comision=co100a199brlausd.value;
                                inversa=in100a199brlausd.value;
                                //inversa=inversacomision100a199.value;
                                errorenvio.style.display='none';
                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealausd)).toFixed(2);//modificar
                                valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                tipodeimpuestos.innerHTML=parseFloat(valimpuestos).toFixed(2)+"&nbsp;BRL";
                                tipodecambio.innerHTML=valrealausd;
                                tipodecomision.innerHTML=+valcomenviar+" BRL";
                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                inputmontoenviar.value=valtotalrecibe;
                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                tcambio.value=valrealausd;
                                tcomisi.value=valcomenviar;
                                timpues.value=valimpuestos;
                                ttotale.value=valtotalenviar;
                                tenviar.value=resultadoinicial;//modificar
                                trecibe.value=valtotalrecibe;
                                tmoneda.value='Dolar a Real';
                                btnsiguiente.style.display='block';
                            }else{
                                if(valmonto<300){
                                    comision=co200a299brlausd.value;
                                    inversa=in200a299brlausd.value;
                                    //inversa=inversacomision200a299.value;
                                    errorenvio.style.display='none';
                                    valcomision=(parseFloat(comision)*100).toFixed(2);
                                    resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealausd)).toFixed(2);//modificar
                                    valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                    valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                    valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                    valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                    tipodeimpuestos.innerHTML=parseFloat(valimpuestos).toFixed(2)+"&nbsp;BRL";
                                    tipodecambio.innerHTML=valrealausd;
                                    tipodecomision.innerHTML=+valcomenviar+" BRL";
                                    tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                    valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                    inputmontoenviar.value=valtotalrecibe;
                                    numcomision.innerHTML=valcomision+"% : &nbsp;";
                                    tcambio.value=valrealausd;
                                    tcomisi.value=valcomenviar;
                                    timpues.value=valimpuestos;
                                    ttotale.value=valtotalenviar;
                                    tenviar.value=resultadoinicial;//modificar
                                    trecibe.value=valtotalrecibe;
                                    tmoneda.value='Dolar a Real';
                                    btnsiguiente.style.display='block';
                                }else{
                                    if(valmonto<500){
                                        comision=co300a499brlausd.value;
                                        inversa=in300a499brlausd.value;
                                        //inversa=inversacomision300a399.value;
                                        errorenvio.style.display='none';
                                        valcomision=(parseFloat(comision)*100).toFixed(2);
                                        resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealausd)).toFixed(2);//modificar
                                        valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                        valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                        valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                        valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                        tipodeimpuestos.innerHTML=parseFloat(valimpuestos).toFixed(2)+"&nbsp;BRL";
                                        tipodecambio.innerHTML=valrealausd;
                                        tipodecomision.innerHTML=+valcomenviar+" BRL";
                                        tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                        valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                        inputmontoenviar.value=valtotalrecibe;
                                        numcomision.innerHTML=valcomision+"% : &nbsp;";
                                        tcambio.value=valrealausd;
                                        tcomisi.value=valcomenviar;
                                        timpues.value=valimpuestos;
                                        ttotale.value=valtotalenviar;
                                        tenviar.value=resultadoinicial;//modificar
                                        trecibe.value=valtotalrecibe;
                                        tmoneda.value='Dolar a Real';
                                        btnsiguiente.style.display='block';
                                    }else{
                                        if(valmonto<1000){
                                            comision=co500a999brlausd.value;
                                            inversa=in500a999brlausd.value;
                                            //inversa=inversacomision400a999.value;
                                            errorenvio.style.display='none';
                                            valcomision=(parseFloat(comision)*100).toFixed(2);
                                            resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealausd)).toFixed(2);//modificar
                                            valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                            valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                            tipodeimpuestos.innerHTML=parseFloat(valimpuestos).toFixed(2)+"&nbsp;BRL";
                                            tipodecambio.innerHTML=valrealausd;
                                            tipodecomision.innerHTML=+valcomenviar+" BRL";
                                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                            valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                            inputmontoenviar.value=valtotalrecibe;
                                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                                            tcambio.value=valrealausd;
                                            tcomisi.value=valcomenviar;
                                            timpues.value=valimpuestos;
                                            ttotale.value=valtotalenviar;
                                            tenviar.value=resultadoinicial;//modificar
                                            trecibe.value=valtotalrecibe;
                                            tmoneda.value='Dolar a Real';
                                            btnsiguiente.style.display='block';
                                        }else{
                                            if(valmonto<5000){
                                                comision=co1000a4999brlausd.value;
                                                inversa=in1000a4999brlausd.value;
                                                //inversa=in1000a5000brlusd;
                                                //comision=comision1000a5000.value;
                                                //inversa=inversacomision1000a5000.value;
                                                errorenvio.style.display='none';
                                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                                resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealausd)).toFixed(2);//modificar
                                                valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                tipodeimpuestos.innerHTML=parseFloat(valimpuestos).toFixed(2)+"&nbsp;BRL";
                                                tipodecambio.innerHTML=valrealausd;
                                                tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                inputmontoenviar.value=valtotalrecibe;
                                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                tcambio.value=valrealausd;
                                                tcomisi.value=valcomenviar;
                                                timpues.value=valimpuestos;
                                                ttotale.value=valtotalenviar;
                                                tenviar.value=resultadoinicial;//modificar
                                                trecibe.value=valtotalrecibe;
                                                tmoneda.value='Dolar a Real';
                                                btnsiguiente.style.display='block';
                                            }else{
                                                if(valmonto<=10000){
                                                    comision=co5000a10000brlausd.value;
                                                    inversa=in5000a10000brlausd.value;
                                                    //inversa=in1000a5000brlusd;
                                                    //comision=comision1000a5000.value;
                                                    //inversa=inversacomision1000a5000.value;
                                                    errorenvio.style.display='none';
                                                    valcomision=(parseFloat(comision)*100).toFixed(2);
                                                    resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealausd)).toFixed(2);//modificar
                                                    valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                    valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                    valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                    valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                    tipodeimpuestos.innerHTML=parseFloat(valimpuestos).toFixed(2)+"&nbsp;BRL";
                                                    tipodecambio.innerHTML=valrealausd;
                                                    tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                    tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                    valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                    inputmontoenviar.value=valtotalrecibe;
                                                    numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                    tcambio.value=valrealausd;
                                                    tcomisi.value=valcomenviar;
                                                    timpues.value=valimpuestos;
                                                    ttotale.value=valtotalenviar;
                                                    tenviar.value=resultadoinicial;//modificar
                                                    trecibe.value=valtotalrecibe;
                                                    tmoneda.value='Dolar a Real';
                                                    btnsiguiente.style.display='block';
                                                }else{
                                                    comision=co5000a10000brlausd.value;
                                                    inversa=in5000a10000brlausd.value;
                                                    //inversa=in1000a5000brlusd;
                                                    //comision=comision1000a5000.value;
                                                    //inversa=inversacomision1000a5000.value;
                                                    errorenvio.style.display='none';
                                                    valcomision=(parseFloat(comision)*100).toFixed(2);
                                                    resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealausd)).toFixed(2);//modificar
                                                    valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                    valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                    valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                    valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                    tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                    tipodecambio.innerHTML=valrealausd;
                                                    tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                    tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                    valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                    inputmontoenviar.value=valtotalrecibe;
                                                    numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                    tcambio.value=valrealausd;
                                                    tcomisi.value=valcomenviar;
                                                    timpues.value=valimpuestos;
                                                    ttotale.value=valtotalenviar;
                                                    tenviar.value=resultadoinicial;//modificar
                                                    trecibe.value=valtotalrecibe;
                                                    tmoneda.value='Dolar a Real';
                                                    btnsiguiente.style.display='block';
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            //termina
                        }else{
                            if(valmonto<500){
                                //inicia
                                if(valmonto<200){
                                    comision=co100a199brlausd.value;
                                    inversa=in100a199brlausd.value;
                                    //inversa=inversacomision100a199.value;
                                    errorenvio.style.display='none';
                                    valcomision=(parseFloat(comision)*100).toFixed(2);
                                    resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealausd)).toFixed(2);//modificar
                                    valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                    valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                    valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                    valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                    tipodeimpuestos.innerHTML=parseFloat(valimpuestos).toFixed(2)+"&nbsp;BRL";
                                    tipodecambio.innerHTML=valrealausd;
                                    tipodecomision.innerHTML=+valcomenviar+" BRL";
                                    tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                    valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                    inputmontoenviar.value=valtotalrecibe;
                                    numcomision.innerHTML=valcomision+"% : &nbsp;";
                                    tcambio.value=valrealausd;
                                    tcomisi.value=valcomenviar;
                                    timpues.value=valimpuestos;
                                    ttotale.value=valtotalenviar;
                                    tenviar.value=resultadoinicial;//modificar
                                    trecibe.value=valtotalrecibe;
                                    tmoneda.value='Dolar a Real';
                                    btnsiguiente.style.display='block';
                                }else{
                                    if(valmonto<300){
                                        comision=co200a299brlausd.value;
                                        inversa=in200a299brlausd.value;
                                        //inversa=inversacomision200a299.value;
                                        errorenvio.style.display='none';
                                        valcomision=(parseFloat(comision)*100).toFixed(2);
                                        resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealausd)).toFixed(2);//modificar
                                        valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                        valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                        valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                        valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                        tipodeimpuestos.innerHTML=parseFloat(valimpuestos).toFixed(2)+"&nbsp;BRL";
                                        tipodecambio.innerHTML=valrealausd;
                                        tipodecomision.innerHTML=+valcomenviar+" BRL";
                                        tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                        valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                        inputmontoenviar.value=valtotalrecibe;
                                        numcomision.innerHTML=valcomision+"% : &nbsp;";
                                        tcambio.value=valrealausd;
                                        tcomisi.value=valcomenviar;
                                        timpues.value=valimpuestos;
                                        ttotale.value=valtotalenviar;
                                        tenviar.value=resultadoinicial;//modificar
                                        trecibe.value=valtotalrecibe;
                                        tmoneda.value='Dolar a Real';
                                        btnsiguiente.style.display='block';
                                    }else{
                                        if(valmonto<500){
                                            comision=co300a499brlausd.value;
                                            inversa=in300a499brlausd.value;
                                            //inversa=inversacomision300a399.value;
                                            errorenvio.style.display='none';
                                            valcomision=(parseFloat(comision)*100).toFixed(2);
                                            resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealausd)).toFixed(2);//modificar
                                            valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                            valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                            tipodeimpuestos.innerHTML=parseFloat(valimpuestos).toFixed(2)+"&nbsp;BRL";
                                            tipodecambio.innerHTML=valrealausd;
                                            tipodecomision.innerHTML=+valcomenviar+" BRL";
                                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                            valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                            inputmontoenviar.value=valtotalrecibe;
                                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                                            tcambio.value=valrealausd;
                                            tcomisi.value=valcomenviar;
                                            timpues.value=valimpuestos;
                                            ttotale.value=valtotalenviar;
                                            tenviar.value=resultadoinicial;//modificar
                                            trecibe.value=valtotalrecibe;
                                            tmoneda.value='Dolar a Real';
                                            btnsiguiente.style.display='block';
                                        }else{
                                            if(valmonto<1000){
                                                comision=co500a999brlausd.value;
                                                inversa=in500a999brlausd.value;
                                                //inversa=inversacomision400a999.value;
                                                errorenvio.style.display='none';
                                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                                resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealausd)).toFixed(2);//modificar
                                                valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                tipodeimpuestos.innerHTML=parseFloat(valimpuestos).toFixed(2)+"&nbsp;BRL";
                                                tipodecambio.innerHTML=valrealausd;
                                                tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                inputmontoenviar.value=valtotalrecibe;
                                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                tcambio.value=valrealausd;
                                                tcomisi.value=valcomenviar;
                                                timpues.value=valimpuestos;
                                                ttotale.value=valtotalenviar;
                                                tenviar.value=resultadoinicial;//modificar
                                                trecibe.value=valtotalrecibe;
                                                tmoneda.value='Dolar a Real';
                                                btnsiguiente.style.display='block';
                                            }else{
                                                if(valmonto<5000){
                                                    comision=co1000a4999brlausd.value;
                                                    inversa=in1000a4999brlausd.value;
                                                    //inversa=in1000a5000brlusd;
                                                    //comision=comision1000a5000.value;
                                                    //inversa=inversacomision1000a5000.value;
                                                    errorenvio.style.display='none';
                                                    valcomision=(parseFloat(comision)*100).toFixed(2);
                                                    resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealausd)).toFixed(2);//modificar
                                                    valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                    valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                    valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                    valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                    tipodeimpuestos.innerHTML=parseFloat(valimpuestos).toFixed(2)+"&nbsp;BRL";
                                                    tipodecambio.innerHTML=valrealausd;
                                                    tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                    tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                    valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                    inputmontoenviar.value=valtotalrecibe;
                                                    numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                    tcambio.value=valrealausd;
                                                    tcomisi.value=valcomenviar;
                                                    timpues.value=valimpuestos;
                                                    ttotale.value=valtotalenviar;
                                                    tenviar.value=resultadoinicial;//modificar
                                                    trecibe.value=valtotalrecibe;
                                                    tmoneda.value='Dolar a Real';
                                                    btnsiguiente.style.display='block';
                                                }else{
                                                    if(valmonto<=10000){
                                                        comision=co5000a10000brlausd.value;
                                                        inversa=in5000a10000brlausd.value;
                                                        //inversa=in1000a5000brlusd;
                                                        //comision=comision1000a5000.value;
                                                        //inversa=inversacomision1000a5000.value;
                                                        errorenvio.style.display='none';
                                                        valcomision=(parseFloat(comision)*100).toFixed(2);
                                                        resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealausd)).toFixed(2);//modificar
                                                        valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                        valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                        valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                        valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                        tipodeimpuestos.innerHTML=parseFloat(valimpuestos).toFixed(2)+"&nbsp;BRL";
                                                        tipodecambio.innerHTML=valrealausd;
                                                        tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                        tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                        valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                        inputmontoenviar.value=valtotalrecibe;
                                                        numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                        tcambio.value=valrealausd;
                                                        tcomisi.value=valcomenviar;
                                                        timpues.value=valimpuestos;
                                                        ttotale.value=valtotalenviar;
                                                        tenviar.value=resultadoinicial;//modificar
                                                        trecibe.value=valtotalrecibe;
                                                        tmoneda.value='Dolar a Real';
                                                        btnsiguiente.style.display='block';
                                                    }else{
                                                        comision=co5000a10000brlausd.value;
                                                        inversa=in5000a10000brlausd.value;
                                                        //inversa=in1000a5000brlusd;
                                                        //comision=comision1000a5000.value;
                                                        //inversa=inversacomision1000a5000.value;
                                                        errorenvio.style.display='none';
                                                        valcomision=(parseFloat(comision)*100).toFixed(2);
                                                        resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealausd)).toFixed(2);//modificar
                                                        valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                        valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                        valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                        valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                        tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                        tipodecambio.innerHTML=valrealausd;
                                                        tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                        tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                        valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                        inputmontoenviar.value=valtotalrecibe;
                                                        numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                        tcambio.value=valrealausd;
                                                        tcomisi.value=valcomenviar;
                                                        timpues.value=valimpuestos;
                                                        ttotale.value=valtotalenviar;
                                                        tenviar.value=resultadoinicial;//modificar
                                                        trecibe.value=valtotalrecibe;
                                                        tmoneda.value='Dolar a Real';
                                                        btnsiguiente.style.display='block';
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                //termina
                            }else{
                                if(valmonto<1000){
                                    //inicia
                                    if(valmonto<200){
                                        comision=co100a199brlausd.value;
                                        inversa=in100a199brlausd.value;
                                        //inversa=inversacomision100a199.value;
                                        errorenvio.style.display='none';
                                        valcomision=(parseFloat(comision)*100).toFixed(2);
                                        resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealausd)).toFixed(2);//modificar
                                        valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                        valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                        valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                        valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                        tipodeimpuestos.innerHTML=parseFloat(valimpuestos).toFixed(2)+"&nbsp;BRL";
                                        tipodecambio.innerHTML=valrealausd;
                                        tipodecomision.innerHTML=+valcomenviar+" BRL";
                                        tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                        valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                        inputmontoenviar.value=valtotalrecibe;
                                        numcomision.innerHTML=valcomision+"% : &nbsp;";
                                        tcambio.value=valrealausd;
                                        tcomisi.value=valcomenviar;
                                        timpues.value=valimpuestos;
                                        ttotale.value=valtotalenviar;
                                        tenviar.value=resultadoinicial;//modificar
                                        trecibe.value=valtotalrecibe;
                                        tmoneda.value='Dolar a Real';
                                        btnsiguiente.style.display='block';
                                    }else{
                                        if(valmonto<300){
                                            comision=co200a299brlausd.value;
                                            inversa=in200a299brlausd.value;
                                            //inversa=inversacomision200a299.value;
                                            errorenvio.style.display='none';
                                            valcomision=(parseFloat(comision)*100).toFixed(2);
                                            resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealausd)).toFixed(2);//modificar
                                            valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                            valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                            tipodeimpuestos.innerHTML=parseFloat(valimpuestos).toFixed(2)+"&nbsp;BRL";
                                            tipodecambio.innerHTML=valrealausd;
                                            tipodecomision.innerHTML=+valcomenviar+" BRL";
                                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                            valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                            inputmontoenviar.value=valtotalrecibe;
                                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                                            tcambio.value=valrealausd;
                                            tcomisi.value=valcomenviar;
                                            timpues.value=valimpuestos;
                                            ttotale.value=valtotalenviar;
                                            tenviar.value=resultadoinicial;//modificar
                                            trecibe.value=valtotalrecibe;
                                            tmoneda.value='Dolar a Real';
                                            btnsiguiente.style.display='block';
                                        }else{
                                            if(valmonto<500){
                                                comision=co300a499brlausd.value;
                                                inversa=in300a499brlausd.value;
                                                //inversa=inversacomision300a399.value;
                                                errorenvio.style.display='none';
                                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                                resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealausd)).toFixed(2);//modificar
                                                valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                tipodeimpuestos.innerHTML=parseFloat(valimpuestos).toFixed(2)+"&nbsp;BRL";
                                                tipodecambio.innerHTML=valrealausd;
                                                tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                inputmontoenviar.value=valtotalrecibe;
                                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                tcambio.value=valrealausd;
                                                tcomisi.value=valcomenviar;
                                                timpues.value=valimpuestos;
                                                ttotale.value=valtotalenviar;
                                                tenviar.value=resultadoinicial;//modificar
                                                trecibe.value=valtotalrecibe;
                                                tmoneda.value='Dolar a Real';
                                                btnsiguiente.style.display='block';
                                            }else{
                                                if(valmonto<1000){
                                                    comision=co500a999brlausd.value;
                                                    inversa=in500a999brlausd.value;
                                                    //inversa=inversacomision400a999.value;
                                                    errorenvio.style.display='none';
                                                    valcomision=(parseFloat(comision)*100).toFixed(2);
                                                    resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealausd)).toFixed(2);//modificar
                                                    valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                    valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                    valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                    valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                    tipodeimpuestos.innerHTML=parseFloat(valimpuestos).toFixed(2)+"&nbsp;BRL";
                                                    tipodecambio.innerHTML=valrealausd;
                                                    tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                    tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                    valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                    inputmontoenviar.value=valtotalrecibe;
                                                    numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                    tcambio.value=valrealausd;
                                                    tcomisi.value=valcomenviar;
                                                    timpues.value=valimpuestos;
                                                    ttotale.value=valtotalenviar;
                                                    tenviar.value=resultadoinicial;//modificar
                                                    trecibe.value=valtotalrecibe;
                                                    tmoneda.value='Dolar a Real';
                                                    btnsiguiente.style.display='block';
                                                }else{
                                                    if(valmonto<5000){
                                                        comision=co1000a4999brlausd.value;
                                                        inversa=in1000a4999brlausd.value;
                                                        //inversa=in1000a5000brlusd;
                                                        //comision=comision1000a5000.value;
                                                        //inversa=inversacomision1000a5000.value;
                                                        errorenvio.style.display='none';
                                                        valcomision=(parseFloat(comision)*100).toFixed(2);
                                                        resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealausd)).toFixed(2);//modificar
                                                        valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                        valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                        valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                        valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                        tipodeimpuestos.innerHTML=parseFloat(valimpuestos).toFixed(2)+"&nbsp;BRL";
                                                        tipodecambio.innerHTML=valrealausd;
                                                        tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                        tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                        valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                        inputmontoenviar.value=valtotalrecibe;
                                                        numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                        tcambio.value=valrealausd;
                                                        tcomisi.value=valcomenviar;
                                                        timpues.value=valimpuestos;
                                                        ttotale.value=valtotalenviar;
                                                        tenviar.value=resultadoinicial;//modificar
                                                        trecibe.value=valtotalrecibe;
                                                        tmoneda.value='Dolar a Real';
                                                        btnsiguiente.style.display='block';
                                                    }else{
                                                        if(valmonto<=10000){
                                                            comision=co5000a10000brlausd.value;
                                                            inversa=in5000a10000brlausd.value;
                                                            //inversa=in1000a5000brlusd;
                                                            //comision=comision1000a5000.value;
                                                            //inversa=inversacomision1000a5000.value;
                                                            errorenvio.style.display='none';
                                                            valcomision=(parseFloat(comision)*100).toFixed(2);
                                                            resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealausd)).toFixed(2);//modificar
                                                            valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                            valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                            tipodeimpuestos.innerHTML=parseFloat(valimpuestos).toFixed(2)+"&nbsp;BRL";
                                                            tipodecambio.innerHTML=valrealausd;
                                                            tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                            valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                            inputmontoenviar.value=valtotalrecibe;
                                                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                            tcambio.value=valrealausd;
                                                            tcomisi.value=valcomenviar;
                                                            timpues.value=valimpuestos;
                                                            ttotale.value=valtotalenviar;
                                                            tenviar.value=resultadoinicial;//modificar
                                                            trecibe.value=valtotalrecibe;
                                                            tmoneda.value='Dolar a Real';
                                                            btnsiguiente.style.display='block';
                                                        }else{
                                                            comision=co5000a10000brlausd.value;
                                                            inversa=in5000a10000brlausd.value;
                                                            //inversa=in1000a5000brlusd;
                                                            //comision=comision1000a5000.value;
                                                            //inversa=inversacomision1000a5000.value;
                                                            errorenvio.style.display='none';
                                                            valcomision=(parseFloat(comision)*100).toFixed(2);
                                                            resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealausd)).toFixed(2);//modificar
                                                            valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                            valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                            tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                            tipodecambio.innerHTML=valrealausd;
                                                            tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                            valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                            inputmontoenviar.value=valtotalrecibe;
                                                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                            tcambio.value=valrealausd;
                                                            tcomisi.value=valcomenviar;
                                                            timpues.value=valimpuestos;
                                                            ttotale.value=valtotalenviar;
                                                            tenviar.value=resultadoinicial;//modificar
                                                            trecibe.value=valtotalrecibe;
                                                            tmoneda.value='Dolar a Real';
                                                            btnsiguiente.style.display='block';
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    //termina
                                }else{
                                    if(valmonto<5000){
                                        //inicia
                                        if(valmonto<200){
                                            comision=co100a199brlausd.value;
                                            inversa=in100a199brlausd.value;
                                            //inversa=inversacomision100a199.value;
                                            errorenvio.style.display='none';
                                            valcomision=(parseFloat(comision)*100).toFixed(2);
                                            resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealausd)).toFixed(2);//modificar
                                            valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                            valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                            tipodeimpuestos.innerHTML=parseFloat(valimpuestos).toFixed(2)+"&nbsp;BRL";
                                            tipodecambio.innerHTML=valrealausd;
                                            tipodecomision.innerHTML=+valcomenviar+" BRL";
                                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                            valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                            inputmontoenviar.value=valtotalrecibe;
                                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                                            tcambio.value=valrealausd;
                                            tcomisi.value=valcomenviar;
                                            timpues.value=valimpuestos;
                                            ttotale.value=valtotalenviar;
                                            tenviar.value=resultadoinicial;//modificar
                                            trecibe.value=valtotalrecibe;
                                            tmoneda.value='Dolar a Real';
                                            btnsiguiente.style.display='block';
                                        }else{
                                            if(valmonto<300){
                                                comision=co200a299brlausd.value;
                                                inversa=in200a299brlausd.value;
                                                //inversa=inversacomision200a299.value;
                                                errorenvio.style.display='none';
                                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                                resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealausd)).toFixed(2);//modificar
                                                valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                tipodeimpuestos.innerHTML=parseFloat(valimpuestos).toFixed(2)+"&nbsp;BRL";
                                                tipodecambio.innerHTML=valrealausd;
                                                tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                inputmontoenviar.value=valtotalrecibe;
                                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                tcambio.value=valrealausd;
                                                tcomisi.value=valcomenviar;
                                                timpues.value=valimpuestos;
                                                ttotale.value=valtotalenviar;
                                                tenviar.value=resultadoinicial;//modificar
                                                trecibe.value=valtotalrecibe;
                                                tmoneda.value='Dolar a Real';
                                                btnsiguiente.style.display='block';
                                            }else{
                                                if(valmonto<500){
                                                    comision=co300a499brlausd.value;
                                                    inversa=in300a499brlausd.value;
                                                    //inversa=inversacomision300a399.value;
                                                    errorenvio.style.display='none';
                                                    valcomision=(parseFloat(comision)*100).toFixed(2);
                                                    resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealausd)).toFixed(2);//modificar
                                                    valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                    valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                    valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                    valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                    tipodeimpuestos.innerHTML=parseFloat(valimpuestos).toFixed(2)+"&nbsp;BRL";
                                                    tipodecambio.innerHTML=valrealausd;
                                                    tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                    tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                    valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                    inputmontoenviar.value=valtotalrecibe;
                                                    numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                    tcambio.value=valrealausd;
                                                    tcomisi.value=valcomenviar;
                                                    timpues.value=valimpuestos;
                                                    ttotale.value=valtotalenviar;
                                                    tenviar.value=resultadoinicial;//modificar
                                                    trecibe.value=valtotalrecibe;
                                                    tmoneda.value='Dolar a Real';
                                                    btnsiguiente.style.display='block';
                                                }else{
                                                    if(valmonto<1000){
                                                        comision=co500a999brlausd.value;
                                                        inversa=in500a999brlausd.value;
                                                        //inversa=inversacomision400a999.value;
                                                        errorenvio.style.display='none';
                                                        valcomision=(parseFloat(comision)*100).toFixed(2);
                                                        resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealausd)).toFixed(2);//modificar
                                                        valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                        valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                        valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                        valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                        tipodeimpuestos.innerHTML=parseFloat(valimpuestos).toFixed(2)+"&nbsp;BRL";
                                                        tipodecambio.innerHTML=valrealausd;
                                                        tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                        tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                        valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                        inputmontoenviar.value=valtotalrecibe;
                                                        numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                        tcambio.value=valrealausd;
                                                        tcomisi.value=valcomenviar;
                                                        timpues.value=valimpuestos;
                                                        ttotale.value=valtotalenviar;
                                                        tenviar.value=resultadoinicial;//modificar
                                                        trecibe.value=valtotalrecibe;
                                                        tmoneda.value='Dolar a Real';
                                                        btnsiguiente.style.display='block';
                                                    }else{
                                                        if(valmonto<5000){
                                                            comision=co1000a4999brlausd.value;
                                                            inversa=in1000a4999brlausd.value;
                                                            //inversa=in1000a5000brlusd;
                                                            //comision=comision1000a5000.value;
                                                            //inversa=inversacomision1000a5000.value;
                                                            errorenvio.style.display='none';
                                                            valcomision=(parseFloat(comision)*100).toFixed(2);
                                                            resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealausd)).toFixed(2);//modificar
                                                            valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                            valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                            tipodeimpuestos.innerHTML=parseFloat(valimpuestos).toFixed(2)+"&nbsp;BRL";
                                                            tipodecambio.innerHTML=valrealausd;
                                                            tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                            valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                            inputmontoenviar.value=valtotalrecibe;
                                                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                            tcambio.value=valrealausd;
                                                            tcomisi.value=valcomenviar;
                                                            timpues.value=valimpuestos;
                                                            ttotale.value=valtotalenviar;
                                                            tenviar.value=resultadoinicial;//modificar
                                                            trecibe.value=valtotalrecibe;
                                                            tmoneda.value='Dolar a Real';
                                                            btnsiguiente.style.display='block';
                                                        }else{
                                                            if(valmonto<=10000){
                                                                comision=co5000a10000brlausd.value;
                                                                inversa=in5000a10000brlausd.value;
                                                                //inversa=in1000a5000brlusd;
                                                                //comision=comision1000a5000.value;
                                                                //inversa=inversacomision1000a5000.value;
                                                                errorenvio.style.display='none';
                                                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                                                resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealausd)).toFixed(2);//modificar
                                                                valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                                valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                                tipodeimpuestos.innerHTML=parseFloat(valimpuestos).toFixed(2)+"&nbsp;BRL";
                                                                tipodecambio.innerHTML=valrealausd;
                                                                tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                                valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                                inputmontoenviar.value=valtotalrecibe;
                                                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                                tcambio.value=valrealausd;
                                                                tcomisi.value=valcomenviar;
                                                                timpues.value=valimpuestos;
                                                                ttotale.value=valtotalenviar;
                                                                tenviar.value=resultadoinicial;//modificar
                                                                trecibe.value=valtotalrecibe;
                                                                tmoneda.value='Dolar a Real';
                                                                btnsiguiente.style.display='block';
                                                            }else{
                                                                comision=co5000a10000brlausd.value;
                                                                inversa=in5000a10000brlausd.value;
                                                                //inversa=in1000a5000brlusd;
                                                                //comision=comision1000a5000.value;
                                                                //inversa=inversacomision1000a5000.value;
                                                                errorenvio.style.display='none';
                                                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                                                resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealausd)).toFixed(2);//modificar
                                                                valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                                valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                                tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                                tipodecambio.innerHTML=valrealausd;
                                                                tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                                valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                                inputmontoenviar.value=valtotalrecibe;
                                                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                                tcambio.value=valrealausd;
                                                                tcomisi.value=valcomenviar;
                                                                timpues.value=valimpuestos;
                                                                ttotale.value=valtotalenviar;
                                                                tenviar.value=resultadoinicial;//modificar
                                                                trecibe.value=valtotalrecibe;
                                                                tmoneda.value='Dolar a Real';
                                                                btnsiguiente.style.display='block';
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        //termina
                                    }else{
                                        if(valmonto<=10000){
                                        //inicia
                                            if(valmonto<200){
                                                comision=co100a199brlausd.value;
                                                inversa=in100a199brlausd.value;
                                                //inversa=inversacomision100a199.value;
                                                errorenvio.style.display='none';
                                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                                resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealausd)).toFixed(2);//modificar
                                                valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                tipodeimpuestos.innerHTML=parseFloat(valimpuestos).toFixed(2)+"&nbsp;BRL";
                                                tipodecambio.innerHTML=valrealausd;
                                                tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                inputmontoenviar.value=valtotalrecibe;
                                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                tcambio.value=valrealausd;
                                                tcomisi.value=valcomenviar;
                                                timpues.value=valimpuestos;
                                                ttotale.value=valtotalenviar;
                                                tenviar.value=resultadoinicial;//modificar
                                                trecibe.value=valtotalrecibe;
                                                tmoneda.value='Dolar a Real';
                                                btnsiguiente.style.display='block';
                                            }else{
                                                if(valmonto<300){
                                                    comision=co200a299brlausd.value;
                                                    inversa=in200a299brlausd.value;
                                                    //inversa=inversacomision200a299.value;
                                                    errorenvio.style.display='none';
                                                    valcomision=(parseFloat(comision)*100).toFixed(2);
                                                    resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealausd)).toFixed(2);//modificar
                                                    valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                    valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                    valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                    valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                    tipodeimpuestos.innerHTML=parseFloat(valimpuestos).toFixed(2)+"&nbsp;BRL";
                                                    tipodecambio.innerHTML=valrealausd;
                                                    tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                    tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                    valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                    inputmontoenviar.value=valtotalrecibe;
                                                    numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                    tcambio.value=valrealausd;
                                                    tcomisi.value=valcomenviar;
                                                    timpues.value=valimpuestos;
                                                    ttotale.value=valtotalenviar;
                                                    tenviar.value=resultadoinicial;//modificar
                                                    trecibe.value=valtotalrecibe;
                                                    tmoneda.value='Dolar a Real';
                                                    btnsiguiente.style.display='block';
                                                }else{
                                                    if(valmonto<500){
                                                        comision=co300a499brlausd.value;
                                                        inversa=in300a499brlausd.value;
                                                        //inversa=inversacomision300a399.value;
                                                        errorenvio.style.display='none';
                                                        valcomision=(parseFloat(comision)*100).toFixed(2);
                                                        resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealausd)).toFixed(2);//modificar
                                                        valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                        valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                        valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                        valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                        tipodeimpuestos.innerHTML=parseFloat(valimpuestos).toFixed(2)+"&nbsp;BRL";
                                                        tipodecambio.innerHTML=valrealausd;
                                                        tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                        tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                        valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                        inputmontoenviar.value=valtotalrecibe;
                                                        numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                        tcambio.value=valrealausd;
                                                        tcomisi.value=valcomenviar;
                                                        timpues.value=valimpuestos;
                                                        ttotale.value=valtotalenviar;
                                                        tenviar.value=resultadoinicial;//modificar
                                                        trecibe.value=valtotalrecibe;
                                                        tmoneda.value='Dolar a Real';
                                                        btnsiguiente.style.display='block';
                                                    }else{
                                                        if(valmonto<1000){
                                                            comision=co500a999brlausd.value;
                                                            inversa=in500a999brlausd.value;
                                                            //inversa=inversacomision400a999.value;
                                                            errorenvio.style.display='none';
                                                            valcomision=(parseFloat(comision)*100).toFixed(2);
                                                            resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealausd)).toFixed(2);//modificar
                                                            valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                            valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                            tipodeimpuestos.innerHTML=parseFloat(valimpuestos).toFixed(2)+"&nbsp;BRL";
                                                            tipodecambio.innerHTML=valrealausd;
                                                            tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                            valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                            inputmontoenviar.value=valtotalrecibe;
                                                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                            tcambio.value=valrealausd;
                                                            tcomisi.value=valcomenviar;
                                                            timpues.value=valimpuestos;
                                                            ttotale.value=valtotalenviar;
                                                            tenviar.value=resultadoinicial;//modificar
                                                            trecibe.value=valtotalrecibe;
                                                            tmoneda.value='Dolar a Real';
                                                            btnsiguiente.style.display='block';
                                                        }else{
                                                            if(valmonto<5000){
                                                                comision=co1000a4999brlausd.value;
                                                                inversa=in1000a4999brlausd.value;
                                                                //inversa=in1000a5000brlusd;
                                                                //comision=comision1000a5000.value;
                                                                //inversa=inversacomision1000a5000.value;
                                                                errorenvio.style.display='none';
                                                                valcomision=(parseFloat(comision)*100).toFixed(2);
                                                                resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealausd)).toFixed(2);//modificar
                                                                valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                                valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                                valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                                valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                                tipodeimpuestos.innerHTML=parseFloat(valimpuestos).toFixed(2)+"&nbsp;BRL";
                                                                tipodecambio.innerHTML=valrealausd;
                                                                tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                                tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                                valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                                inputmontoenviar.value=valtotalrecibe;
                                                                numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                                tcambio.value=valrealausd;
                                                                tcomisi.value=valcomenviar;
                                                                timpues.value=valimpuestos;
                                                                ttotale.value=valtotalenviar;
                                                                tenviar.value=resultadoinicial;//modificar
                                                                trecibe.value=valtotalrecibe;
                                                                tmoneda.value='Dolar a Real';
                                                                btnsiguiente.style.display='block';
                                                            }else{
                                                                if(valmonto<=10000){
                                                                    comision=co5000a10000brlausd.value;
                                                                    inversa=in5000a10000brlausd.value;
                                                                    //inversa=in1000a5000brlusd;
                                                                    //comision=comision1000a5000.value;
                                                                    //inversa=inversacomision1000a5000.value;
                                                                    errorenvio.style.display='none';
                                                                    valcomision=(parseFloat(comision)*100).toFixed(2);
                                                                    resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealausd)).toFixed(2);//modificar
                                                                    valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                                    valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                                    valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                                    valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                                    tipodeimpuestos.innerHTML=parseFloat(valimpuestos).toFixed(2)+"&nbsp;BRL";
                                                                    tipodecambio.innerHTML=valrealausd;
                                                                    tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                                    tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                                    valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                                    inputmontoenviar.value=valtotalrecibe;
                                                                    numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                                    tcambio.value=valrealausd;
                                                                    tcomisi.value=valcomenviar;
                                                                    timpues.value=valimpuestos;
                                                                    ttotale.value=valtotalenviar;
                                                                    tenviar.value=resultadoinicial;//modificar
                                                                    trecibe.value=valtotalrecibe;
                                                                    tmoneda.value='Dolar a Real';
                                                                    btnsiguiente.style.display='block';
                                                                }else{
                                                                    comision=co5000a10000brlausd.value;
                                                                    inversa=in5000a10000brlausd.value;
                                                                    //inversa=in1000a5000brlusd;
                                                                    //comision=comision1000a5000.value;
                                                                    //inversa=inversacomision1000a5000.value;
                                                                    errorenvio.style.display='none';
                                                                    valcomision=(parseFloat(comision)*100).toFixed(2);
                                                                    resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealausd)).toFixed(2);//modificar
                                                                    valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                                                    valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                                                    valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                                                    valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                                                    tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                                                    tipodecambio.innerHTML=valrealausd;
                                                                    tipodecomision.innerHTML=+valcomenviar+" BRL";
                                                                    tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                                                    valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                                                    inputmontoenviar.value=valtotalrecibe;
                                                                    numcomision.innerHTML=valcomision+"% : &nbsp;";
                                                                    tcambio.value=valrealausd;
                                                                    tcomisi.value=valcomenviar;
                                                                    timpues.value=valimpuestos;
                                                                    ttotale.value=valtotalenviar;
                                                                    tenviar.value=resultadoinicial;//modificar
                                                                    trecibe.value=valtotalrecibe;
                                                                    tmoneda.value='Dolar a Real';
                                                                    btnsiguiente.style.display='block';
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                            //termina
                                        }else{
                                            comision=co5000a10000brlausd.value;
                                            inversa=in5000a10000brlausd.value;
                                            //inversa=in1000a5000brlusd;
                                            //comision=comision1000a5000.value;
                                            //inversa=inversacomision1000a5000.value;
                                            errorenvio.style.display='none';
                                            valcomision=(parseFloat(comision)*100).toFixed(2);
                                            resultadoinicial=(((parseFloat(valmonto)/inversa))/parseFloat(valrealausd)).toFixed(2);//modificar
                                            valcomenviar=(parseFloat(resultadoinicial)*parseFloat(comision)).toFixed(2);//modificar
                                            valimpuestos=(parseFloat(impuesto)*parseFloat(valcomenviar)).toFixed(2);
                                            valtotalcomimp=parseFloat(valcomenviar)+parseFloat(valimpuestos);
                                            valtotalenviar=(parseFloat(resultadoinicial)-parseFloat(valtotalcomimp)).toFixed(2);//modificar
                                            tipodeimpuestos.innerHTML=valimpuestos+"&nbsp;BRL";
                                            tipodecambio.innerHTML=valrealausd;
                                            tipodecomision.innerHTML=+valcomenviar+" BRL";
                                            tipototalenviar.innerHTML=valtotalenviar+"&nbsp;BRL";
                                            valtotalrecibe=parseFloat(resultadoinicial).toFixed(2);//modificar
                                            inputmontoenviar.value=valtotalrecibe;
                                            numcomision.innerHTML=valcomision+"% : &nbsp;";
                                            tcambio.value=valrealausd;
                                            tcomisi.value=valcomenviar;
                                            timpues.value=valimpuestos;
                                            ttotale.value=valtotalenviar;
                                            tenviar.value=resultadoinicial;//modificar
                                            trecibe.value=valtotalrecibe;
                                            tmoneda.value='Dolar a Real';
                                            btnsiguiente.style.display='block';
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                break;
        }
        //alert(valeletipmonenv);
    },
    mostrar:function(){
        btnsiguientese.style.display='block';
        btnsiguiente.style.display='block';
        ventanacalculadora.style.height='580px'
        var checkbox = document.getElementById('miCheckbox');
        if (checkbox.checked) {
            calculadora.whatsapp()
        } else {
            alert("Aceptar Términos y condiciones")
        }
    },
    codcuponcal:function(){
        codtomcal=codcupcaladd.value;
        if(codtomcal===''){
            alert('Ingresar código válido');
        }else{
            montocupon=inputmontoenviar.value
            montofinalcupon=tipototalrecibe.value
            numcomisioncupon=parseFloat(valcomenviar)
            numimpuestocupon=valimpuestos
            numcambiocupon=tcambio.value
            
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
                        var finalfinal=document.getElementById('finalfinal')
                        btnsiguientese.style.display='none';
                        btnsiguiente.style.display='none';
                        operacioncupon=(data.porcentaje*numcomisioncupon).toFixed(2)
                        operacionporcentaje=numcomisioncupon-operacioncupon
                        operacionahorro=operacionporcentaje
                        operacionporcentajecupon=data.porcentaje
                        operaciontotalenviarcupon=parseFloat(montocupon)-(parseFloat(operacionporcentaje)+parseFloat(numimpuestocupon))
                        totalrecibecupon=(parseFloat(operaciontotalenviarcupon)*numcambiocupon).toFixed(2)
                        finalenvios.innerHTL='hola'
                        terminosycondiciones.innerHTML=`
                            <div style="font-family: 'Roboto', sans-serif;">
                                <input type="checkbox" id="miCheckboxcupon">&nbsp;
                                <a href="vistas/modulos/terminosycondiciones.pdf" target="_blank">
                                    Acepto Términos y Condiciones
                                </a>
                            </div>
                            <div style="height:10px;"></div>
                            <div onclick="calculadora.verificarcheckcupon(moneda)" class="inputinvita" style="width:250px;text-align:center;padding:10px;border-radius:5px;cursor:pointer;">
                                ENVIAR DINERO
                            </div>`
                        switch(moneda){
                            case ('penbrl'):
                                operaciones.style.display='none'
                                operacionescupon.style.display='block'
                                operacionescupon.innerHTML=`
                                    <div class="centro txt25">
                                        <div style="display:grid;">
                                            <table>
                                                <tr><td>
                                                    <div class="calculadoratitulos">
                                                        <div>Comisión Antes:&nbsp;</div>
                                                    </div>
                                                </td><td>
                                                    <div class="calculadoraresultados">
                                                        `+valcomision+`%
                                                    </div>
                                                </td><td>
                                                     <div class="calculadoraresultados tachado">`+numcomisioncupon+` PEN</div>
                                                </td></tr>
                                                <tr><td>
                                                    <div class="calculadoratitulos">
                                                        <div>Comisión Ahora:&nbsp;</div>
                                                    </div>
                                                </td><td>
                                                    <div class="calculadoraresultados">
                                                        `+valcomision+`%
                                                    </div>
                                                </td><td>
                                                     <div class="calculadoraresultados">`+operacionporcentaje+` PEN</div>
                                                </td></tr>
                                                <tr><td>
                                                    <div class="calculadoratitulos">
                                                        Impuestos:&nbsp;
                                                    </div>
                                                </td><td>
                                                    &nbsp;
                                                </td><td>
                                                    <div class="calculadoraresultados">`+numimpuestocupon+` PEN</div>
                                                </td></tr>
                                                <tr><td>
                                                    <div class="calculadoratitulos">
                                                        <div>Total a Enviar Antes:&nbsp;</div>
                                                    </div>
                                                </td><td>
                                                    &nbsp;
                                                </td><td>
                                                    <div class="calculadoraresultados tachado">`+valtotalenviar+` PEN</div>
                                                </td></tr>
                                                <tr><td>
                                                    <div class="calculadoratitulos">
                                                        <div>Total a Enviar Ahora:&nbsp;</div>
                                                    </div>
                                                </td><td>
                                                    &nbsp;
                                                </td><td>
                                                    <div class="calculadoraresultados">`+operaciontotalenviarcupon+` PEN</div>
                                                </td></tr>
                                                <tr><td>
                                                    <div class="calculadoratitulos">Tipo de cambio:&nbsp;</div>
                                                </td><td>
                                                    &nbsp;
                                                </td><td>
                                                    <div class="calculadoraresultados">`+numcambiocupon+` PEN</div>
                                                </td></tr>
                                                <tr><td>
                                                    <div class="calculadoratitulos">Recibe Antes:&nbsp;</div>
                                                </td><td>
                                                    &nbsp;
                                                </td><td>
                                                    <div class="calculadoraresultados tachado">`+valtotalrecibe+` BRL</div>
                                                </td></tr>
                                                <tr><td>
                                                    <div class="calculadoratitulos">Recibe Ahora:&nbsp;</div>
                                                </td><td>
                                                    &nbsp;
                                                </td><td>
                                                    <div class="calculadoraresultados">`+totalrecibecupon+` BRL</div>
                                                </td></tr>
                                                <tr><td>
                                                    <div class="calculadoratitulos">Estas Ahorrando:&nbsp;</div>
                                                </td><td>
                                                    &nbsp;
                                                </td><td>
                                                    <div class="calculadoraresultados">`+operacioncupon+` PEN</div>
                                                </td></tr>
                                            </table>
                                        </div>
                                    </div>`
                                break
                            case ('usdbrl'):
                                operaciones.style.display='none'
                                operacionescupon.style.display='block'
                                operacionescupon.innerHTML=`
                                    <div class="centro txt25">
                                        <div style="display:grid;">
                                            <table>
                                                <tr><td>
                                                    <div class="calculadoratitulos">
                                                        <div>Comisión Antes:&nbsp;</div>
                                                    </div>
                                                </td><td>
                                                    <div class="calculadoraresultados">
                                                        `+valcomision+`%
                                                    </div>
                                                </td><td>
                                                     <div class="calculadoraresultados tachado">`+numcomisioncupon+` USD</div>
                                                </td></tr>
                                                <tr><td>
                                                    <div class="calculadoratitulos">
                                                        <div>Comisión Ahora:&nbsp;</div>
                                                    </div>
                                                </td><td>
                                                    <div class="calculadoraresultados">
                                                        `+valcomision+`%
                                                    </div>
                                                </td><td>
                                                     <div class="calculadoraresultados">`+operacionporcentaje+` USD</div>
                                                </td></tr>
                                                <tr><td>
                                                    <div class="calculadoratitulos">
                                                        Impuestos:&nbsp;
                                                    </div>
                                                </td><td>
                                                    &nbsp;
                                                </td><td>
                                                    <div class="calculadoraresultados">`+numimpuestocupon+` USD</div>
                                                </td></tr>
                                                <tr><td>
                                                    <div class="calculadoratitulos">
                                                        <div>Total a Enviar Antes:&nbsp;</div>
                                                    </div>
                                                </td><td>
                                                    &nbsp;
                                                </td><td>
                                                    <div class="calculadoraresultados tachado">`+valtotalenviar+` USD</div>
                                                </td></tr>
                                                <tr><td>
                                                    <div class="calculadoratitulos">
                                                        <div>Total a Enviar Ahora:&nbsp;</div>
                                                    </div>
                                                </td><td>
                                                    &nbsp;
                                                </td><td>
                                                    <div class="calculadoraresultados">`+operaciontotalenviarcupon+` USD</div>
                                                </td></tr>
                                                <tr><td>
                                                    <div class="calculadoratitulos">Tipo de cambio:&nbsp;</div>
                                                </td><td>
                                                    &nbsp;
                                                </td><td>
                                                    <div class="calculadoraresultados">`+numcambiocupon+` USD</div>
                                                </td></tr>
                                                <tr><td>
                                                    <div class="calculadoratitulos">Recibe Antes:&nbsp;</div>
                                                </td><td>
                                                    &nbsp;
                                                </td><td>
                                                    <div class="calculadoraresultados tachado">`+valtotalrecibe+` BRL</div>
                                                </td></tr>
                                                <tr><td>
                                                    <div class="calculadoratitulos">Recibe Ahora:&nbsp;</div>
                                                </td><td>
                                                    &nbsp;
                                                </td><td>
                                                    <div class="calculadoraresultados">`+totalrecibecupon+` BRL</div>
                                                </td></tr>
                                                <tr><td>
                                                    <div class="calculadoratitulos">Estas Ahorrando:&nbsp;</div>
                                                </td><td>
                                                    &nbsp;
                                                </td><td>
                                                    <div class="calculadoraresultados">`+operacioncupon+` USD</div>
                                                </td></tr>
                                            </table>
                                        </div>
                                    </div>`
                                break
                            case ('brlpen'):
                                operaciones.style.display='none'
                                operacionescupon.style.display='block'
                                operacionescupon.innerHTML=`
                                    <div class="centro txt25">
                                        <div style="display:grid;">
                                            <table>
                                                <tr><td>
                                                    <div class="calculadoratitulos">
                                                        <div>Comisión Antes:&nbsp;</div>
                                                    </div>
                                                </td><td>
                                                    <div class="calculadoraresultados">
                                                        `+valcomision+`%
                                                    </div>
                                                </td><td>
                                                     <div class="calculadoraresultados tachado">`+numcomisioncupon+` BRL</div>
                                                </td></tr>
                                                <tr><td>
                                                    <div class="calculadoratitulos">
                                                        <div>Comisión Ahora:&nbsp;</div>
                                                    </div>
                                                </td><td>
                                                    <div class="calculadoraresultados">
                                                        `+valcomision+`%
                                                    </div>
                                                </td><td>
                                                     <div class="calculadoraresultados">`+operacionporcentaje+` BRL</div>
                                                </td></tr>
                                                <tr><td>
                                                    <div class="calculadoratitulos">
                                                        Impuestos:&nbsp;
                                                    </div>
                                                </td><td>
                                                    &nbsp;
                                                </td><td>
                                                    <div class="calculadoraresultados">`+numimpuestocupon+` BRL</div>
                                                </td></tr>
                                                <tr><td>
                                                    <div class="calculadoratitulos">
                                                        <div>Total a Enviar Antes:&nbsp;</div>
                                                    </div>
                                                </td><td>
                                                    &nbsp;
                                                </td><td>
                                                    <div class="calculadoraresultados tachado">`+valtotalenviar+` BRL</div>
                                                </td></tr>
                                                <tr><td>
                                                    <div class="calculadoratitulos">
                                                        <div>Total a Enviar Ahora:&nbsp;</div>
                                                    </div>
                                                </td><td>
                                                    &nbsp;
                                                </td><td>
                                                    <div class="calculadoraresultados">`+operaciontotalenviarcupon+` BRL</div>
                                                </td></tr>
                                                <tr><td>
                                                    <div class="calculadoratitulos">Tipo de cambio:&nbsp;</div>
                                                </td><td>
                                                    &nbsp;
                                                </td><td>
                                                    <div class="calculadoraresultados">`+numcambiocupon+` BRL</div>
                                                </td></tr>
                                                <tr><td>
                                                    <div class="calculadoratitulos">Recibe Antes:&nbsp;</div>
                                                </td><td>
                                                    &nbsp;
                                                </td><td>
                                                    <div class="calculadoraresultados tachado">`+valtotalrecibe+` PEN</div>
                                                </td></tr>
                                                <tr><td>
                                                    <div class="calculadoratitulos">Recibe Ahora:&nbsp;</div>
                                                </td><td>
                                                    &nbsp;
                                                </td><td>
                                                    <div class="calculadoraresultados">`+totalrecibecupon+` PEN</div>
                                                </td></tr>
                                                <tr><td>
                                                    <div class="calculadoratitulos">Estas Ahorrando:&nbsp;</div>
                                                </td><td>
                                                    &nbsp;
                                                </td><td>
                                                    <div class="calculadoraresultados">`+operacioncupon+` BRL</div>
                                                </td></tr>
                                            </table>
                                        </div>
                                    </div>`
                                break
                        }
                        ventanacalculadora.style.height='750px'
                        btnsiguiente.style.display='none'
                        
                        //alert(moneda)
                        /*alert('\nCODIGO: '
                        +data.codigo+'\nMONTO INGRESADO :'
                        +montocupon+'\nPORCENTAJE: '
                        +operacionporcentajecupon+'\nMONTO COMISION: '
                        +numcomisioncupon+'\nRESULTADO PORCENTAJE: '
                        +operacionporcentaje+'\nAHORRO: '
                        +operacioncupon+'\nTOTAL COMISION: '
                        +operacioncupon+'\n COMISION ANTES: '
                        +numcomisioncupon+'\nCOMISION AHORA: '
                        +operacionporcentaje+'\nIMPUESTOS: '
                        +numimpuestocupon+'\nTOTAL A ENVIAR: '
                        +operaciontotalenviarcupon+'\nTIPO DE CAMBIO: '
                        +numcambiocupon+'\nRECIBE  :'
                        +totalrecibecupon+'\n')*/
                        
                    } else {
                        alert('Cupón no encontrado');
                    }
                })
            }
        }
    },
    verificarcheckcupon: function(moneda) {
        var miCheckboxcupon = document.getElementById('miCheckboxcupon');
        if (miCheckboxcupon.checked) {
            /*alert('Moneda :'+moneda+
                '\nMONTO INGRESADO :'+montocupon+
                '\nCOMISION ANTES :'+numcomisioncupon+
                '\nCOMISION AHORA :'+operacionporcentaje+
                '\nIMPUESTOS :'+numimpuestocupon+
                '\nTOTAL A ENVIAR ANTES :'+valtotalenviar+
                '\nTOTAL A ENVIAR AHORA :'+operaciontotalenviarcupon+
                '\nTIPO DE CAMBIO :'+numcambiocupon+
                '\nRECIBE ANTES :'+valtotalrecibe+
                '\nRECIBE AHORA :'+totalrecibecupon+
                '\n')*/
            switch(moneda){
                case('penbrl'):
                    window.open('https://api.whatsapp.com/send/?phone=51966991933&text=%0AMONTO%20INGRESADO%20:'+montocupon+'PEN%0ACOMISION%20ANTES%20:'+numcomisioncupon+'PEN%0ACOMISION%20AHORA%20:'+operacionporcentaje+'PEN%0AIMPUESTOS%20:'+numimpuestocupon+'PEN%0ATOTAL%20A%20ENVIAR%20ANTES%20:'+valtotalenviar+'PEN%0ATOTAL%20A%20ENVIAR%20AHORA%20:'+operaciontotalenviarcupon+'PEN%0ATIPO%20DE%20CAMBIO%20:'+numcambiocupon+'PEN%0ARECIBE%20ANTES%20:'+valtotalrecibe+'BRL%0ARECIBE%20AHORA%20:'+totalrecibecupon+'BRL','_blank');
                    window.open('https://braspertransferencias.com/','_self')
                    break
                case('usdbrl'):
                    window.open('https://api.whatsapp.com/send/?phone=51966991933&text=%0AMONTO%20INGRESADO%20:'+montocupon+'USD%0ACOMISION%20ANTES%20:'+numcomisioncupon+'USD%0ACOMISION%20AHORA%20:'+operacionporcentaje+'USD%0AIMPUESTOS%20:'+numimpuestocupon+'USD%0ATOTAL%20A%20ENVIAR%20ANTES%20:'+valtotalenviar+'USD%0ATOTAL%20A%20ENVIAR%20AHORA%20:'+operaciontotalenviarcupon+'USD%0ATIPO%20DE%20CAMBIO%20:'+numcambiocupon+'USD%0ARECIBE%20ANTES%20:'+valtotalrecibe+'BRL%0ARECIBE%20AHORA%20:'+totalrecibecupon+'BRL','_blank');
                    window.open('https://braspertransferencias.com/','_self')
                    break
                case('brlpen'):
                    window.open('https://api.whatsapp.com/send/?phone=51966991933&text=%0AMONTO%20INGRESADO%20:'+montocupon+'BRL%0ACOMISION%20ANTES%20:'+numcomisioncupon+'BRL%0ACOMISION%20AHORA%20:'+operacionporcentaje+'BRL%0AIMPUESTOS%20:'+numimpuestocupon+'BRL%0ATOTAL%20A%20ENVIAR%20ANTES%20:'+valtotalenviar+'BRL%0ATOTAL%20A%20ENVIAR%20AHORA%20:'+operaciontotalenviarcupon+'BRL%0ATIPO%20DE%20CAMBIO%20:'+numcambiocupon+'BRL%0ARECIBE%20ANTES%20:'+valtotalrecibe+'PEN%0ARECIBE%20AHORA%20:'+totalrecibecupon+'PEN','_blank');
                    window.open('https://braspertransferencias.com/','_self')
                    break
            }
        } else {
            alert('Aceptar términos y condiciones');
        }
    }
}