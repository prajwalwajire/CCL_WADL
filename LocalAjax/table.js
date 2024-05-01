var users=JSON.parse(localStorage.getItem("users")) ||[];

var tbody=document.getElementById("tbody");

users.forEach(function (user)  {
    var row=document.createElement('tr');
    var td=document.createElement("td");
    var td1=document.createElement('td');

    td.textContent=user.name;
    td1.textContent=user.email;

    row.appendChild(td);
    row.appendChild(td1);

    tbody.appendChild(row);
});
