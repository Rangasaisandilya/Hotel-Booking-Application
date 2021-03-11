/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, ImageBackground, Pressable, Button} from 'react-native';
import Auth from '@aws-amplify/auth';
const WelcomeScreen = ({navigation}) => {
  const logout = () => {
    Auth.signOut();
  };
  return (
    <View>
      <ImageBackground source="https://wallpapershome.com/images/pages/ico_v/19257.jpg">
        <Pressable
          onPress={logout}
          //   style={{
          //     justifyContent: 'space-around',
          //     height: 25,
          //     backgroundColor: 'green',
          //   }}>
        >
          <Text
          // style={{
          //   justifyContent: 'center',
          //   alignItems: 'center',
          //   textAlign: 'center',
          //   fontWeight: 'bold',
          //   fontSize: 17,
          //   color: 'white',
          // }}>>
          >
            Logout
          </Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;
