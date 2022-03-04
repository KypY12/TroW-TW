'use strict'

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
