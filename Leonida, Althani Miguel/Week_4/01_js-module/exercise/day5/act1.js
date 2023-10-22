
//Function expression to fetch and display user data

const displayUserData = async () => {

    try {

        //fetch user data
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        //Extract JSON data from response
        const data = await response.json();
        console.log(data);

        let html = "";
        data.forEach((item) => {

            //Generate the cards
            html += `
            <div class="col-2">
                <div class="card h-100">
                    <div class="card-body d-flec flex-column">
                    <img src=${item.image} class="img-fluid">
                    <h6 class="card-title"> ${item.title}</h5>
                    
                    <h6 class="card-subtitle mb-2 text-muted"> ${item.price} </h6>

                    <p class="card-text"> ${item.description} </p>
                    </div>
                </div>
            </div> `;
        });

        itemContainer.innerHTML = html;
    }
    catch (error) {

    }
}

displayUserData();

//accessing the product container in html
const itemContainer = document.getElementById("productContainer");