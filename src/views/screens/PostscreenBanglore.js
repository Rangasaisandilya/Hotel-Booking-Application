/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import DetailedPost from '../../components/DetailedPostBanglore';
import places from '../../consts/Banglore';
import {useRoute} from '@react-navigation/native';

const post = places[0];

const PostscreeBanglore = (props) => {
  const route = useRoute();
  //   console.log(route.params);
  const post = places.find((place) => place.id === route.params.postId);
  return (
    <View style={{backgroundColor: 'white'}}>
      <DetailedPost post={post} />
    </View>
  );
};

export default PostscreeBanglore;
