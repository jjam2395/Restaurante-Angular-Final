// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyC_RGqbQMwIUrRNUlEmAt9L8zgghwb4doo",
    authDomain: "restaurente-fireangular.firebaseapp.com",
    databaseURL: "https://restaurente-fireangular.firebaseio.com",
    projectId: "restaurente-fireangular",
    storageBucket: "restaurente-fireangular.appspot.com",
    messagingSenderId: "48793907238"
  }
};
