const API_URL = "https://jsonplaceholder.typicode.com"; // Cambiado a HTTPS

fetch(`${API_URL}/users`)

    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(myData => {
        console.log(myData);

        myData=Array.from(myData);

        myData.forEach(element => {
            let datos="<li>Nombre: "+element.name+"📧  Email: "+element.email+"</li>";
            document.getElementById("app").innerHTML+=datos; 
        });
    })
    .catch(err => console.error(err));
