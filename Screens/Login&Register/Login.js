import { View, Text ,Image, TouchableOpacity} from "react-native"
import styles from "./style";
import { TextInput } from "react-native-paper";
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function LoginPage(){
    return(
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
                    <FontAwesome name="user-o" color="#420475" style={styles.smallIcon}></FontAwesome>
                    <TextInput placeholder="Mobile" style={styles.textInput}></TextInput>
                </View> 
                <View style={styles.action}>
                    <FontAwesome name="lock" color="#420475" style={styles.smallIcon}></FontAwesome>
                    <TextInput placeholder="Password" style={styles.textInput}></TextInput>
                </View> 
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
                <View style={styles.button}>
                    <TouchableOpacity style={styles.inBut}>
                        <View>
                            <Text style={styles.textSign}>Log In</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default LoginPage;