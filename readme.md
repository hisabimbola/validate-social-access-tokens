# validate-social-access-tokens [![Build Status](https://travis-ci.org/hisabimbola/validate-social-access-tokens.svg?branch=master)](https://travis-ci.org/hisabimbola/validate-social-access-tokens)

> A simple module that let's you validate access tokens from social logins


## Install

```
$ npm install --save validate-social-access-tokens
```


## Usage

```js
validateSocialAccessTokens = require('validate-social-access-tokens');

validateSocialAccessTokens(<token>, <provider>).then(function(response) {
  //token valid
}).catch(function(error) {
  //token not valid or error occured
  //handle error
});
```


## API

### validateSocialAccessTokens(token, provider)

#### token

Type: `string`

#### provider

Providers supported includes Facebook and Google, others are coming soon.

## License

MIT © [Abimbola Idowu](https://github.com/hisabimbola)
