import { StyleSheet, Text, View,FlatList,Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Courses from "../api/Courses";



const Course = () => {
const courseCard=({item})=>{

  // item.image, item.title no, image, title
    return(
      <View style={styles.mainContainer}>
      <View style={styles.courseContainer}>
        <View  >

          <Image
          style={styles.cardImage}
          source={item.image}
          // resizeMode="contain"
          />


        </View>
        <Text style={styles.mainHeader}>
          {item.title}
        </Text>
        <Text style={styles.Discriptionstyle}>

          {item.discription}
        </Text>

        <View style={styles.buttonStyle}>
          <TouchableOpacity style={styles.buttonStylect} 
          >
            <Text style={styles.buttonText}>Course details</Text>

          </TouchableOpacity>

          
        </View>



      </View>
      </View>
      
    )

  }

  return (
    <FlatList 
    keyExtractor={(item)=>item.id}
    data={Courses}
    renderItem={courseCard}
    />
  )
}
const styles = StyleSheet.create({
  cardImage:{
    width:'100%',
    height:undefined,
    aspectRatio:1,
    borderRadius: 5,

  },
  Discriptionstyle:{
    
  },
  
 buttonText:{
  color:"blue",

 },
 mainContainer:{
  paddingHorizontal: 20,
  

 },
 courseContainer:{
  padding: 30,
  backgroundColor: "rgba(255, 255, 255, 0.90)",
  textAlign: 'center',
  borderRadius: 5,
  shadowColor:'grey',
  shadowOffset:{width: 0, heigh: 0},
  shadowOpacity: 0.5,
  shadowRadius: 8,
  elevation: 8,
  marginVertical:30,
 },
 mainHeader:{
  fontSize: 22,
  color:"#344055",
  textTransform: "uppercase",
  paddingBottom:20,
  paddingTop:15,
  textAlign:"center",
  fontFamily:"JosefinSans_500Medium",
 },
 Discriptionstyle:{
  textAlign:"left",
  fontFamily:"JosefinSans_400Regular",
  lineHeight:15,
  fontSize:16,
  

 },
 buttonStyle:{
    color:"blue",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    
  
  },
 buttonStylect:{
  backgroundColor:"skyblue",
  borderBottomRightRadius:5,
  borderTopRightRadius:5,
  paddingVertical:10,
  paddingHorizontal:18,
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
 }
})

export default Course
