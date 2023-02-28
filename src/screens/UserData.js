import { View, Text, FlatList,StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function UserData() {
  const [isLoaded,setIsloaded]=useState(true);
  const [data,setData]=useState([]);
  const getUserData=async()=>{
   try {
    const res=await fetch('https://thapatechnical.github.io/userapi/users.json');
    const realDta=await res.json();
    setData(realDta);
    setIsloaded(false);
   } catch (error) {
      console.log(error.message)
   }
  }
  useEffect(()=>{
    getUserData();
  },[])
  const showUserData=({item})=>{
    console.log(item)
    return <View style={styles.card}>
        <View style={styles.imgContainer}>
          <Image style={styles.imgStyle}  source={{uri:item.image}}/>
        </View>
        <View style={{}}>
        <View style={styles.bioDataContainer}>
          <Text style={styles.bioData}>Bio Data</Text>
          <Text style={styles.idNumber}>
            {item.id<10?`#0${item.id}`:`${item.id}`}
          </Text>
        </View>
        <View style={styles.mainContent}>
          <Text style={styles.myName}>Name: {item.name} </Text>
          <Text style={styles.myName}>Email: {item.email} </Text>
          <Text style={styles.myName}>Mobile: {item.mobile} </Text>
        </View>

        </View>
    </View>
  }

  return (
    <View>
      <Text style={styles.mainHeader} >Team 👦</Text>
      <FlatList
      showHorizontalScrollIndicator={false}
      horizontal
      
      data={data}
      renderItem={showUserData}
      />
    </View>
  )
}

const styles=StyleSheet.create({
    mainContainer:{
      width:"100%",
      minHeight:"100%",
      paddingVertical:50,
      backgroundColor:"#ebedee"
    },
    card:{
      width:250,
      height:"100%",
      backgroundColor:"#fff",
      borderRadius:5,
      margin:20
    },
    bioDataContainer:{
      width:"100%",
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      backgroundColor:"#353535",
      paddingVertical:10,
      fontFamily:"JosefinSans_400Regular",
    padding:8
    },
    idNumber:{
      fontSize:30,
      color:"#fff",
      fontFamily:"JosefinSans_400Regular"
    },
    bioData:{
      fontSize:30,
      color:"#fff",
      fontFamily:"JosefinSans_400Regular"

    },
    mainHeader:{
      fontSize:30,
      marginVertical:20,
      color:"purple",
      textAlign:"center",
      fontFamily:"JosefinSans_400Regular"
    },
    imgContainer:{
      padding:10
    },
    imgStyle:{
      width:"100%",
      height:undefined,
      aspectRatio:1
    },
    mainContent:{
      padding:10,
      backgroundColor:"#353535",
      borderBottomRightRadius:5,
      borderBottomRightRadius:5
    },
    myName:{
      fontSize:14,
      color:"#fff",
      marginBottom:10,
      alignItems:"flex-start",
      textTransform:"capitalize",
      fontFamily:"JosefinSans_400Regular"
    }
   


});