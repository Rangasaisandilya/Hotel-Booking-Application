import React from 'react';
import {View, Text} from 'react-native';


const HyderabadData = (props) => {
    const [days, setDays] = useState('');
    fetch('http://192.168.0.10:8080/HydHotels', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: hyderabad.id,
        name: hyderabad.name,
        location: hyderabad.location,
        price: hyderabad.price,
        size: hyderabad.size,
        image:hyderabad.image,
        details:hyderabad.details,
        days:data,
        totalAmount: hyderabad.price * data,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);

        alert(' Items Added successfully');


  return (
    <View>
      <Text> component</Text>
    </View>
  );
};

export default HyderabadData;
