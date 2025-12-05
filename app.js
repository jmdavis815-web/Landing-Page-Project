let url = "https://zmxykpzkidhegngzbcmr.supabase.co/rest/v1/leads";
let apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpteHlrcHpraWRoZWduZ3piY21yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ4NzkxOTksImV4cCI6MjA4MDQ1NTE5OX0.FRrzrLc0dqqDJR_e712OXYfTYNYW3v9WXH6T2FtGDn0";

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
