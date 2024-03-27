# Standard library imports

# Remote library imports
import os
from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData

# Local imports

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://database_user:password@localhost/byte_database'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})
db = SQLAlchemy(metadata=metadata)
migrate = Migrate(app, db)
db.init_app(app)

api = Api(app)

frontend_url = os.getenv('FRONTEND_URL', 'http://localhost:3000') # Default to localhost if not set

CORS(app, resources={r"/api/*": {"origins": frontend_url}}, supports_credentials=True)
