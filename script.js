let count = document.getElementById("count");
let errorMsg = document.getElementById("error-msg");

function updateCountDisplay(newCount) {
  count.textContent = newCount;

  // Remove error if count > 0
  if (newCount > 0) {
    errorMsg.textContent = "";
  }
}

function decrement() {
  let num = parseInt(count.textContent.trim());

  if (num === 0) {
    errorMsg.textContent = "Error : Cannot go below 0";
    return;
  }

  num--;
  updateCountDisplay(num);
}

function increment() {
  let num = parseInt(count.textContent.trim());
  num++;
  updateCountDisplay(num);
}

function clearCount() {
  updateCountDisplay(0);
  errorMsg.textContent = "";
}
