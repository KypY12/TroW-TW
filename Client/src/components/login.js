'use strict'

module.exports.name = '/login'
module.exports.data = {
    template: function (props) {

        window.loginFunc = async function () {
            const email = document.getElementById('email2').value;
            const password = document.getElementById('password2').value;
            const answer = await fetch(props.address + '/auth/login', {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify({
                    "email": email,
                    "password": password
                })
            });

            if (answer.ok == true) {
                const x = await answer.json();
                if (x.login) {
                    window.login = true;
                    app.goto('/');
                }
                else {
                    window.login = false;
                    app.showError(JSON.stringify(x));
                }
            }
            else {
                throw 'Connection problem';
            }

        }

        window.editFunc = async function () {
            const fname = document.getElementById('fname1').value;
            const lname = document.getElementById('lname1').value;
            const answer = await fetch(props.address + '/user/editUserDetails', {
                method: 'PUT',
                credentials: 'include',
                body: JSON.stringify({
                    "firstName": fname,
                    "lastName": lname
                })
            });
            if (answer.ok == true) {
                const x = await answer.json();
                if (x.success) {
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


        window.logoutFunc = function () {
            window.login = false;
            app.goto('/');
        }

        let template = '';
        if (window.login) {
            document.title = 'Editeaza cont';
            template = `<div id="edit" class="users">
            <form>
            <input type="text" name="fname1" id="fname1" placeholder="Prenume">
            <input type="text" name="lname1" id="lname1" placeholder="Nume">
            <button type="submit" onclick="event.preventDefault(); window.editFunc();">Editeaza datele</button>
        </form>
        <br>
        <a href="" onclick="event.preventDefault(); app.goto('/resetPassword');">Reseteaza parola</a>
        <br>
        <a href=""onclick="event.preventDefault(); window.logoutFunc();">Iesire Cont</a>
            
        </div>`;
        }
        else {
            document.title = 'Autentificare';
            template =
                `<div id="login" class="users">
            <form>
            <input type="email" name="email" id="email2" placeholder="Email">
            <input type="password" name="password" id="password2" placeholder="Parola">
            <button type="submit" onclick="event.preventDefault(); window.loginFunc();">Autentificare</button>
        </form>
        <br>
        <a href="" onclick="event.preventDefault(); app.goto('/register');">Inregistrare</a>
        </div>`;
        }

        return template;
    }
}
