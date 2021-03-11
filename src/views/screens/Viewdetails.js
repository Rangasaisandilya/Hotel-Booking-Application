import React from 'react';
import {Text, View, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default class Viewdetails extends React.Component {
  state = {
    data: [],
  };

  fetchData = async () => {
    const response = await fetch('http://192.168.0.10:8080/hotel/customers');
    const hotel = await response.json();
    this.setState({data: hotel});
  };
  componentDidMount() {
    this.fetchData();
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Text style={{fontSize: 30}}>React-Native App</Text>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => (
            <View style={{flex: 3}}>
              <Text style={{fontSize: 20}}>
                id:{item.id}, name:{item.name} , days:{item.days},hotelName:
                {item.hotelName},address:{item.address},phoneNo:{item.phoneNo}
              </Text>
            </View>
          )}
        />
      </View>
    );
  }
}
