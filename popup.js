document.addEventListener("DOMContentLoaded", function () {
  const openChatButton = document.getElementById("openChat");
  const chatSidebar = document.getElementById("chatSidebar");
  const closeButton = document.getElementById("closeButton");
  const chatMessages = document.getElementById("chatMessages");
  const messageInput = document.getElementById("messageInput");
  const sendMessageButton = document.getElementById("sendMessage");

  openChatButton.addEventListener("click", function () {
    if (chatSidebar.classList.contains("show")) {
      chatSidebar.classList.remove("show");
    } else {
      chatSidebar.classList.add("show");
      messageInput.focus(); // Focus on input when chat opens
    }
  });

  closeButton.addEventListener("click", function () {
    chatSidebar.classList.remove("show");
  });

  sendMessageButton.addEventListener("click", function () {
    // Sending messages functionality (to ChatGPT API or demo purposes)
    // Displaying sent message
    const messageText = messageInput.value.trim();
    if (messageText !== "") {
      displayMessage(messageText, "user");
      // Simulating a response from ChatGPT after 1 second
      setTimeout(function () {
        const botResponse = "This is a response from ChatGPT.";
        displayMessage(botResponse, "bot");
      }, 1000);
      messageInput.value = "";
    }
  });

  function displayMessage(message, sender) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
  }
});
