function toggleChat() {
    var chatWindow = document.getElementById('chat-window');
    chatWindow.style.display = (chatWindow.style.display === 'flex') ? 'none' : 'flex';
}

function closeChat() {
    document.getElementById('chat-window').style.display = 'none';
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    var userInput = document.getElementById('user-input');
    var message = userInput.value.trim();
    if (message.length === 0) return;

    displayMessage(message, 'user');
    userInput.value = '';

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://chatbot.thundergits.com/chat', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                displayMessage(response.answer, 'bot');
            } else {
                displayMessage('Error contacting server.', 'bot');
            }
        }
    };
    xhr.send(JSON.stringify({ message: message, botId: 'brightpath01' }));
}

function displayMessage(text, sender) {
    var chatMessages = document.getElementById('chat-messages');
    var newMessage = document.createElement('div');
    newMessage.className = sender + '-message';
    newMessage.textContent = text;
    chatMessages.appendChild(newMessage);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}