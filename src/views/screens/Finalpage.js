/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react';
import Auth from '@aws-amplify/auth';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  StatusBar,
  DatePickerIOSComponent,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// const navigation = useNavigation();
function Finalpage({route}) {
  const [name, setName] = useState('');
  const [hotelName, setHotelName] = useState('');
  const [address, setAddress] = useState('');
  const [days, setDays] = useState('');
  const [price, setPrice] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [aadharNumber, setAadharNumber] = useState('');
  const checkTextInput = () => {
    return;
  };
  const PostUser = (
    name,
    hotelName,
    address,
    days,
    price,
    phoneNumber,
    aadharNumber,
  ) => {
    if (
      name === '' ||
      hotelName === '' ||
      address === '' ||
      days === '' ||
      price === '' ||
      phoneNumber === '' ||
      aadharNumber === ''
    ) {
      alert('Please Enter all fields');
      return;
    }
    alert('Your room has been booked');
    console.log(
      name,
      hotelName,
      address,
      days,
      phoneNumber,
      price,
      aadharNumber,
    );
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
        price: price * days,
        phoneNumber: phoneNumber,
        aadharNumber: aadharNumber,
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
            defaultValue={item.name}
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
            placeholder="price"
            onChangeText={(price) => setPrice(price)}
            defaultValue={item.price}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="PhoneNumber"
            onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="AadharNumber"
            onChangeText={(aadharNumber) => setAadharNumber(aadharNumber)}
          />
        </View>
        <View style={styles.view}>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>
            Total price is :₹
            {item.price * days}/-
          </Text>
        </View>
        <Button
          title="Confirm"
          onPress={() =>
            PostUser(
              name,
              hotelName,
              address,
              days,
              price,
              phoneNumber,
              aadharNumber,
            )
          }
          color="red"
        />
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
  view: {
    width: '70%',
    height: 30,
    marginBottom: 0,
    alignItems: 'center',
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
