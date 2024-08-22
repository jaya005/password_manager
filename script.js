// Function to save the password
document.getElementById('passwordForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const websiteName = document.getElementById('websiteName').value;
    const password = document.getElementById('password').value;

    const passwordList = document.getElementById('passwordList');
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
    listItem.innerHTML = `${websiteName} <span class="badge bg-primary rounded-pill">${password}</span>`;
    
    passwordList.appendChild(listItem);

    // Clear the form
    document.getElementById('passwordForm').reset();
});

// Function to generate a strong password
document.getElementById('generatePasswordBtn').addEventListener('click', function() {
    const password = generateStrongPassword();
    document.getElementById('generatedPassword').innerText = password;
});

function generateStrongPassword() {
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digits = '0123456789';

    let password = '';
    
    // Ensure at least 2 lowercase letters
    for (let i = 0; i < 2; i++) {
        password += lowerCaseLetters.charAt(Math.floor(Math.random() * lowerCaseLetters.length));
    }

    // Ensure at least 2 uppercase letters
    for (let i = 0; i < 2; i++) {
        password += upperCaseLetters.charAt(Math.floor(Math.random() * upperCaseLetters.length));
    }

    // Ensure at least 2 digits
    for (let i = 0; i < 2; i++) {
        password += digits.charAt(Math.floor(Math.random() * digits.length));
    }

    // Add random characters to meet the minimum length requirement
    const allCharacters = lowerCaseLetters + upperCaseLetters + digits;
    while (password.length < 8) {
        password += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
    }

    // Shuffle the characters in the password
    password = password.split('').sort(() => 0.5 - Math.random()).join('');
    
    return password;
}
