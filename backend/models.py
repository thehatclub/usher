from datetime import datetime

from app import db


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    joined = db.Column(db.DateTime, default=datetime.utcnow)
    email = db.Column(db.String(100), unique=True)
    name = db.Column(db.String(50))
    avatar = db.Column(db.String(200))
    tv = db.Column(db.JSON, nullable=True)
    movies = db.Column(db.JSON, nullable=True)

    def to_json(self):
        return {
            "id": self.id,
            "joined": self.joined,
            "email": self.email,
            "name": self.name,
            "avatar": self.avatar,
            "tv": self.tv,
            "movies": self.movies,
        }
