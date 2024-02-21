import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

// Screens
import HomeScreen from './screen/HomeScreen';
import AboutScreen from './screen/AboutScreen';
import ContactScreen from './screen/ContactScreen';


import Custommenu from './Costommenu';

// ten
import Jesus from './screen/tenScreen/Jesus';
import Miracles from './screen/tenScreen/Miracles';
import Thankful from './screen/tenScreen/Thankful';
import Prayer from './screen/tenScreen/Prayer';
import Hope from './screen/tenScreen/Hope';
import Love from './screen/tenScreen/Love';
import Insprational from './screen/tenScreen/Insprational';
import Fear from './screen/tenScreen/Fear';
import Forgaveness from './screen/tenScreen/Forgaveness';
import Healling from './screen/tenScreen/Healling';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();



function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false ,}} />
      <Stack.Screen
        name="Jesus"component={Jesus}options={{headerStyle: {  backgroundColor: '#EE6670',},
          headerTintColor: 'white', headerTitleStyle: { fontWeight: 'bold' },  }} />
      <Stack.Screen name="Miracles" component={Miracles} options={{headerStyle: {  backgroundColor: '#EE6670',},
          headerTintColor: 'white', headerTitleStyle: { fontWeight: 'bold' },  }} />
      <Stack.Screen name="Thankful" component={Thankful} options={{headerStyle: {  backgroundColor: '#EE6670',},
          headerTintColor: 'white', headerTitleStyle: { fontWeight: 'bold' },  }}/>
      <Stack.Screen name="Prayer" component={Prayer}options={{headerStyle: {  backgroundColor: '#EE6670',},
          headerTintColor: 'white', headerTitleStyle: { fontWeight: 'bold' },  }} />
      <Stack.Screen name="Hope" component={Hope} options={{headerStyle: {  backgroundColor: '#EE6670',},
          headerTintColor: 'white', headerTitleStyle: { fontWeight: 'bold' },  }}/>
      <Stack.Screen name="Love" component={Love}options={{headerStyle: {  backgroundColor: '#EE6670',},
          headerTintColor: 'white', headerTitleStyle: { fontWeight: 'bold' },  }} />
      <Stack.Screen name="Inspirational" component={Insprational} options={{headerStyle: {  backgroundColor: '#EE6670',},
          headerTintColor: 'white', headerTitleStyle: { fontWeight: 'bold' },  }} />
      <Stack.Screen name="Fear" component={Fear} options={{headerStyle: {  backgroundColor: '#EE6670',},
          headerTintColor: 'white', headerTitleStyle: { fontWeight: 'bold' },  }}/>
      <Stack.Screen name="Forgiveness" component={Forgaveness}options={{headerStyle: {  backgroundColor: '#EE6670',},
          headerTintColor: 'white', headerTitleStyle: { fontWeight: 'bold' },  }} />
      <Stack.Screen name="Healing" component={Healling} options={{headerStyle: {  backgroundColor: '#EE6670',},
          headerTintColor: 'white', headerTitleStyle: { fontWeight: 'bold' },  }}/>
    </Stack.Navigator>
  );
}




function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <Custommenu {...props} />}>
        <Drawer.Screen name="HomeStack" component={HomeStack} options={{ headerShown: false }} />
        <Drawer.Screen name="About Me" component={AboutScreen}options={({ navigation }) => ({
    headerStyle: { backgroundColor: '#EE6670' },
    headerTintColor: 'white',
    headerTitleStyle: { fontWeight: 'bold' },
    headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <AntDesign name= "arrowleft" size={30} color="white" />
            </TouchableOpacity>
          ),
        })} />
        <Drawer.Screen
  name="Contact Me"
  component={ContactScreen}
  options={({ navigation }) => ({
    headerStyle: { backgroundColor: '#EE6670' },
    headerTintColor: 'white',
    headerTitleStyle: { fontWeight: 'bold' },
    headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <AntDesign name= "arrowleft" size={30} color="white" />
      </TouchableOpacity>
    ),
  })}
/>
    
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
