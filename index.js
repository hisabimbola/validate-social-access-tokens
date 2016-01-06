'use strict';

var request = require('request');
var Promise = require('promise');

module.exports = function (token, provider) {
	var promise = new Promise(function (resolve, reject) {
		if (!token || !provider) {
			throw new Error('Token and provider must be present');
		}
		if (provider === 'google') {
			request.get('https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=' + token, function (error, response) {
				var result = JSON.parse(response.body);
				if (!error && response.statusCode === 200) {
					if (result.error) {
						reject(result);
					} else {
						resolve(result);
					}
				} else if (!error && response.statusCode !== 200) {
					reject(result);
				} else {
					reject(error);
				}
			});
		} else if (provider === 'facebook') {
			request.get('https://graph.facebook.com/me?access_token=' + token, function (error, response) {
				var result = JSON.parse(response.body);
				if (!error && response.statusCode === 200) {
					if (result.error) {
						reject(result);
					} else {
						resolve(result);
					}
				} else if (!error && response.statusCode !== 200) {
					reject(result);
				} else {
					reject(error);
				}
			});
		} else {
			reject('Provider not valid or supported yet.');
		}
	});
	return promise;
};
