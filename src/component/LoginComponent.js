import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput,Button,ToastAndroid } from 'react-native';
import {loginUser} from '../services/services'
const Toast = (props) => {
    if (props.visible) {
      ToastAndroid.showWithGravityAndOffset(
        props.message,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
      return null;
    }
    return null;
  };
  

export default class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible:false,
            message:'User Logged In',
           user:{  password: '', email:""}
        }

        this.login=this.login.bind(this);
        this.handleChange=this.handleChange.bind(this)
    }

    static navigationOptions = ({ navigation }) => {
        navigation.title = "LoginComponent"     
    }
    login(){
        loginUser(this.state.user).then(result=>{
            this.setState({message:'User Logged Successfully',visible:true});
            this.props.navigation.navigate('profile')
        }).catch(err=>{
            this.setState({message:err.message,visible:true});
        });
    }
    handleChange(e,fieldName){
        let currentState=this.state;
        currentState.user[fieldName]=e.nativeEvent.text;
        this.setState(currentState);
    }

    render() {
        return (
            <View style={styles.container}>
            <Text style={styles.welcome}>Welcome to Bhilwara Attendence App</Text>
            <Text style={styles.welcome}>Login</Text>
            
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    autoCapitalize="none"
                    placeholderTextColor='white'
                    onChange={(e)=>{
                        this.handleChange(e,'email')
                    }}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    secureTextEntry={true}
                    autoCapitalize="none"
                    placeholderTextColor='white'
                    onChange={(e)=>{
                        this.handleChange(e,'password')
                    }}
                />
                <Button
                    title='Login'
                    onPress={this.login}
                />
    <Toast visible={this.state.visible} message={this.state.message} />
            </View>

        )
    }
}


const styles = StyleSheet.create({
    input: {
      width: 350,
      height: 55,
      backgroundColor: 'grey',
      margin: 10,
      padding: 8,
      color: 'white',
      borderRadius: 14,
      fontSize: 18,
      fontWeight: '500',
    }, welcome: {
        fontSize: 20,
        margin: 10,
    },welcome1: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        fontWeight:'bold',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })