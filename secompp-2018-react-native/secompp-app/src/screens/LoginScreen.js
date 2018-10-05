import React, { Component } from 'react';
import { 
  View, 
  TextInput, 
  SafeAreaView, 
  KeyboardAvoidingView, 
  ImageBackground, 
  TouchableHighlight } from 'react-native';
import { Constants } from 'expo'

import {
  LinearIcon,
  Logo,
  Text,
  CustomInput,
} from '../components';

import Colors from '../theme/colors';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    return (
        <ImageBackground 
          source={require('../../assets/images/bg.png')}
          style={{ width: '100%', height: '100%' }}>
          <SafeAreaView style= {{ 
            flex: 1, 
            backgroundColor: 'rgba(51,51,51,0.33)',
            paddingTop: Constants.statusBarHeight,
            paddingHorizontal: 16 }}>
            <KeyboardAvoidingView behavior="padding" style={{ flex:1, marginHorizontal: 16}}>
            <View style={{ alignItems: 'center', marginTop: 52 }}>
              <Logo color="white" style={{ width: 212, height: 52 }}/>

              <Text fontWeight="light" color="white" style={{ textAlign: 'center', width: '90%' }}>
              Semana do curso de Ciência da Computação</Text>
            </View>
            
            <View style={{  flex: 1, justifyContent: 'center'}}>
              <CustomInput style={{ color: Colors.theme.primaryColor }}
                label="e-mail"
                placeholder="usuario@email.com"
                value={this.state.email}
                onChangeText={(email) => this.setState({ email: email})}
              />
              
              <CustomInput style={{ color: Colors.theme.primaryColor }}
                label="senha"
                placeholder="********"
                value={this.state.password}
                onChangeText={(password) => this.setState({ password: password})}
                secureTextEntry={true}
              />

              <TouchableHighlight
                onPress= {() => { this.props.navigation.navigate('DashboardTabs') }}
                style={{
                  backgroundColor: Colors.theme.primaryColor,
                  alignItems: 'center',
                  paddingVertical: 16,
                  borderRadius: 15,
                  margin: 14,
                }}
              >
                <Text style={{
                  color: 'white'
                }}>ENTRAR</Text>

              </TouchableHighlight>

              <Text color="white" style={{ textAlign: 'center'}}>
              Para criar uma conta, <Text color={Colors.theme.primaryColor} 
              fontWeight="bold" style={{ textDecorationLine: 'underline'}}>clique aqui</Text></Text>
            </View>
            </KeyboardAvoidingView>
          </SafeAreaView>
        </ImageBackground>
    );
  }
}

export default LoginScreen;
