/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_engine__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _components_error__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_error__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _components_login__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_login__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _components_register__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_register__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_leave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _components_leave__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_leave__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_arrives__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _components_arrives__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_arrives__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_details__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var _components_details__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_details__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);
/* harmony import */ var _components_routes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_routes__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_resetPassword__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9);
/* harmony import */ var _components_resetPassword__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_resetPassword__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_about__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10);
/* harmony import */ var _components_about__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_about__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_apidoc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11);
/* harmony import */ var _components_apidoc__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_apidoc__WEBPACK_IMPORTED_MODULE_10__);


const address = 'http://127.0.0.1:3000'; //API ENTRYPOINT

// IMPORT HERE ALL COMPONENTS, ALSO IN CONSTRUCTOR











/**
 * The main app used to instantiate the SPA
 */
class App {
    /**
     * 
     * @param {String} injectionPoint - the Html div where the app will inject pages
     */
    constructor(injectionPoint) {
        this.engine = new _engine__WEBPACK_IMPORTED_MODULE_0___default.a(injectionPoint, address);

        //ALSO ADD ELEMENT HERE
        this.engine.Component(_components_error__WEBPACK_IMPORTED_MODULE_1___default.a);
        this.engine.Component(_components_login__WEBPACK_IMPORTED_MODULE_2___default.a);
        this.engine.Component(_components_register__WEBPACK_IMPORTED_MODULE_3___default.a);
        this.engine.Component(_components_leave__WEBPACK_IMPORTED_MODULE_4___default.a);
        this.engine.Component(_components_arrives__WEBPACK_IMPORTED_MODULE_5___default.a);
        this.engine.Component(_components_details__WEBPACK_IMPORTED_MODULE_6___default.a);
        this.engine.Component(_components_routes__WEBPACK_IMPORTED_MODULE_7___default.a);
        this.engine.Component(_components_resetPassword__WEBPACK_IMPORTED_MODULE_8___default.a);
        this.engine.Component(_components_about__WEBPACK_IMPORTED_MODULE_9___default.a);
        this.engine.Component(_components_apidoc__WEBPACK_IMPORTED_MODULE_10___default.a);



        this.elements = this.engine.getPaths();
        this.goto(window.location.href, true);

    }
    /**
     * Routing method
     * @param {String} url 
     */
    goto(url, isFirst) {
        try {
            const parsedUrl = new URL(url, window.location.href);
            const pathname = parsedUrl.pathname;
            const search = parsedUrl.search;
            if (this.elements.includes(pathname)) {
                if (isFirst) {
                    history.replaceState({}, '', search ? pathname + search : pathname);
                }
                else {
                    history.pushState({}, '', search ? pathname + search : pathname);
                }
                this.engine.render(pathname, search);
            }
            else {
                this.engine.render('/error', search);
            }

        } catch (error) {
            this.engine.render('/error', '');
        }
    }

    showError(error) {
        history.pushState({}, '', '/error');
        this.engine.render('/error', error);
    }

}
/**
 * Function for scroll to top button
 */
function scrollTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}
// @ts-ignore
window.App = App;
// @ts-ignore
window.scrollTop = scrollTop;

window.addEventListener('popstate', function (event) {
    // @ts-ignore
    app.goto(location.href, true)
});


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = class Engine {
    constructor(injection, address) {
        this.inject = injection;
        this.address = address;
        this.store = store;
        this.elements = [];
        this.paths = [];
    }
    /**
     * Register components into the engine
     * @param {Object} cmp 
     */
    Component(cmp) {
        if (!cmp.name) throw 'You did not provide a name.';
        this.name = cmp.name;
        this.data = cmp ? cmp.data : null;
        this.template = cmp ? cmp.template : null;
        if (typeof this.name === 'string') {
            this.elements.push({ 'name': this.name, 'data': this.data });
            this.paths.push(this.name);
        }
        else if (Array.isArray(this.name)) {
            for (const i of this.name) {
                this.elements.push({ 'name': i, 'data': this.data });
                this.paths.push(i);
            }
        }
        else throw 'Wrong component name'
        return this.name;
    }
    /**
     * Get the paths defined by components
     */
    getPaths() {
        return this.paths;
    }
    /**
     * Render the component
     * @param {String} name 
     * @param {String} search 
     */
    render(name, search) {
        if (!name) throw 'You did not provide a name.';
        for (const i of this.elements) {
            if (i.name === name) {
                const props = { 'search': search, 'address': this.address };
                if (!i.data.template) throw 'No template was provided.';
                return this._internalRender(i, props);
            }
        }
        // @ts-ignore
        app.goto('/error');
    }
    /**
     * @private
     * Renders the component and injects the code into the Html page
     * @param {Object} data 
     * @param {Object} props 
     */
    async _internalRender(data, props) {
        try {
            const elem = document.getElementById(this.inject);
            elem.innerHTML = '<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>';
            //here starts the async chain
            const content = await Promise.race([data.data.template(props), this._timeout()]);
            if (content === 'ittooktoolong') {
                // @ts-ignore
                app.goto('/error', true);
            }
            else {
                elem.innerHTML = content;
            }
        } catch (err) {
            console.log(err);
            // @ts-ignore
            app.goto('/error');
        }
        finally {
            this._emitChange('any');
        }


    }

    /**
     * Configure the timeout for requests that take too long
     */
    _timeout() {
        return new Promise(function (resolve, reject) {
            setTimeout(resolve, 1000000, 'ittooktoolong');
        });
    }

    _emitChange(type) {
        const event = new CustomEvent(type);
        window.dispatchEvent(event);
    }
}


const store = {};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports.name = '/error'
module.exports.data = {
    template: function (props) {
        document.title = 'Eroare';
        let text = '404 Page not Found';
        if (props.search) text = props.search;
        let template =
            `<div id='error'>
            <h1>${text}</h1>
            </div>`;
        return template;
    }
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



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


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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


/***/ })
/******/ ]);