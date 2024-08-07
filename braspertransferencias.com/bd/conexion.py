import mysql.connector
from mysql.connector import Error
from flask import current_app


class DAO():
    def __init__(self):
        self.conexion=None
    def conectar(self):
        if self.conexion is None:
            try:
                self.conexion = mysql.connector.connect(
                    host='localhost',
                    port='3306',  # 3306 en el servidor
                    user='braspertransfere',
                    password='bcn51MBrzL7Q',
                    db='braspert_desarrolloo'
                )
                print("BD conectada")
            except Error as ex:
                print("Error en conexion: {0}".format(ex))

    def leervalores(self):
        self.conectar()
        if self.conexion is not None:
            try:
                cursor=self.conexion.cursor()
                sql="SELECT * FROM cambio"
                cursor.execute(sql)
                resultado=cursor.fetchone()
                cursor.close()
                return resultado
            except Error as ex:
                print("Error en conexion: {0}".format(ex))
        else:
            print("No hay conexion con BD")
            
    def leercomisiones(self):
        self.conectar()
        if self.conexion is not None:
            try:
                cursor=self.conexion.cursor()
                sql="SELECT * FROM comisiones"
                cursor.execute(sql)
                resultado=cursor.fetchall()
                cursor.close()
                return resultado
            except Error as ex:
                print("Error en conexion: {0}".format(ex))
        else:
            print("No hay conexion con BD")

    def actucomision(self,actucomision):
        self.conectar()
        if self.conexion is not None:
            try:
                cursor=self.conexion.cursor()
                sql="UPDATE comisiones SET 100a199=%s, 200a299=%s, 300a499=%s, 500a999=%s, 1000a4999=%s, 5000a10000=%s WHERE id=%s"
                cursor.execute(sql,(actucomision[1],actucomision[2],actucomision[3],actucomision[4],actucomision[5],actucomision[6],actucomision[0]))
                self.conexion.commit()
                print("comision actualizado")
            except Error as ex:
                print("Error al intentar la conexion: {0}".format(ex))

    def leercalcinversa(self):
        self.conectar()
        if self.conexion is not None:
            try:
                cursor=self.conexion.cursor()
                sql="SELECT * FROM inversa"
                cursor.execute(sql)
                resultado=cursor.fetchall()
                cursor.close()
                return resultado
            except Error as ex:
                print ("Error en conexcion:{0}".format(ex))
        else:
            print("No hay conexion con BD")
    #PEN A BRL     
    def leercalcinversapenabrl(self):
        self.conectar()
        if self.conexion is not None:
            try:
                cursor=self.conexion.cursor()
                sql="SELECT * FROM inversapenabrl"
                cursor.execute(sql)
                resultado=cursor.fetchall()
                cursor.close()
                return resultado
            except Error as ex:
                print ("Error en conexcion:{0}".format(ex))
        else:
            print("No hay conexion con BD")
    def leercomisionespenabrl(self):
        self.conectar()
        if self.conexion is not None:
            try:
                cursor=self.conexion.cursor()
                sql="SELECT * FROM comisionespenabrl"
                cursor.execute(sql)
                resultado=cursor.fetchall()
                print(cursor)
                cursor.close()
                return resultado
            except Error as ex:
                print ("Error en conexcion:{0}".format(ex))
        else:
            print("No hay conexion con BD")
    def actucomisionpenabrl(self,actucomision):
        self.conectar()
        if self.conexion.cursor():
            try:
                cursor=self.conexion.cursor()
                sql="UPDATE comisionespenabrl SET 100a199=%s, 200a299=%s, 300a499=%s, 500a999=%s, 1000a4999=%s, 5000a10000=%s WHERE id=%s"
                cursor.execute(sql,(actucomision[1],actucomision[2],actucomision[3],actucomision[4],actucomision[5],actucomision[6],actucomision[0]))
                self.conexion.commit()
                print("comision actualizado")
            except Error as ex:
                print("Error al intentar la conexion: {0}".format(ex))
        else:
            print("No hay conexion con BD")
    def actuinversapenabrl(self,actuinversa):
        self.conectar()
        if self.conexion is not None:
            try:
                cursor=self.conexion.cursor()
                sql="UPDATE inversapenabrl SET 100a199=%s, 200a299=%s, 300a499=%s, 500a999=%s, 1000a4999=%s, 5000a10000=%s WHERE id=%s"
                cursor.execute(sql,(actuinversa[1],actuinversa[2],actuinversa[3],actuinversa[4],actuinversa[5],actuinversa[6],actuinversa[0]))
                self.conexion.commit()
                print('calculadora actualizado')
            except Error as ex:
                print ("Error al intentar la conexion: {0}".format(ex))
        else:
            print("No hay conexion con BD")
    #EL FIN
    #BRL A PEN
    def leercalcinversabrlapen(self):
        self.conectar()
        if self.conexion is not None:
            try:
                cursor=self.conexion.cursor()
                sql="SELECT * FROM inversabrlapen"
                cursor.execute(sql)
                resultado=cursor.fetchall()
                cursor.close()
                return resultado
            except Error as ex:
                print ("Error en conexcion:{0}".format(ex))
        else:
            print("No hay conexion con BD")
    def leercomisionesbrlapen(self):
        self.conectar()
        if self.conexion is not None:
            try:
                cursor=self.conexion.cursor()
                sql="SELECT * FROM comisionesbrlapen"
                cursor.execute(sql)
                resultado=cursor.fetchall()
                cursor.close()
                return resultado
            except Error as ex:
                print ("Error en conexcion:{0}".format(ex))
        else:
            print("No hay conexion con BD")
    def actucomisionbrlapen(self,actucomision):
        self.conectar()
        if self.conexion.cursor():
            try:
                cursor=self.conexion.cursor()
                sql="UPDATE comisionesbrlapen SET 100a199=%s, 200a299=%s, 300a499=%s, 500a999=%s, 1000a4999=%s, 5000a10000=%s WHERE id=%s"
                cursor.execute(sql,(actucomision[1],actucomision[2],actucomision[3],actucomision[4],actucomision[5],actucomision[6],actucomision[0]))
                self.conexion.commit()
                print("comision actualizado")
            except Error as ex:
                print("Error al intentar la conexion: {0}".format(ex))
        else:
            print("No hay conexion con BD")
    def actuinversabrlapen(self,actuinversa):
        self.conectar()
        if self.conexion is not None:
            try:
                cursor=self.conexion.cursor()
                sql="UPDATE inversabrlapen SET 100a199=%s, 200a299=%s, 300a499=%s, 500a999=%s, 1000a4999=%s, 5000a10000=%s WHERE id=%s"
                cursor.execute(sql,(actuinversa[1],actuinversa[2],actuinversa[3],actuinversa[4],actuinversa[5],actuinversa[6],actuinversa[0]))
                self.conexion.commit()
                print('calculadora actualizado')
            except Error as ex:
                print ("Error al intentar la conexion: {0}".format(ex))
        else:
            print("No hay conexion con BD")
    #ELFIN
    #USD A BRL
    def leercalcinversausdabrl(self):
        self.conectar()
        if self.conexion is not None:
            try:
                cursor=self.conexion.cursor()
                sql="SELECT * FROM inversausdabrl"
                cursor.execute(sql)
                resultado=cursor.fetchall()
                cursor.close()
                return resultado
            except Error as ex:
                print ("Error en conexcion:{0}".format(ex))
        else:
            print("No hay conexion con BD")
    def leercomisionesusdabrl(self):
        self.conectar()
        if self.conexion is not None:
            try:
                cursor=self.conexion.cursor()
                sql="SELECT * FROM comisionesusdabrl"
                cursor.execute(sql)
                resultado=cursor.fetchall()
                cursor.close()
                return resultado
            except Error as ex:
                print ("Error en conexcion:{0}".format(ex))
        else:
            print("No hay conexion con BD")
    def actucomisionusdabrl(self,actucomision):
        self.conectar()
        if self.conexion.cursor():
            try:
                cursor=self.conexion.cursor()
                sql="UPDATE comisionesusdabrl SET 100a199=%s, 200a299=%s, 300a499=%s, 500a999=%s, 1000a4999=%s, 5000a10000=%s WHERE id=%s"
                cursor.execute(sql,(actucomision[1],actucomision[2],actucomision[3],actucomision[4],actucomision[5],actucomision[6],actucomision[0]))
                self.conexion.commit()
                print("comision actualizado")
            except Error as ex:
                print("Error al intentar la conexion: {0}".format(ex))
        else:
            print("No hay conexion con BD")
    def actuinversausdabrl(self,actuinversa):
        self.conectar()
        if self.conexion is not None:
            try:
                cursor=self.conexion.cursor()
                sql="UPDATE inversausdabrl SET 100a199=%s, 200a299=%s, 300a499=%s, 500a999=%s, 1000a4999=%s, 5000a10000=%s WHERE id=%s"
                cursor.execute(sql,(actuinversa[1],actuinversa[2],actuinversa[3],actuinversa[4],actuinversa[5],actuinversa[6],actuinversa[0]))
                self.conexion.commit()
                print('calculadora actualizado')
            except Error as ex:
                print ("Error al intentar la conexion: {0}".format(ex))
        else:
            print("No hay conexion con BD")
    #ELFIN
    #BRL A USD
    def leercalcinversabrlausd(self):
        self.conectar()
        if self.conexion is not None:
            try:
                cursor=self.conexion.cursor()
                sql="SELECT * FROM inversabrlausd"
                cursor.execute(sql)
                resultado=cursor.fetchall()
                cursor.close()
                return resultado
            except Error as ex:
                print ("Error en conexcion:{0}".format(ex))
        else:
            print("No hay conexion con BD")
    def leercomisionesbrlausd(self):
        self.conectar()
        if self.conexion is not None:
            try:
                cursor=self.conexion.cursor()
                sql="SELECT * FROM comisionesbrlausd"
                cursor.execute(sql)
                resultado=cursor.fetchall()
                cursor.close()
                return resultado
            except Error as ex:
                print ("Error en conexcion:{0}".format(ex))
        else:
            print("No hay conexion con BD")
    def actucomisionbrlausd(self,actucomision):
        self.conectar()
        if self.conexion.cursor():
            try:
                cursor=self.conexion.cursor()
                sql="UPDATE comisionesbrlausd SET 100a199=%s, 200a299=%s, 300a499=%s, 500a999=%s, 1000a4999=%s, 5000a10000=%s WHERE id=%s"
                cursor.execute(sql,(actucomision[1],actucomision[2],actucomision[3],actucomision[4],actucomision[5],actucomision[6],actucomision[0]))
                self.conexion.commit()
                print("comision actualizado")
            except Error as ex:
                print("Error al intentar la conexion: {0}".format(ex))
        else:
            print("No hay conexion con BD")
    def actuinversabrlausd(self,actuinversa):
        self.conectar()
        if self.conexion is not None:
            try:
                cursor=self.conexion.cursor()
                sql="UPDATE inversabrlausd SET 100a199=%s, 200a299=%s, 300a499=%s, 500a999=%s, 1000a4999=%s, 5000a10000=%s WHERE id=%s"
                cursor.execute(sql,(actuinversa[1],actuinversa[2],actuinversa[3],actuinversa[4],actuinversa[5],actuinversa[6],actuinversa[0]))
                self.conexion.commit()
                print('calculadora actualizado')
            except Error as ex:
                print ("Error al intentar la conexion: {0}".format(ex))
        else:
            print("No hay conexion con BD")
    #ELFIN
    #PEN A USD
    def leercalcinversapenausd(self):
        self.conectar()
        if self.conexion is not None:
            try:
                cursor=self.conexion.cursor()
                sql="SELECT * FROM inversapenausd"
                cursor.execute(sql)
                resultado=cursor.fetchall()
                cursor.close()
                return resultado
            except Error as ex:
                print ("Error en conexcion:{0}".format(ex))
        else:
            print("No hay conexion con BD")
    def leercomisionespenausd(self):
        self.conectar()
        if self.conexion is not None:
            try:
                cursor=self.conexion.cursor()
                sql="SELECT * FROM comisionespenausd"
                cursor.execute(sql)
                resultado=cursor.fetchall()
                cursor.close()
                return resultado
            except Error as ex:
                print ("Error en conexcion:{0}".format(ex))
        else:
            print("No hay conexion con BD")
    def actucomisionpenausd(self,actucomision):
        self.conectar()
        if self.conexion.cursor():
            try:
                cursor=self.conexion.cursor()
                sql="UPDATE comisionespenausd SET 100a199=%s, 200a299=%s, 300a499=%s, 500a999=%s, 1000a4999=%s, 5000a10000=%s WHERE id=%s"
                cursor.execute(sql,(actucomision[1],actucomision[2],actucomision[3],actucomision[4],actucomision[5],actucomision[6],actucomision[0]))
                self.conexion.commit()
                print("comision actualizado")
            except Error as ex:
                print("Error al intentar la conexion: {0}".format(ex))
        else:
            print("No hay conexion con BD")
    def actuinversapenausd(self,actuinversa):
        self.conectar()
        if self.conexion is not None:
            try:
                cursor=self.conexion.cursor()
                sql="UPDATE inversapenausd SET 100a199=%s, 200a299=%s, 300a499=%s, 500a999=%s, 1000a4999=%s, 5000a10000=%s WHERE id=%s"
                cursor.execute(sql,(actuinversa[1],actuinversa[2],actuinversa[3],actuinversa[4],actuinversa[5],actuinversa[6],actuinversa[0]))
                self.conexion.commit()
                print('calculadora actualizado')
            except Error as ex:
                print ("Error al intentar la conexion: {0}".format(ex))
    #ELFIN
    #USD A PEN
    def leercalcinversausdapen(self):
        self.conectar()
        if self.conexion is not None:
            try:
                cursor=self.conexion.cursor()
                sql="SELECT * FROM inversausdapen"
                cursor.execute(sql)
                resultado=cursor.fetchall()
                cursor.close()
                return resultado
            except Error as ex:
                print ("Error en conexcion:{0}".format(ex))
        else:
            print("No hay conexion con BD")
    def leercomisionesusdapen(self):
        self.conectar()
        if self.conexion is not None:
            try:
                cursor=self.conexion.cursor()
                sql="SELECT * FROM comisionesusdapen"
                cursor.execute(sql)
                resultado=cursor.fetchall()
                cursor.close()
                return resultado
            except Error as ex:
                print ("Error en conexcion:{0}".format(ex))
        else:
            print("No hay conexion con BD")
    def actucomisionusdapen(self,actucomision):
        self.conectar()
        if self.conexion.cursor():
            try:
                cursor=self.conexion.cursor()
                sql="UPDATE comisionesusdapen SET 100a199=%s, 200a299=%s, 300a499=%s, 500a999=%s, 1000a4999=%s, 5000a10000=%s WHERE id=%s"
                cursor.execute(sql,(actucomision[1],actucomision[2],actucomision[3],actucomision[4],actucomision[5],actucomision[6],actucomision[0]))
                self.conexion.commit()
                print("comision actualizado")
            except Error as ex:
                print("Error al intentar la conexion: {0}".format(ex))
        else:
            print("No hay conexion con BD")
    def actuinversausdapen(self,actuinversa):
        self.conectar()
        if self.conexion is not None:
            try:
                cursor=self.conexion.cursor()
                sql="UPDATE inversausdapen SET 100a199=%s, 200a299=%s, 300a499=%s, 500a999=%s, 1000a4999=%s, 5000a10000=%s WHERE id=%s"
                cursor.execute(sql,(actuinversa[1],actuinversa[2],actuinversa[3],actuinversa[4],actuinversa[5],actuinversa[6],actuinversa[0]))
                self.conexion.commit()
                print('calculadora actualizado')
            except Error as ex:
                print ("Error al intentar la conexion: {0}".format(ex))
    #ELFIN
            
    def actuinversa(self,actuinversa):
        self.conectar()
        if self.conexion is not None:
            try:
                cursor=self.conexion.cursor()
                sql="UPDATE inversa SET 100a199=%s, 200a299=%s, 300a499=%s, 500a999=%s, 1000a4999=%s, 5000a10000=%s WHERE id=%s"
                cursor.execute(sql,(actuinversa[1],actuinversa[2],actuinversa[3],actuinversa[4],actuinversa[5],actuinversa[6],actuinversa[0]))
                self.conexion.commit()
                print('calculadora actualizado')
            except Error as ex:
                print ("Error al intentar la conexion: {0}".format(ex))

    def cambio(self,cambio):
        self.conectar()
        if self.conexion is not None:
            try: 
                cursor=self.conexion.cursor()
                sql = "UPDATE cambio SET soladol=%s, solareal=%s, usdasol=%s, usdareal=%s, realapen=%s, realausd=%s WHERE id=%s"
                cursor.execute(sql, (cambio[1], cambio[2], cambio[3], cambio[4], cambio[5], cambio[6], cambio[0]))
                self.conexion.commit()
                print("usuario actualizado")
            except Error as ex:
                print("Error al intentar la conexion: {0}".format(ex))
                
    def leerusuarios(self):
        self.conectar()
        if self.conexion is not None:
            try:
                cursor=self.conexion.cursor()
                sql="SELECT * FROM admin ORDER BY id"
                cursor.execute(sql)
                resultado=cursor.fetchall()
                cursor.close()
                return resultado
            except Error as ex:
                print("Error al intentar la conexion: {0}".format(ex))

    def agregarusuario(self,usu):
        self.conectar()
        if self.conexion.is_connected():
            try:
                cursor=self.conexion.cursor()
                sql="INSERT INTO admin (username,password,fullname,telefono,tipo) VALUES ('{0}','{1}','{2}','{3}','admin')"
                cursor.execute(sql.format(usu[0],usu[1],usu[2],usu[3],[4]))
                self.conexion.commit()
                cursor.close()
                print(usu)
            except Error as ex:
                print("Error en conexion: {0}".format(ex))
        else:
            print("No hay conexion con BD")

    def borraruser(self,id):
        self.conectar()
        if self.conexion.is_connected():
            try:
                cursor=self.conexion.cursor()
                sql="DELETE FROM admin WHERE id='{0}'"
                cursor.execute(sql.format(id))
                self.conexion.commit()
                print("Borrado")
            except Error as ex:
                print("Error en conexion: {0}".format(ex))
        else:
            print("No hay conexion con BD")
            
    def agregarcupones(self,datos):
        self.conectar()
        if self.conexion.is_connected():
            try:
                cursor=self.conexion.cursor()
                sql="INSERT INTO cupones (codigo,porcentaje,tipo) VALUES ('{0}','{1}','{2}')"
                cursor.execute(sql.format(datos[0],datos[1],datos[2]))
                self.conexion.commit()
                cursor.close()
                print(datos)
            except Error as ex:
                print ("Error en conexion: {0}".format(ex))
        else:
            print("No hay conexion con BD")
            
    def leercupones(self):
        self.conectar()
        if self.conexion.is_connected():
            try:
                cursor=self.conexion.cursor()
                sql="SELECT * FROM cupones ORDER BY id DESC"
                cursor.execute(sql)
                resultado=cursor.fetchall()
                cursor.close()
                return resultado
            except Error as ex:
                print ("Error en conexion: {0}".format(ex))
        else:
            print("No hay conexion con BD")
            
    def borrarcupones(self,id):
        self.conectar()
        if self.conexion.is_connected():
            try:
                cursor=self.conexion.cursor()
                sql="DELETE FROM cupones WHERE id='{0}'"
                cursor.execute(sql.format(id))
                self.conexion.commit()
                cursor.close()
                print("Borrado")
            except Error as ex:
                print ("Error en conexion: {0}".format(ex))
        else:
            print("No hay conexion con BD")
            
    def buscarcupon(self,cod):
        self.conectar()
        if self.conexion.is_connected():
            try:
                cursor=self.conexion.cursor()
                sql="SELECT * FROM cupones WHERE codigo=%s"
                cursor.execute(sql,(cod,))
                resultado=cursor.fetchone()
                cursor.close()
                return resultado
            except Error as es:
                print ("Error en conexion: {0}".format(ex))
        else:
            print("No hay conexion con BD")