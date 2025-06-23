from flask import Flask, request, jsonify, send_from_directory
import requests

app = Flask(__name__)

OPENROUTER_API_KEY = "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"  # Replace with your real key

@app.route("/")
def home():
    return send_from_directory('.', 'index.html')

@app.route("/style.css")
def style():
    return send_from_directory('.', 'style.css')

@app.route("/script.js")
def script():
    return send_from_directory('.', 'script.js')

@app.route("/chat", methods=["POST"])
def chat():
    user_message = request.get_json().get("message")

    try:
        res = requests.post(
            "https://openrouter.ai/api/v1/chat/completions",
            headers={
                "Authorization": f"Bearer {OPENROUTER_API_KEY}",
                "Content-Type": "application/json"
            },
            json={
                "model": "openrouter/auto",
                "max_tokens": 300,  # ✅ Limit to short response to avoid credit issue
                "messages": [
                    {"role": "user", "content": user_message}
                ]
            }
        )

        data = res.json()
        print("🔎 Full API Response:", data)

        reply = data.get("choices", [{}])[0].get("message", {}).get("content")
        if not reply:
            reply = data.get("error", {}).get("message", "Sorry, no reply was generated.")

        return jsonify({"reply": reply})

    except Exception as e:
        print("❌ Error:", e)
        return jsonify({"reply": "Sorry, something went wrong on the server."})

if __name__ == "__main__":
    app.run(debug=True)
