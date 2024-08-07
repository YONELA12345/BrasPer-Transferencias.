var bousuarios=document.getElementById('bousuarios');
var usuarios=document.getElementById('usuarios');
var edusuarios=document.getElementById('edusuarios');
var tipocambio=document.getElementById('tipocambio');
var cont=document.getElementById('cont');
var bocomisiones=document.getElementById('bocomisiones');
var boinversa=document.getElementById('boinversa');
var penabrl=document.getElementById('penabrl');
var brlapen=document.getElementById('brlapen');
var usdabrl=document.getElementById('usdabrl');
var brlausd=document.getElementById('brlausd');
var penausd=document.getElementById('penausd');
var usdapen=document.getElementById('usdapen');
var cupones=document.getElementById('cupones');
var vercupones=document.getElementById('vercupones');

var xhr= new XMLHttpRequest();
tipocambio.addEventListener('click',function(){
    url="cambio";
    xhr.open('GET',url,true)
    xhr.onreadystatechange=function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            cont.innerHTML=xhr.responseText;
        }
    };
    xhr.send();
});
usuarios.addEventListener('click',function(){
   url='usuarios';
   xhr.open('GET',url,true);
   xhr.onreadystatechange=function(){
    if(xhr.readyState === 4 && xhr.status ===200){
        cont.innerHTML=xhr.responseText;
    }
   };
   xhr.send();
});
edusuarios.addEventListener('click',function(){
    url='agregarusuarios';
    xhr.open('GET', url, true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            cont.innerHTML=xhr.responseText;
        }
    };
    xhr.send();
});
bousuarios.addEventListener('click',function(){
    url='borrarusuarios';
    xhr.open('GET',url,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            cont.innerHTML=xhr.responseText;
        }
    };
    xhr.send();
});
bocomisiones.addEventListener('click',function(){
    url='addcomisiones';
    xhr.open('GET',url,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState === 4 && xhr.status ===  200){
            cont.innerHTML=xhr.responseText;
        }
    };
    xhr.send();
});
boinversa.addEventListener('click',function(){
   url='addinversa';
   xhr.open('GET',url,true);
   xhr.onreadystatechange=function(){
       if(xhr.readyState === 4 && xhr.status === 200){
           cont.innerHTML=xhr.responseText;
       }
   };
   xhr.send();
});
penabrl.addEventListener('click',function(){
    url='penabrl';
    xhr.open('GET',url,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status === 200){
            cont.innerHTML=xhr.responseText;
        }
    };
    xhr.send();
});
brlapen.addEventListener('click',function(){
    url='brlapen';
    xhr.open('GET',url,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status === 200){
            cont.innerHTML=xhr.responseText;
        }
    };
    xhr.send();
});
usdabrl.addEventListener('click',function(){
    url='usdabrl';
    xhr.open('GET',url,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status===200){
            cont.innerHTML=xhr.responseText;
        }
    };
    xhr.send();
});
brlausd.addEventListener('click',function(){
    url='brlausd';
    xhr.open('GET',url,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status===200){
            cont.innerHTML=xhr.responseText;
        }
    };
    xhr.send();
});
penausd.addEventListener('click',function(){
    url='penausd';
    xhr.open('GET',url,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status===200){
            cont.innerHTML=xhr.responseText;
        }
    };
    xhr.send();
});
usdapen.addEventListener('click',function(){
    url='usdapen';
    xhr.open('GET',url,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status===200){
            cont.innerHTML=xhr.responseText;
        }
    };
    xhr.send();
});
cupones.addEventListener('click',function(){
    url='cupones';
    xhr.open('GET',url,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status===200){
            cont.innerHTML=xhr.responseText;
        }
    };
    xhr.send();
});
vercupones.addEventListener('click',function(){
    url='vercupones';
    xhr.open('GET',url,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status===200){
            cont.innerHTML=xhr.responseText;
        }
    };
    xhr.send();
});