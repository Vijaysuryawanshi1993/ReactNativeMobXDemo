import React, { Component } from 'react';
import { View, TouchableOpacity, Text, PermissionsAndroid, Linking } from 'react-native';
// import { observer } from 'mobx-react';
import { GoogleSignin, statusCodes } from "react-native-google-signin"
import { requestWriteStoragePermission, requestReadStoragePermission } from "../../common";
import { observer, inject } from 'mobx-react';
class Home extends React.Component {
    constructor(props) {
        super(props);

        this.checkPermission();
    }

    // check storage permission
    checkPermission = () => {
        PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE).then((writeGranted) => {
            console.log('writeGranted', writeGranted)
            if (!writeGranted) {
                requestWriteStoragePermission()
            }
            PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE).then((readGranted) => {
                console.log('readGranted', readGranted)
                if (!readGranted) {
                    requestReadStoragePermission()
                }
            })
        })
    }


    onFetchPress = async () => {
        GoogleSignin.configure({
            scopes: ['https://www.googleapis.com/auth/drive.appdata'],
            shouldFetchBasicProfile: true,
        });

        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            const currentUser = await GoogleSignin.getTokens();
            console.log("userInfo", userInfo)
            console.log("accessToken", currentUser);

            Linking.openURL("https://drive.google.com/drive/u/1/folders/159Hwm6c1H0NNyl0DEuas5ZW0itZ3dQXR"); //temp fix
            await this.props.store.getAPIdata({ currentUser }); //mobX store api call
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
                console.log("SIGN_IN_CANCELLED")
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
                console.log("IN_PROGRESS")
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
                console.log("PLAY_SERVICES_NOT_AVAILABLE")
            } else {
                // some other error happened
            }
        }

    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <TouchableOpacity style={{ padding: 20, width: "80%", marginVertical: 10, borderWidth: 1, borderColor: "gray", alignItems: "center", justifyContent: "center" }} onPress={this.onFetchPress}><Text>Fetch Files</Text></TouchableOpacity>
                <TouchableOpacity style={{ padding: 20, width: "80%", borderWidth: 1, borderColor: "gray", alignItems: "center", justifyContent: "center" }} onPress={this.onUploadPress}><Text>Upload Files From Device</Text></TouchableOpacity>
            </View>
        );
    }
}

export default inject("store")(observer(Home));