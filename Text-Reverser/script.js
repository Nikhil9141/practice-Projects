function reverseText() {
  const input = document.getElementById('textInput').value;

  if (input.trim() === '') {
    document.getElementById('result').textContent = 'Please enter some text.';
    return;
  }

  const reversed = input.split('').reverse().join('');

  document.getElementById('result').textContent = `Reversed Text: ${reversed}`;
}
