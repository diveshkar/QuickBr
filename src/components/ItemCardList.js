import React, { Component } from 'react';
import { Right, Left, Thumbnail, Body, Header, Content, List, ListItem, Text, Separator } from 'native-base';
import {Button} from 'native-base';
export default class ItemCardList extends Component {
  render() {
    return (
        <List>
          <ListItem avatar >
            <Left>
              <Thumbnail source={{ uri: this.props.image }} />
            </Left>
            <Body style={{marginTop: 5}}>
              <Text>{this.props.name}</Text>
              <Text note>{this.props.note} </Text>
            </Body>
            <Right>
              <Text note>{this.props.qty}</Text>
            </Right> 
          </ListItem>
        </List>
    );
  }
}