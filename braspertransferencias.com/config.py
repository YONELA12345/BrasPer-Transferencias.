class Config:
    SECRET_KEY ='tumiaqp1'

class DevelopmentConfig(config):
    DEBUG = True
    MYSQL_HOST = 'localhost'
    MYSQL_USER = 'root'
    MYSQL_PASSWORD = ''
    MYSQK_DB = 'braspertransferencias'

config ={
    'development':DevelopmentConfig
}