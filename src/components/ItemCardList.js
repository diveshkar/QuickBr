import React, { Component } from 'react';
import { Right, Left, Thumbnail, Body, Header, Content, List, ListItem, Text, Separator, View } from 'native-base';
import {Button} from 'native-base';
export default class ItemCardList extends Component {
  render() {
    return (
        <List>
          <ListItem avatar >
            <Left>
              <Thumbnail source={{ uri: this.props.image }} />
            </Left>
            <Body style={{marginTop: 13}}>
              <Text>{this.props.name}</Text>
              <Text note> Rs {this.props.price} </Text>
            </Body>
            <Right>
            <View  style = {
   {flex:1,
    flexDirection: 'row',
    justifyContent : 'center'
   }
  } >
              <Button small primary style={{borderRadius:50,width:40,height:40}}>
              <Text style={{textAlign:'center',width: 20,height: 20}}>+</Text>
              </Button>
              <Text note style = {{width: 60,heigt: 50, textAlign:'center',justifyContent:'center',marginTop:10}} >Qty {this.props.qty}</Text>
              <Button small primary style={{borderRadius:50, width:40, height:40}} >
                 <Text style={{textAlign:'center',width:20,height: 20}}>-</Text>
              </Button>
              </View>
            </Right> 
          </ListItem>
        </List>
    );
  }
}