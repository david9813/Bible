import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet , ScrollView} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';


const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (

    <ScrollView style={styles.scrollView}> 

    <View style={styles.container}>
     
      <View style={styles.separator} />

      <TouchableOpacity
        style={styles.button} 
        onPress={() => navigation.navigate('Jesus')}>
        <Text style={styles.buttonText}>Jesus</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.button} 
        onPress={() => navigation.navigate('Miracles')}>
        <Text style={styles.buttonText}> Miracles </Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.button} 
        onPress={() => navigation.navigate('Thankful')}>
        <Text style={styles.buttonText}> Thankful</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button} 
        onPress={() => navigation.navigate('Prayer')}>
        <Text style={styles.buttonText}> Prayer </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button} 
        onPress={() => navigation.navigate('Hope')}>
        <Text style={styles.buttonText}> Hope </Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.button} 
        onPress={() => navigation.navigate('Love')}>
        <Text style={styles.buttonText}> Love </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button} 
        onPress={() => navigation.navigate('Inspirational')}>
        <Text style={styles.buttonText}> Inspirational</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button} 
        onPress={() => navigation.navigate('Fear')}>
        <Text style={styles.buttonText}> Fear</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button} 
        onPress={() => navigation.navigate('Forgiveness')}>
        <Text style={styles.buttonText}> Forgiveness</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button} 
        onPress={() => navigation.navigate('Healing')}>
        <Text style={styles.buttonText}>Healing </Text>
      </TouchableOpacity>

    </View>
    </ScrollView>
  );
};

const HomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
    backgroundColor: '#EE6670',
    height: 100
    
    
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontSize: 24,
          textAlign: 'center',
          alignItems: 'center'
        },
      }}
    >

      <Stack.Screen 
        name="MyBible" 
        component={HomeScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Ionicons name="menu" size={40} color="black" style={{ marginLeft: 15 }} />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <View style={styles.headerContainer}>
              
              <Text style={styles.headerTitle}>My Small Bible</Text>
           
            </View>
          ),
         
        })}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    margin: 0,
    marginTop:0,
    backgroundColor: '#F8F3D4'
   
  },
  button: {
    backgroundColor: '#33C5BF',
    
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 10,
    width: '100%',
    marginBottom: 10,
    alignItems: 'center',
    alignContent: 'center',


    shadowColor: '#000',
    shadowOffset: { width: 10, height: 20 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
   
   

  },
  buttonText: {
    color: 'white',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      textShadowColor: 'black',
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 2
  },
  separator: {
    height: 10,
   
  },

  headerTitle: {
    fontSize: 24,
  
    textAlign: 'center',

    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    color: 'white'

   
  },

  headerContainer: {
    


  }
 
});

export default HomeStack;
