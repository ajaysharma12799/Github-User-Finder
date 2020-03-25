/* 
    CLASS FOR GITHUB HERE CLIENT-ID & SECRET-ID WILL BE STORED
*/
class GITHUB {
    constructor() {
        this.clientID = "PLEASE ENTER CILENT ID";
        this.secretID = "PLEASE ENTER CLIENT SECRET ID";
    }
    // GET-PROFILE FUNCTION
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientID}&client_secret=${this.secretID}`);
        const profile = await profileResponse.json(); // CONVERTING RESPONSE INTO JSON
        return { // RETURNING OBJECT
            profile
        }
    }
}