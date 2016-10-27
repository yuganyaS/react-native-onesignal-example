import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
} from 'react-native';
import OneSignal from 'react-native-onesignal';

class App extends Component {
  componentDidMount() {
    OneSignal.configure({});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to the OneSignal Example!
        </Text>
        <Text style={styles.instructions}>
          Using {Platform.OS}? Cool.
        </Text>
        {Platform.OS === 'ios' ?
          <TouchableOpacity
            onPress={() => OneSignal.registerForPushNotifications()}
            style={{ padding: 20, backgroundColor: '#3B5998' }}
          >
            <Text style={{ color: '#fff' }}>Request Push Notification Permission</Text>
          </TouchableOpacity>
        : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;
