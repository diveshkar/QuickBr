import React from 'react';
import { Button } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native'
import { Container, Header, Content, Form, Item, Input } from 'native-base';
import environment from '../../environment';

export default class LoginScreen extends React.Component{

    goToHome = ({navigation}) =>{
    //navigation.navigate('Home');
    }

    render(){
        return(
            <Container style={{backgroundColor: environment['dark'].maincolor}}>
         
            <Content style = {{marginTop: '70%', padding: '40%', backgroundColor: '#ffffff'}}>
              <Form >
                <Item>
                  <Input style={{}} placeholder="Username" />
                </Item>
                <Item last>
                  <Input placeholder="Password" />
                </Item>
                <Item>
                <Button style={{width: '30%', alignContent : 'center', justifyContent : 'center'}}>
                 <Text> Login </Text>
                 </Button>
                </Item>
              </Form>
            
            </Content>
          </Container>
            
        );
    }
}