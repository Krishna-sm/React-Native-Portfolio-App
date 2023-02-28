
import { StyleSheet, Text, View,  Image, TouchableOpacity, FlatList } from 'react-native'

import React from 'react'
import skills from '../api/skills';

const SkillDetails = ({route,navigation}) => {
  const id=route.params.id;
  const data=skills.find((e)=>{
    return id===e.id
  })

  return <View style={styles.mainContainer} >
  <View style={styles.courseContainer} >
    <View>
      <Image style={[styles.cardImage]}
       source={{ uri: data.image }} resizeMode="contain"  />
    </View  >
   <View>
   <Text style={styles.mainHeader} >
      {data.title}
    </Text>
    
    <Text style={styles.description} >
      {data.description}
    </Text>
    <FlatList 
      data={data.skill}
      renderItem={({item})=>
      <Text style={[styles.description,{textAlign:"center"}]} >
      {item.title}
    </Text>
    }
    keyExtractor={(item)=>item.id}
    />


    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={
        ()=>navigation.goBack()
       
      }
       style={styles.buttonStyle}>
        <Text style={styles.buttonText}> &larr; Go Back </Text>
      </TouchableOpacity>
 
      {/* Student */}
    </View>
   </View>
  </View>

</View>
}

export default SkillDetails

const styles = StyleSheet.create({
  cardImage:{
    width:"100%",
    height:undefined,
    aspectRatio:1
  },
  mainContainer:{
      paddingHorizontal:20
  },
  courseContainer:{
    padding:30,
    backgroundColor:'rgba(255,255,255,0.90)',
    textAlign:"center",
    borderRadius:5,
    shadowOffset:{
      width:0,
      height:0
    },
    shadowColor:"grey",
    shadowOpacity:0.5,
    shadowRadius:8,
    elevation:8,
    marginVertical:30
  },
  mainHeader:{
    fontSize:22,
    color:"#344055",
    textTransform:"uppercase",
    fontWeight:500,
    paddingTop:15,
    paddingBottom:15,
    textAlign:"center",
    fontFamily:"JosefinSans_500Medium"
  },
  description:{
    textAlign:"left",
    fontFamily:"Nunito_600SemiBold",
    lineHeight:30,
    fontSize:16,
    marginBottom:8
  },
  buttonStyle:{
    backgroundColor:"#809fff",
   borderRadius:5,
    paddingVertical:10,
    paddingHorizontal:20,
    display:'flex',
    justifyContent:"center",
    alignItems:"center"
  },
  buttonText:{
    fontSize:20,
    color:"#eee",
    fontFamily:"JosefinSans_400Regular",
    textTransform:"capitalize"
  }
  

})