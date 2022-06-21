console.log("WELCOME TO THE ADDRESS BOOK SYSTEM PROGRRAM");

//UC 1
class AddressBookData
{
    _firstName;
    _lastName;
    _address;
    _city;
    _state;
    _zip;
    _phoneNumber;
    _email;
    
    constructor(...param)
    {
        this._firstName = param[0];
        this._lastName = param[1];
        this._address = param[2];
        this._city = param[3];
        this._state = param[4];
        this._zip = param[5];
        this._phoneNumber = param[6];
        this._email = param[7];
    }
    get()
    {
        return this.fName
    }
    set _firstName(_firstName)
    {
        this.Fname = _firstName;
    }

    toString() 
    {
        return " First Name " + this._firstName + ", last name " + this._lastName + ", address " + this._address +
        ", city " + this._city + ", state " + this._state + ", zip code " + this._zip + ", phone Number " + this._phoneNumber + ", Email " + this._email; 

    }
}

let info = new AddressBookData("Praful", "Rakhade", "Nagpur", "Nagpur", "Maharashtra", 441106, 7038008002, 'prafulrakhade02@gamil.com');
console.log(info.toString());
// const prompt = require("prompt-sync")();
// var Fname = prompt("enter First name");
// console.log("your name is : "+Fname);