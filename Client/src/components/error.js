'use strict'

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
