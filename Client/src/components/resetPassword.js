'use strict'

module.exports.name = '/resetPassword'
module.exports.data = {
    template: function (props) {
        document.title = 'Reseteaza parola';
        window.changeFunc = async function () {
            const oldPass = document.getElementById('oldPass').value;
            const newPass = document.getElementById('newPass').value;
            const answer = await fetch(props.address + '/user/editPassword', {
                method: 'PUT',
                credentials: 'include',
                body: JSON.stringify({
                    "oldPass": oldPass,
                    "newPass": newPass
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

        window.deleteFunc = async function () {
            const oldPass = document.getElementById('oldPass').value;
            const answer = await fetch(props.address + '/user/deleteAccount', {
                method: 'DELETE',
                credentials: 'include',
                body: JSON.stringify({
                    "password": oldPass
                })
            });

            if (answer.ok == true) {
                const x = await answer.json();
                if (x.success) {
                    app.goto('/');
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
            `<div id="resetPassword" class="users">
        <form>
            <input type="password" name="oldPass" id="oldPass" placeholder="Parola veche">
            <input type="password" name="newPass" id="newPass" placeholder="Parola Noua">
            <button type="submit" onclick="event.preventDefault(); window.changeFunc();">Schimbare</button>
        </form>
        <br>
        <button type="submit" onclick="event.preventDefault(); window.deleteFunc();">Stergere Cont</button>
    </div>`;


        return template;
    }
}
