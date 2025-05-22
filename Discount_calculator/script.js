function calculateDiscount() {
  const price = parseFloat(document.getElementById("price").value);
  const discount = parseFloat(document.getElementById("discount").value);
  const result = document.getElementById("result");

  if (isNaN(price) || isNaN(discount) || price <= 0 || discount < 0) {
    result.innerHTML = "Please enter valid values.";
    result.style.color = "red";
    return;
  }

  const discountAmount = (price * discount) / 100;
  const finalPrice = price - discountAmount;

  result.innerHTML = `
    Discount: ₹${discountAmount.toFixed(2)}<br>
    Final Price: ₹${finalPrice.toFixed(2)}
  `;
  result.style.color = "#2e7d32";
}
