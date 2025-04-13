function botReply(message) {
    const savol = message.trim().endsWith("?");
    if (message.endsWith("?")) {
        reply = Math.random() > 0.5 ? "Ha" : "Yo'q";
    } else {
        reply = "Tshunmadim";
    }
    const time = new Date().toTimeString().slice(0, 5);
    const natija = {
        message: message,
        reply: reply,
        time: time
    }
    return natija;
}
console.log(botReply("Bugun havo yaxshimi?"));