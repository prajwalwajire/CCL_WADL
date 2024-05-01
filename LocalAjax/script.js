
const validateForm = () => {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var date = document.getElementById("date").value;

    if (!name || !email || !password || !date) {
        alert("Enter all required fields!");
        return false;
    }
    if (!/^[A-za-z\s]+$/.test(name)) {
        alert("name is not valid");
        return false;
    }
    if (password.length < 8) {
        alert("password is contain at lest 8 ")
        return false;
    }

    if (email.indexOf('@') === -1 || email.indexOf(".") === -1) {
        alert("email is not vlaid");
        return false;
    }

    return true;
}

// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.getElementById("registrationForm");

//     document.getElementById("registrationForm").addEventListener("submit", function (event) {
//         event.preventDefault(); // Prevent the default form submission

//         if (validateForm()) {
//             const user = {
//                 password: document.getElementById("password").value,
//                 date: document.getElementById("date").value,
//                 email: document.getElementById("email").value,
//                 state: document.getElementById("state").value,
//                 name: document.getElementById("name").value,
//                 hobbies: {
//                     swim: document.getElementById("swim").checked,
//                     run: document.getElementById("run").checked,
//                 },
//             };

//             console.log(user);

//             // Initialize XMLHttpRequest to send AJAX POST request
//             const xhr = new XMLHttpRequest();
//             const url="https://jsonplaceholder.typicode.com/users";
//             xhr.open('POST', url, true);
//             xhr.setRequestHeader("Content-Type", "application/json");

//             xhr.onload = function () {
//                 if ( xhr.status >=200 && xhr.status<300) {
//                     console.log("first")
//                     console.log(xhr.responseText); // Log response if request is successful
//                 }
//                 else{
//                     console.log("error",xhr.status,xhr.statusText)
//                 }
//             };

//             const data = JSON.stringify(user); // Convert user data to JSON for sending
//             xhr.send(data);

//             // Retrieve existing users from local storage
//             var users = JSON.parse(localStorage.getItem("users")) || []; // Use empty array if `users` is null
//             users.push(user); // Add the new user to the array
//             localStorage.setItem("users", JSON.stringify(users)); // Save the updated array to local storage
//         }
//     });
// // });


document.getElementById("registrationForm").addEventListener("submit", function () {
    if (validateForm()) {
        var user = {
            password: document.getElementById("password").value,
            date: document.getElementById("date").value,
            email: document.getElementById("email").value,
            state: document.getElementById("state").value,
            name: document.getElementById("name").value,
            hobbies: {
                swim: document.getElementById("swim").checked,
                run: document.getElementById("run").checked,
            },
        };
    }

    // const xhr = new XMLHttpRequest();
    // xhr.open("POST", "https://jsonplaceholder.typicode.com/users", true);
    // xhr.setRequestHeader("Content-Type", "application/json")

    // const data = JSON.stringify(user);
    // xhr.send(data);

    // var users1 = || [];
    var users = JSON.parse(localStorage.getItem("users")) ||[];
    
    users.push(user);
    console.log(users);
    localStorage.setItem("users", JSON.stringify(users));
    console.log("hi");
    window.location.href="table.html";
})