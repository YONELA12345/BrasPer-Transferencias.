from flask import Flask, render_template, url_for, flash, request, redirect, send_from_directory,session, jsonify
from werkzeug.security import check_password_hash, generate_password_hash
from bd.conexion import DAO
import os
import requests
from dotenv import load_dotenv
from flask_mail import Mail, Message

import secrets
load_dotenv()  # cargar vaiables de entorno
app = Flask(__name__)
app.secret_key = 'tumiaqp'
dao=DAO()

#mailpassword = os.environ.get('PASSWORDMAIL')
#mailmio = os.environ.get('MAILMIO')
mailpassword = 'hola2023brasper'
mailmio = 'hola@braspertransferencias.com'
app.config['MAIL_SERVER'] = 'braspertransferencias.com'
app.config['MAIL_PORT'] = 465  # 587
sender = app.config['MAIL_USERNAME'] = mailmio
app.config['MAIL_PASSWORD'] = mailpassword
app.config['MAIL_USE_TLS'] = False  # False
app.config['MAIL_USE_SSL'] = True  # True
mail = Mail(app)

@app.route('/')
def inicio():
    cambio=dao.leervalores()
    coimisiones=dao.leercomisiones()
    calinversa=dao.leercalcinversa()
    coimisionespenabrl=dao.leercomisionespenabrl()
    coimisionesbrlapen=dao.leercomisionesbrlapen()
    coimisionesbrlausd=dao.leercomisionesbrlausd()
    coimisionesusdabrl=dao.leercomisionesusdabrl()
    coimisionespenausd=dao.leercomisionespenausd()
    coimisionesusdapen=dao.leercomisionesusdapen()
    inverpenabrl=dao.leercalcinversapenabrl()
    inverbrlapen=dao.leercalcinversabrlapen()
    inverbrlausd=dao.leercalcinversabrlausd()
    inverusdabrl=dao.leercalcinversausdabrl()
    inverpenausd=dao.leercalcinversapenausd()
    inverusdapen=dao.leercalcinversausdapen()
    
    if cambio is not None and len(cambio) > 0:
        print("si encontro cambio")
        if len(coimisiones)>0:
            print("Si encontro coimisiones")
            if len(calinversa)>0:
                print("Si se encontro calculadora inversa")
            else:
                print("no se encontro caluladora inversa")
        else:
            print("No hay coimisiones")
    else:
        print("No hay valores de cambio");
    #return render_template('base.html',cambio=cambio,comis=coimisiones,calcin=calinversa)
    return render_template('base.html',cambio=cambio,comis=coimisiones,calcin=calinversa,copenabrl=coimisionespenabrl,cobrlapen=coimisionesbrlapen,cobrlausd=coimisionesbrlausd,cousdabrl=coimisionesusdabrl,copenausd=coimisionespenausd,cousdapen=coimisionesusdapen,invpenabrl=inverpenabrl,invbrlapen=inverbrlapen,invbrlausd=inverbrlausd,invusdabrl=inverusdabrl,invpenausd=inverpenausd,invusdapen=inverusdapen)

@app.route('/brasil')
def brasil():
    cambio=dao.leervalores()
    coimisiones=dao.leercomisiones()
    calinversa=dao.leercalcinversa()
    coimisionespenabrl=dao.leercomisionespenabrl()
    coimisionesbrlapen=dao.leercomisionesbrlapen()
    coimisionesbrlausd=dao.leercomisionesbrlausd()
    coimisionesusdabrl=dao.leercomisionesusdabrl()
    coimisionespenausd=dao.leercomisionespenausd()
    coimisionesusdapen=dao.leercomisionesusdapen()
    inverpenabrl=dao.leercalcinversapenabrl()
    inverbrlapen=dao.leercalcinversabrlapen()
    inverbrlausd=dao.leercalcinversabrlausd()
    inverusdabrl=dao.leercalcinversausdabrl()
    inverpenausd=dao.leercalcinversapenausd()
    inverusdapen=dao.leercalcinversausdapen()
    if cambio is not None and len(cambio) > 0:
        print("si encontro cambio")
        if len(coimisiones)>0:
            print("Si encontro coimisiones")
            if len(calinversa)>0:
                print("Si se encontro calculadora inversa")
            else:
                print("no se encontro caluladora inversa")
        else:
            print("No hay coimisiones")
    else:
        print("No hay valores de cambio");
    return render_template('brasil.html',cambio=cambio,comis=coimisiones,calcin=calinversa,copenabrl=coimisionespenabrl,cobrlapen=coimisionesbrlapen,cobrlausd=coimisionesbrlausd,cousdabrl=coimisionesusdabrl,copenausd=coimisionespenausd,cousdapen=coimisionesusdapen,invpenabrl=inverpenabrl,invbrlapen=inverbrlapen,invbrlausd=inverbrlausd,invusdabrl=inverusdabrl,invpenausd=inverpenausd,invusdapen=inverusdapen)
    #return render_template('brasil.html',cambio=cambio,comis=coimisiones,calcin=calinversa)
    
@app.route('/peru')
def peru():
    cambio=dao.leervalores()
    coimisiones=dao.leercomisiones()
    calinversa=dao.leercalcinversa()
    coimisionespenabrl=dao.leercomisionespenabrl()
    coimisionesbrlapen=dao.leercomisionesbrlapen()
    coimisionesbrlausd=dao.leercomisionesbrlausd()
    coimisionesusdabrl=dao.leercomisionesusdabrl()
    coimisionespenausd=dao.leercomisionespenausd()
    coimisionesusdapen=dao.leercomisionesusdapen()
    inverpenabrl=dao.leercalcinversapenabrl()
    inverbrlapen=dao.leercalcinversabrlapen()
    inverbrlausd=dao.leercalcinversabrlausd()
    inverusdabrl=dao.leercalcinversausdabrl()
    inverpenausd=dao.leercalcinversapenausd()
    inverusdapen=dao.leercalcinversausdapen()
    if cambio is not None and len(cambio) > 0:
        print("si encontro cambio")
        if len(coimisiones)>0:
            print("Si encontro coimisiones")
            if len(calinversa)>0:
                print("Si se encontro calculadora inversa")
            else:
                print("no se encontro caluladora inversa")
        else:
            print("No hay coimisiones")
    else:
        print("No hay valores de cambio");
    return render_template('peru.html',cambio=cambio,comis=coimisiones,calcin=calinversa,copenabrl=coimisionespenabrl,cobrlapen=coimisionesbrlapen,cobrlausd=coimisionesbrlausd,cousdabrl=coimisionesusdabrl,copenausd=coimisionespenausd,cousdapen=coimisionesusdapen,invpenabrl=inverpenabrl,invbrlapen=inverbrlapen,invbrlausd=inverbrlausd,invusdabrl=inverusdabrl,invpenausd=inverpenausd,invusdapen=inverusdapen)
    #return render_template('peru.html',cambio=cambio,comis=coimisiones,calcin=calinversa)

@app.route('/construccion')
def construccion():
    return render_template('construccion.html')

@app.route('/formmensajes', methods=['GET','POST'])
def formmensajes():
    if request.method == 'POST':
        _nombre=request.form['nombre']
        _apellidos=request.form['apellidos']
        _documento=request.form['documento']
        _numero=request.form['numero']
        _correo=request.form['correo']
        _whatsapp=request.form['whatsapp']
        _tipo=request.form['tipo']
        _mensaje=request.form['mensaje']
        
        _ip=request.remote_addr
        _recaptcha = request.form.get('g-recaptcha-response', None)
        _clavesecreta="6Le4zDkpAAAAAN1uINHlbt5liX-6vEsz1womRlU8"
        _url = 'https://www.google.com/recaptcha/api/siteverify'
        _params = {'secret': _clavesecreta, 'response': _recaptcha,'remoteip':_ip}
        response = requests.post(_url, data=_params)
        data = response.json()
        if data['success']:
            #return True
            if _nombre == '' or _correo == '' or _documento == '' or _mensaje == '':
                flash("Recuerde llenar todos los Campos")
                return redirect(url_for('contacto'))
            msg = Message("Mensaje enviado desde formulario del libro de RECLAMACIONES de la Web BRASPERTRANSFERENCIAS", sender=sender,recipients=[_correo, 'brasper@braspertransferencias.com','cgonzaleslorenzo@gmail.com'])
            msg.bcc = ['jfollana@tumiaqp.com']
            msg.body = _nombre + _apellidos +"\nEnvio Mensaje desde la web con el correo: "+_correo+"\nTipo de consulta: "+_tipo+"\n número de Whatsapp: " +_whatsapp+"\ncon número de "+_documento+": "+_numero+"\n dejó el siguiente MENSAJE: "+_mensaje+"\n Nos comunicaremos a su número de WhatsApp: "+_whatsapp+"\n ó a su correo: "+_correo+"\nPor favor espere nuestra comunicación"
            mail.send(msg)
            return render_template('gracias.html', nombre=_nombre, whatsapp=_whatsapp, correo=_correo)
            print(_nombre)
            return "envio"
        else:
            flash("Recuerde llenar todos los Campos")
            return redirect(url_for('contacto'))

    else:
        print("No envio")
        return "Error"

@app.route('/contacto')
def contacto():
    return "<center><h1>Error al enviar el formulario</h1><center>"

from models.ModelUser import ModelUser
from models.entities.User import User

from flask_login import LoginManager, login_user, logout_user, login_required
from flask_wtf.csrf import CSRFProtect
csrf = CSRFProtect()
import secrets
load_dotenv()  # cargar vaiables de entorno
login_manager_app = LoginManager(app)

def generar_token_csrf():
    if 'csrf_token' not in session:
        session['csrf_token'] = secrets.token_hex(16)
    return session['csrf_token']

@ app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        # print(request.form['username'])
        # print(request.form['password'])
        user = User(0, request.form['username'], request.form['password'])
        logged_user = ModelUser.login(dao, user)
        if logged_user != None:
            if logged_user.password:
                login_user(logged_user)
                print("Ingreso")
                return redirect(url_for('home'))
            else:
                flash("Password No Existe")
                print("Password No Existe")
                return render_template('auth/login.html')
        else:
            flash("Usuario No Existe")
            print("Usuario No Existe")
            return render_template('auth/login.html')
    else:
        csrf_token = generar_token_csrf()
        return render_template('auth/login.html', csrf_token=csrf_token)

@login_manager_app.user_loader
def load_user(id):
    return ModelUser.get_by_id(dao, id)

@app.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('login'))
    
@login_manager_app.user_loader
def load_user(id):
    return ModelUser.get_by_id(dao, id)
    
@login_manager_app.unauthorized_handler
def unauthorized_callback():
    flash('Debes iniciar sesi&oacute;n para acceder a esta página.', 'warning')
    return redirect(url_for('login'))

@app.route('/home')
@login_required
def home():
    return render_template('atras/home.html')

@app.route('/cambio')
@login_required
def cambio():
    cambio=dao.leervalores()
    if len(cambio)>0:
        print("si encontro registros")
    else:
        print("No hay registros");
    return render_template('atras/cambio.html',cambio=cambio)

@app.route('/cambiacambio', methods=['POST','GET'])
def cambiacambio():
    if request.method == 'POST':
        id=request.form['id']
        soladol=request.form['soladol']
        solareal=request.form['solareal']
        usdasol=request.form['usdasol']
        usdareal=request.form['usdareal']
        realapen=request.form['realapen']
        realausd=request.form['realausd']
        datos=(id,soladol,solareal,usdasol,usdareal,realapen,realausd)
        dao.cambio(datos)
        #print("soladol: "+soladol+"<br>solareal: "+solareal)
        flash("recibio formulario")
        return redirect(url_for('home'))
    else:
        print("No recibio formulario")
        return "No recibio el formulario"

@app.route('/usuarios')
@login_required
def usuarios():
    usuariosa=dao.leerusuarios()
    if len(usuariosa)>0:
        print("Se encontrar&oacute;n usuarios")
        return render_template('atras/usuarios.html',usu=usuariosa)
    else:
        print("No se encontrar&oacute;n registros")
        return render_template('atras/home.hml')
    return render_template('atras/home.html')

@app.route('/agregarusuarios')
@login_required
def agregarusuarios():
    return render_template('atras/agregarusuarios.html')
    
@app.route('/addcomisiones')
@login_required
def addcomisiones():
    addcomisionesa=dao.leercomisiones()
    if len(addcomisionesa)>0:
        print("Se encontrar&oacute;n comisiones")
        return render_template('atras/addcomisiones.php',comi=addcomisionesa)
    else:
        print("No se encontrar&oacute;n comisiones")
        return render_template('atras/home.hml')
    return render_template('atras/addcomisiones.php')

@app.route('/actualizarcomision',methods=['POST','GET'])
def actualizarcomision():
    if request.method == 'POST':
        id=request.form['idcomision']
        co100a199=request.form['comision100a199']
        co200a299=request.form['comision200a299']
        co300a499=request.form['comision300a499']
        co500a999=request.form['comision500a999']
        co1000a4999=request.form['comision1000a4999']
        co5000a10000=request.form['comision5000a10000']
        datos=(id,co100a199,co200a299,co300a499,co500a999,co1000a4999,co5000a10000)
        dao.actucomision(datos)
        flash("recibio formulario")
        return redirect(url_for('home'))
    else:
        print("No recibio formulario")
        return "No recibio el formulario"

@app.route('/addinversa')
@login_required
def addinversa():
    addinversaa=dao.leercalcinversa()
    if len(addinversaa)>0:
        print("Se encontrar&oacute;n valores calculadora inversa")
        return render_template('atras/addinversa.php',inv=addinversaa)
    else:
        print("No se encontrar&oacute;n comisiones")
        return render_template('atras/home.hml')
    return render_template('atras/addinversa.php')

#PEN A BRL
@app.route('/penabrl')
@login_required
def penabrl():
    addinversaa=dao.leercalcinversapenabrl()
    addcomisionesa=dao.leercomisionespenabrl()
    nombre='penabrl'
    tipo="Sol a Real"
    if len(addinversaa)>0:
        print("Se encontrar&oacute;n valores calculadora inversa")
        return render_template('atras/comisiones.html',inv=addinversaa,comi=addcomisionesa,tip=tipo,nom=nombre)
    else:
        print("No se encontrar&oacute;n comisiones")
        return render_template('atras/home.hml')
    return render_template('atras/comisiones.html')
@app.route('/actualizarcomisionpenabrl',methods=['POST','GET'])
def actualizarcomisionpenabrl():
    if request.method=='POST':
        id=request.form['idcomision']
        co100a199=request.form['comision100a199']
        co200a299=request.form['comision200a299']
        co300a499=request.form['comision300a499']
        co500a999=request.form['comision500a999']
        co1000a4999=request.form['comision1000a4999']
        co5000a10000=request.form['comision5000a10000']
        datos=(id,co100a199,co200a299,co300a499,co500a999,co1000a4999,co5000a10000)
        dao.actucomisionpenabrl(datos)
        flash("recibio formulario")
        return redirect(url_for('home'))
    else:
        print("No recibio formulario")
        return "No recibio el formulario" 
@app.route('/actualizarinversapenabrl',methods=['POST','GET'])
def actualizarinversapenabrl():
    if request.method == 'POST':
        id=request.form['idinversion']
        inver100a199=request.form['inversion100a199']
        inver200a299=request.form['inversion200a299']
        inver300a499=request.form['inversion300a499']
        inver500a999=request.form['inversion500a999']
        inver1000a4999=request.form['inversion1000a4999']
        inver5000a10000=request.form['inversion5000a10000']
        datos=(id,inver100a199,inver200a299,inver300a499,inver500a999,inver1000a4999,inver5000a10000)
        dao.actuinversapenabrl(datos)
        flash("recibio formulario")
        return redirect(url_for('home'))
    else:
        print("No recibio formulario")
        return "No recibio el formulario"
#FIN
#BRL A PEN
@app.route('/brlapen')
@login_required
def brlapen():
    addinversaa=dao.leercalcinversabrlapen()
    addcomisionesa=dao.leercomisionesbrlapen()
    nombre='brlapen'
    tipo="Real a Sol"
    if len(addinversaa)>0:
        print("Se encontrar&oacute;n valores calculadora inversa")
        return render_template('atras/comisiones.html',inv=addinversaa,comi=addcomisionesa,tip=tipo,nom=nombre)
    else:
        print("No se encontrar&oacute;n comisiones")
        return render_template('atras/home.hml')
    return render_template('atras/comisiones.html')
@app.route('/actualizarcomisionbrlapen',methods=['POST','GET'])
def actualizarcomisionbrlapen():
    if request.method=='POST':
        id=request.form['idcomision']
        co100a199=request.form['comision100a199']
        co200a299=request.form['comision200a299']
        co300a499=request.form['comision300a499']
        co500a999=request.form['comision500a999']
        co1000a4999=request.form['comision1000a4999']
        co5000a10000=request.form['comision5000a10000']
        datos=(id,co100a199,co200a299,co300a499,co500a999,co1000a4999,co5000a10000)
        dao.actucomisionbrlapen(datos)
        flash("recibio formulario")
        return redirect(url_for('home'))
    else:
        print("No recibio formulario")
        return "No recibio el formulario" 
@app.route('/actualizarinversabrlapen',methods=['POST','GET'])
def actualizarinversabrlapen():
    if request.method == 'POST':
        id=request.form['idinversion']
        inver100a199=request.form['inversion100a199']
        inver200a299=request.form['inversion200a299']
        inver300a499=request.form['inversion300a499']
        inver500a999=request.form['inversion500a999']
        inver1000a4999=request.form['inversion1000a4999']
        inver5000a10000=request.form['inversion5000a10000']
        datos=(id,inver100a199,inver200a299,inver300a499,inver500a999,inver1000a4999,inver5000a10000)
        dao.actuinversabrlapen(datos)
        flash("recibio formulario")
        return redirect(url_for('home'))
    else:
        print("No recibio formulario")
        return "No recibio el formulario"
#FIN
#USD A BRL
@app.route('/usdabrl')
@login_required
def usdabrl():
    addinversaa=dao.leercalcinversausdabrl()
    addcomisionesa=dao.leercomisionesusdabrl()
    nombre='usdabrl'
    tipo="Dolar a Real"
    if len(addinversaa)>0:
        print("Se encontrar&oacute;n valores calculadora inversa")
        return render_template('atras/comisiones.html',inv=addinversaa,comi=addcomisionesa,tip=tipo,nom=nombre)
    else:
        print("No se encontrar&oacute;n comisiones")
        return render_template('atras/home.hml')
    return render_template('atras/comisiones.html')
@app.route('/actualizarcomisionusdabrl',methods=['POST','GET'])
def actualizarcomisionusdabrl():
    if request.method=='POST':
        id=request.form['idcomision']
        co100a199=request.form['comision100a199']
        co200a299=request.form['comision200a299']
        co300a499=request.form['comision300a499']
        co500a999=request.form['comision500a999']
        co1000a4999=request.form['comision1000a4999']
        co5000a10000=request.form['comision5000a10000']
        datos=(id,co100a199,co200a299,co300a499,co500a999,co1000a4999,co5000a10000)
        dao.actucomisionusdabrl(datos)
        flash("recibio formulario")
        return redirect(url_for('home'))
    else:
        print("No recibio formulario")
        return "No recibio el formulario" 
@app.route('/actualizarinversausdabrl',methods=['POST','GET'])
def actualizarinversausdabrl():
    if request.method == 'POST':
        id=request.form['idinversion']
        inver100a199=request.form['inversion100a199']
        inver200a299=request.form['inversion200a299']
        inver300a499=request.form['inversion300a499']
        inver500a999=request.form['inversion500a999']
        inver1000a4999=request.form['inversion1000a4999']
        inver5000a10000=request.form['inversion5000a10000']
        datos=(id,inver100a199,inver200a299,inver300a499,inver500a999,inver1000a4999,inver5000a10000)
        dao.actuinversausdabrl(datos)
        flash("recibio formulario")
        return redirect(url_for('home'))
    else:
        print("No recibio formulario")
        return "No recibio el formulario"
#FIN
#BRL A USD
@app.route('/brlausd')
@login_required
def brlausd():
    addinversaa=dao.leercalcinversabrlausd()
    addcomisionesa=dao.leercomisionesbrlausd()
    nombre='brlausd'
    tipo="Real a Dolar"
    if len(addinversaa)>0:
        print("Se encontrar&oacute;n valores calculadora inversa")
        return render_template('atras/comisiones.html',inv=addinversaa,comi=addcomisionesa,tip=tipo,nom=nombre)
    else:
        print("No se encontrar&oacute;n comisiones")
        return render_template('atras/home.hml')
    return render_template('atras/comisiones.html')
@app.route('/actualizarcomisionbrlausd',methods=['POST','GET'])
def actualizarcomisionbrlausd():
    if request.method=='POST':
        id=request.form['idcomision']
        co100a199=request.form['comision100a199']
        co200a299=request.form['comision200a299']
        co300a499=request.form['comision300a499']
        co500a999=request.form['comision500a999']
        co1000a4999=request.form['comision1000a4999']
        co5000a10000=request.form['comision5000a10000']
        datos=(id,co100a199,co200a299,co300a499,co500a999,co1000a4999,co5000a10000)
        dao.actucomisionbrlausd(datos)
        flash("recibio formulario")
        return redirect(url_for('home'))
    else:
        print("No recibio formulario")
        return "No recibio el formulario" 
@app.route('/actualizarinversabrlausd',methods=['POST','GET'])
def actualizarinversabrlausd():
    if request.method == 'POST':
        id=request.form['idinversion']
        inver100a199=request.form['inversion100a199']
        inver200a299=request.form['inversion200a299']
        inver300a499=request.form['inversion300a499']
        inver500a999=request.form['inversion500a999']
        inver1000a4999=request.form['inversion1000a4999']
        inver5000a10000=request.form['inversion5000a10000']
        datos=(id,inver100a199,inver200a299,inver300a499,inver500a999,inver1000a4999,inver5000a10000)
        dao.actuinversabrlausd(datos)
        flash("recibio formulario")
        return redirect(url_for('home'))
    else:
        print("No recibio formulario")
        return "No recibio el formulario"
#FIN
#PEN A USD
@app.route('/penausd')
@login_required
def penausd():
    addinversaa=dao.leercalcinversapenausd()
    addcomisionesa=dao.leercomisionespenausd()
    nombre='penausd'
    tipo="Sol a Dolar"
    if len(addinversaa)>0:
        print("Se encontrar&oacute;n valores calculadora inversa")
        return render_template('atras/comisiones.html',inv=addinversaa,comi=addcomisionesa,tip=tipo,nom=nombre)
    else:
        print("No se encontrar&oacute;n comisiones")
        return render_template('atras/home.hml')
    return render_template('atras/comisiones.html')
@app.route('/actualizarcomisionpenausd',methods=['POST','GET'])
def actualizarcomisionpenausd():
    if request.method=='POST':
        id=request.form['idcomision']
        co100a199=request.form['comision100a199']
        co200a299=request.form['comision200a299']
        co300a499=request.form['comision300a499']
        co500a999=request.form['comision500a999']
        co1000a4999=request.form['comision1000a4999']
        co5000a10000=request.form['comision5000a10000']
        datos=(id,co100a199,co200a299,co300a499,co500a999,co1000a4999,co5000a10000)
        dao.actucomisionpenausd(datos)
        flash("recibio formulario")
        return redirect(url_for('home'))
    else:
        print("No recibio formulario")
        return "No recibio el formulario" 
@app.route('/actualizarinversapenausd',methods=['POST','GET'])
def actualizarinversapenausd():
    if request.method == 'POST':
        id=request.form['idinversion']
        inver100a199=request.form['inversion100a199']
        inver200a299=request.form['inversion200a299']
        inver300a499=request.form['inversion300a499']
        inver500a999=request.form['inversion500a999']
        inver1000a4999=request.form['inversion1000a4999']
        inver5000a10000=request.form['inversion5000a10000']
        datos=(id,inver100a199,inver200a299,inver300a499,inver500a999,inver1000a4999,inver5000a10000)
        dao.actuinversapenausd(datos)
        flash("recibio formulario")
        return redirect(url_for('home'))
    else:
        print("No recibio formulario")
        return "No recibio el formulario"
#FIN
#USD A PEN
@app.route('/usdapen')
@login_required
def usdapen():
    addinversaa=dao.leercalcinversausdapen()
    addcomisionesa=dao.leercomisionesusdapen()
    nombre='usdapen'
    tipo="Dolar a Sol"
    if len(addinversaa)>0:
        print("Se encontrar&oacute;n valores calculadora inversa")
        return render_template('atras/comisiones.html',inv=addinversaa,comi=addcomisionesa,tip=tipo,nom=nombre)
    else:
        print("No se encontrar&oacute;n comisiones")
        return render_template('atras/home.hml')
    return render_template('atras/comisiones.html')
@app.route('/actualizarcomisionusdapen',methods=['POST','GET'])
def actualizarcomisionusdapen():
    if request.method=='POST':
        id=request.form['idcomision']
        co100a199=request.form['comision100a199']
        co200a299=request.form['comision200a299']
        co300a499=request.form['comision300a499']
        co500a999=request.form['comision500a999']
        co1000a4999=request.form['comision1000a4999']
        co5000a10000=request.form['comision5000a10000']
        datos=(id,co100a199,co200a299,co300a499,co500a999,co1000a4999,co5000a10000)
        dao.actucomisionusdapen(datos)
        flash("recibio formulario")
        return redirect(url_for('home'))
    else:
        print("No recibio formulario")
        return "No recibio el formulario" 
@app.route('/actualizarinversausdapen',methods=['POST','GET'])
def actualizarinversausdapen():
    if request.method == 'POST':
        id=request.form['idinversion']
        inver100a199=request.form['inversion100a199']
        inver200a299=request.form['inversion200a299']
        inver300a499=request.form['inversion300a499']
        inver500a999=request.form['inversion500a999']
        inver1000a4999=request.form['inversion1000a4999']
        inver5000a10000=request.form['inversion5000a10000']
        datos=(id,inver100a199,inver200a299,inver300a499,inver500a999,inver1000a4999,inver5000a10000)
        dao.actuinversausdapen(datos)
        flash("recibio formulario")
        return redirect(url_for('home'))
    else:
        print("No recibio formulario")
        return "No recibio el formulario"   
#FIN
@app.route('/actualizarinversa',methods=['POST','GET'])
def actualizarinversa():
    if request.method == 'POST':
        id=request.form['idinversion']
        inver100a199=request.form['inversion100a199']
        inver200a299=request.form['inversion200a299']
        inver300a499=request.form['inversion300a499']
        inver500a999=request.form['inversion500a999']
        inver1000a4999=request.form['inversion1000a4999']
        inver5000a10000=request.form['inversion5000a10000']
        datos=(id,inver100a199,inver200a299,inver300a499,inver500a999,inver1000a4999,inver5000a10000)
        dao.actuinversa(datos)
        flash("recibio formulario")
        return redirect(url_for('home'))
    else:
        print("No recibio formulario")
        return "No recibio el formulario"
        
@app.route('/borrarusuarios')
@login_required
def borrarusuarios():
    usuariosa=dao.leerusuarios()
    if len(usuariosa)>0:
        print("Se encontrar&oacute;n usuarios")
        return render_template('atras/borrarusuarios.html',usu=usuariosa)
    else:
        print("No se encontrar&oacute;n registros")
        return render_template('atras/home.hml')
    return render_template('atras/home.html')

@app.route('/borraruser')
@login_required
def borraruser():
    tipo=request.args.get('tipo')
    dao.borraruser(tipo)
    if len(tipo)>0:
        print ('borrado')
        return render_template('atras/home.html')
    else:
        print('No borro')
    return render_template('atras/home.html')

@app.route('/nuevousuario', methods=['GET', 'POST'])
@login_required
def nuevousuario():
    if request.method=='POST':
        user=request.form['username']
        pasw=request.form['password']
        nuev=generate_password_hash(pasw)
        full=request.form['fullname']
        what=request.form['whatsapp']
        dato=(user,nuev,full,what)
        dao.agregarusuario(dato)
        flash("Usuario Agregado")
        return redirect(url_for('home'))
    else:
        return "No ecibio nada"
        
@app.route('/cupones')
@login_required
def cupones():
    return render_template('atras/agregarcupones.html')
    
@app.route('/nuevocupones', methods=['GET','POST'])
@login_required
def nuevocupones():
    if request.method=='POST':
        cupones=request.form['cupones']
        porcentaje=request.form['porcentaje']
        tipo="cupones"
        datos=(cupones,porcentaje,tipo)
        dao.agregarcupones(datos)
        flash("Cupon Agregado")
        return redirect(url_for('home'))
        print(datos)
    else:
        print('No recio nada')
    return redirect(url_for('home'))
    
@app.route('/vercupones')
@login_required
def vercupones():
    cupones=dao.leercupones()
    if len(cupones)>0:
        print("Se encontrar&oacute;n usuarios")
        return render_template('atras/borrarcodigos.html',usu=cupones)
    else:
        print("No se encontrar&oacute;n registros")
        return render_template('atras/home.hml')
    return render_template('atras/home.html')

@app.route('/borrarcupones')
@login_required
def borrarcupones():
    tipo=request.args.get('tipo')
    dao.borrarcupones(tipo)
    return render_template('atras/home.html')
    
@app.route('/buscarcupon',methods=['GET','POST'])
def buscarcupon():
    if request.method=='POST':
        data=request.get_json()
        codtomcal=data.get('codtomcal')
        resultado=dao.buscarcupon(codtomcal)
        if resultado:
            print('cupon encontrado: ', resultado)
            return jsonify({'codigo': resultado[1],'porcentaje': resultado[2],})
        else:
            print('No se encontro cupon:', codtomcal)
    return jsonify({'error': 'Cupón no encontrado'})
 
    




def status_401(error):
    return redirect(url_for("/"))
def status_404(error):
    return render_template('404.html')

@app.route('/admin')
def admin():
    return redirect('atras/administrador.html')


if __name__ == '__main__':
    csrf.init_app(app)
    app.register_error_handler(401, status_401)
    app.register_error_handler(404, status_404)
    app.run(debug=True)