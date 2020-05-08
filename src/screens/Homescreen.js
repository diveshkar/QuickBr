import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {Container, Content, Header, Left, Right} from 'native-base';
import Cards from '../components/Cards';
import Search from '../components/Search';

export default class HomeScreen extends React.Component {
    render() {
        return (
            <Container>
                <Search></Search>
                <ScrollView style={{marginTop: 80}}>
                    <Cards></Cards>
                    <Cards></Cards>
                    <Cards></Cards>
                </ScrollView>


            </Container>
        );

    }
}
