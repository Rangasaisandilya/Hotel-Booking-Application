/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
// useRoute
const DetailedPost = (props) => {
  //console.log(props);
  const route = useRoute();
  const user4 = route.params.user3;
  console.log(user4);
  const posts = props.post;
  // console.log(posts);
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: posts.image}} />
        <Text style={styles.name}>{posts.name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {posts.location}
        </Text>
        <Text style={styles.prices}>
          {/* <Text style={styles.oldPrice}>{post.oldPrice}</Text> */}
          <Text style={styles.newPrice}> ₹{posts.price} </Text>/ per day
        </Text>
        {/* <Text style={styles.totalPrice}>€{post.totalPrice} total</Text> */}

        <Text style={styles.longDescription}>{posts.details}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('ConfirmBooking', posts, user4)}>
          <View
            style={{
              height: 55,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 40,
              backgroundColor: 'green',
              marginHorizontal: 20,
              borderRadius: 10,
            }}>
            <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
              Book Now
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
    marginVertical: 12,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  description: {
    fontSize: 18,
    lineHeight: 20,
  },
  longDescription: {
    fontSize: 16,
    lineHeight: 18,
    marginVertical: 24,
  },
});

export default DetailedPost;
