import Vue from 'vue'



import firebase from 'firebase/app'

import 'firebase/firebase-auth'



import * as firebaseui from 'firebaseui'



const firebaseConfig = {

    apiKey: "AIzaSyD1-e9pPPiYkfGl-RrdrVEsqZj5cj0glAI",
    authDomain: "diary-61d47.firebaseapp.com",
    databaseURL: "https://diary-61d47.firebaseio.com",
    projectId: "diary-61d47",
    storageBucket: "diary-61d47.appspot.com",
    messagingSenderId: "564056050029",
    appId: "1:564056050029:web:ba1d2cbff4664aef713264"

    

}



firebase.initializeApp(firebaseConfig)

const ui = new firebaseui.auth.AuthUI(firebase.auth())



Vue.prototype.$firebase = firebase

Vue.prototype.$firebaseui = ui