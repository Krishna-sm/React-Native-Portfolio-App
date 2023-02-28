import React, { useState } from 'react';
import { Linking, TouchableOpacity } from 'react-native';
import { View, StyleSheet, Text, Image } from 'react-native';

const About = () => {
    const [like,setLike]=useState(false);
    return (
        <View style={styles.AboutContainer}>
            <Text style={styles.mainHeader} >Krishna Bansal</Text>
            <Text style={styles.descrptionTtitle} >
                I am a full Stack Developer 🧑‍🦰
            </Text>
            <View>
                <TouchableOpacity>
                <Image 
                style={styles.imgStyle}
                source={{uri:"https://i.pinimg.com/236x/52/c7/b1/52c7b1d584bfbb62f1f1b36d5bd820c1.jpg"}}

                />
                </TouchableOpacity>
              
            </View>
            <View style={styles.AboutLayout}>
                <Text style={styles.aboutSubHeader}>
                    About Me<TouchableOpacity onPress={()=>setLike((pre)=>!pre)} >
                    <Text style={styles.like}>{like?'❤️‍🔥':"❤️"}</Text>
                </TouchableOpacity>
                </Text>
                <Text style={styles.paraStyle}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolore eaque nobis ex, porro aliquid nesciunt sequi tempore cum debitis doloremque molestias ipsum?
                </Text>

            </View>

            <Text style={styles.mainHeader}>Follow me On Social Network</Text>
            <View style={styles.menuContainer}>
                <TouchableOpacity style={styles.buttonStyle} onPress={()=>Linking.openURL('https://www.instagram.com/krishna_agrawal_____/')}>
                    <Image style={styles.iconStyle}
                        source={{uri:"https://cdn-icons-png.flaticon.com/128/2111/2111463.png"}}
                    /> 
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonStyle} onPress={()=>Linking.openURL('https://github.com/krishna-sm')}>
                    <Image style={styles.iconStyle}
                        source={{uri:"https://cdn-icons-png.flaticon.com/128/270/270798.png"}}
                    /> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={()=>Linking.openURL('mailto:kana.sonkh@gmail.com')}>
                    <Image style={styles.iconStyle}
                        source={{uri:"https://cdn-icons-png.flaticon.com/128/732/732200.png"}}
                    /> 
                </TouchableOpacity>
</View>

        </View>
    );
}

const styles = StyleSheet.create({
    AboutContainer:{
        display:'flex',
        alignItems:"center"
    },
    imgStyle:{
        width:150,
        height:150,
        borderRadius:100
    },
    mainHeader:{
        fontSize:30,
        marginVertical:20,
        fontWeight:500,
        color:"purple",
        textAlign:"center",
        textTransform:"uppercase",
        fontFamily:"JosefinSans_400Regular"
      },
      descrptionTtitle:{
        fontSize:20,
  fontFamily:"Nunito_600SemiBold",
  padding:10
      },
      paraStyle:{
        fontSize:18,
        color:"#7d7d7d",
        paddingBottom:30
      },
      aboutSubHeader:{
        textAlign:"center",
        fontSize:30,
        fontFamily:"JosefinSans_400Regular",
        marginTop:10
        
      },
      paraStyle:{
        paddingHorizontal:10,
        marginVertical:10,
        fontFamily:"JosefinSans_500Medium",
        textTransform:"capitalize"
       
      },
      iconStyle:{
        width:"30%",
        height:undefined,
        aspectRatio:1
      },
      menuContainer:{
        paddingLeft:30,
        marginTop:30,
        width:"100%",
        flexDirection:"row",
          justifyContent:"flex-end"
      },
      like:{
        fontSize:30,
        paddingTop:10,
        textAlign:"center",
        
      }
})

export default About;
