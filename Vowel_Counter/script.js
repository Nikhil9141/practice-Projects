function countVowels() {
  const input = document.getElementById('text-input').value.toLowerCase();
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let char of input) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  document.getElementById('result').textContent = `Number of vowels: ${count}`;
}
