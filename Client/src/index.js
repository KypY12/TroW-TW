'use strict'
import Engine from './engine';
const address = 'http://127.0.0.1:3000'; //API ENTRYPOINT

// IMPORT HERE ALL COMPONENTS, ALSO IN CONSTRUCTOR
import error from './components/error';
import login from './components/login';
import register from './components/register';
import leave from './components/leave';
import arrives from './components/arrives';
import details from './components/details';
import routes from './components/routes';
import resetPassword from './components/resetPassword';
import about from './components/about';
import apidoc from './components/apidoc';

/**
 * The main app used to instantiate the SPA
 */
class App {
    /**
     * 
     * @param {String} injectionPoint - the Html div where the app will inject pages
     */
    constructor(injectionPoint) {
        this.engine = new Engine(injectionPoint, address);

        //ALSO ADD ELEMENT HERE
        this.engine.Component(error);
        this.engine.Component(login);
        this.engine.Component(register);
        this.engine.Component(leave);
        this.engine.Component(arrives);
        this.engine.Component(details);
        this.engine.Component(routes);
        this.engine.Component(resetPassword);
        this.engine.Component(about);
        this.engine.Component(apidoc);



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
