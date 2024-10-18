let items = [];
let initialAmount = 0;

document.getElementById("addButton").addEventListener("click", function () {
  const itemName = document.getElementById("item").value;
  const itemPrice = parseFloat(document.getElementById("price").value);

  if (!itemName || isNaN(itemPrice) || itemPrice <= 0) {
    alert("Please enter a valid item and price.");
    return;
  }

  items.push({ name: itemName, price: itemPrice });

  const itemList = document.getElementById("itemList");
  const li = document.createElement("li");
  li.textContent = `${itemName}: €${itemPrice.toFixed(2)}`;
  itemList.appendChild(li);

  document.getElementById("item").value = "";
  document.getElementById("price").value = "";
});

document.getElementById("calcButton").addEventListener("click", function () {
  initialAmount = parseFloat(document.getElementById("initialAmount").value);

  if (isNaN(initialAmount) || initialAmount <= 0) {
    alert("Please enter a valid available amount.");
    return;
  }

  const totalExpenses = items.reduce((sum, item) => sum + item.price, 0);

  const remainingBalance = initialAmount - totalExpenses;

  let resultText;
  if (remainingBalance >= 0) {
    resultText = `Your remaining balance is: €${remainingBalance.toFixed(2)}`;
  } else {
    resultText = `You are over your budget by: €${Math.abs(
      remainingBalance
    ).toFixed(2)}`;
  }

  document.getElementById("balanceResult").textContent = resultText;
});
