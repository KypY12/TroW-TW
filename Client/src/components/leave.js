'use strict'

module.exports.name = '/leave';
module.exports.data = {
    data: {
    },
    getData: async function (props) {
        const answer = await fetch(props.address + "/leave" + props.search, {
            method: 'GET',
        });
        if (answer.ok == true) {
            let serverResp = await answer.json();

            this.data.leaveInfo = serverResp.leaves;
            this.data.currentLocation = serverResp.location;
        }
        else {
            throw 'Connection problem';
        }

    },
    template: async function (props) {
        document.title = 'Plecari';

        let template = "";
        if (props.search) {

            await this.getData(props);
            template += `<div class="details">`;
            template += `
                        <div class="row row-header">
                        <span>Tren</span>
                        <span>De la</span>
                        <span>Plecare</span>
                        <span>La</span>
                        <span>Sosire</span>
                        </div>
                        `;

            this.data.leaveInfo.sort(function (a, b) {
                return parseInt(a.OraPlecare, 10) - parseInt(b.OraPlecare, 10);
            });

            this.data.leaveInfo.forEach(info => {
                template += `
                    <div class="row">
                    <span>${info.NumarTren}</span>
                    <span>${this.data.currentLocation}</span>
                    <span>${window.convertHours(info.OraPlecare)}</span>
                    <span>${info.DenumireStatieDestinatie}</span>
                    <span>${window.convertHours(info.OraSosire)}</span>
                    </div>
                    `;
            });

            template += `</div>`;
        } else {
            template += `
                <div id="leaveId">
                    <h1> Afișați informații despre plecări/sosiri specifice unei stații </h1>
                    <p> În meniul "Sosiri/Plecări" alegeți o stație, 
                     bifați "Plecări" sau "Sosiri" apoi alegeți anul și apăsați "Obține informații".</p>
                </div>
            `;

        }



        return template;
    }
}
