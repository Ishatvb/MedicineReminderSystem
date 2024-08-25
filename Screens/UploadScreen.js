import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import DocumentPicker from 'react-native-document-picker';

export default function App() {
    const selectDoc = async () => {
        try {
            const doc = await DocumentPicker.pick({
                type: [DocumentPicker.types.images],
                allowMultiSelection: true
            });
            console.log(doc);
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log("User cancelled the upload", err);
            } else {
                console.log(err);
            }
        }
    };

    return (
        <>
            <View>
                <Text style={styles.textStyle1}> Medicine Reminder </Text>
            </View>
            <View>
                <Text style={styles.textStyle2}> Please upload your Prescription </Text>
            </View>
            <View style={{ marginHorizontal: 40 }}>
                <Button
                    style={[styles.buttons, { backgroundColor: 'cyan' }]}
                    textColor='black'
                    labelStyle={{ fontSize: 20 }}
                    onPress={selectDoc}
                >
                    Select Image
                </Button>
            </View>
        </>
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import DocumentPicker from 'react-native-document-picker';

export default function App() {
    const selectDoc = async () => {
        try {
            const doc = await DocumentPicker.pick({
                type: [DocumentPicker.types.images],
                allowMultiSelection: true
            });
            console.log(doc);
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log("User cancelled the upload", err);
            } else {
                console.log(err);
            }
        }
    };

    return (
        <>
            <View>
                <Text style={styles.textStyle1}> Medicine Reminder </Text>
            </View>
            <View>
                <Text style={styles.textStyle2}> Please upload your Prescription </Text>
            </View>
            <View style={{ marginHorizontal: 40 }}>
                <Button
                    style={[styles.buttons, { backgroundColor: 'cyan' }]}
                    textColor='black'
                    labelStyle={{ fontSize: 20 }}
                    onPress={selectDoc}
                >
                    Select Image
                </Button>
            </View>
        </>
    );
}

export default UploadScreen;