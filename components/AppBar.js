import React from 'react';
import  {
  PropTypes,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import NavBar from 'react-native-router-flux/src/NavBar';

export default class AppNavBar extends NavBar {
    static contextTypes = {
        drawer: React.PropTypes.object
    };

    _renderLeftButton() {
        return (
            <TouchableOpacity onPress={this.context.drawer.open}>
                <Text>Test</Text>
            </TouchableOpacity>
        );
    }

    render() {
        const state = this.props.navigationState;
        return (
            <Animated.View
                style={[styles.header, state.navigationBarStyle]}>
                {state.children.map(this._renderTitle, this)}
                {this._renderBackButton()}
                {this._renderLeftButton()}
                {this._renderRightButton()}
            </Animated.View>
        );
    }
}
