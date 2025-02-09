fetch("chatbot.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("chatbot-container").innerHTML = html;
    const script = document.createElement("script");
    script.src = "../assets/js/chatbot.js";
    document.body.appendChild(script);
  });
