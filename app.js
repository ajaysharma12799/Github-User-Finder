// INSTANTIATE ALL CLASSES
const github = new GITHUB();
const ui = new UI(); 

// GETTING ALL VARIABLE
const searchInput = document.querySelector(".search-box");

// ADDING EVENT LISTNER
searchInput.addEventListener("keyup", (e) => {
    let userName = e.target.value; // FETCHING INPUTBOX VALUE
    if(userName !== "") { // CHECKING EMPTY CONDITION
        // FIND USER AFTER HITTING THE GITHUB API
        github.getUser(userName)
        .then( (data) => {
            if(data.profile.message === 'Not Found') {
                // SHOW ALERT
                ui.showAlert("USER NOT FOUND", "alert alert-danger");
            }
            else {
                // SHOW PROFILE
                ui.showProfile(data.profile);
            }
        } );
    }
    else {
        // CLEAR UI
        ui.clearProfileSpace();
    }
} );