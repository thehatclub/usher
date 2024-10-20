import os

from flask import Flask, send_from_directory
from flask_cors import CORS
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)

# Database configuration
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///media.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# Initialize SQLAlchemy with app
db = SQLAlchemy(app)


# frontend_folder = os.path.join(os.getcwd(), "..", "frontend", "dist")

# serve static files from the "dist"" folder under the "frontend" directory
# @app.route("/", defaults={"filename": ""})
# @app.route("/<path:filename>")
# def index(filename):
#     if not filename:
#         filename = "index.html"
#     return send_from_directory(frontend_folder, filename)

# Initialize Flask-Migrate with app and db
migrate = Migrate(app, db)

# Import models after db initialization to avoid circular import
from models import User

# Create all database tables
with app.app_context():
    db.create_all()

# Run the app
if __name__ == "__main__":
    app.run(debug=True)
