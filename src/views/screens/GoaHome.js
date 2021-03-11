import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
  Animated,
  AnimatedView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Goa from '../../consts/Goa';
const {width} = Dimensions.get('screen');
const cardWidth = width / 1.8;

const GoaHome = ({navigation}) => {
  // const categories=['All'];

  // const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

  const [activeCardIndex, setActiveCardIndex] = React.useState(0);
  const scrollX = React.useRef(new Animated.Value(0)).current;

  // const CategoryList=({navigation})=>{
  //     return <View style={style.categoryListContainer}>
  //         {categories.map((item,index)=>(<TouchableOpacity key={index} activeOpacity={0.8} onPress={()=>setSelectedCategoryIndex(index)}>

  //             <View>
  //                 <Text style={{...style.categoryListText,color:selectedCategoryIndex==index?'green':'grey'}}>{item}
  //                 </Text>
  //                 {selectedCategoryIndex==index && (<View
  //                     style={{height:3,width:30,backgroundColor:'green',marginTop:2}}>
  //                 </View>)}

  //             </View>
  //         </TouchableOpacity>))}
  //     </View>
  // };

  const Card = ({Goa, index}) => {
    //const inputRange=[(index -1)* cardWidth,index *cardWidth,(index+1)*cardWidth,];
    //const opacity=scrollX.interpolate({inputRange,outputRange:[0.7,0,0.7],});

    const inputRange = [
      (index - 1) * cardWidth,
      index * cardWidth,
      (index + 1) * cardWidth,
    ];
    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0.7, 0, 0.7],
    });
    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.8, 1, 0.8],
    });

    return (
      <TouchableOpacity
        disabled={activeCardIndex != index}
        activeOpacity={1}
        onPress={() => navigation.navigate('GoaDetails', Goa)}>
        <Animated.View style={{...style.card, transform: [{scale}]}}>
          <Animated.View style={{...style.cardOverLay, opacity}} />
          <View style={style.priceTag}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
              ₹{Goa.price}
            </Text>
          </View>
          <Image source={Goa.image} style={style.cardImage} />
          <View style={style.cardDetails}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text style={{fontWeight: 'bold', fontSize: 17}}>
                  {Goa.name}
                </Text>
                <Text style={{fontSize: 15}}>{Goa.location}</Text>
              </View>
              <Icon name="bookmark-border" size={26} color="green" />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Icon name="star" size={15} color="orange" />
                <Icon name="star" size={15} color="orange" />
                <Icon name="star" size={15} color="orange" />
                <Icon name="star" size={15} color="orange" />
                <Icon name="star" size={15} color="orange" />
              </View>
              <Text style={{fontSize: 12}}>540reviews</Text>
            </View>
          </View>
        </Animated.View>
      </TouchableOpacity>
    );
  };
  const TopHotelCard = ({Goa}) => {
    return (
      <View style={style.topHotelCard}>
        <View
          style={{
            position: 'absolute',
            top: 5,
            right: 5,
            zIndex: 1,
            flexDirection: 'row',
          }}>
          <Icon name="star" size={15} color="orange" />
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
            5.0
          </Text>
        </View>
        <Image style={style.topHotelCardImage} source={Goa.image} />
        <View style={{paddingVertical: 5, paddingHorizontal: 10}}>
          <Text style={{fontSize: 10, fontWeight: 'bold'}}>{Goa.name}</Text>
          <Text style={{fontSize: 7, fontWeight: 'bold', color: 'grey'}}>
            {Goa.location}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={style.header}>
        <View style={{paddingBottom: 10}}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>
            Find Your Hotel
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>in {'\n'}</Text>
            <Text style={{fontSize: 25, fontWeight: 'bold', color: 'green'}}>
              Goa
            </Text>
          </View>
        </View>
        <Icon
          name="home"
          size={25}
          color="black"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Animated.FlatList
            onMomentumScrollEnd={(e) => {
              setActiveCardIndex(
                Math.round(e.nativeEvent.contentOffset.x / cardWidth),
              );
            }}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: true},
            )}
            horizontal
            data={Goa}
            contentContainerStyle={{
              paddingVertical: 30,
              paddingLeft: 20,
              paddingRight: cardWidth / 2 - 40,
            }}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => <Card Goa={item} index={index} />}
            snapToInterval={cardWidth}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}>
          <Text style={{fontWeight: 'bold', color: 'grey'}}>Top hotels</Text>
          {/* <Text style={{color:"grey"}}>Show All</Text> */}
        </View>
        <FlatList
          data={Goa}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: 20,
            marginTop: 20,
            paddingBottom: 30,
          }}
          renderItem={({item}) => <TopHotelCard Goa={item} />}
        />
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
  card: {
    height: 250,
    width: cardWidth,
    elevation: 15,
    marginRight: 20,
    borderRadius: 15,
    backgroundColor: 'white',
  },
  cardImage: {
    height: 200,
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  priceTag: {
    height: 60,
    width: 80,
    backgroundColor: 'green',
    position: 'absolute',
    zIndex: 1,
    right: 0,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardDetails: {
    height: 100,
    borderRadius: 15,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    padding: 20,
    width: '100%',
  },
  cardOverLay: {
    height: 280,
    backgroundColor: 'white',
    position: 'absolute',
    zIndex: 100,
    width: cardWidth,
    borderRadius: 15,
  },
  topHotelCard: {
    height: 120,
    width: 120,
    backgroundColor: 'white',
    elevation: 15,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  topHotelCardImage: {
    height: 80,
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});
export default GoaHome;
