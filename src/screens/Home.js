import React, { useState } from 'react';
import { Image, StyleSheet, Text, View,ScrollView, TouchableOpacity } from 'react-native';
import Logo from '../../assets/myPhoto.jpg';
import Menu from '../components/Menu';

const Home = ({route,navigation}) => {
  const [like,setLike]=useState(false);
    const para="I am Full Stack Web Developer 😎 and i Curruntly Study in Rajiv Acadmy Technology and Managament Mathura 🏠";
    return (
     <ScrollView>
      <View style={styles.mainContainer}>
     <View style={styles.homeTop}>
      <Image resizeMode='cover' style={styles.headerImage} source={Logo}  />
      <Text style={styles.mainHeader} >Welcome To</Text>
      <Text style={[styles.mainHeader,{fontSize:33,color:"#4c5dab",marginTop:0}]} >{route.params.name} /&gt;  </Text>
      <TouchableOpacity onPress={()=>setLike((pre)=>!pre)} >
                    <Text style={styles.like}>{like?'❤️‍🔥':"❤️"}</Text>
                </TouchableOpacity>
      <Text style={styles.paraStyle} >{para}</Text>
  
  </View>
          <View style={styles.menuStyle}>
            <View style={styles.lineStyle}></View>
            <Menu/>
            <View style={[styles.lineStyle,{
              marginVertical:10
            }]}></View> 
          </View>
     </View>
     </ScrollView>
    );
  }
  export default Home;
  const styles = StyleSheet.create({
    mainContainer: {
      display:"flex",
      backgroundColor: '#fff',
      height:"100%",
      paddingHorizontal:20,
      textAlign:'center'
    },
    headerImage:{
      height:undefined,
      width:"100%",
      aspectRatio:1,
      alignItems:"stretch",
      marginTop:50,
      borderRadius:20
    },
    homeTop:{
      display:'flex',
      justifyContent:"center",
      alignItems:"center",
      paddingHorizontal:10,
     
    },
    mainHeader:{
      fontFamily:"JosefinSans_600SemiBold",
      marginTop:10,
      fontSize:30,
      fontWeight:'bold',
      textTransform:"uppercase",
      color:"#4c5dab",
    },
    paraStyle:{
      marginTop:50,
      fontSize:19,
      textAlign:"left",
      color:"#7d7d7d",
      paddingBottom:50,
      lineHeight:26,
      fontFamily:"JosefinSans_400Regular"
    },
    lineStyle:{
      marginBottom:30,
      borderWidth:0.5,
      borderColor:"grey"
    },
    like:{
      fontSize:30,
      paddingTop:10,
      textAlign:"center",
      
    }
  });
