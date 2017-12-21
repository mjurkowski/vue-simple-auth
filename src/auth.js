import firebase from 'firebase'
import firebaseui from 'firebaseui';

const config = {
  apiKey: "AIzaSyBfEKjNqtQRdeRxd1ocNwAQjPMo80MUn70",
  authDomain: "qrpay-23f88.firebaseapp.com",
  databaseURL: "https://qrpay-23f88.firebaseio.com",
  projectId: "qrpay-23f88",
  storageBucket: "qrpay-23f88.appspot.com",
  messagingSenderId: "651606142877"
};

const auth = {
  context: null,

  init(context) {
    this.context = context;

    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
      this.context.$store.dispatch('user/setCurrentUser')

      let requireAuth = this.context.$route.matched.some(record => record.meta.requireAuth)
      let guestOnly = this.context.$route.matched.some(record => record.meta.guestOnly)

      if(requireAuth && !user) this.context.$router.push('auth')
      else if (guestOnly && user) this.context.$router.push('app')
    });
  },
  authForm() {
    var uiConfig = {
      signInSuccessUrl: 'app',
      signInOptions: [
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ]
    };
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', uiConfig);
  },
  user() {
    return this.context ? firebase.auth().currentUser : null;
  },
  logout() {
    firebase.auth().signOut();
  }
}

export default auth;
