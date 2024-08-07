{% block customCss %}
    <link rel="stylesheet" type='text/css' href="{{url_for('static',filename='css/cabesera.css')}}">
{%endblock%}
<center>
         <div class="popup">
                <div>
                    <div>
                        <img src="{{url_for('static',filename='img/padre_pe.png')}}" style="width:100%;">
                    </div>
                    <div id="btn-cerrar">
                        X<p>CERRAR</p>
                    </div>
                </div>
            </div>
        </center>
<div class='txtroboto cbesas'>
            <div>
                <a href="https://braspertransferencias.com/" target="_self">
                    <img src="{{url_for('static',filename='img/logo2024.png')}}" style='width: 200px;height: auto;'>
                </a>
            </div>
            <div class="contxtmenu" id="contxtmenu">
                <div>&nbsp;</div>
                <div><a href="#">Inicio</a></div>
                <div><a href="#somosperu">&iquest;Quienes Somos&#63;</a></div>
                <div><a href="#iniciopasos">&iquest;C&oacute;mo Funciona&#63;</a></div>
                <div><a href="#pieperu">Contacto</a></div>
            </div>
            <div class="redes">
                <div style="width:10px;"></div>
                <div>
                    <div style='display: flex;position: relative;z-index: 3;' id="banderas" class="bheaderoculto">
                        <div id="triangulo" class="nogirar triangulo"></div>
                        <div style="padding: 5px;margin-top: 0px;font-size: 15px !important;">
                            <div style="padding: 2px;" id="bpen">
                                <img src="{{url_for('static',filename='img/pen.png')}}" style="width: 40px;"><br/>Castellano
                            </div>
                            <div style="padding: 2px;" id="bbra">
                                <img src="{{url_for('static',filename='img/bra.png')}}" style="width: 40px;"><br/>Portugues
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <span class="icon-bars" id="btnmenu"></span>
                </div>
            </div>
        </div>
        <a href="https://wa.me/51966991933?text=Me%20gustaría%20saber%20" class="whatsapp" target="_blank">
        <i class="fa fa-whatsapp whatsapp-icon"></i></a>