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
  // Get firebase config from Firebase -> Project Settings
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
