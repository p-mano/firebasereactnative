import React, { Component } from 'react';
import {
StyleSheet,
Text,
View,
TextInput,
Button,
TouchableHighlight,
Image,
Alert
} from 'react-native';
import { regitserUser } from "../services/services";
import GeolocationExample from "./GeoLocationComponent";

export default class Registration extends Component {

constructor(props) {
super(props);
this.state = {
    user:{
fullName: '',
email : '',
password: '',
    }
};
this.handleChange=this.handleChange.bind(this);
this.register=this.register.bind(this);
}
handleChange(e,fieldName){
    let currentState=this.state;
    currentState.user[fieldName]=e.nativeEvent.text;
    this.setState(currentState);
}
register(){
    regitserUser(this.state.user);
    this.props.navigation.navigate('login')
}


render() {
return (
<View style={styles.container}>
<Text>REGISTRATION</Text>
<View style={styles.inputContainer}>
<TextInput style={styles.inputs}
onChange={(e) => {
    this.handleChange(e, 'fullName')
}}
placeholder="Full name"
underlineColorAndroid='transparent'

/>
</View>

<View style={styles.inputContainer}>
<TextInput style={styles.inputs}
 onChange={(e) => {
    this.handleChange(e, 'email')
}}
placeholder="Email"
keyboardType="email-address"
underlineColorAndroid='transparent'
/>
</View>
<View style={styles.inputContainer}>
<TextInput style={styles.inputs}
 
placeholder="Password"
secureTextEntry={true}
underlineColorAndroid='transparent'
onChange={(e) => {
    this.handleChange(e, 'password')
}}/>
</View>
<GeolocationExample/>
<TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate('Login')}>
<Text style={styles.signUpText}>Login </Text>
</TouchableHighlight>

<TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={this.register} >
<Text style={styles.signUpText}>Sign up</Text>
</TouchableHighlight>
</View>
);
}
}

const styles = StyleSheet.create({
// container: {
// flex: 1,
// justifyContent: 'center',
// alignItems: 'center',
// backgroundColor: '#00b5ec',
// },
inputContainer: {
borderBottomColor: '#F5FCFF',
backgroundColor: '#FFFFFF',
borderRadius:30,
borderBottomWidth: 1,
width:250,
height:45,
marginBottom:20,
flexDirection: 'row',
alignItems:'center'
},
inputs:{
height:45,
marginLeft:16,
borderBottomColor: '#FFFFFF',
flex:1,
},
inputIcon:{
width:30,
height:30,
marginLeft:15,
justifyContent: 'center'
},
buttonContainer: {
height:45,
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
marginBottom:20,
width:250,
borderRadius:30,
},
signupButton: {
backgroundColor: "#228B22",
},
loginButton: {
    backgroundColor: "#228B22",
    },
signUpText: {
color: 'white',
}
});