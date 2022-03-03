import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSigninCheck } from 'reactfire';
import Login from './routes/Login';
import Home from './routes/Home';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Stack = createNativeStackNavigator();

export const Router = () => {
  const { status, data } = useSigninCheck();

  if (status === 'loading') {
    return <Text>Loading...</Text>;
  }

  const { signedIn } = data;

  return (
    <View style={styles.container}>
      <Stack.Navigator initialRouteName="Login">
        {signedIn ? <Stack.Screen name="Home" component={Home} /> : <Stack.Screen name="Login" component={Login} />}
      </Stack.Navigator>
    </View>
  );
};
