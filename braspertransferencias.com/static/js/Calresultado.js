export function resultado(e){
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
            eletipmonenv.value=e;
            enviomoneda.innerHTML=`
                <ul class="nav">
                    <li class="fontbebas">
                        <div onclick="" style="display:flex;justify-content: flex-end;">
                            <img src="{{url_for('static',filename='img/pen.png')}}" style="width:50px;height:35px;">
                            <div style="padding:10px;">&nbsp;PEN Perú</div>
                            <div style="width: 0;height: 0;border-right: 10px solid transparent;border-top: 10px solid transparent;border-left: 10px solid transparent;border-bottom: 10px solid #f0ad4e;transform: rotate(180deg); "></div>
                        </div>
                        <ul>
                            <li>
                                <div onclick="calculadora.resultado('usdbrl')" style="display:flex;justify-content: flex-end;">
                                    <img src="{{url_for('static',filename='img/pen.png')}}" style="width:50px;height:35px;">
                                    <div style="padding:10px;">&nbsp;USD PEN</div>
                                </div>
                            </li>
                            <li>
                                <div onclick="calculadora.resultado('brlpen')" style="display:flex;justify-content: flex-end;">
                                    <img src="{{url_for('static',filename='img/bra.png')}}" style="width:50px;height:35px;">
                                    <div style="padding:10px;">&nbsp;BRL Brasil</div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            `;
            recibemoneda.innerHTML=`
                <div style="display:flex;justify-content: flex-end;">
                    <img src="{{url_for('static',filename='img/bra.png')}}" style="width:50px;height:35px;">
                    <div style="padding:10px;">&nbsp;BRL Brasil</div>
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
            eletipmonenv.value=e;
            enviomoneda.innerHTML=`
                <ul class="nav">
                    <li class="fontbebas">
                        <div onclick="" style="display:flex;justify-content: flex-end;">
                            <img src="{{url_for('static',filename='img/pen.png')}}" style="width:50px;height:35px;">
                            <div style="padding:10px;">&nbsp;USD PEN</div>
                            <div style="width: 0;height: 0;border-right: 10px solid transparent;border-top: 10px solid transparent;border-left: 10px solid transparent;border-bottom: 10px solid #f0ad4e;transform: rotate(180deg); "></div>
                         </div>
                        <ul>
                            <li>
                                <div onclick="calculadora.resultado('penbrl')" style="display:flex;justify-content: flex-end;">
                                <img src="{{url_for('static',filename='img/pen.png')}}" style="width:50px;height:35px;">
                                <div style="padding:10px;">&nbsp;PEN Perú</div>
                            </div>
                            </li>
                            <li>
                                <div onclick="calculadora.resultado('brlpen')" style="display:flex;justify-content: flex-end;">
                                    <img src="{{url_for('static',filename='img/bra.png')}}" style="width:50px;height:35px;">
                                    <div style="padding:10px;">&nbsp;BRL Brasil</div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            `;
            recibemoneda.innerHTML=`
                <div style="display:flex;justify-content: flex-end;">
                    <img src="{{url_for('static',filename='img/bra.png')}}" style="width:50px;height:35px;">
                    <div style="padding:10px;">&nbsp;BRL Brasil</div>
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
            eletipmonenv.value=e;
            enviomoneda.innerHTML=`
                <ul class="nav">
                    <li class="fontbebas">
                         <div onclick="calculadora.resultado('brlpen')" style="display:flex;justify-content: flex-end;">
                            <img src="{{url_for('static',filename='img/bra.png')}}" style="width:50px;height:35px;">
                            <div style="padding:10px;">&nbsp;BRL Brasil</div>
                            <div style="width: 0;height: 0;border-right: 10px solid transparent;border-top: 10px solid transparent;border-left: 10px solid transparent;border-bottom: 10px solid #f0ad4e;transform: rotate(180deg); "></div>
                        </div>
                        <ul>
                            <li>
                                <div onclick="calculadora.resultado('penbrl')" style="display:flex;justify-content: flex-end;">
                                    <img src="{{url_for('static',filename='img/pen.png')}}" style="width:50px;height:35px;">
                                    <div style="padding:10px;">&nbsp;PEN Perú</div>
                                </div>
                            </li>
                            <li>
                                <div onclick="calculadora.resultado('usdbrl')" style="display:flex;justify-content: flex-end;">
                                    <img src="{{url_for('static',filename='img/pen.png')}}" style="width:50px;height:35px;">
                                    <div style="padding:10px;">&nbsp;USD PEN</div>
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
                            <img src="{{url_for('static',filename='img/pen.png')}}" style="width:50px;height:35px;">
                            <div style="padding:10px;">&nbsp;PEN Perú</div>
                            <div style="width: 0;height: 0;border-right: 10px solid transparent;border-top: 10px solid transparent;border-left: 10px solid transparent;border-bottom: 10px solid #f0ad4e;transform: rotate(180deg); "></div>
                        </div>
                        <ul>
                            <li>
                                <div onclick="calculadora.resultado('brlusd')" style="display:flex;justify-content: flex-end;">
                                    <img src="{{url_for('static',filename='img/pen.png')}}" style="width:50px;height:35px;">
                                    <div style="padding:10px;">&nbsp;USD PEN</div>
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
            eletipmonenv.value=e;
            enviomoneda.innerHTML=`
                <ul class="nav">
                    <li class="fontbebas">
                         <div onclick="calculadora.resultado('brlpen')" style="display:flex;justify-content: flex-end;">
                            <img src="{{url_for('static',filename='img/bra.png')}}" style="width:50px;height:35px;">
                            <div style="padding:10px;">&nbsp;BRL Brasil</div>
                            <div style="width: 0;height: 0;border-right: 10px solid transparent;border-top: 10px solid transparent;border-left: 10px solid transparent;border-bottom: 10px solid #f0ad4e;transform: rotate(180deg); "></div>
                        </div>
                        <ul>
                            <li>
                                <div onclick="calculadora.resultado('penbrl')" style="display:flex;justify-content: flex-end;">
                                    <img src="{{url_for('static',filename='img/pen.png')}}" style="width:50px;height:35px;">
                                    <div style="padding:10px;">&nbsp;PEN Perú</div>
                                    <div style="width: 0;height: 0;border-right: 10px solid transparent;border-top: 10px solid transparent;border-left: 10px solid transparent;border-bottom: 10px solid #f0ad4e;transform: rotate(180deg); "></div>
                                </div>
                            </li>
                            <li>
                                <div onclick="calculadora.resultado('usdbrl')" style="display:flex;justify-content: flex-end;">
                                    <img src="{{url_for('static',filename='img/pen.png')}}" style="width:50px;height:35px;">
                                    <div style="padding:10px;">&nbsp;USD PEN</div>
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
                            <img src="{{url_for('static',filename='img/pen.png')}}" style="width:50px;height:35px;">
                            <div style="padding:10px;">&nbsp;USD PEN</div>
                            <div style="width: 0;height: 0;border-right: 10px solid transparent;border-top: 10px solid transparent;border-left: 10px solid transparent;border-bottom: 10px solid #f0ad4e;transform: rotate(180deg); "></div>

                        </div>
                        <ul>
                            <li>
                                <div onclick="calculadora.resultado('brlpen')" style="display:flex;justify-content: flex-end;">
                                    <img src="{{url_for('static',filename='img/pen.png')}}" style="width:50px;height:35px;">
                                    <div style="padding:10px;">&nbsp;PEN Perú</div>
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
}