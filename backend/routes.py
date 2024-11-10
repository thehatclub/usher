from app import app, db
from flask import jsonify, request
from models import User


# Get all Users
@app.route("/api/users", methods=["GET"])
def get_media():
    users = User.query.all()
    result = [user.to_json() for user in users]
    return jsonify(result)


# Create a User
@app.route("/api/users", methods=["POST"])
def creat_user():
    try:
        data = request.json

        # Validation
        required_fields = ["name", "email"]
        for field in required_fields:
            if field not in data or not data.get(field):
                return jsonify({"error": f"Missing required field: {field}"}), 400

        name = data.get("name")
        email = data.get("email")

        # Set Avatar to name
        avatar = f"https://api.dicebear.com/9.x/micah/svg?seed={name}"

        new_user = User(name=name, email=email, avatar=avatar)
        db.session.add(new_user)
        db.session.commit()

        return jsonify(new_user.to_json()), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500


# Delete a User
@app.route("/api/users/<int:id>", methods=["DELETE"])
def delete_user(id):
    try:
        user = User.query.get(id)
        if user is None:
            return jsonify({"error": "User not found"}), 404
        db.session.delete(user)
        db.session.commit()
        return jsonify({"msg": "User deleted"}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500


# Update a User
@app.route("/api/users/<int:id>", methods=["PATCH"])
def update_user(id):
    try:
        user = User.query.get(id)
        if user is None:
            return jsonify({"error": "User not found"}), 404

        data = request.json
        user.name = data.get("name", user.name)
        user.avatar = f"https://api.dicebear.com/9.x/micah/svg?seed={user.name}"
        user.email = data.get("email", user.email)

        db.session.commit()

        return jsonify(user.to_json()), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500
