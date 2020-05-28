// explain the result

function makeUser() {
    return {
        name: "John",
        ref: this,
    };
}
let user = makeUser();
alert(user.ref.name);

//result =   makeUser()
//          { name: "John", ref: Window }
// because this will directly take a default window.
