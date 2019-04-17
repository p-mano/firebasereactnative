import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import LoginPage from '../component/LoginComponent';
import Registration from '../component/RegisterComponent';
import ProfileComponent from '../component/ProfileComponent';

const Route = createStackNavigator(
{
    Login: {
screen: LoginPage
},
Register: {
screen: Registration
},
profile:{
screen:ProfileComponent
},
},
{
initialRouteName: "Register"
},
);
const RouterConfig = createAppContainer(Route);
export default RouterConfig;