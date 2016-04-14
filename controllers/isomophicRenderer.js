'use strict';


class IsomophicRenderer {

    constructor ( config ) {
        this.config = config;
    }

    get render () {
        this.renderer();
    }

    renderer () {

        var _self = this;

        var renderOpts = {
            runtimeOptions: {
                renderMethod: 'renderToString'
            }
        };

        this.config.server.render('Layout', _self.config.state, renderOpts, (err, appOutput) => {

            if (err) {
                return _self.config.response(err);
            }


            var htmlContext = {
                remount: appOutput,
                state: 'window.state = ' + JSON.stringify(_self.config.state) + ';',
                page: _self.config.state
            };

            _self.config.server.render('App', htmlContext, (err, htmlOutput) => {

                if (err) {
                    return _self.config.response(err);
                }

                _self.config.response(htmlOutput);
            });
        });
    }

}

module.exports = IsomophicRenderer;