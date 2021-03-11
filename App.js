import React from 'react';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './src/views/screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import DetailsScreen from './src/views/screens/DetailsScreen';
import ConfirmBooking from './src/views/screens/ConfirmBooking';
import {withAuthenticator} from 'aws-amplify-react-native';
import HyderabadHome from './src/views/screens/HyderabadHome';
import HyderabadDetails from './src/views/screens/HyderabadDetails';
import HyderabadConfirm from './src/views/screens/HyderabadConfirm';
import BangloreHome from './src/views/screens/BangloreHome';
import BangloreDetails from './src/views/screens/BangloreDetails';
import BangloreConfirm from './src/views/screens/BangloreConfirm';
import GoaHome from './src/views/screens/GoaHome';
import Home from './src/views/screens/Home';
import GoaDetails from './src/views/screens/GoaDetails';
import GoaConfirm from './src/views/screens/GoaConfirm';
import DestinationSearch from './src/views/screens/DestinationSearch';
import Finalpage from './src/views/screens/Finalpage';
import Viewdetails from './src/views/screens/Viewdetails';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Delhi() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      <Stack.Screen name="ConfirmBooking" component={ConfirmBooking} />
    </Stack.Navigator>
  );
}
function Hyderabad() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HyderabadHome" component={HyderabadHome} />
      <Stack.Screen name="HyderabadDetails" component={HyderabadDetails} />
      <Stack.Screen name="HyderabadConfirm" component={HyderabadConfirm} />
    </Stack.Navigator>
  );
}
function Banglore() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BangloreHome" component={BangloreHome} />
      <Stack.Screen name="BangloreDetails" component={BangloreDetails} />
      <Stack.Screen name="BangloreConfirm" component={BangloreConfirm} />
    </Stack.Navigator>
  );
}
function Goa() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="GoaHome" component={GoaHome} />
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
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Delhi" component={Delhi} />
        <Stack.Screen name="Hyderabad" component={Hyderabad} />
        <Stack.Screen name="Banglore" component={Banglore} />
        <Stack.Screen name="Goa" component={Goa} />
        <Stack.Screen name="DestinationSearch" component={DestinationSearch} />
        <Stack.Screen name="Finalpage" component={Finalpage} />
        <Stack.Screen name="Viewdetails" component={Viewdetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default withAuthenticator(App);
