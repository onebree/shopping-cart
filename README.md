# shopping-cart

## Dependencies

- Node.js v6.9.1
- NPM v3.10.8
- Node modules from `package.json`
- Firebase database setup

## Setup

Install all dependencies from `package.json`

```
$ npm install
```

Start the application, and `localhost:3000` will open automatically

```
$ npm start
```

## Deployment

Deploy the application using [Now.sh][1]:

```
$ npm install -g now now-serve
$ npm run build
$ npm run deploy
```

Now.sh will return the URL of the application at its latest deploy in console.

Remmeber to whitelist `now.sh` as an authorized OAuth redirect domain in Firebase.


[1]: https://zeit.co/now
