document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    alert('Thank you for signing up, ' + email + '!');
    document.getElementById('signup-form').reset();
});

document.getElementById('subscribe-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    alert(`Thank you, ${name}! We'll keep you updated at ${email}.`);
    this.reset();
}); 