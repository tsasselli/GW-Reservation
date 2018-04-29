// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
   firebase: {
    apiKey: "AIzaSyBHjhfb2cRZhZlDPOftpMcSB74_P8dNVpk",
    authDomain: "gw-reservations.firebaseapp.com",
    databaseURL: "https://gw-reservations.firebaseio.com",
    projectId: "gw-reservations",
    storageBucket: "",
    messagingSenderId: "211027746285"
  }
};
