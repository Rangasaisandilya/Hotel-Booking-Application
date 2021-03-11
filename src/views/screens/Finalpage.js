/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// const navigation = useNavigation();
function Finalpage({route}) {
  const [name, setName] = useState('');
  const [hotelName, setHotelName] = useState('');
  const [address, setAddress] = useState('');
  const [days, setDays] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const checkTextInput = () => {
    return;
  };
  const PostAddres = (name, hotelName, address, days, phoneNo) => {
    if (
      name === '' ||
      hotelName === '' ||
      address === '' ||
      days === '' ||
      phoneNo === ''
    ) {
      alert('Please Enter all fields');
      return;
    }
    alert('Success');
    console.log(name, hotelName, address, days, phoneNo);
    fetch('http://192.168.0.10:8080/customers', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        name: name,
        hotelName: hotelName,
        address: address,
        days: days,
        phoneNo: phoneNo,
      }),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(
          'POST Response',
          'Response Body = > ' + JSON.stringify(responseData),
        );
      })
      .done();
  };
  const navigation = useNavigation();
  const item = route.params;
  return (
    <View>
      <StatusBar barStyle="dark-content" translucent backgroundColor="white" />
      <View
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignSelf: 'center',
          alignContent: 'center',
          alignItems: 'center',
          backgroundColor: 'grey',
        }}>
        <Text style={{color: 'white', fontSize: 25, marginBottom: 65}}>
          Enter your details to confirm
        </Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="name"
            onChangeText={(name) => setName(name)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="HotelName"
            onChangeText={(hotelName) => setHotelName(hotelName)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Address"
            onChangeText={(address) => setAddress(address)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Days"
            onChangeText={(days) => setDays(days)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="PhoneNumber"
            onChangeText={(phoneNo) => setPhoneNo(phoneNo)}
          />
        </View>
        <Button
          title="Confirm"
          onPress={() => PostAddres(name, hotelName, address, days, phoneNo)}
          color="red"
        />
        {/* <Button
          title="View details"
          onPress={() => navigation.navigate('Viewdetails', item)}
          color="blue"
        /> */}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  inputView: {
    backgroundColor: 'snow',
    borderRadius: 10,
    width: '70%',
    height: 60,
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  TextInput: {
    height: 50,
    flex: 2,
    padding: 1,
    marginLeft: 20,
    fontWeight: 'bold',
  },
  Button: {
    color: 'blue',
    borderRadius: 30,
    marginBottom: 20,
    width: '50%',
  },
});

export default Finalpage;
