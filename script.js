document.addEventListener('DOMContentLoaded', function(){

    const messageContainer = document.querySelector("#message_container")
    const messageInput = document.querySelector('[name=message_input]');
    const messageButton = document.querySelector('[name=send_message_button]')

    let webClient = new WebSocket("ws://localhost:12345");

    webClient.onopen = () => {
        console.log("Client connected");

        messageButton.onclick = () => {
            webClient.send(messageInput.value);
            messageInput.value = "";
        };
    };

    webClient.onmessage = (message) => {
        const newMessage = document.createElement("div");
        newMessage.innerHTML = message.data;
        messageContainer.appendChild(newMessage);
    };
}, false);
