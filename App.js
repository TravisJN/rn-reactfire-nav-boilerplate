import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { FirebaseAppProvider } from 'reactfire';
import { Auth } from './src/providers/Auth';
import { Firestore } from './src/providers/Firestore';
import { Router } from './src/Router';

const linking = {
  prefixes: ['http://localhost:*'],
};

const firebaseConfig = {
  apiKey: 'AIzaSyB1jf1TKR2g60hgywbMeE_b7Fn5pBC5ic0',
  authDomain: 'dlivr-deliver.firebaseapp.com',
  projectId: 'dlivr-deliver',
  storageBucket: 'dlivr-deliver.appspot.com',
  messagingSenderId: '435981122368',
  appId: '1:435981122368:web:b658033fb45dbf740998a5',
  measurementId: 'G-2DDYZBHKDL',
};

export default function App() {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Auth>
        <Firestore>
          <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
            <Router />
          </NavigationContainer>
        </Firestore>
      </Auth>
    </FirebaseAppProvider>
  );
}

//   // These keys are not secret: https://firebase.google.com/docs/projects/api-keys
//   // --- PRODUCTION ---
//   // firebaseConfig = {
//   //   apiKey: 'AIzaSyDFKgmsBA4E1h3YLH4OqBOzBEEyvWCgQ0Y',
//   //   authDomain: 'dlivr-production.firebaseapp.com',
//   //   projectId: 'dlivr-production',
//   //   storageBucket: 'dlivr-production.appspot.com',
//   //   messagingSenderId: '514460258293',
//   //   appId: '1:514460258293:web:41901c58c2436df18f5abc',
//   //   measurementId: 'G-MPSQ33VRZ4',
//   // };
//   // --- STAGING ---
//   firebaseConfig = {
//     apiKey: 'AIzaSyBqZzCqpnN-0gnJDOm3VMafhDlS2_DlU5Q',
//     authDomain: 'delivrease-80c9f.firebaseapp.com',
//     projectId: 'delivrease-80c9f',
//     storageBucket: 'delivrease-80c9f.appspot.com',
//     messagingSenderId: '688986283782',
//     appId: '1:688986283782:web:eb407fac44ab2a116a4887',
//     measurementId: 'G-YG8TTGX3LJ',
//   };
