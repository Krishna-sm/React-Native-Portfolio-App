import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const Contact = ({navigation}) => {
    const [name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [mobile, setmobile] = useState('');
    const [msg, setMsg] = useState('');
    const [check, setCheck] = useState(false);
    
    const submitHandler=()=>{
        if(name=='' || Email=='' ||  mobile=='' || msg=='')
        {
            Alert.alert("Error","Fill All Feilds")
        }
        else{
            Alert.alert("Success",`Thanku ${name}`);
            navigation.navigate("Home")
        }
    }
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.mainHeader}>Know More About me   </Text>
            <Text style={styles.description}>you can reach me anytime via kana.sonkh@gmail.com </Text>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Enter Your Name</Text>
                <TextInput style={styles.input} placeholder='Enter Name' keyboardType='default' value={name} onChangeText={setName} />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Enter Your Email</Text>
                <TextInput style={styles.input} placeholder='Enter Email' keyboardType='email-address' value={Email} onChangeText={setEmail} />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Enter Your Mobile No.</Text>
                <TextInput style={styles.input} placeholder='000000000' keyboardType='numeric' value={mobile} onChangeText={setmobile} />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Enter Your Message</Text>
                <TextInput multiline={true} numberOfLines={5} style={[styles.input,styles.multilineStyle]} placeholder='Tell us About Your Self' keyboardType='default' value={msg} onChangeText={setMsg} />
            </View>
      
          
                
            <View style={styles.wrapper}>
<Checkbox value={check}
    onValueChange={setCheck}
    color={"#eb4034"}
/>
<Text style={styles.wrapperText}>Accept Terms and Condition</Text>
            </View>
            
            <TouchableOpacity 
            disabled={!check}
            onPress={submitHandler}
            style={[styles.ButtonStyles,{
                backgroundColor:check?'#4630EB':'grey'
            }]}
            
            >
                <Text style={styles.buttonText} >Contact Us</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer:{
        display:"flex",
        backgroundColor: '#fff',
        height:"100%",
        paddingHorizontal:20,
        textAlign:'center'

    },
    mainHeader:{
        fontSize:20,
        marginVertical:20,
        fontWeight:500,
        color:"purple",
        textAlign:"center",
        textTransform:"capitalize",
        fontFamily:"JosefinSans_400Regular"
    },
    description:{
        textAlign:"left",
        fontFamily:"Nunito_600SemiBold",
        lineHeight:30,
        fontSize:16,
        marginBottom:8
    },
    inputContainer:{
      marginTop:20,

    },
    labels:{
        fontWeight:"bold",
        color:"#7d7d7d",
        paddingBottom:5,
        lineHeight:25,
        fontFamily:"Nunito_700Bold",
        

    },
    input:{
        borderWidth:1,
        borderColor:"rgba(0,0,0,0.3)",
        paddingHorizontal:15,
        paddingVertical:6,
        borderRadius:2
    },
    multilineStyle:{
        paddingVertical:4
    },
    ButtonStyles:{
        borderRadius:5,
        paddingVertical:10,
        paddingHorizontal:10,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        marginVertical:30,

    },
    buttonText:{
        color:"white",
        fontFamily:"Nunito_700Bold"

    },
    wrapper:{
        display:"flex",
        flexDirection:"row",
        marginTop:20,
        fontFamily:"Nunito_700Bold"
    },
    wrapperText:{
        marginLeft:8,
        fontFamily:"Nunito_700Bold"

    }
})

export default Contact;
