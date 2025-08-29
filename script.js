const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const noteInput = document.getElementById("note");

const submit = document.getElementById("submit")


submit.addEventListener("click", (event) => {
    event.preventDefault()
    const name = nameInput.value
    const phone = phoneInput.value
    const note = noteInput.value    

    
    if( name === "" || phone == "" || note === ""){
        alert("provide necessary information");
        return;
    }
    
    if(phone === ""){
        alert("provide phone number ");
        return;
    }
    if(note === ""){
        alert("provide necessary information");
        return;
    }
     
    // Store the data 

    const h1 = document.createElement("h1")
    h1.textContent = `Thanks for registering ${name}!`

    const answer = document.getElementById("answer")

    answer.append(h1)
    


    nameInput.value = ""

})