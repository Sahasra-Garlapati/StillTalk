function sendMessage() {
  const userInput = document.getElementById("userInput");
  const message = userInput.value.trim();
  if (message === "") return;

  const chatBox = document.getElementById("chatBox");

  // Create user message bubble inside wrapper
  const userWrapper = document.createElement("div");
  userWrapper.className = "message-wrapper";

  const userMsg = document.createElement("div");
  userMsg.className = "user-message";
  userMsg.innerText = message;

  userWrapper.appendChild(userMsg);
  chatBox.appendChild(userWrapper);
  chatBox.scrollTop = chatBox.scrollHeight;

  userInput.value = "";

  // Create bot typing message
  const botWrapper = document.createElement("div");
  botWrapper.className = "message-wrapper";

  const typingMsg = document.createElement("div");
  typingMsg.className = "bot-message";
  typingMsg.innerText = "StillTalk is typing...";

  botWrapper.appendChild(typingMsg);
  chatBox.appendChild(botWrapper);
  chatBox.scrollTop = chatBox.scrollHeight;

  // Send to backend
  fetch("/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: message }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Bot reply:", JSON.stringify(data.reply));
      typingMsg.innerText = data.reply.trim();
      chatBox.scrollTop = chatBox.scrollHeight;
    })
    .catch((error) => {
      typingMsg.innerText = "Sorry, I’m having trouble reaching the server.";
      console.error("Error:", error);
      chatBox.scrollTop = chatBox.scrollHeight;
    });
}
