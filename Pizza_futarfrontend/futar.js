
document.addEventListener("DOMContentLoaded", function () {
    const createButton = document.getElementById("create");
    const readButton = document.getElementById("read");
    const updateButton = document.getElementById("update");
    const deleteButton = document.getElementById("delete");
    var table = document.getElementById("ugyfellista");
    function select() {

        console.log("select");

    }
    createButton.addEventListener("click", function () {
        let baseUrl = "http://localhost/Pizza_futarbackend/index.php?futar";
        let fnev = document.getElementById("fnev").value; // Assuming vnev is the id of the input field for "vnev"
        let telefon = document.getElementById("ftel").value; // Assuming vcim is the id of the input field for "vcim"

        // Prepare the data to be sent
        let formData = new FormData();
        formData.append("fnev", fnev);
        formData.append("ftel", telefon);

        // Make a POST request to add the new vevo
        fetch(baseUrl, {
            method: "POST",
            body: formData
        })
            .then(response => {
                if (response.ok) {
                    console.log("Futar added successfully");
                    // Optionally, you can perform some action like showing a success message or redirecting the user
                } else {
                    console.error("Failed to add futar");
                    // Optionally, you can handle errors here
                }
            })
            .catch(error => {
                console.error("Error:", error);
                // Handle network errors
            });
    });

    readButton.addEventListener("click", async function () {
        let baseUrl = "http://localhost/Pizza_futarbackend/index.php?futar";

        let options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        };

        let response = await fetch(baseUrl, options);
        let data = await response.json();

        let tabla = `
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Név</th>
                        <th scope="col">Telefonszám</th>
                    </tr>
                </thead>
                <tbody>
        `;
        data.forEach(element => {
            tabla += `<tr><td>${element.fazon}</td><td>${element.fnev}</td><td>${element.ftel}</td><td><button class="btn btn-primary pick" id="${element.fazon}">Pick</button></td></tr>`;
        });
        tabla += `
                </tbody>
            </table>`;

        table.innerHTML = tabla;

        const pickButtons = document.querySelectorAll(".pick");
        pickButtons.forEach(button => {
            button.addEventListener("click", function () {
                let azon = document.getElementById("fazon");
                let nev = document.getElementById("fnev");
                let telefon = document.getElementById("ftel");

                // Find the corresponding data in the row
                let row = this.closest("tr");
                azon.value = row.querySelector("td:first-child").innerText;
                nev.value = row.querySelector("td:nth-child(2)").innerText;
                telefon.value = row.querySelector("td:nth-child(3)").innerText;
            });
        });
    });

    updateButton.addEventListener("click", async function(){
        let baseUrl="http://localhost/Pizza_futarbackend/index.php?futar/" + fazon;
         let object ={
            fazon :   document.getElementById("fazon").value,
            fnev :  document.getElementById("fnev").value,
            telefon :   document.getElementById("ftel").value
        }
        let body=JSON.stringify(object)
        let options={
            method: "PUT",
            mode: "cors",
            body: body
        };
       
        
        let response= await fetch(baseUrl, options);
    });

    deleteButton.addEventListener("click", async function () {
        let baseUrl = `http://localhost/Pizza_futarbackend/index.php?futar/${document.getElementById("fazon").value}`;
        let options = {
            method: "DELETE",
        }
        response = await fetch(baseUrl, options);

    });




});
