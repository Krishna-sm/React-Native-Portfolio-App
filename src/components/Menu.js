import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import {View, StyleSheet} from 'react-native';

const Menu = () => {
    const navigate=useNavigation();
    return (
        <View  style={styles.menuContainer}>
            <TouchableOpacity style={styles.ButtonStyle} 
                onPress={()=>navigate.navigate('Skills')}
                >
            {/* <Text style={styles.textStyle} >Skills</Text> */}
            <Image 
            style={styles.iconStyle}
            source={{uri:'https://img.icons8.com/stickers/90/000000/training.png'}}
            />
                        </TouchableOpacity>

            <TouchableOpacity style={styles.ButtonStyle} 
                onPress={()=>navigate.navigate('About')}
                >
             <Image 
            style={styles.iconStyle}
            source={{uri:'https://img.icons8.com/stickers/100/000000/about.png'}}
            />

            </TouchableOpacity>

            <TouchableOpacity style={styles.ButtonStyle} 
                onPress={()=>navigate.navigate('Contact')}
                >
           <Image 
            style={styles.iconStyle}
            source={{uri:'https://img.icons8.com/stickers/100/000000/phone-office.png'}}
            />

            </TouchableOpacity>

            <TouchableOpacity style={styles.ButtonStyle} 
                onPress={()=>navigate.navigate('Team')}
                >
           <Image 
            style={styles.iconStyle}
            source={{uri:'https://img.icons8.com/stickers/100/000000/group.png'}}
            />

            </TouchableOpacity>

          

           
        </View>
    );
}

const styles = StyleSheet.create({
    menuContainer:{
        flexDirection:"row",
        justifyContent:"space-evenly"
    },
    ButtonStyle:{},
    textStyle:{
        marginRight:25
    },
    iconStyle:{
        width:'100%',
        height:50,
        aspectRatio:1
    }
})

export default Menu;
