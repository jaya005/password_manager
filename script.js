function maskPassword(pass){
    let str = ""
    for (let index = 0; index < pass.length; index++) {
        str  += "*"
    }
    return str
}

function copyText(txt) {
    navigator.clipboard.writeText(txt).then(
        () => {
          document.getElementById("alert").style.display = "inline"
          setTimeout(() => {
            document.getElementById("alert").style.display = "none"
          }, 500);

        },
        () => {
          alert("Clipboard copying failed")
        },
      );
  }
const deletePassword=(website)=>{
    let data=localStorage.getItem("passwords")
    let arr=JSON.parse(data);
    arrUpdated=arr.filter((e)=>{
        return e.website!=website
    })
    localStorage.setItem("passwords",JSON.stringify(arrUpdated))
    alert(`Successfully deleted ${website}'s password`)
    showPasswords()
}
const showPasswords=()=>{
let tb=document.querySelector("table")
let data=localStorage.getItem("passwords")
if(data==null|| JSON.parse(data).length == 0){
    tb.innerHTML="No Data To Show"
}
else{
    tb.innerHTML=`<tr>
                <th>Website Name</th>
                 <th>UserName</th> 
                 <th>Password</th>
                 <th>Delete</th>
                </tr>
            <tr>`
   let arr=JSON.parse(data);
    let str=""
   for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    str+=`<tr>
    <td>${element.website}<img onclick="copyText('${element.website}')" src="./copy.svg" alt="Copy Button" width="10" width="10" height="10"></td>
    <td>${element.username}<img onclick="copyText('${element.website}')" src="./copy.svg" alt="Copy Button" width="10" width="10" height="10"></td>
    <td>${maskPassword(element.password)}<img onclick="copyText('${element.website}')" src="./copy.svg" alt="Copy Button" width="10" width="10" height="10"></td>
    <td><button class="save" onclick="deletePassword('${element.website}')">Delete</button></td>
    </tr>
    `    
   }
   tb.innerHTML=tb.innerHTML+str
}
webname.value = ""
username.value = ""
password.value = ""
}
console.log("Working")
showPasswords()
document.querySelector(".save").addEventListener("click",(e)=>{
    e.preventDefault()
        if (!webname.value || !username.value || !password.value) {
            alert("Please fill out all fields before saving.");
            return;
        }
    console.log("clicked...")
    console.log(username.value,password.value)
    let passwords=localStorage.getItem("passwords")
    console.log(passwords)
    if(passwords==null){
        let json=[]
        json.push({website: webname.value,username:username.value,password:password.value })
        alert("Password Saved");
        localStorage.setItem("passwords",JSON.stringify(json))
    }
    else{
        let json=JSON.parse(localStorage.getItem("passwords"))
        json.push({website: webname.value,username:username.value,password:password.value})
        alert("Password Saved");
        localStorage.setItem("passwords",JSON.stringify(json))
    }
    showPasswords()
})
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
