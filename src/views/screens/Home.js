/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
// import Auth from '@aws-amplify/auth';
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  Button,
  Dimensions,
  StyleSheet,
  Alert,
  Linking,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const Home = ({props, route}) => {
  const navigation = useNavigation();
  const logout = () => {
    navigation.navigate('Login');
  };
  const user1 = route.params;
  console.log(user1);
  return (
    <View>
      <ImageBackground
        source={require('/home/rangasai/Desktop/hotel/HotelApplication-master/src/assets/hotel.jpg')}
        style={styles.image}>
        <Button title="logout" onPress={logout} fontWeight="500"></Button>
        <Text style={styles.title}>Welcome to Hotel Booking App</Text>
        <Pressable
          style={styles.buttons}
          onPress={() => navigation.navigate('DestinationSearch', user1)}>
          <FontAwesome name="hand-o-right" size={25} color={'#f15454'} />
          <Text style={styles.buttonText}>Click here to book hotel</Text>
          <FontAwesome name="hand-o-left" size={25} color={'#f15454'} />
        </Pressable>
        <Text
          style={styles.link}
          onPress={() =>
            Linking.openURL(
              'https://www.who.int/news-room/q-a-detail/coronavirus-disease-covid-19-staying-at-hotels-and-accommodation-establishments',
            )
          }>
          Our covid 19 guidelines
        </Text>
      </ImageBackground>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 800,
    // resizeMode: 'cover',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    width: '70%',
    marginRight: 70,
    marginBottom: 100,
    marginTop: 20,
  },
  // button: {
  //   backgroundColor: '#fff',
  //   width: 200,
  //   height: 30,
  //   marginRight: 100,
  //   marginTop: 15,
  //   borderRadius: 10,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  buttons: {
    backgroundColor: '#fff',
    width: 300,
    height: 50,
    marginRight: 50,
    marginTop: -10,
    borderRadius: 30,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchbutton: {
    backgroundColor: '#fff',
    width: Dimensions.get('screen').width - 70,
    height: 50,
    marginHorizontal: 10,
    marginLeft: 100,
    marginRight: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    top: 40,
    zIndex: 50,
  },
  searchbuttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    color: 'white',
    marginRight: 130,
    marginTop: 60,
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
});
