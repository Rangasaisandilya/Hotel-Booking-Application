/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import places from '../../consts/Hyderabad';
import Hyderabad from '../../consts/Hyderabad';
const post = places[0];

const HyderabadHome1 = ({navigation, route}) => {
  const user3 = route.params.user2;
  console.log(user3);
  // const goToPostPage = () => {
  //   navigation.navigate('postDelhi', {postId: post.id, user3});
  // };
  const Post = (props) => {
    const post = props.post;

    const navigation = useNavigation();

    const goToPostPage = () => {
      navigation.navigate('postHyderabad', {postId: post.id, user3});
    };
    return (
      <Pressable onPress={goToPostPage} style={style.container}>
        <Image style={style.image} source={{uri: post.image}} />
        <Text style={style.name}>{post.name}</Text>
        <Text style={style.description} numberOfLines={2}>
          {post.location}
        </Text>
        <Text style={style.prices}>
          <Text style={style.newPrice}> ₹{post.price} </Text>/ per day
        </Text>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={style.header}>
        <Icon
          name="arrow-back"
          size={25}
          color="black"
          onPress={navigation.goBack}
        />
        <View style={{paddingBottom: 10}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Hotels in Hyderabad
          </Text>
        </View>
        <Icon
          name="home"
          size={25}
          color="black"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={true}>
        <View>
          <View>
            <FlatList
              data={Hyderabad}
              renderItem={({item}) => <Post post={item} />}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

//const ViewCategories=({categories})=>{

const style = StyleSheet.create({
  header: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: 'white',
    marginTop: -10,
    marginLeft: 20,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 10,
  },
  categoryListText: {
    fontSize: 17,
    fontWeight: 'bold',
  },

  container: {
    margin: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  prices: {
    fontSize: 18,
    marginVertical: 10,
  },
  oldPrice: {
    color: 'grey',
    textDecorationLine: 'line-through',
  },
  newPrice: {
    fontWeight: 'bold',
  },
  totalPrice: {
    textDecorationLine: 'underline',
    color: 'grey',
  },
  name: {
    marginVertical: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  description: {
    fontSize: 18,
    lineHeight: 20,
  },
});
export default HyderabadHome1;
