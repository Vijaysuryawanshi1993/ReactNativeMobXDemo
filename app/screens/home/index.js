import React from 'react';
import { observer, inject } from 'mobx-react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    View,
    Text,
    StatusBar,
} from 'react-native';

@observer
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.onGetDriveDataPress = this.onGetDriveDataPress.bind(this);
    }
    onGetDriveDataPress() {
        // this.props.
    }
    componentDidMount() {
        this.props.CountryStore.getCountriesAsync();
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <TouchableOpacity onPress={this.onGetDriveDataPress}>
                    <Text>
                        Get Data From Google Drive
                    </Text>
                </TouchableOpacity>

            </View>
        );
    }
}

export default Home;