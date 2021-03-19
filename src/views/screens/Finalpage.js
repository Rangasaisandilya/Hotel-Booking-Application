/* eslint-disable no-shadow */
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
  DatePickerIOSComponent,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// const navigation = useNavigation();
function Finalpage({route}) {
  // const [name, setName] = useState('');
  // const [hotelName, setHotelName] = useState('');
  // const [address, setAddress] = useState('');
  // const [days, setDays] = useState('');
  // const [price, setPrice] = useState('');
  // const [phoneNumber, setPhoneNumber] = useState('');
  // const [aadharNumber, setAadharNumber] = useState('');
  const [bookDays, setBookDays] = useState('');
  const [totalPrice, setTotalPrice] = useState('');
  const [bookingStatus, setBookingStatus] = useState('');
  // const [roomid, setRoomid] = useState('');
  // const user6 = route.params.user5;
  // console.log(user6);
  var userObj = {};
  userObj = {userId: 1};

  const item = route.params.roomid;
  // console.log(item);
  var roomObj = {};
  roomObj = {roomId: item};
  const checkTextInput = () => {
    return;
  };
  const PostUser = (
    // hotelName,
    // address,
    // days,
    // price,
    // phoneNumber,
    // aadharNumber,
    // roomid,
    bookDays,
    totalPrice,
    bookingStatus,
    // userObj,
    // roomObj,
  ) => {
    if (
      // name === '' ||
      // hotelName === '' ||
      // address === '' ||
      // days === '' ||
      // price === '' ||
      // phoneNumber === '' ||
      // roomid === '' ||
      // aadharNumber === ''
      bookDays === '' ||
      totalPrice === '' ||
      bookingStatus === ''
    ) {
      alert('Please Enter all fields');
      return;
    }
    alert('Your room has been booked');
    console.log(
      // name,
      // hotelName,
      // address,
      // days,
      // phoneNumber,
      // price,
      // aadharNumber,
      bookDays,
      totalPrice,
      bookingStatus,
      roomObj,
      // roomid,
    );
    fetch('http://192.168.0.10:8080/save-hotels', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        // name: name,
        // hotelName: hotelName,
        // address: address,
        // days: days,
        // price: price * days,
        // phoneNumber: phoneNumber,
        // aadharNumber: aadharNumber,
        // users: userObj,
        //roomDetails: 12,
        //users: 2,
        bookDays: bookDays,
        totalPrice: totalPrice * bookDays,
        bookingStatus: bookingStatus,
        users: userObj,
        roomDetails: roomObj,
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
  // const item = route.params.roomid;
  const item1 = route.params;

  // console.log(item);
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
        {/* <View style={styles.inputView}>
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
        </View> */}
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="enter days"
            onChangeText={(bookDays) => setBookDays(bookDays)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="price"
            onChangeText={(totalPrice) => setTotalPrice(totalPrice)}
            defaultValue={item1.price}
          />
        </View>
        {/* <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="price"
            onChangeText={(roomid) => setRoomid(roomid)}
            defaultValue={item1.roomid}
          />
        </View> */}
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="booking status"
            onChangeText={(bookingStatus) => setBookingStatus(bookingStatus)}
            defaultValue="pay during checkin"
          />
        </View>
        <View style={styles.view}>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>
            Total price is :₹
            {item1.price * bookDays}/-
          </Text>
        </View>

        <Button
          title="Confirm"
          onPress={
            () => PostUser(bookDays, totalPrice, bookingStatus /*roomid*/)
            // name,
            // hotelName,
            // address,
            // days,
            // price,
            // phoneNumber,
            // aadharNumber,
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
