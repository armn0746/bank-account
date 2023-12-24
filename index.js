document.getElementById("myButton").addEventListener('click', function () {
    location.href = "bank.html";



    const numberfild = document.getElementById('accountnumber');
    console.log(numberfild.value);
    const password = document.getElementById('passwordnumber');
    console.log(password.value);




    if (typeof numberfild === 11111 ) {
        location.href = "bank.html";
    }
    else {
        alert('rong account number and password')
    }



}) 
