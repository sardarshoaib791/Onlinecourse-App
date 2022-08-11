import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Menu from '../component/Menu';
import Ionicons from '@expo/vector-icons/Ionicons';


const Home = (props) => {
  const description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";

  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Image 
        style={styles.headerImage}
        resizeMode="contain"
        source={require("../../assets/logo.png")}/>
        <Text style={styles.mainHeader}>Welcom to JTSSK</Text>
        <Text style={[styles.mainHeader,
        {
          fontSize: 33,
          color:'blue',
          marginTop: 0

        }
        ]}>{props.MyProps}</Text>

<Text style={styles.paraStyle}>{description}</Text>



      </View>
      <View style={styles.menuStyle}>
        <View style={styles.lineStyle}></View>
        <Menu/>
        <View style={[styles.lineStyle,{marginTop:10,}]}></View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create(
  {
  mainContainer:{
   height: "100%",
  display:'flex',
  justifyContent:'space-between',
  paddingHorizontal: 20,
  backgroundColor:'#fff',
  textAlign:"center",
  },
  headerImage:{
    height:"40%",
    width:"100%",
    display:"flex",
    alignItems:"stretch",
    marginTop:50,
    borderRadius:20,
  },
  homeTop: {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    paddingHorizontal: 10,
  },
  mainHeader:{
    fontSize:30,
    color:"#344055",
    textTransform:"uppercase",
    marginTop:10,
  },
  paraStyle:{
    textAlign: "left",
    fontSize: 19,
    marginTop: 20,
    color:'#7d7d7d',
    paddingBottom: 50,
    lineHeight:26,
    

  },
  menuStyle:{
    // backgroundColor:'skyblue',
    position:'absolute',
    bottom:20,
    marginLeft:20,
    width:'100%',

    
    
   

    

  },
  lineStyle:{
    marginBottom:10,
    borderWidth:1,
    borderColor:"grey",
    
    
  },
  

  },
);

export default Home
