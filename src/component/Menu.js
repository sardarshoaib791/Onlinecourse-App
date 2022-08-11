import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons';

const Menu = () => {

const navigation= useNavigation();

  return (
    <View  style={styles.menuContainer}>
        <TouchableOpacity
            style={styles.buttonStyle}
            onPress={()=> navigation.navigate('About') }>
           <Ionicons name='md-checkmark-circle' size={32} color='green' />
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.buttonStyle}
            onPress={()=> navigation.navigate('Contact') }>
            <Text> Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.buttonStyle}
            onPress={()=> navigation.navigate('Course') }>
            <Text> Course</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.buttonStyle}
            onPress={()=> navigation.navigate('UserData') }>
            <Text style={styles.buttonStyle}> Userdata</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create(

    {

        menuContainer:{
            display: 'flex',
            flexDirection:'row',
            justifyContent:'space-evenly',
            
            
            
        },
        buttonStyle:{
            textTransform:'uppercase',
        }


    }



)

export default Menu