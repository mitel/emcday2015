/**
 * Created by mitel on 01/05/15.
 */

 /*eslint-disable*/

// import React from 'react';
var Path = require('path');

module.exports = [

    {
        method: 'GET',
        path: '/test',
        handler: function (request, reply) {
            var response = reply('Hello EMC Day!');
            console.log("GET request to /test");
            return response;
        }
    },

    {
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: './client',
                index: true,
                listing: false
            }
        }
    },

];
