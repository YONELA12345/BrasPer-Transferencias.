<div style="background:rgba(44,56,189,1);font-size:35px;">
    <div style="height:35px;"></div>
    <div class="container-slider">
        <div class="slider" id="slider">
            <div class="fontbebas txtblanco slider_section" data-age="uno">
               Transferências instantâneas, seguras e diretas para a conta do destinatário com uma taxa premium para os seus envios!!
            </div>
            <div class="fontbebas txtblanco slider_section" data-age="uno">
               Com BrasPer Transferências, esqueça as longas esperas para suas remessas chegarem ao seu destino!
            </div>
            <div class="fontbebas txtblanco slider_section" data-age="uno">
                Se você deseja enviar dinheiro do Brasil para o Peru ou do Peru para o Brasil, entre em contato conosco. Experimente e compare o nosso serviço! 
            </div>
        </div>
    </div>
    <div style="height:35px;"></div>
</div>

<script type='text/javascript'>
    const slider=document.getElementById('slider');
    let slidersection=document.querySelectorAll(".slider_section");
    let slidersectionlast=slidersection[slidersection.length-1];
    slider.insertAdjacentElement('afterbegin',slidersectionlast);
    
    
    function siguiente(){
        let slidersection=document.querySelectorAll('.slider_section');
        let slidersectionlast=slidersection[slidersection.length-1];
        slider.style.marginLeft="0px";
        slider.style.transition="all 0.5s";
        setTimeout(function(){
            slider.style.transition="none";
            slider.insertAdjacentElement('afterbegin',slidersectionlast);
            slider.style.marginLeft="-100%";
        },500);
    }
    function automatico(){
        interval=setInterval(function(){
            siguiente();
        },3000);
    }
    automatico();
</script>