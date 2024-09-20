import { View, Text ,Image, TouchableOpacity, ScrollView, Alert} from "react-native"
import styles from "./style";
import { TextInput } from "react-native-paper";
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Error from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';

function RegisterPage(){
    

    // State variables for form fields
    const [name, setName] = useState('');
    const [nameVerify, setNameVerify] = useState(false);
    
    const [mobile, setMobile] = useState('');
    const [mobileVerify, setMobileVerify] = useState(false);
    
    const [age, setAge] = useState('');
    const [ageVerify, setAgeVerify] = useState(false);
    
    const [password, setPassword] = useState('');
    const [passwordVerify, setPasswordVerify] = useState(false);

    const[showPassword, setShowPassword] = useState(false);

    const navigation=useNavigation();

    function handleSubmit(){
        const userData = {
            name:name,
            age:age,
            mobile:mobile,
            password:password,
        };
        if(nameVerify && ageVerify && mobileVerify && passwordVerify){
            axios
        .post("http://192.168.17.54:5001/register",userData)
        .then(res =>{
            console.log(res.data);
            if (res.data.status == 'ok'){
                Alert.alert('Registered Successful!!!');
                navigation.navigate('Login');
            }
            else{
                Alert.alert(JSON.stringify(res.data));
            }
        })
        .catch(e => console.log(e));
        }
        else{
            Alert.alert("'Fill mandatory details.'")
        }
        
    }
    // Validation functions
    function handleName(e){
        const nameVar=e.nativeEvent.text;
        setName(nameVar);
        setNameVerify(false);

        if(nameVar.length>2){
            setNameVerify(true);
        }
    }

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

    function handleAge(e) {
        const ageVar = e.nativeEvent.text;
        setAge(ageVar);
        setAgeVerify(false);
        // Age should be a valid number between 1 and 120
        if(/^\d+$/.test(ageVar) && ageVar >= 1 && ageVar <= 120){
            setAge(ageVar);
            setAgeVerify(true);
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
                <Text style={styles.text_header}>Register</Text>
                <View style={styles.action}>
                    <FontAwesome name="user-o" color="#420475" style={styles.smallIcon}></FontAwesome>
                    <TextInput placeholder="Name" 
                    style={styles.textInput} 
                    onChange={e=>handleName(e)}></TextInput>
                
                    {name.length <2 ? null : nameVerify?(
                        <Feather name="check-circle" color="green" size={20}/>
                    ) : (
                        <Error name="error" color="red" size={20}/> 
                    )}
                    </View> 
                    {name.length <2 ? null : nameVerify? null : (
                        <Text
                        style={{
                            marginLeft: 20,
                            color: 'red',
                        }}>Name should be more than 2 characters.</Text>
                    )}

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
                    <FontAwesome name="user-o" color="#420475" style={styles.smallIcon}></FontAwesome>
                    <TextInput placeholder="Age" 
                    style={styles.textInput}
                    onChange={e=>handleAge(e)}></TextInput>
                    {age.length <1 ? null : ageVerify?(
                        <Feather name="check-circle" color="green" size={20}/>
                    ) : (
                        <Error name="error" color="red" size={20}/> 
                    )}
                </View> 
                {age.length <1 ? null : ageVerify? null : (
                        <Text
                        style={{
                            marginLeft: 20,
                            color: 'red',
                        }}>Age can be between 1 to 120 years only.</Text>
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
            </View>

            <View style={styles.button}>
                <TouchableOpacity 
                style={styles.inBut}
                onPress={()=> handleSubmit()}>
                    <View>
                        <Text style={styles.textSign}>Register</Text>
                    </View>
                </TouchableOpacity>
                <View style={{padding: 15}}>
                    <TouchableOpacity 
                    onPress={()=>{
                        navigation.navigate('Login');
                    }}>
                        <View>
                            <Text style={{fontSize: 14, fontWeight: 'Bold', color: '#000'}}>
                                Already have an account, Login Here!
                            </Text>                    
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        
        </View>
        </ScrollView>
    )
}

export default RegisterPage;