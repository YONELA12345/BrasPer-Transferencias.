from .entities.User import User


class ModelUser():
    @classmethod
    def login(self, dao, user):
        dao.conectar()
        try:
            cursor = dao.conexion.cursor()
            sql = "SELECT * FROM admin WHERE username='{}'"
            cursor.execute(sql.format(user.username))
            row = cursor.fetchone()
            if row != None:
                user = User(row[0], row[1], User.check_password(
                    row[2], user.password), row[3], row[4], row[5])
                return user
            else:
                return None
        except Exception as ex:
            raise Exception(ex)

    @classmethod
    def get_by_id(self, dao, id):
        dao.conectar()
        try:
            cursor = dao.conexion.cursor()
            sql = "SELECT * FROM admin WHERE id={}"
            cursor.execute(sql.format(id))
            row = cursor.fetchone()
            if row != None:
                return User(row[0], row[1], None, row[3], row[4], row[5])
            else:
                return None
        except Exception as ex:
            raise Exception(ex)
