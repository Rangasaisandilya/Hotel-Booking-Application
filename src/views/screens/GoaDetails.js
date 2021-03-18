/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Alert,
  TouchableOpacity,
  View,
} from 'react-native';
//import COLORS from '../../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
//import hotels from '../../consts/hotels';

const GoaDetails = ({navigation, route}) => {
  const item = route.params;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        backgroundColor: 'white',
        paddingBottom: 20,
      }}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="rgba(0,0,0,0)"
      />
      <ImageBackground style={style.headerImage} source={item.image}>
        <View style={style.header}>
          <Icon
            name="arrow-back"
            size={28}
            color="white"
            onPress={navigation.goBack}
          />
          <Icon name="bookmark-border" size={28} color="white" />
        </View>
      </ImageBackground>
      <View>
        <View style={style.iconContainer}>
          <Icon
            name="place"
            color="white"
            size={28}
            onPress={() => Alert.alert(item.location)}
          />
        </View>
        <View style={{marginTop: 20, paddingHorizontal: 20}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.name}</Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '400',
              color: 'grey',
              marginTop: 5,
            }}>
            {item.location}
          </Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flexDirection: 'row'}}>
                <Icon name="star" size={20} color="orange" />
                <Icon name="star" size={20} color="orange" />
                <Icon name="star" size={20} color="orange" />
                <Icon name="star" size={20} color="orange" />
                <Icon name="star" size={20} color="grey" />
              </View>
              <Text style={{fontWeight: 'bold', fontSize: 18, marginLeft: 5}}>
                4.0
              </Text>
            </View>
            <Text style={{fontSize: 13, color: 'grey'}}>365reviews</Text>
          </View>
          <View style={{marginTop: 20}}>
            <Text style={{lineHeight: 20, color: 'grey'}}>{item.details}</Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 20,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Price per night
          </Text>
          <View style={style.priceTag}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'grey',
                marginLeft: 5,
              }}>
              ₹{item.price}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 'bold',
                color: 'grey',
                marginLeft: 5,
              }}>
              +breakfast
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('GoaConfirm', item)}>
          <View style={style.btn}>
            <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
              Book Now
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  btn: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: 'green',
    marginHorizontal: 20,
    borderRadius: 10,
  },

  priceTag: {
    height: 40,
    alignItems: 'center',
    marginLeft: 40,
    paddingLeft: 20,
    flex: 1,
    backgroundColor: 'pink',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: 'row',
  },
  iconContainer: {
    position: 'absolute',
    height: 60,
    width: 60,
    backgroundColor: 'green',
    top: -30,
    right: 20,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    height: 300,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    overflow: 'hidden',
  },
  header: {
    marginTop: 60,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
});

export default GoaDetails;
