# StillTalk
A supportive AI chatbot to express your emotions.
# StillTalk – Emotional AI Chatbot 💬

**StillTalk** is a supportive AI chatbot designed to help people express their feelings — especially when they feel like they have no one else to talk to. Whether you're feeling happy, anxious, or simply want someone to "listen", StillTalk is here for you.

Built with 💻 HTML, CSS, JavaScript, Python (Flask) and powered by OpenRouter (Claude or GPT models), it mimics real-time AI chatting with a warm tone.

---

## 🌟 Features

- 💬 Human-like supportive responses
- ✨ Typing animation: "StillTalk is typing..."
- 💻 Clean and simple chat UI
- 📐 Message alignment (user on right, bot on left)
- 🔐 Secure API integration via OpenRouter
- 🧠 AI model can be switched (Claude, GPT, etc.)

---

## 🧰 Tech Stack

| Frontend      | Backend        | AI Model   |
|---------------|----------------|------------|
| HTML, CSS, JS | Python (Flask) | OpenRouter |

---

## 🚀 How to Run the Project Locally
## 🔐 Setup Your Own API Key (Required)

1.To run StillTalk, you must provide your own [OpenRouter](https://openrouter.ai/) API key:

i. Go to [OpenRouter API Keys](https://openrouter.ai/keys) and log in.
ii. Click **"Create Key"** → Give it any name → Copy the generated key.
iii. Open `main.py` and replace:
   ```python
   OPENROUTER_API_KEY = "your_openrouter_api_key_here"
   OPENROUTER_API_KEY=sk-or-v1-xxxxxxxxxxxxxxxxxxxxxxx
   echo ".env" >> .gitignore

2. Clone the repository
git clone https://github.com/your-username/stilltalk.git
cd stilltalk

3. Install Dependencies
pip install flask requests

4. Run the Application
python main.py
