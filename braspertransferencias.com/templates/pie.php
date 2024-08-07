{% block customCss %}
    <link rel="stylesheet" href="{{url_for('static',filename='css/pie.css')}}">
{% endblock %}
<div id="pieperu" class="foinpi">
    <div class="centro">
        <div style="height:35px"></div>
        <div class="txttitpie"><h1>CONTACTO</h1></div>
        <div class="piecontot">
            <div>
                <div style="padding:15px;">
                    <table>
                        <tr><td>
                            <div class="txtpienu">
                                EMAIL:
                            </div>
                        </td><td>
                            <div style="padding: 5px;">
                                brasper@braspertransferencias.com
                            </div>
                        </td></tr>
                        <tr><td>
                            <div class="txtpienu">
                                Teléfono (WhastApp):
                            </div>
                        </td><td>
                            <div style="padding: 5px;">
                                <a href="https://rb.gy/vjpce3" target="_blank">+51 966 991 933</a>
                            </div>
                        </td></tr>
                        <tr><td>
                            <div class="txtpienu">
                                Facebook:
                            </div>
                        </td><td>
                            <div style="padding: 5px;">
                                <a href="https://www.facebook.com/BrasPerTransferencias" target="_blank">/BrasPerTransferencias</a>
                            </div>
                        </td></tr>
                        <tr><td>
                            <div class="txtpienu">
                                Instagram:
                            </div>
                        </td><td>
                            <div style="padding: 5px;">
                                <a href="https://www.instagram.com/brasper.transferencias/" target="_blank">@brasper.transferencias</a>
                            </div>
                        </td></tr>
                        <tr><td>
                            <div class="txtpienu">
                                Tik Tok::
                            </div>
                        </td><td>
                            <div style="padding: 5px;">
                                <a href="https://www.tiktok.com/@braspertransferencias" target="_blank">@brasper.transferencias</a>
                            </div>
                        </td></tr>
                        <tr><td>
                            <table>
                                <tr><td>
                                    <a href="https://www.facebook.com/BrasPerTransferencias" target="_blank">
                                        <img src="{{url_for('static',filename='img/logofacebook.png')}}" class="logospies">
                                    </a>
                                </td><td>
                                    <a href="https://www.instagram.com/brasper.transferencias/" target="_blank">
                                        <img src="{{url_for('static',filename='img/logoinstagram.png')}}" class="logospies">
                                    </a>
                                </td><td>
                                    <a href="https://www.tiktok.com/@braspertransferencias" target="_blank">
                                        <img src="{{url_for('static',filename='img/logotiktok.png')}}" class="logospies">
                                    </a>
                                </td><td>
                                    <a href="https://rb.gy/vjpce3" target="_blank">
                                        <img src="{{url_for('static',filename='img/logowhatsapp.png')}}" class="logospies">
                                    </a>
                                </td></tr>
                            </table>
                        </td></tr>
                    </table>
                </div>
                <div style="display:flex;flex-wrap:wrap;margin:auto;">
                    <div style='width:350px;margin:auto;padding:10px'>
                        <div class="txtpienu">
                            HORARIOS DE ATENCIÓN
                        </div>
                        <div>
                            Nuestro horario de atención (hora de Perú):<br>
                            Lunes a viernes: 8:30 AM - 6:00 PM<br>
                            Sábado: 9:00:AM a 1:00 PM<br>
                            Domingo y Feriado: Cerrado<br>
                        </div>
                    </div>
                    <div style='width:350px;margin:auto;padding:10px;'>
                        <div class="txtpienu">
                            HORÁRIOS DE ATENDIMENTO
                        </div>
                        <div>
                            Nosso horario de atendimento (horario de Brasilia):<br>
                            Segunda a sexta: 10:30 - 20:00 hrs<br>
                            Sabado: 11:00 - 15:00 hrs<br>
                            Domingo e Feriado: Fechado<br>
                        </div>
                    </div>
                </div>
            </div>
            <div style='width:350px;margin:auto;padding:10px;'>
                <div class="txtpienu">
                    <div class="txtli" id="txtli">
                        <p>LIBRO RECLAMACIONES</p>
                        <img id="txtli"  class="txtimg" src="{{url_for('static',filename='img/book.png')}}">
                    </div>
                </div>
                <div>
                    Conforme a lo establecido en el Código de Protección y Defensa del Consumidor este establecimiento cuenta con un Libro de Reclamaciones Virtual a tu disposición. Los proveedores están obligados a atender reclamos de los consumidores en un plazo no mayor a 30 días, pudiendo extenderse el plazo cuando la naturaleza del reclamo lo acredite. Art. 24.1 Ley 29571
                </div>
                <form action='/formmensajes' method="post" enctype="multipart/form-data">
                    <div class="libro" id="libro">
                        <div style="padding:5px;">
                            <input type="text" placeholder="Nombre" name="nombre">
                        </div>
                        <div style="padding:5px;">
                            <input type="text" placeholder="Apellidos" name="apellidos">
                        </div>
                        <div style="padding:5px;">
                            <input type="text" placeholder="Número de whatsapp" name="whatsapp">
                        </div>
                        <div style="display:flex;padding:5px;">
                            <div style="color:rgba(123,123,123,1);">Tipo Documento:</div>
                            <div>
                                <select name="documento">
                                    <option>DNI</option>
                                    <option>CE</option>
                                    <option>RUC</option>
                                    <option>Otro</option>
                                </select>
                            </div>
                            <div>
                                <input type="text" placeholder="Número Documento" name="numero">
                            </div>
                        </div>
                        <div style="display:flex;padding:5px;">
                            <input type="text" placeholder="Correo" name="correo">
                        </div>
                        <div style="padding:5px;border: solid 1px;border-radius:12px;width:100%;">
                            <div>
                                <select name="tipo">
                                    <option>Reclamo</option>
                                    <option>Queja</option>
                                </select>
                            </div>
                            <div>
                                <textarea placeholder="Mensaje" cols="42" rows="10" name="mensaje"></textarea>
                            </div>
                        </div>
                        <div>
                            <div class="g-recaptcha" data-sitekey="6Le4zDkpAAAAAIMNeOUQus8xofnPIrj3vIiSraZS">
                                
                            </div>
                        </div>
                        <div>
                            <input type="submit" value="ENVIAR" style="width:100%;background:rgba(0,0,150,1);color:rgba(255,255,255,1);">
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div style="height:30px;"></div>
    </div>
</div>
<script src="https://www.google.com/recaptcha/api.js" async defer></script>
<script>
    var txtli=document.getElementById("txtli");
    var libro=document.getElementById("libro");
    txtli.style.cursor="pointer";
    txtli.addEventListener('click',function(){
        libro.classList.toggle("libromos");
    });
</script>