'use strict'

module.exports.name = '/register'
module.exports.data = {
    template: function (props) {
        document.title = 'Inregistrare';
        window.registerFunc = async function () {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const fname = document.getElementById('fname').value;
            const lname = document.getElementById('lname').value;
            const answer = await fetch(props.address + '/auth/register', {
                method: 'POST',
                body: JSON.stringify({
                    "email": email,
                    "password": password,
                    "firstName": fname,
                    "lastName": lname
                })
            });

            if (answer.ok == true) {
                const x = await answer.json();
                if (x.registered) {
                    app.goto('/login');
                }
                else {
                    app.showError(JSON.stringify(x));
                }
            }
            else {
                throw 'Connection problem';
            }
        }
        let template =
            `<div id="register" class="users">
        <form>
            <input type="email" name="email" id="email" placeholder="Email">
            <input type="password" name="password" id="password" placeholder="Parola">
            <input type="text" name="fname" id="fname" placeholder="Prenume">
            <input type="text" name="lname" id="lname" placeholder="Nume">
            <button type="submit" onclick="event.preventDefault(); window.registerFunc();">Inregistrare</button>
        </form>
        <br>
        <a href="" onclick="event.preventDefault(); app.goto('/login');">Autentificare</a>
    </div>`;


        return template;
    }
}
