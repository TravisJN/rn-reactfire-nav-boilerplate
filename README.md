### New Project Boilerplate for:

React Native (Expo)
Reactfire (Firebase Auth, Firestore)
React Navigation

---

### Setup

1. Create a new Expo project

```
npm install --global expo-cli
expo init my-project
```

2. Install JS dependencies
   `yarn` or `npm i`

3. Install native dependencies
   Some dependencies have native components that need to be installed via Expo

   react-navigation:
   `expo install react-native-screens react-native-safe-area-context @react-native-masked-view/masked-view`

   Expo:
   `expo install expo-constants`
   Note: expo-constants is used to determine if we are using local firebase emulators. There are other ways to check environment variables such as using `process.ENV` if you prefer.
