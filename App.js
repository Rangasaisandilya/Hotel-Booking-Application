import React from 'react';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import DetailsScreen from './src/views/screens/DetailsScreen';
import ConfirmBooking from './src/views/screens/ConfirmBooking';
// import {withAuthenticator} from 'aws-amplify-react-native';
import HyderabadDetails from './src/views/screens/HyderabadDetails';
import HyderabadConfirm from './src/views/screens/HyderabadConfirm';
import BangloreDetails from './src/views/screens/BangloreDetails';
import BangloreConfirm from './src/views/screens/BangloreConfirm';
import GoaHome1 from './src/views/screens/GoaHome1';
import DelhiHome1 from './src/views/screens/DelhiHome1';
import BangloreHome1 from './src/views/screens/BangloreHome1';
import HyderabadHome1 from './src/views/screens/HyderabadHome1';
import Home from './src/views/screens/Home';
import GoaDetails from './src/views/screens/GoaDetails';
import GoaConfirm from './src/views/screens/GoaConfirm';
import DestinationSearch from './src/views/screens/DestinationSearch';
import Finalpage from './src/views/screens/Finalpage';
import Viewdetails from './src/views/screens/Viewdetails';
import PostscreenDelhi from './src/views/screens/PostscreenDelhi';
import PostscreenHyderabad from './src/views/screens/PostscreenHyderabad';
import PostscreeBanglore from './src/views/screens/PostscreenBanglore';
import PostscreenGoa from './src/views/screens/PostscreenGoa';
import Login from './src/views/screens/Login';
import SignUp from './src/views/screens/SignUp';

const Stack = createStackNavigator();

function Delhi() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="DelhiHome1" component={DelhiHome1} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      <Stack.Screen name="ConfirmBooking" component={ConfirmBooking} />
    </Stack.Navigator>
  );
}
function Hyderabad() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HyderabadHome1" component={HyderabadHome1} />
      <Stack.Screen name="HyderabadDetails" component={HyderabadDetails} />
      <Stack.Screen name="HyderabadConfirm" component={HyderabadConfirm} />
    </Stack.Navigator>
  );
}
function Banglore() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BangloreHome1" component={BangloreHome1} />
      <Stack.Screen name="BangloreDetails" component={BangloreDetails} />
      <Stack.Screen name="BangloreConfirm" component={BangloreConfirm} />
    </Stack.Navigator>
  );
}
function Goa() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="GoaHome1" component={GoaHome1} />
      <Stack.Screen name="GoaDetails" component={GoaDetails} />
      <Stack.Screen name="GoaConfirm" component={GoaConfirm} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Delhi" component={Delhi} />
        <Stack.Screen name="Hyderabad" component={Hyderabad} />
        <Stack.Screen name="Banglore" component={Banglore} />
        <Stack.Screen name="Goa" component={Goa} />
        <Stack.Screen name="DestinationSearch" component={DestinationSearch} />
        <Stack.Screen name="Finalpage" component={Finalpage} />
        <Stack.Screen name="Viewdetails" component={Viewdetails} />
        {/* <Stack.Screen name="GoaHome1" component={GoaHome1} />
        <Stack.Screen name="DelhiHome1" component={DelhiHome1} />
        <Stack.Screen name="BangloreHome1" component={BangloreHome1} />
        <Stack.Screen name="HyderabadHome1" component={HyderabadHome1} /> */}

        <Stack.Screen
          name="postDelhi"
          component={PostscreenDelhi}
          options={{
            headerShown: true,
            title: 'Accommodation in Delhi',
          }}
        />
        <Stack.Screen
          name="postGoa"
          component={PostscreenGoa}
          options={{
            headerShown: true,
            title: 'Accommodation in Goa',
          }}
        />
        <Stack.Screen
          name="postHyderabad"
          component={PostscreenHyderabad}
          options={{
            headerShown: true,
            title: 'Accommodation in Hyderabad',
          }}
        />
        <Stack.Screen
          name="postBanglore"
          component={PostscreeBanglore}
          options={{
            headerShown: true,
            title: 'Accommodation in Banglore',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// export default withAuthenticator(App);
export default App;
