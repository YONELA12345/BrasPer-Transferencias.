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
                {% for inversiones in inv %}
                <form action="/actualizarinversa" method="POST" enctype="multipart/form-data">
                <div class="contenedores">
                        <input type="text" name="idinversion" value="{{inversiones[0]}}" hidden>
                    </div>
                    <div class="contenedores">
                        <div class="labels">100 a 199</div>
                        <input type="text" name="inversion100a199" value="{{inversiones[1]}}">
                    </div>
                    <div class="contenedores">
                        <div class="labels">200 a 299</div>
                        <input type="text" name="inversion200a299" value="{{inversiones[2]}}">
                    </div>
                    <div class="contenedores">
                        <div class="labels">300 a 399</div>
                        <input type="text" name="inversion300a499" value="{{inversiones[3]}}">
                    </div>
                    <div class="contenedores">
                        <div class="labels">500 a 999</div>
                        <input type="text" name="inversion500a999" value="{{inversiones[4]}}">
                    </div>
                    <div class="contenedores">
                        <div class="labels">1000 a 4999</div>
                        <input type="text" name="inversion1000a4999" value="{{inversiones[5]}}">
                    </div>
                    <div class="contenedores">
                        <div class="labels">5000 a 10000</div>
                        <input type="text" name="inversion5000a10000" value="{{inversiones[6]}}">
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