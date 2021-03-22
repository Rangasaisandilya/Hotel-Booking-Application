/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {DataTable} from 'react-native-paper';
import ModalDropdown from 'react-native-modal-dropdown';

const GoaConfirm = ({navigation, route}) => {
  const user5 = route.params.user4;
  const item = route.params.posts;
  // const user = route.params;
  // console.log(user5);
  console.log(item);
  console.log(user5);
  return (
    <ScrollView>
      <StatusBar barStyle="dark-content" />
      <View style={{backgroundColor: 'white'}}>
        <Text style={{fontSize: 40, marginLeft: 40, marginTop: 20}}>
          Rooms Details
        </Text>
        <DataTable style={style.data}>
          <DataTable.Row>
            <DataTable.Cell>
              <Text numberOfLines={3} style={{fontWeight: 'bold'}}>
                Location
              </Text>
            </DataTable.Cell>
            <DataTable.Cell style={{backgroundColor: 'white'}}>
              {item.location}
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>
              <Text style={{fontWeight: 'bold'}}>Name</Text>
            </DataTable.Cell>
            <DataTable.Cell style={{backgroundColor: 'white'}}>
              {item.name}
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>
              <Text style={{fontWeight: 'bold'}}>Size</Text>
            </DataTable.Cell>
            <DataTable.Cell style={{backgroundColor: 'white'}}>
              {item.size}
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>
              <Text style={{fontWeight: 'bold'}}>Price</Text>
            </DataTable.Cell>
            <DataTable.Cell style={{backgroundColor: 'white'}}>
              {item.price}
            </DataTable.Cell>
          </DataTable.Row>
        </DataTable>
        <View>
          <ModalDropdown
            options={['pay during checkin', 'pay after checkout']}
            style={{
              backgroundColor: 'orange',
              borderRadius: 10,
              width: '90%',
              alignItems: 'center',
              alignContent: 'center',
              textAlign: 'center',
              marginLeft: 20,
            }}
            defaultValue={'select payment mode'}
            dropdownStyle={{
              width: '90%',
              fontSize: 50,
              fontWeight: 'bold',
            }}
            dropdownTextStyle={{
              color: 'red',
              fontWeight: 'bold',
              fontSize: 20,
              height: 60,
              textAlign: 'center',
            }}
            dropdownTextHighlightStyle={{backgroundColor: 'red'}}
            textStyle={{
              width: '100%',
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'black',
              fontSize: 20,
              // marginRight: 15,
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Finalpage', {item, user5})}>
          <View style={style.btn}>
            <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
              Confirm Booking
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  btn: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: 'green',
    marginHorizontal: 20,
    borderRadius: 10,
  },
  data: {
    marginTop: 50,
    borderRadius: 20,
    width: 300,
    marginLeft: 40,
  },
  input: {
    padding: 15,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    backgroundColor: 'white',
    margin: 10,
  },
  text: {
    fontSize: 24,
    padding: 10,
    backgroundColor: 'white',
  },
  modal: {
    width: 560,
    position: 'absolute',
  },
});

export default GoaConfirm;
