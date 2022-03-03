/**
 * TODO: Requires setup
 * "Project Settings > App Check" section of the Firebase console
 */

import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';
import { useFirebaseApp, AppCheckProvider } from 'reactfire';

// Create your reCAPTCHA v3 site key in the
// "Project Settings > App Check" section of the Firebase console
const APP_CHECK_TOKEN = 'abcdefghijklmnopqrstuvwxy-1234567890abcd';

export const AppCheck = ({ children }) => {
  const app = useFirebaseApp(); // a parent component contains a `FirebaseAppProvider`

  const appCheck = initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider(APP_CHECK_TOKEN),
    isTokenAutoRefreshEnabled: true,
  });

  // Activate App Check at the top level before any component talks to an App-Check-compatible Firebase service
  return <AppCheckProvider sdk={appCheck}>{children}</AppCheckProvider>;
};
