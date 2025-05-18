function checkPalindrome() {
  const input = document.getElementById('text-input').value;
  const cleaned = input.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversed = cleaned.split('').reverse().join('');

  const result = document.getElementById('result');

  if (cleaned === '') {
    result.textContent = 'Please enter a valid word or phrase.';
    result.style.color = 'red';
  } else if (cleaned === reversed) {
    result.textContent = `"${input}" is a Palindrome!`;
    result.style.color = 'green';
  } else {
    result.textContent = `"${input}" is NOT a Palindrome.`;
    result.style.color = 'crimson';
  }
}
