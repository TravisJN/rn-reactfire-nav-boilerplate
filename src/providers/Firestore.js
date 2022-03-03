import * as React from 'react';
import { Text } from 'react-native';
import { FirestoreProvider, useInitFirestore } from 'reactfire';
import { initializeFirestore, enableIndexedDbPersistence, connectFirestoreEmulator } from 'firebase/firestore';
import Constants from 'expo-constants';

export const Firestore = ({ children }) => {
  const { status, data: firestoreInstance } = useInitFirestore(async (firebaseApp) => {
    const db = initializeFirestore(firebaseApp, {});

    if (Constants.manifest.extra?.useEmulators) {
      connectFirestoreEmulator(db, 'localhost', 8080);
    }

    await enableIndexedDbPersistence(db);
    return db;
  });

  if (status === 'loading') {
    return <Text>Loading...</Text>;
  }

  return <FirestoreProvider sdk={firestoreInstance}>{children}</FirestoreProvider>;
};
