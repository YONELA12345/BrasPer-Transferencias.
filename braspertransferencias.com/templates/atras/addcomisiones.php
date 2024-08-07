{% block customCss %}
    <link rel="stylesheet" href="{{url_for('static',filename='./css/home.css')}}">
    <link rel="stylesheet" type="text/css" href="{{url_for('static',filename='css/cambio.css')}}">
{% endblock %}
{% block body %}
<div class="contenedorhome">
    <div style="display: flex;height: 100%;">
        <div class="contenedor">
            <div>
                {% with messages=get_flashed_messages() %} 
                    {%if messages%}
                        <div class="alert alert-danger" role="alert">
                            {% for messages in messages %} 
                                {{messages}} 
                            {% endfor %}
                        </div>
                    {% endif %} 
                {% endwith %}
                {% for comisiones in comi %}
                <form action="/actualizarcomision" method="POST" enctype="multipart/form-data">
                <div class="contenedores">
                        <input type="text" name="idcomision" value="{{comisiones[0]}}" hidden>
                    </div>
                    <div class="contenedores">
                        <div class="labels">100 a 199</div>
                        <input type="text" name="comision100a199" value="{{comisiones[1]}}">
                    </div>
                    <div class="contenedores">
                        <div class="labels">200 a 299</div>
                        <input type="text" name="comision200a299" value="{{comisiones[2]}}">
                    </div>
                    <div class="contenedores">
                        <div class="labels">300 a 499</div>
                        <input type="text" name="comision300a499" value="{{comisiones[3]}}">
                    </div>
                    <div class="contenedores">
                        <div class="labels">500 a 999</div>
                        <input type="text" name="comision500a999" value="{{comisiones[4]}}">
                    </div>
                    <div class="contenedores">
                        <div class="labels">1000 a 4999</div>
                        <input type="text" name="comision1000a4999" value="{{comisiones[5]}}">
                    </div>
                    <div class="contenedores">
                        <div class="labels">5000 a 10000</div>
                        <input type="text" name="comision5000a10000" value="{{comisiones[6]}}">
                    </div>
                    <div>
                        <input type="submit" value="Guardar" style="width: 100%;">
                    </div>
                </form>
                {% endfor %}
            </div>
        </div>
    </div>
</div>
{% endblock %}
{% block JS %}
    
{% endblock%}