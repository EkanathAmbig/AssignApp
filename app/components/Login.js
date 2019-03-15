import React, {Component} from 'react';
import {Text, View,Dimensions,TouchableHighlight,TextInput} from 'react-native';
import { connect } from 'react-redux';

import loginData from './loginData';
import {updateList} from './actions';
import employeeData from './employeedata';

const {height,width} = Dimensions.get('window');
class Login extends Component {

constructor(props){
    super(props);
    this.state={
        username: '',
        pass: '',
        error: ''
    }
}

handleSubmit= () =>{
    if(this.state.username === loginData.username){
        if(this.state.pass === loginData.password){
            this.setState({error:''});
            this.props.updateList(employeeData);
            this.props.navigation.navigate('DashBoard');
        }
        else {
            this.setState({error: 'Invalid Username/Password'});
        }
    }
    else{
        this.setState({error: 'Invalid Username/Password'});
    }
}

  render() {
    return (
      <View style={{flex:1,justifyContent: 'center',alignItems:'center',backgroundColor:'#ffffff'}}>
        <View style={{height:height*0.2,width:width*0.5,alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize: height*0.05,color:'#000000'}}>WELCOME</Text>
            <Text>Login to continue</Text>
        </View>
        <CustomTextInput textName={'User Name'} textValue={this.state.username} onChangeText = {(username)=> this.setState({username})}/>
        <CustomTextInput textName={'Password'} textValue={this.state.pass} onChangeText = {(pass)=> this.setState({pass})} secureTextEntry={true}/>
        <Text style={{color:'red',fontSize: height*0.02}}>{this.state.error}</Text>
        <TouchableHighlight
            style={{backgroundColor:'#0000ff',height: height*0.05,width:width*0.4,alignItems:'center',justifyContent:'center',borderRadius: height*0.25}}
            onPress={this.handleSubmit}
        >
            <Text style={{color:'#ffffff',fontSize: height*0.03}}>Login</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default connect (null,{updateList}) (Login);

CustomTextInput = (props) => {
    return (
                <View style={{height:height*0.1,width:width*0.9,marginVertical: height*0.01}}>
                    {props.textValue ? <Text style={{color: '#000000'}}>{props.textName}:</Text> : null}
                    <TextInput
                        {...props}
                        style={{borderBottomWidth:1,borderColor:'#000000'}}
                        placeholder={props.textName}
                        onChangeText={props.onChangeText}
                    />
                </View>
    );
}