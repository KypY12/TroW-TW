'use strict'

module.exports.name = '/apidoc';
module.exports.data = {
    data: {

    },
    template: async function (props) {
        document.title = 'Documentație API';

        let template = "";

        template += `<div id="apiDocPage">`;
        template += `<div id="containerApiDoc">
                <h1> TroW API </h1>
        `;
        template += `<p> TroW API oferă următoarele facilități (pentru perioada 2013-2019):
                        <ul> 
                            <li>Ruta cea mai scrută între două stații</li>    
                            <li>Toate trenurile care pleaca din stația "X"</li>    
                            <li>Toate trenurile care ajung în stația "X"</li>    
                            <li>Ruta detaliată a trenului "X"</li> 
                        </ul> 
                    </p>`;
        template += `
            <h2 > Ruta cea mai scrută între două stații </h2>
            <h3> /route?year={AN}&locations={STATIE}&... </h3>
            <p> Exemplu:  /routes?year=2018&locations=Suceava&locations=Săcueni Roman Hm.<p>
            <p> Întoarce un array ce are ca prim element costul timp (exprimat în secunde) al
            transportului și mai conține și obiecte de forma: </p>
            <code>
                {<br />
                  &nbsp;&nbsp;"stationName": "Suceava",<br />
                  &nbsp;&nbsp;"stationCode": "51607",<br />
                  &nbsp;&nbsp;"lat": "47.5327387",<br />
                  &nbsp;&nbsp;"lon": "25.8173527992344",<br />
                  &nbsp;&nbsp;"nextInfo": {<br />
                  &nbsp;&nbsp;  &nbsp;&nbsp;"CodStatieDestinatie": "51554",<br />
                  &nbsp;&nbsp;  &nbsp;&nbsp;"DenumireStatieDestinatie": "Văratec",<br />
                  &nbsp;&nbsp;  &nbsp;&nbsp;"NumarTren": "1752",<br />
                  &nbsp;&nbsp;  &nbsp;&nbsp;"OperatorTren": "6100826",<br />
                  &nbsp;&nbsp;  &nbsp;&nbsp;"OraPlecare": "31920",<br />
                  &nbsp;&nbsp;  &nbsp;&nbsp;"OraSosire": "32280",<br />
                  &nbsp;&nbsp;  &nbsp;&nbsp;"StationareSecunde": "180",<br />
                  &nbsp;&nbsp;  &nbsp;&nbsp;"Viteza": "120"<br />
                  &nbsp;&nbsp;}<br />
                }
            </code>
             <ul>
                <li><strong>"stationName"</strong> = numele stației curente</li>
                <li><strong>"stationCode"</strong> = codul acestei stații </li>
                <li><strong>"lat"</strong> = latitudine</li>
                <li><strong>"lon"</strong> = longitudine</li>
                <li><strong>"nextInfo"</strong> = obiect ce conține date despre următoarea stație din ruta cerută la request (aceste date sunt asemănătoare cu cele prezentate la celelalte funcționalități ale API-ului)</li>
            </ul>

            <p> Ultimul obiect al array-ului întors de API are nextInfo = null (deoarece este ultima stație din traseu).</p>
            `;


        template += `
            <h2> Toate trenurile care pleaca din stația "X" </h2>
            <h3> /leave?year={AN}&location={STATIE} </h3>
            <p> Exemplu:  /leave?year=2015&location=Suceava<p>
            <p> Întoarce un obiect de forma: </p>
            <code>
                { <br />
                  &nbsp;&nbsp;"leaves": [...], <br />
                  &nbsp;&nbsp;"location": "Suceava", <br />
                }
            </code> <br \>
            <p> Array-ul "leaves" are elemente de forma următoare: </p>
            <code>
                {<br />
                  &nbsp;&nbsp;"CodStatieDestinatie": "51554",<br />
                  &nbsp;&nbsp;"DenumireStatieDestinatie": "Văratec",<br />
                  &nbsp;&nbsp;"NumarTren": "5506",<br />
                  &nbsp;&nbsp;"OperatorTren": "6100826",<br />
                  &nbsp;&nbsp;"OraPlecare": "75720",<br />
                  &nbsp;&nbsp;"OraSosire": "76140",<br />
                  &nbsp;&nbsp;"StationareSecunde": "120",<br />
                  &nbsp;&nbsp;"Viteza": "100"<br />
                }
            </code>
            <ul>
                <li><strong>"DenumireStatieDestinatie"</strong> = stația în care va ajunge trenul </li>
                <li><strong>"CodStatieDestinatie"</strong> = codul acestei stații </li>
                <li><strong>"NumarTren"</strong> = numărul de identificare al trenului care ajunge în stația respectivă </li>
                <li><strong>"OperatorTren"</strong> = codul operatorului de tren (în cazul aplicației TroW doar CFR Călători, însă aceasta poate fi extinsă în viitor) </li>
                <li><strong>"OraPlecare"</strong> = ora la care plecară trenul din stația {STATIE} dată la request, exprimată în secunde (de exemplu : ora 1:00 am = 3600) </li>
                <li><strong>"OraSosire"</strong> = ora la care ajunge trenul în stația "DenumireStatieDestinatie", exprimată în secunde (de exemplu : ora 12:00 pm = 3600*12 = 43200) </li>
                <li><strong>"StationareSecunde"</strong> = timpul de staționare al trenului înainte de plecare din stația {STATIE} dată la request, exprimat în secunde </li>
                <li><strong>"Viteza"</strong> =  viteza cu care se deplasează trenul între cele două stații menționate anterior</li>
            </ul>
                    `;
        template += `
            <h2> Toate trenurile care ajung în stația "X" </h2>
            <h3> /arrives?year={AN}&location={STATIE} </h3>
            <p> Exemplu:  /arrives?year=2017&location=Ecaterina%20Teodoroiu<p>
            <p> Întoarce un array de array-uri ce conțin (fiecare) informații 
                despre trenurile care pleacă din la aceeași gară și se îndreaptă
                direct spre statia <em>{STATIE}</em> dată în request.
                Un astfel de array are elemente de forma următoare: </p>
                <code> 
                { <br />
                  &nbsp;&nbsp;"StatiePlecare": "Târgu Jiu", <br />
                  &nbsp;&nbsp;"CodStatiePlecare": "23428", <br />
                  &nbsp;&nbsp;"NumarTren": "2085", <br />
                  &nbsp;&nbsp;"OperatorTren": "6100826", <br />
                  &nbsp;&nbsp;"OraPlecare": "62100", <br />
                  &nbsp;&nbsp;"OraSosire": "62520", <br />
                  &nbsp;&nbsp;"StationareSecunde": "120", <br />
                  &nbsp;&nbsp;"Viteza": "80" <br />
                }
                </code>
            <ul>
                <li><strong>"StatiePlecare"</strong> = stația din care pleacă trenul </li>
                <li><strong>"CodStatiePlecare"</strong> = codul acestei stații </li>
                <li><strong>"NumarTren"</strong> = numărul de identificare al trenului care pleacă din stația respectivă </li>
                <li><strong>"OperatorTren"</strong> = codul operatorului de tren (în cazul aplicației TroW doar CFR Călători, însă aceasta poate fi extinsă în viitor) </li>
                <li><strong>"OraPlecare"</strong> = ora la care plecară trenul din stația "StatiePlecare", exprimată în secunde (de exemplu : ora 1:00 am = 3600) </li>
                <li><strong>"OraSosire"</strong> = ora la care ajunge trenul în stația {STATIE} dată la request, exprimată în secunde (de exemplu : ora 12:00 pm = 3600*12 = 43200) </li>
                <li><strong>"StationareSecunde"</strong> = timpul de staționare al trenului înainte de plecare din stația "StatiePlecare", exprimat în secunde </li>
                <li><strong>"Viteza"</strong> =  viteza cu care se deplasează trenul între cele două stații menționate anterior</li>
            </ul>
                    `;
        template += `
            <h2> Ruta detaliată a trenului "X" </h2>
            <h3> /details?year={AN}&id={NUMAR_TREN} </h3>
            <p> Exemplu:  /details?year=2019&id=1751<p>
            <p> Întoarce un array cu elemente de forma: </p>

            <code>
            {<br />
              &nbsp;&nbsp;"DenumireStatieOrigine": "Mărăşeşti",<br />
              &nbsp;&nbsp;"CodStatieOrigine": "50691"<br />
              &nbsp;&nbsp;"DenumireStatieDestinatie": "Pădureni Putna Hm.",<br />
              &nbsp;&nbsp;"CodStatieDestinatie": "50732",<br />
              &nbsp;&nbsp;"NumarTren": "1751",<br />
              &nbsp;&nbsp;"OperatorTren": "6100826",<br />
              &nbsp;&nbsp;"OraPlecare": "51900",<br />
              &nbsp;&nbsp;"OraSosire": "52320",<br />
              &nbsp;&nbsp;"StationareSecunde": "60",<br />
              &nbsp;&nbsp;"Viteza": "80",<br />
            }
            </code>
            <ul>
                <li><strong>"DenumireStatieOrigine"</strong> = stația din care pleacă trenul dat la request </li>
                <li><strong>"CodStatieOrigine"</strong> = codul acestei stații</li>
                <li><strong>"DenumireStatieDestinatie"</strong> = stația în ajunge trenul dat la request</li>
                <li><strong>"CodStatieDestinatie"</strong> = codul acestei stații</li>
                <li><strong>"NumarTren"</strong> =  același cu codul trenului dat la request </li>
                <li><strong>"OperatorTren"</strong> =  codul operatorului de tren (în cazul aplicației TroW doar CFR Călători, însă aceasta poate fi extinsă în viitor)</li>
                <li><strong>"OraPlecare"</strong> =  ora de plecare din stația origine</li>
                <li><strong>"OraSosire"</strong> = ora la care ajunge trenul în stația destinație </li>
                <li><strong>"StationareSecunde"</strong> =  timpul de staționare al trenului înainte de plecare din stația origine, exprimat în secunde </li>
                <li><strong>"Viteza"</strong> = viteza cu care se deplasează trenul</li>
                
            </ul>

                    `;
        template += `
            <h2> Autentificare </h2>
            <h3> POST: /auth/login </h3>
            <p> Body: { email:examplu@.ro, password:12345678 }<p>
            <p> Întoarce un JSON de forma: { login: true|false } </p>

                    `;

        template += `
            <h2> Inregistrare </h2>
            <h3> POST: /auth/register </h3>
            <p> Body: { email:examplu@.ro, password:12345678, fisrtName: f, lastName: l}<p>
            <p> Întoarce un JSON de forma: { registered: true|false } </p>

                    `;

        template += `
            <h2> Sunt autentificat </h2>
            <h3> GET: /auth/isLogedIn </h3>
            <p> Întoarce un JSON de forma: { login: true|false } </p>

                    `;

        template += `
            <h2> Editare profil </h2>
            <h3> PUT: /user/editUserDetails </h3>
            <p> Body: { firstName: f, lastName: l }<p>
            <p> Întoarce un JSON de forma: { success: true|false } </p>

                    `;

        template += `
            <h2> Editare parola </h2>
            <h3> PUT: /user/editUserDetails </h3>
            <p> Body: { oldPass: f, newPass: l }<p>
            <p> Întoarce un JSON de forma: { success: true|false } </p>

                    `;

        template += `
            <h2> Stergere profil </h2>
            <h3> DELETE: /user/editUserDetails </h3>
            <p> Body: { password: f }<p>
            <p> Întoarce un JSON de forma: { success: true|false } </p>

                    `;
        template += `</div></div>`;
        return template;
    }
}
