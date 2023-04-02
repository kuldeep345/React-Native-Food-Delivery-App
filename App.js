import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen  from './screens/HomeScreen.js'
import Restaurant from './screens/RestaurantScreen.js'
import { store } from './store.js';
import { Provider } from 'react-redux';
import BasketScreen from './screens/BasketScreen.js';
import PreparingOrderScreen from './screens/PreparingOrderScreen.js';
import Delivery from './screens/Delivery.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={Restaurant} />
        <Stack.Screen name="PreparingOrderScreen" component={PreparingOrderScreen} options={{headerShown:false , presentation:"modal"}}/>
        <Stack.Screen name="Delivery" component={Delivery} options={{headerShown:false , presentation:"modal"}}/>

        <Stack.Screen name="Basket" component={BasketScreen} options={{headerShown:false, presentation:"modal"}} />
 

      </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

