document.getElementById("submitBtn").addEventListener("click", function () {

    const cardNumber = document.getElementById("cardNumber").value;
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);
    const message = document.getElementById("message");

    if (cardNumber !== "1234123412341234") {
        message.textContent = "Invalid credit card number.";
        message.style.color = "red";
        return;
    }

    const today = new Date();
    const currentYear = today.getFullYear() % 100;
    const currentMonth = today.getMonth() + 1;

    if (
        year < currentYear ||
        (year === currentYear && month < currentMonth)
    ) {
        message.textContent = "Card is expired.";
        message.style.color = "red";
        return;
    }

    message.textContent = "Payment successful!";
    message.style.color = "green";
});
