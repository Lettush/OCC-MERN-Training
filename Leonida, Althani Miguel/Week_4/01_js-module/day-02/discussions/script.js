//Function expression to fetch and display user data
const displayUserData = async () => {


try {
    //fetch user data from JSONPlaceholder API
    const response = await fetch ("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
        throw new Error ("Failed to fetch data");
    }

    //Extract JSON data from the response
    const data = await response.json();
    console.log(data);

    let html = "";
    data.forEach((user) => {
        //Generate the Markup for the HTML
        html += `
        <div class="col">
            <div class="card">
                <div class="card-body">
                <h5 class="card-title">
                    ${user.name}                
                </h5>
                <h6 class="card-subtitle mb-2 text-muted">${user.email}</h6>

                <p class="card-text">Username: ${user.username}</p>
                <p class="card-text">Phone: ${user.phone}</p>
                <a href="${user.website}" class="card-link">Website</a>
                </div>
            </div>
        </div> `;
    })
    
    // Insert the generated HTML markup into the user container
    userContainer.innerHTML = html;
}
catch (error) {

}
}

//Button click event listener to call the displayUserData function

const fetchButton = document.getElementById("fetchButton");
fetchButton.addEventListener("click", displayUserData);


// Select the userContainer element
const userContainer = document.getElementById("userContainer");