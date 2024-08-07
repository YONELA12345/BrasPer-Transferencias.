
        var triangulo=document.getElementById('triangulo');
        triangulo.style.cursor='pointer';
        var banderas=document.getElementById('banderas');
        banderas.addEventListener('mouseover',function(){
            banderas.classList.remove('bheaderoculto');
            banderas.classList.add('bheadermostrar');
            triangulo.classList.remove('nogirar');
            triangulo.classList.add('girar');
        });
        banderas.style.cursor='pointer';
        banderas.addEventListener('mouseout',function(){
            banderas.classList.remove('bheadermostrar');
            banderas.classList.add('bheaderoculto');
            triangulo.classList.add('nogirar');
            triangulo.classList.remove('girar');
        });
        var bpen=document.getElementById('bpen');
        bpen.style.cursor='auto';
        var bbra=document.getElementById('bbra');
        bbra.addEventListener('click',function(){
            window.location='brasil';
        });
        