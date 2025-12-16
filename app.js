let url = "https://zmxykpzkidhegngzbcmr.supabase.co/rest/v1/leads";
let apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpteHlrcHpraWRoZWduZ3piY21yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ4NzkxOTksImV4cCI6MjA4MDQ1NTE5OX0.FRrzrLc0dqqDJR_e712OXYfTYNYW3v9WXH6T2FtGDn0";
let urlProducts = "https://zmxykpzkidhegngzbcmr.supabase.co/rest/v1/products";

function showToastSuccess() {
    const toastEl = document.getElementById("toastSuccess");
    const toast = new bootstrap.Toast(toastEl);
    toast.show();
}

function showToastError() {
    const toastEl = document.getElementById("toastError");
    const toast = new bootstrap.Toast(toastEl);
    toast.show();
}

async function createLead(){

    event.preventDefault();

    let name = document.getElementById("contactName").value;
    let email = document.getElementById("contactEmail").value;
    let message = document.getElementById("contactMessage").value;

    if(name === "" || email === "" || message === ""){ 
        showToastError()

    } else {

    let lead = {
        "name" : name , 
        "email" : email,
        "message" : message
    }

    let response = await fetch(url , {
        method: "POST",
        headers: {
            "apikey" : apikey,
            "Content-Type" : "application/json"
        }, 
        body : JSON.stringify(lead)
    })

    console.log("Lead Created")
    showToastSuccess()
    
    }
}

async function getProducts(){
    let response = await fetch(urlProducts , {
        method: "GET",
        headers: {
            "apikey" : apikey,
            "Content-Type" : "application/json"
        }
    })

let data = await response.json();

let serviceContainer = document.getElementById("service");

for(let i = 0 ; i < data.length ; i++){

    serviceContainer.innerHTML += `
            
            <div class="col-lg-4 col-md-6 p-4">
                <div class="card" style="width: 18rem;">
                    <img src="${data[i].image_url}" class="card-img-top" alt="${data[i].name}">
                    <div class="card-body">
                        <h5 class="card-title">${data[i].name}</h5>
                        <p class="card-text">${data[i].description}</p>
                        <a href="#" class="btn btn-primary">${data[i].price}</a>
                    </div>
                </div>
            </div>
    
            `
    
}
}