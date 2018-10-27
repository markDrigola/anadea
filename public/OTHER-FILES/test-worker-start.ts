export class TestWorkerStart {
    constructor() {
        // debugger
        // require.ensure([], function (require) {
        //     var myModule = require('./test-service-worker.js');
        //     console.log(myModule);
        //     debugger
        //     if ('serviceWorker' in navigator) {
        //         navigator.serviceWorker.register(myModule).then(function(reg) {
        //             // регистрация сработала
        //             console.log('Registration succeeded. Scope is ' + reg.scope);
        //         }).catch(function(error) {
        //             // регистрация прошла неудачно
        //             console.log('Registration failed with ' + error);
        //         });
        //     }
        // })
        // return import(/* webpackChunkName: "lodash" */ './test-service-worker.js').then(worker => {
        //     console.log(worker);
        // }).catch(error => 'An error occurred while loading the component');
        // var test = require.ensure([], function(require) {
        //     require("./test-service-worker.js");
        //     debugger
        //     var d = require("d");
        // });
        // if ('serviceWorker' in navigator) {
        //     navigator.serviceWorker.register('./test-service-worker.js').then(function(reg) {
        //         // регистрация сработала
        //         console.log('Registration succeeded. Scope is ' + reg.scope);
        //     }).catch(function(error) {
        //         // регистрация прошла неудачно
        //         console.log('Registration failed with ' + error);
        //     });
        // }
    }
}

