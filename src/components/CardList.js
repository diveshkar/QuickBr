import React, { Component } from 'react';
import { Right, Left, Thumbnail, Body, Header, Content, List, ListItem, Text, Separator } from 'native-base';
export default class ListSeparatorExample extends Component {
  render() {
    return (
     
        <List>
          <ListItem avatar>
            <Left>
              <Thumbnail source={{ uri: 'https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/kingfisher-beer_660_041918082956_061218081850.jpg' }} />
            </Left>
            <Body>
              <Text>Kumar Pratik</Text>
              <Text note>Doing what you like will always keep you happy . .</Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right> 
          </ListItem>
        </List>

    );
  }
}