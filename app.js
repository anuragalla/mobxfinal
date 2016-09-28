import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  StatusBar,
  Platform,
  Text,
  View
} from 'react-native';
import {Router, Scene} from 'react-native-mobx';
import {observer} from 'mobx-react/native';
import Drawer from './components/SideDrawer';
import PageOne from './components/PageOne';
// import AppBar from './components/AppBar'
import NavBar from 'react-native-router-flux/src/NavBar';
// view and model for Counter scene
//import Counter from './components/Counter';
import TopTabBar from './components/TopTabBar';
import store from './model/counter';

@observer
class App extends Component{
	constructor(){
		super();
	}
	closeControlPanel = () => {
	    this._drawer.close()
	};
	openControlPanel = () => {
	    this._drawer.open()
	};
	renderMenuButton = () => {
        return (
             <Button style={{fontSize: 30,color:'#fff'}} onPress={store.increase}>Mybutton</Button>
        );
    };

	render(){
	return(
		<View style={styles.container}>
		  
		  	<StatusBar barStyle="light-content" />
		  		  <View style={styles.statusbar} />
		  	 	 {/*<View style={styles.appbar}></View>*/}
		  		
		  <Router store={store} titleStyle={{color:'#fff'}} navigationBarStyle={{ backgroundColor: '#2196f3' }}>
		  	{/*<Scene key="drawer" component={Drawer} open={false} initial={true}>*/}
		  	 {/*<Scene key="main" navBar={NavBar} >*/}
		    	<Scene   key="pageOne" component={TopTabBar}  title="Home" />
		     {/*</Scene>*/}
		    {/*</Scene>*/}
		  </Router>
		</View>
	  );
	}

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  example: {
    elevation: 4,
  },
  statusbar: {
    backgroundColor: Platform.OS === 'ios' ? '#2196f3' : '#1b7dcb',
    height: Platform.OS === 'ios' ? 20 : 24,
  },
  appbar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: Platform.OS === 'ios' ? 44 : 56,
    backgroundColor: '#2196f3',
    elevation: 4,
  },
  title: {
    flex: 1,
    margin: 16,
    textAlign: Platform.OS === 'ios' ? 'center' : 'left',
    fontSize: Platform.OS === 'ios' ? 20 : 18,
    color: '#fff',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 56,
    padding: Platform.OS === 'ios' ? 12 : 16,
  },
  touchable: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, .06)',
  },
  item: {
    fontSize: 14,
    color: '#333',
  },
});

export default App;