'use strict'


module.exports.name = ['/', '/routes'];
module.exports.data = {
    data: {},
    getData: async function (props) {

        const answer = await fetch(props.address + "/routes" + props.search, {
            method: 'GET',
        });
        if (answer.ok == true) {
            let serverResp = await answer.json();

            this.data.routeCost = serverResp[0][0];
            this.data.route = serverResp[0].splice(1);
        }
        else {
            throw 'Connection problem';
        }

    },
    template: async function (props) {
        document.title = 'Planificare traseu';

        let template = "";

        if (props.search) {
            await this.getData(props);
            let time = window.convertHours(this.data.routeCost);

            template =
                `
        <div id="routesIdPrimal">
        <div class="map">
        <h2>Harta traseului - Durata : ${time}</h2>
        <div id="mapid"></div></div>


        </div>
            `;

            let latlngs = [];
            

            this.data.route.forEach(station => {
                latlngs.push([station.lat, station.lon]);
            });

            window.latlngs = latlngs;

        }
        else {
            template =
                `
            <div id="routesId">
                <h1> Planificăți o rută </h1>
                <p> În meniul "Planificare Traseu" adăugați stații suplimentare dacă doriți un traseu 
                    personalizat sau introduceți direct stația origine și stația destinație. Selectați anul 
                    și apoi apasați "Obține traseu".</p>
            </div>
            `;
        }



        return template;
    }
}
