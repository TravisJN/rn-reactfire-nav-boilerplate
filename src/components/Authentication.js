import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputsContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textInput: {
    width: '100%',
    marginBottom: 10,
    outlineStyle: 'none',
  },
  buttonsContainer: {
    width: '100%',
    justifyContent: 'space-around',
  },
  signInButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 200,
    alignSelf: 'center',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
  errorContainer: {
    height: 25,
  },
});

export default function Authentication() {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const auth = getAuth();

  const handleSignIn = async () => {
    try {
      setIsLoading(true);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error.message);
      setErrorMessage(error.message);
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputsContainer}>
        <Input placeholder="email" onChangeText={onChangeEmail} style={styles.textInput} />
        <Input placeholder="password" onChangeText={onChangePassword} secureTextEntry={true} style={styles.textInput} />
      </View>
      <View style={styles.errorContainer}>
        {!!errorMessage && <Text style={styles.errorText}>{`${errorMessage}`}</Text>}
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title={'LOG IN'}
          buttonStyle={styles.signInButton}
          loading={isLoading}
          loadingProps={{ size: 'small', color: 'white' }}
          onPress={handleSignIn}
        />
      </View>
    </View>
  );
}
