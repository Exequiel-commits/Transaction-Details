const transactions = [

    {
        receiptNo: "RCPT-1001",
        date: "2026-09-16",
        time: "04:29 PM",
        payment: "Card",
        total: 150,

        items: [
            {
                name: "TCG Booster Pack",
                quantity: 1,
                price: 150
            }
        ]
    },

    {
        receiptNo: "RCPT-1002",
        date: "2026-09-16",
        time: "05:15 PM",
        payment: "Cash",
        total: 450,

        items: [
            {
                name: "Board Game",
                quantity: 1,
                price: 300
            },

            {
                name: "Drink",
                quantity: 2,
                price: 75
            }
        ]
    },

    {
        receiptNo: "RCPT-1003",
        date: "2026-09-17",
        time: "10:20 AM",
        payment: "Card",
        total: 300,

        items: [
            {
                name: "TCG Starter Deck",
                quantity: 1,
                price: 300
            }
        ]
    }

];

function findTransaction(receiptNumber) {

    let selectedTransaction = null;

    for (let i = 0; i < transactions.length; i++) {

        if (transactions[i].receiptNo === receiptNumber) {

            selectedTransaction = transactions[i];

            break;
        }
    }

    return selectedTransaction;
}

function searchTransaction() {

    const receiptInput =
        document.getElementById("receiptInput");

    const receiptNumber =
        receiptInput.value;

    displayTransactionDetails(receiptNumber);
}

function displayTransactionDetails(receiptNumber) {

    const transaction =
        findTransaction(receiptNumber);

    const details =
        document.getElementById("transactionDetails");

    if (transaction === null) {

        details.innerHTML =
            '<p class="error">Transaction not found.</p>';

        return;
    }

    details.innerHTML = "";

    const information =
        document.createElement("div");

    information.className =
        "transaction-info";

    const receiptInfo =
        document.createElement("div");

    receiptInfo.className =
        "info-item";

    receiptInfo.innerHTML =
        '<span class="info-label">Receipt #</span>' +
        '<span class="info-value">' +
        transaction.receiptNo +
        '</span>';

    information.appendChild(receiptInfo);

    const dateInfo =
        document.createElement("div");

    dateInfo.className =
        "info-item";

    dateInfo.innerHTML =
        '<span class="info-label">Date</span>' +
        '<span class="info-value">' +
        transaction.date +
        '</span>';

    information.appendChild(dateInfo);

    const timeInfo =
        document.createElement("div");

    timeInfo.className =
        "info-item";

    timeInfo.innerHTML =
        '<span class="info-label">Time</span>' +
        '<span class="info-value">' +
        transaction.time +
        '</span>';

    information.appendChild(timeInfo);

    const paymentInfo =
        document.createElement("div");

    paymentInfo.className =
        "info-item";

    paymentInfo.innerHTML =
        '<span class="info-label">Payment</span>' +
        '<span class="info-value">' +
        transaction.payment +
        '</span>';

    information.appendChild(paymentInfo);


    details.appendChild(information);

    const itemsTitle =
        document.createElement("h2");

    itemsTitle.textContent = "Items";

    itemsTitle.className =
        "items-title";

    details.appendChild(itemsTitle);


    const table =
        document.createElement("table");

    table.className =
        "items-table";

    const headerRow =
        document.createElement("tr");

    const nameHeader =
        document.createElement("th");

    nameHeader.textContent = "Item";

    const quantityHeader =
        document.createElement("th");

    quantityHeader.textContent = "Quantity";

    const priceHeader =
        document.createElement("th");

    priceHeader.textContent = "Price";


    headerRow.appendChild(nameHeader);
    headerRow.appendChild(quantityHeader);
    headerRow.appendChild(priceHeader);

    table.appendChild(headerRow);

    for (
        let i = 0;
        i < transaction.items.length;
        i++
    ) {

        const row =
            document.createElement("tr");

        const nameCell =
            document.createElement("td");

        nameCell.textContent =
            transaction.items[i].name;

        const quantityCell =
            document.createElement("td");

        quantityCell.textContent =
            transaction.items[i].quantity;

        const priceCell =
            document.createElement("td");

        priceCell.textContent =
            "₱" +
            transaction.items[i].price +
            ".00";


        row.appendChild(nameCell);
        row.appendChild(quantityCell);
        row.appendChild(priceCell);

        table.appendChild(row);
    }


    details.appendChild(table);

    const totalSection =
        document.createElement("div");

    totalSection.className =
        "total-section";


    const total =
        document.createElement("div");

    total.className =
        "total";

    total.textContent =
        "Total: ₱" +
        transaction.total +
        ".00";


    totalSection.appendChild(total);

    details.appendChild(totalSection);
}
