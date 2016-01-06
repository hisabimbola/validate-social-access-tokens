'use strict';

import test from 'ava';
import fn from './';

// will update test later
test('title', t => {
	t.is('test', 'test');
});

test('throw error if provider is not present', t => {
	t.plan(1);

	return fn('123456765432').then(response => {
		t.notOk(response, null);
	}).catch(error => {
		t.is(error.message, 'Token and provider must be present');
	});
});

test('throw error if no parameter is passed', t => {
	t.plan(1);

	return fn().then(response => {
		t.notOk(response, null);
	}).catch(error => {
		t.is(error.message, 'Token and provider must be present');
	});
});

test('throw error if provider is not supported', t => {
	t.plan(1);

	return fn('123456789asdfgh', 'foo').then(response => {
		t.notOk(response, null);
	}).catch(error => {
		t.is(error, 'Provider not valid or supported yet.');
	});
});

test('throw error if google token is not valid', t => {
	t.plan(1);

	return fn('123456789asdfgh', 'google').then(response => {
		t.notOk(response, null);
	}).catch(error => {
		t.ok(error, 'Returns an error');
	});
});

test('throw error if facebook token is not valid', t => {
	t.plan(1);

	return fn('12345678asdfghj', 'facebook').then(response => {
		t.is(response, null);
	}).catch(error => {
		t.ok(error, 'Returns an error');
	});
});

// test('should not throw error', t => {
// 	t.plan(1);

// 	return fn(process.env.FACEBOOK_ACCESS_TOKEN, 'facebook').then(response => {
// 		t.ok(response);
// 	}).catch(error => {
// 		t.notOk(error, 'Returns an error');
// 	});
// });
