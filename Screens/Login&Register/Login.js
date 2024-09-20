import { View, Text ,Image, TouchableOpacity, ScrollView} from "react-native"
import styles from "./style";
import { TextInput } from "react-native-paper";
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Error from 'react-native-vector-icons/MaterialIcons';
import axios from "axios";
import { Alert } from "react-native";
import { useEffect } from "react";


function LoginPage(){
    const navigation=useNavigation();

    // State variables for form fields
    const [mobile, setMobile] = useState('');
    const [mobileVerify, setMobileVerify] = useState(false);

    const [password, setPassword] = useState('');
    const [passwordVerify, setPasswordVerify] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    // Validation functions

    function handleMobile(e) {
        const mobileVar = e.nativeEvent.text;
        setMobile(mobileVar);
        setMobileVerify(false);
        // Mobile number should be exactly 10 digits
        if(/[6-9]{1}[0-9]{9}/.test(mobileVar)){
            setMobile(mobileVar);
            setMobileVerify(true);
        }
    }
    
    function handlePassword(e) {
        const passwordVar = e.nativeEvent.text;
        setPassword(passwordVar);
        setPasswordVerify(false);
        // Password should be at least 6 characters long
        if(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(passwordVar)){
            setPassword(passwordVar);
            setPasswordVerify(true); 
        }
    }


    function handleSubmit(){
        console.log(mobile, password);
        const userData = {
            mobile: mobile,
            password: password,
        };

        axios.post('http://192.168.17.54:5001/login-user', userData).then(res => {
        console.log(res.data);
        if (res.data.status == 'ok') {
            Alert.alert('Logged In Successfull');
            // AsyncStorage.setItem('token', res.data.data);
            // AsyncStorage.setItem('isLoggedIn', JSON.stringify(true));
            // AsyncStorage.setItem('userType',res.data.userType)
            navigation.navigate('MainTabs');
            // if(res.data.userType=="Admin"){
            //     navigation.navigate('AdminScreen');
            // }else{
            //     navigation.navigate('Home');
            // }
        }
      });
    }
    // async function getData() {
    //   const data = await AsyncStorage.getItem('isLoggedIn');
      
    //   console.log(data, 'at app.js');
    
    // }
    // useEffect(()=>{
    //   getData();
    //   console.log("Hii");
    // },[])

    return(
        <ScrollView 
        contentContainerStyle={{flexGrow:1}} 
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always">
        <View>
            <View style={styles.logoContainer}>
                <Image 
                style={styles.logo} 
                source={require('../../Assests/png/logo-color.png')}>
                </Image>
            </View>
            <View style={styles.loginContainer}>
                <Text style={styles.text_header}>Login</Text>

                <View style={styles.action}>
                    <FontAwesome name="lock" color="#420475" style={styles.smallIcon}></FontAwesome>
                    <TextInput placeholder="Mobile Number" 
                    style={styles.textInput}
                    onChange={e=>handleMobile(e)}
                    maxLength={10}></TextInput>

                    {mobile.length <1 ? null : mobileVerify?(
                        <Feather name="check-circle" color="green" size={20}/>
                    ) : (
                        <Error name="error" color="red" size={20}/> 
                    )}
                </View>
                {mobile.length <1 ? null : mobileVerify? null : (
                        <Text
                        style={{
                            marginLeft: 20,
                            color: 'red',
                        }}>Mobile number starting with 6-9 and should be of 10 digits.</Text>
                    )}

                <View style={styles.action}>
                    <FontAwesome name="lock" color="#420475" style={styles.smallIcon}></FontAwesome>
                    <TextInput placeholder="Password" 
                    style={styles.textInput}
                    onChange={e=>handlePassword(e)}
                    secureTextEntry={showPassword}></TextInput>
                    <TouchableOpacity onPress={()=>setShowPassword(!showPassword)}>
                        {password.length < 1 ? null:!showPassword?
                        <Feather
                            name="eye-off"
                            style={{marginRight: -10}}
                            color={passwordVerify? 'green' : 'red'}
                            size={23}
                            /> : <Feather
                            name="eye"
                            style={{marginRight: -10}}
                            color={passwordVerify? 'green' : 'red'}
                            size={23}/>
                        }
                    </TouchableOpacity>  
                </View> 
                {password.length <1 ? null : passwordVerify? null : (
                        <Text
                        style={{
                            marginLeft: 20,
                            color: 'red',
                        }}>Atleast 1 uppercase, lowercase and number. Password should be of atleast 6 characters.</Text>
                    )} 

                <View 
                style={{
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                    marginTop: 8,
                    marginRight: 10,
                }}>
                    <Text style={{color: '#000', fontWeight: '700'}}>
                        Forgot Password
                    </Text>
                </View>
            </View>

            <View style={styles.button}>
                <TouchableOpacity style={styles.inBut} onPress={()=>handleSubmit()}>
                    <View>
                        <Text style={styles.textSign}>Log In</Text>
                    </View>
                </TouchableOpacity>
                <View style={{padding: 15}}>
                    <TouchableOpacity 
                    onPress={()=>{
                        navigation.navigate('Register');
                    }}>
                        <View>
                            <Text style={{fontSize: 14, fontWeight: 'Bold', color: '#000'}}>
                                Don't have an account, Register Here!
                            </Text>                    
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        
        </View>
        </ScrollView>
    )
}

export default LoginPage;