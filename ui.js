class UI {
    constructor() {
        this.profile = document.querySelector(".profile-info");
    }
    showProfile(user) {
        this.profile.innerHTML = `
        <div class="card card-body">
            <div class="row">
                <div class="col-md-4">
                    <img class="img-fluid mb-3" src="${user.avatar_url}">
                    <a class="btn btn-primary btn-block" target="_blank" href="${user.html_url}"> VISIT PROFILE </a>
                </div>
                <div class="col-md-8">
                    <span class="badge badge-primary"> PUBLIC REPO : ${user.public_repos}</span>
                    <span class="badge badge-secondary"> PUBLIC GISTS : ${user.public_gists}</span>
                    <span class="badge badge-warning"> FOLLOWERS : ${user.followers}</span>
                    <br>    <br>
                    <ul class="list-group">
                        <li class="list-group-item"> COMPANY : ${user.company} </li>
                        <li class="list-group-item"> BLOG : ${user.blog} </li>
                        <li class="list-group-item"> LOCATION : ${user.location} </li>
                        <li class="list-group-item"> MEMBER SINCE : ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>`;
    }

    showAlert(message, class_Name) {
        // CLEAR ANY REMAINING ALERT
        this.clearAlert();

        const div = document.createElement("div"); // CREATING MAIN ELEMENT
        div.className = class_Name; // ADDING CLASS
        div.appendChild(document.createTextNode(message)); // CREATING TEXT NODE FOR SHOWING MESSAGE
        const parent = document.querySelector(".searchContainer");
        const child = document.querySelector(".search");
        parent.insertBefore(div, child);

        // TIMEOUT AFTER 3 SECOND
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    clearAlert() {
        const currentAlert = document.querySelector(".alert");
        if(currentAlert) {
            currentAlert.remove();
        }
    }

    clearProfileSpace() {
        this.profile.innerHTML = "";
    }
}