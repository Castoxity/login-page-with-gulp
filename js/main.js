document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    fetch('users.json')
      .then(response => response.json())
      .then(users => {
        const user = users.find(user => user.username === username && user.password === password);
  
        if (user) {
          window.location.href = user.url;
        } else {
          alert('Invalid login credentials');
        }
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  });
  