// import React from 'react';
// import { View, Text } from "react-native";
// import { Provider } from 'mobx-react';
// import appStore from './app/mobX/store/GoogleAPIStore'; //Added store to the app for data
// import Home from "./app/screens/home"
// export default class App extends React.Component {
//   render() {
//     return (
//       <Provider store={appStore}>
//         <Home />
//       </Provider>

//     );
//   }
// }

import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { observer } from 'mobx-react';
import { fetchStore, pushStore } from './app/mobX/store';

async function requestWriteStoragePermission() {
  try {
      const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
              'title': 'Write your android storage Permission',
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


/**
* * require read storage permission
*/
async function requestReadStoragePermission() {
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


class Home extends Component {
  componentDidMount() {
    // console.log(fetchStore.loadAll())
    // console.log(pushStore.loadAll());
    // console.log(fetchStore.all())
  }
  

  onFetchPress = () => { }

  render() {
    // if (fetchStore.loading) {
    //   return <Text>Loading…</Text>;
    // } else {
    //   return (
    //     <View>
    //       <Text>{"Demo"}</Text>
    //       {/* <FlatList
    //       data={restaurantStore.all().slice()}
    //       keyExtractor={(item) => item.id}
    //       renderItem={({ item: restaurant }) => (
    //         <View style={{
    //           flex: 1,
    //           flexDirection: 'row',
    //           justifyContent: 'space-between',
    //           alignItems: 'center',
    //         }}>
    //           <Text>{restaurant.attributes.name}</Text>
    //         </View>
    //       )}
    //     /> */}
    //     </View>
    //   )
    // }
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity style={{ padding: 20, width: "80%", marginVertical: 10, borderWidth: 1, borderColor: "gray", alignItems: "center", justifyContent: "center" }} onPress={this.onFetchPress}><Text>Fetch Files</Text></TouchableOpacity>
        <TouchableOpacity style={{ padding: 20, width: "80%", borderWidth: 1, borderColor: "gray", alignItems: "center", justifyContent: "center" }} onPress={this.onUploadPress}><Text>Upload Files From Device</Text></TouchableOpacity>
      </View>
    )
  }
}

export default observer(Home);