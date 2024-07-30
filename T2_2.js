function openTypingMessageWindow() {
    const typingWindow = window.open("", "Typing Message Window", "width=300,height=200");
    let message = "This is ITI- OS- CS Alex-Summer Training 2024";
    let index = 0;

    function typeMessage() {
        if (index < message.length) {
            typingWindow.document.body.innerHTML += message[index++];
            setTimeout(typeMessage, 100);
        } else {
            setTimeout(() => {
                typingWindow.close();
            }, 2000);
        }
    }

    typingWindow.document.write("<p></p>");
    typeMessage();
}
