'use strict'

module.exports.name = '/about';
module.exports.data = {
    data: {

    },
    template: async function (props) {
        document.title = 'Despre';

        let template = "";

        template += `<div id="aboutPage">`;
        template += `
            <h1> TroW (Train Routes on Web) </h1>
                    `;    
        template += `
            <p> 
                TroW reprezintă o aplicație cu scop informativ ce vă ajută 
                sa aflați informații precum cea mai scurtă rută (din punctul de vedere al duratei călătoriei),
                plecări/sosiri dintr-o anumită gară sau rutele parcurse de un anumit tren, pentru operatorul
                de transport feroviar CFR Călători în perioada 2013-2019.
                Aplicația se remarcă prin accesul rapid la funcționalități și mai ales prin ușurința de
                utilizare a acestora, în mare măsură, datorită simplității elementelor din interfață.
                TroW oferă de asemenea și un REST API ce oferă aceleași informații ca și aplicația propriu-zisă,
                a cărei documentații o puteți accesa la adresa <a href="" onclick=" event.preventDefault(); app.goto('/apidoc');">aceasta</a>.             
            </p>
            <p>
                TroW este un proiect realizat de către studenții Chipăruș Alexandru-Denis și Cîrstean Vlad-Bogdan din gurpa A4.
            </p>
                    `;      
        template += `</div>`;
        return template;
    }
}
