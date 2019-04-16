import React, { Component } from 'react';
import { View, TextInput, Button,Text,StyleSheet } from 'react-native';
import { db } from '../config';
let itemsRef=db.ref('/items');

let addItem = (item) => {
    db.ref('/items').push({
        itemInfo: item
    });
}
const styles=StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent:'center',
            backgroundColor:'#ebebeb'
        }
    }
)
export default class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemInfo: '',
            items:[]
        }
        this.handleChange = this.handleChange.bind(this);
        this.clickToAdd = this.clickToAdd.bind(this);

    }
    clickToAdd() {
        addItem(this.state.itemInfo);
    }

    handleChange(e) {
        this.setState({ itemInfo: e.nativeEvent.text })
    }
    componentDidMount(){
        itemsRef.on('value',snapshot=>{
         let data=snapshot.val();
         let items=Object.values(data);
         this.setState({items});
        })
    }
    
    render() {
        return (
            <View>


                <TextInput value={this.state.itemInfo}
                value={this.state.text}
                    onChange={this.handleChange}
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    placeholder='enter Text'
                />
                <Button
                    onPress={this.clickToAdd}
                    title="Learn More"
                    color="#841584"
                />
                {this.state.items.map(x=>{
                   return<Text>
                   {x.itemInfo }
                   </Text>
                })
            }
            </View>
        );
    }
}