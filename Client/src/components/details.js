'use strict'

module.exports.name = '/details';
module.exports.data = {
    data: {

    },
    getData: async function (props) {
        const answer = await fetch(props.address + "/details" + props.search, {
            method: 'GET',
        });
        if (answer.ok == true) {
            let serverResp = await answer.json();
            this.data.trainInfo = serverResp;

        }
        else {
            throw 'Connection problem';
        }
    },
    template: async function (props) {
        document.title = 'Detalii Tren';


        let template = "";
        if (props.search) {
            await this.getData(props);

            template = `<div> <h1> Detalii tren  </h1> </div>`;
            template = `<div class="details  js-edit">`;
            template += `
            <div class="row row-header">
            <span>De la</span>
            <span>Plecare</span>
            <span>La</span>
            <span>Sosire</span>
            </div> 
            `;


            this.data.trainInfo.sort(function (a, b) {
                return parseInt(a.OraPlecare, 10) - parseInt(b.OraPlecare, 10);
            });

            this.data.trainInfo.forEach(info => {
                template += `
                <div class="row">
                <span>${info.DenumireStatieOrigine}</span>
                <span>${window.convertHours(info.OraPlecare)}</span>
                <span>${info.DenumireStatieDestinatie}</span>
                <span>${window.convertHours(info.OraSosire)}</span>
                </div>
                `;
            });

            template += `
            </div></div>
            `;

        } else {
            template += `
                <div id="trainsId">
                    <h1> Afisați informații despre un tren </h1>
                    <p> Alegeți numărul trenului iar apoi anul și apăsați butonul "Vezi rute tren". </p>
                </div>
            `;
        }

        return template;
    }
}
