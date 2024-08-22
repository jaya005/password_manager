
document.getElementById('passwordForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const websiteName = document.getElementById('websiteName').value;
    const password = document.getElementById('password').value;

    const passwordList = document.getElementById('passwordList');
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
    listItem.innerHTML = `${websiteName} <span class="badge bg-primary rounded-pill">${password}</span>`;
    
    passwordList.appendChild(listItem);
    document.getElementById('passwordForm').reset();
});
document.getElementById('generatePasswordBtn').addEventListener('click', function() {
    const password = generateStrongPassword();
    document.getElementById('generatedPassword').innerText = password;
});

function generateStrongPassword() {
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digits = '0123456789';

    let password = '';
    for (let i = 0; i < 2; i++) {
        password += lowerCaseLetters.charAt(Math.floor(Math.random() * lowerCaseLetters.length));
    }
    for (let i = 0; i < 2; i++) {
        password += upperCaseLetters.charAt(Math.floor(Math.random() * upperCaseLetters.length));
    }
    for (let i = 0; i < 2; i++) {
        password += digits.charAt(Math.floor(Math.random() * digits.length));
    }
    const allCharacters = lowerCaseLetters + upperCaseLetters + digits;
    while (password.length < 8) {
        password += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
    }
    password = password.split('').sort(() => 0.5 - Math.random()).join('');
    
    return password;
}
