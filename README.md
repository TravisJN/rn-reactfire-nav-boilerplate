### Example New Project Boilerplate for:

React Native (Expo)
Reactfire (Firebase Auth, Firestore)
React Navigation
React Native Elements

---

### Setup

1. Create a new Expo project

   ```
   npm install --global expo-cli
   expo init my-project
   ```

   Choose a blank template.

2. Copy all files except README.md to your new project repo, replace all.

3. Install JS dependencies
   `yarn` or `npm i`

4. Install native dependencies.

   Some dependencies have native components that need to be installed via Expo

   react-navigation:

   ```
   expo install react-native-screens react-native-safe-area-context @react-native-masked-view/masked-view
   ```

   expo-constants:

   ```
   expo install expo-constants
   ```

   Note: expo-constants is used to determine if we are using local firebase emulators. There are other ways to check environment variables such as using `process.ENV` if you prefer.

5. Paste your firebase config in App.js

   https://github.com/TravisJN/rn-reactfire-nav-boilerplate/blob/dc11a05c4bc8e01d9babc3c1a0742f0231e24857/App.js#L12

6. Run your app with `yarn start`
