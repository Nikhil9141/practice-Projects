const toggleBtn = document.getElementById('toggle-btn');

// Add a click event to the button
toggleBtn.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    toggleBtn.textContent = 'Switch to Light Mode';
  } else {
    toggleBtn.textContent = 'Switch to Dark Mode';
  }
});
