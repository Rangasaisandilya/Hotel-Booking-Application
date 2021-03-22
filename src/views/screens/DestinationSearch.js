import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Pressable,
  Button,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import searchResultsDelhi from '../../consts/searchdel';
import searchResultsGoa from '../../consts/searchgoa';
import searchResultsBanglore from '../../consts/searchblr';
import searchResultsHyderabad from '../../consts/searchhyd';
import Goa from '../../consts/Goa';
import {useNavigation, useRoute} from '@react-navigation/native';

const DestinationSearch = ({props, route}) => {
  const [inputText, setInputText] = useState('');
  const navigation = useNavigation();
  const user2 = route.params.user1;
  console.log(user2);
  return (
    <View style={styles.container}>
      <Text style={styles.textInput}>Choose Your City</Text>
      <FlatList
        data={searchResultsDelhi}
        renderItem={({item}) => (
          <Pressable
            onPress={() => navigation.navigate('DelhiHome1', {user2})}
            style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name={'location-pin'} size={30} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </Pressable>
        )}
      />
      <FlatList
        data={searchResultsGoa}
        renderItem={({item}) => (
          <Pressable
            onPress={() => navigation.navigate('GoaHome1', {user2})}
            style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name={'location-pin'} size={30} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </Pressable>
        )}
      />
      <FlatList
        data={searchResultsBanglore}
        renderItem={({item}) => (
          <Pressable
            onPress={() => navigation.navigate('BangloreHome1', {user2})}
            style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name={'location-pin'} size={30} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </Pressable>
        )}
      />
      <FlatList
        data={searchResultsHyderabad}
        renderItem={({item}) => (
          <Pressable
            onPress={() => navigation.navigate('HyderabadHome1', {user2})}
            style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name={'location-pin'} size={30} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  textInput: {
    fontSize: 25,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'black',
    borderRadius: 400,
  },
  container: {
    margin: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  iconContainer: {
    backgroundColor: '#e7e7e7',
    padding: 7,
    borderRadius: 10,
    marginRight: 15,
  },
  locationText: {},
});
export default DestinationSearch;
