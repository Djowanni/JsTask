
function User(name, surname, phoneNumber) {
    this.name = name;
    this.surname = surname;
    this.phoneNumber = phoneNumber;
}

var phoneBook = {
    userList: [],

    addUser: function (user) {
        if (this.userList.length == 0) {this.userList.push(user);}
        else {
            if ( this.userList.every( function (item, i, arr) { return item.phoneNumber !== user.phoneNumber} )) {
                this.userList.push(user);
            }
            else {
                return 0;
            }
        }
    },
    
    findByTel: function (tel) {
        for (var i = 0; i <= this.userList.length; i++) {
            if (this.userList[i].phoneNumber === tel) return this.userList[i];
        }
        return 0;
    },

    updateUserByTel: function (tel, property, value) {
        for (var i = 0; i < this.userList.length; i++) {
            if (this.userList[i].phoneNumber === tel) {
                this.userList[i] [property] = value;
                return 1;
            }
        }
        return 0;
    },

    getUser: function (tel) {
        var tmp = this.findByTel(tel);
        if (tmp) {
            alert(tmp.name + " " + tmp.surname + " " + tmp.phoneNumber);
            return 1;
        }
        else return 0;
    },

    deleteUser: function (tel) {
        for (var i = 0; i < this.userList.length; i++) {
            if (this.userList[i].phoneNumber === tel) {
                this.userList.splice(i,1);
                return 1;
            }
        }
        return 0;
    }

}

}


