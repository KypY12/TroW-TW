'use strict'

module.exports.name = '/arrives';
module.exports.data = {
    data: {
    },
    getData: async function (props) {
        console.log(props.address + "/arrives" + props.search);

        const answer = await fetch(props.address + "/arrives" + props.search, {
            method: 'GET',
        });
        if (answer.ok == true) {
            let serverResp = await answer.json();

            this.data.arrivesInfo = serverResp.arrives;
            this.data.currentLocation = serverResp.location;
        }
        else {
            throw 'Connection problem';
        }

    },
    template: async function (props) {
        document.title = 'Sosiri';

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

            this.data.arrivesInfo.forEach(element => {
                element.sort(function (a, b) {
                    return parseInt(a.OraPlecare, 10) - parseInt(b.OraPlecare, 10);
                });
            });

            this.data.arrivesInfo.forEach(element => {
                element.forEach(info => {
                    template += `
                    <div class="row">
                    <span>${info.NumarTren}</span>
                   <span>${info.StatiePlecare}</span>
                    <span>${window.convertHours(info.OraPlecare)}</span>
                    <span>${this.data.currentLocation}</span>
                    <span>${window.convertHours(info.OraSosire)}</span>
                    </div>
                    `;
                });

            });

            template += `</div>`;
        } else {
            template += `
                <div id="leaveId">
                    <h1> Afișați informații despre plecări dintr-o gară </h1>
                    
                </div>
            `;

        }



        return template;
    }
}
