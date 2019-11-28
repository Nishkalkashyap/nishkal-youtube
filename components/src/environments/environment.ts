// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBDBbwdU7XHAXwJa91R77jOWNFy6rW4Y_o',
    authDomain: 'diy-mechatronics.firebaseapp.com',
    databaseURL: 'https://diy-mechatronics.firebaseio.com',
    projectId: 'diy-mechatronics',
    storageBucket: 'diy-mechatronics.appspot.com',
    messagingSenderId: '795809219937',
    appId: '1:795809219937:web:c6b8b9408f847e18813120',
    measurementId: 'G-EE7GP0QKT2'
  },
  // stripe: 'pk_live_qSaGVmF1x4X3vIWZmpbgceNU'
  stripe: 'replace-with-mine'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
