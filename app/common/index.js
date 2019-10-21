import { PermissionsAndroid } from 'react-native';
//require read storage permission
export async function requestWriteStoragePermission() {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
                'title': 'app wants to access your storage',
                'message': 'Write your android storage to save your data'
            }
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can write storage")
        } else {
            console.log("Write Storage permission denied")
        }
    } catch (err) {
        console.warn(err)
    }
}



//require read storage permission
export async function requestReadStoragePermission() {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            {
                'title': 'Read your android storage Permission',
                'message': 'Read your android storage to save your data'
            }
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can Read storage")
        } else {
            console.log("Read Storage permission denied")
        }
    } catch (err) {
        console.warn(err)
    }
}