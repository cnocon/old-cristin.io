# CRISTIN.IO

## Development Server
Start node server via `node ./app.js`

## Production Server
It should be running by default. To verify the 'app' process is running, use `pm2 list`.
If you need to start up the app, use `pm2 start app.js`
Further documentation lives in my Evernote notebook for cristin.io deployments.

---
Setup instructions from https://medium.com/front-end-hacking/getting-started-with-your-react-app-with-express-server-1c701a3c6edb

* Express: The wrapper for your node server.
* React: The front-end framework of choice.

TO RUN APP LOCALLY, run these simultaneously:
`npm run webpack`
`npm start`
