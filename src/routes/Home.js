import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useAuth } from 'reactfire';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  authenticationContainer: {
    width: '30%',
    minWidth: 500,
    height: '25%',
    marginBottom: 100,
  },
  titleText: {
    fontSize: 28,
    color: '#363636',
    paddingBottom: 10,
  },
});

export default function Home({ navigation }) {
  const auth = useAuth();

  const handleSignOut = () => {
    auth.signOut().then(() => console.log('signed out'));
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.titleText}>yeetship</Text>
      <View style={styles.authenticationContainer}>
        <Text>welcome home</Text>
      </View>
      <Pressable onPress={handleSignOut}>
        <Text>Good Bye</Text>
      </Pressable>
    </ScrollView>
  );
}
