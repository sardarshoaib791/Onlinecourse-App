import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import About from './src/screens/About';
import Contact from './src/screens/Contact';
import Course from './src/screens/Course';
import UserData from './src/screens/UserData';
import AppLoading from 'expo-app-loading';

import { 
  useFonts,
  JosefinSans_100Thin,
  JosefinSans_200ExtraLight,
  JosefinSans_300Light,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_600SemiBold,
  
} from '@expo-google-fonts/josefin-sans'



export default function App() {


  
  let [fontsLoaded] = useFonts({
    
  JosefinSans_100Thin,
  JosefinSans_200ExtraLight,
  JosefinSans_300Light,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_600SemiBold,
  
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* home scree */}
        <Stack.Screen name='Home' options={{headerTitleStyle:{
          fontSize:25,
          headerTitleAlign:'center' ,
          fontFamily:'JosefinSans_500Medium',

        },
        headerTitleAlign:"center",
        headerTitle:'Home'
        }}>
         { (props)=><Home{...props} MyProps={"Props test"} />}
        </Stack.Screen>

      {/* Course sscreen */}
      <Stack.Screen name='Course' component={Course} options={{headerTitleStyle:
      {
        fontSize:25,
        headerTitleAlign:'center' ,
        fontFamily:'JosefinSans_500Medium',
      },
      headerTitleAlign:"center",
      headerTitle:'Courses'}}
      />


      {/*  contact screen */}
      <Stack.Screen name='Contact' component={Contact}  options={{headerTitleStyle:
      {
        fontSize:25,
        headerTitleAlign:'center',
        fontFamily:'JosefinSans_500Medium',
      },
      headerTitleAlign:"center",
      headerTitle:'Contact Us'}}/>


      {/* About sscreen */}
      <Stack.Screen name='About' component={About}  options={{headerTitleStyle:
      {
        fontSize:25,
        headerTitleAlign:'center',
        fontFamily:'JosefinSans_500Medium',
      },
      headerTitleAlign:"center",
      headerTitle:'About'}}/>

      
      {/* Userdat sscreen */}
      <Stack.Screen name='UserData' component={UserData} options={{headerTitleStyle:
      {
        fontSize:25,
        headerTitleAlign:'center',
        fontFamily:'JosefinSans_500Medium',
      },
      headerTitleAlign:"center",
      headerTitle:'User data'}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );

}
