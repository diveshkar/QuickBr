import React, {Component} from 'react';
import {Container, Header, Item, Input, Button, Text, Left} from 'native-base';
import {Ionicons, Foundation, MaterialCommunityIcons} from '@expo/vector-icons';
import environment from '../../environment';


export default class SearchBarExample extends Component {

    render() {
        return (
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Ionicons style={{marginLeft: 10}} name="ios-search" size={20}/>
                        <Input style={{textAlign: 'left'}} placeholder="Search"/>
                    </Item>
                    <Button transparent>
                        <Text style={{color: environment.dark.maincolor}}>Search</Text>
                    </Button>
                </Header>
            </Container>
        );
    }
}
