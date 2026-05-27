function loadMessages() {
  const box = document.getElementById("chat-box");
  box.innerHTML = "";
  const messages = JSON.parse(localStorage.getItem("chat")) || [];
  messages.forEach(msg => {
    const div = document.createElement("div");
    div.textContent = `${msg.name}: ${msg.text}`;
    box.appendChild(div);
  });
  box.scrollTop = box.scrollHeight;
}

function sendMessage() {
  const name = document.getElementById("nickname").value.trim();
  const text = document.getElementById("message").value.trim();
  if (!name || !text) return alert("请输入昵称和消息");

  const messages = JSON.parse(localStorage.getItem("chat")) || [];
  messages.push({ name, text });
  localStorage.setItem("chat", JSON.stringify(messages));
  document.getElementById("message").value = "";
  loadMessages();
}

window.onload = loadMessages;