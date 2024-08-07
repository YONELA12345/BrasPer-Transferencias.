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