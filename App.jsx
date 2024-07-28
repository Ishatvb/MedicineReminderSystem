import { StyleSheet, View, Text, TextInput } from 'react-native'
import { Button } from 'react-native-paper';
import CustomText from './Components/CustomText';
import Loading from './Components/Loading';
import TextInputExample from './Components/TextForm';
import SimpleList from './Components/Simplelist';
import { useState } from 'react';

function App() {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState(false);
    const [list, setList] = useState(false);

    function showComponents(title){
        if (title=='loading'){
            setLoading(true);
            setForm(false);
            setList(false);
        }
        else if(title=='form'){
            setLoading(false);
            setForm(true);
            setList(false);
        }
        else if(title=='list'){
            setLoading(false);
            setForm(false);
            setList(true);
        }
        else{
            setLoading(true);
            setForm(true);
            setList(true);
        }        
    }
    return (
        <View style={styles.bgColor}>
            <View>
                <Text style={styles.textStyle}>Demo of Components</Text>
            </View>
            <View>
                <Button style={[styles.buttons, { backgroundColor: 'red' }]}
                    textColor='white'
                    labelStyle={{ fontSize: 20 }}
                    onPress={()=> showComponents('loading')}
                    >
                    Show Loading
                </Button>
                <Button style={[styles.buttons, { backgroundColor: 'blue' }]}
                    textColor='white'
                    labelStyle={{ fontSize: 20 }}
                    onPress={()=> showComponents('form')}
                    >
                    Show Form
                </Button><Button style={[styles.buttons, { backgroundColor: 'green' }]}
                    textColor='white'
                    labelStyle={{ fontSize: 20 }}
                    onPress={()=> showComponents('list')}
                    >
                    Show Flatlist
                </Button>
                <Button style={[styles.buttons, { backgroundColor: 'black' }]}
                    textColor='white'
                    labelStyle={{ fontSize: 20 }}
                    onPress={()=> showComponents('')}
                    >
                    Show All
                </Button>
            </View>
            <View>
                {loading? <Loading></Loading>:""}
                {form? <TextInputExample></TextInputExample>:""}
                {list? <SimpleList></SimpleList>:""}
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
        marginTop: 20,
        marginBottom:20
    },
    buttons: {
        width: '100%',
        borderRadius: 3,
        marginBottom: 15,
    },
    bgColor: {
        backgroundColor: 'white'
    },
})



export default App;