import { abajaso } from './Calabajaso.js'
import { cambio } from './Calcambio.js'
import { cupon } from './Calccupon.js'
import { envio } from './Calenvio.js'
import { mostrar } from './Calmostrar.js'
import { resultado } from './Calresultado.js'
import { whatsapp } from './Calwhatsapp.js'

var btnsiguientese=document.getElementById('btnsiguientese');
btnsiguientese.style.display='none';
var posiciona=document.getElementById('posiciona');
var ventanacalculadora=document.getElementById('ventanacalculadora');
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
var ahorrando=document.getElementById('ahorrando');

var calculadora={
    abajaso:abajaso,
    cambio:cambio,
    cupon:cupon,
    envio:envio,
    mostrar:mostrar,
    resultado:resultado,
    whatsapp:whatsapp
}
calculadora.abajaso()
calculadora.cambio()
calculadora.cupon()
calculadora.envio()
calculadora.mostrar()
calculadora.resultado()
calculadora.whatsapp()