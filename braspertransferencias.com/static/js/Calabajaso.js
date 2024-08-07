export function abajaso(){
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
}