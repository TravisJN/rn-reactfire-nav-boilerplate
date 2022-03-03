import * as React from 'react';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { AuthProvider, useFirebaseApp } from 'reactfire';
import Constants from 'expo-constants';

export const Auth = ({ children }) => {
  const app = useFirebaseApp();
  const auth = getAuth(app);

  if (Constants.manifest.extra?.useEmulators) {
    connectAuthEmulator(auth, 'http://localhost:9099');
  }

  return <AuthProvider sdk={auth}>{children}</AuthProvider>;
};
