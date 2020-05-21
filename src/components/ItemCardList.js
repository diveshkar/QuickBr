import React, { Component } from 'react';
import { Right, Left, Thumbnail, Body, Header, Content, List, ListItem, Text, Separator, View } from 'native-base';
import {Button} from 'native-base';
import ReceiptData from '../common/ReceiptData';
import environment from '../../environment';
export default class ItemCardList extends Component {

  state = {
    addorremoveBtnChange: 0
  }

  addItem = (itemId) => {
    const bucket = ReceiptData.bucket;
    if('item'+itemId in bucket){
    bucket['item'+itemId] += 1;
    } else {
      bucket['item'+itemId] = 1;
    }
    ReceiptData.bucketEmpty = false
    this.setState({addorremoveBtnChange: this.state.addorremoveBtnChange + 1})
  }

  removeItem = (itemId) => {
    const bucket = ReceiptData.bucket;
    bucket['item'+itemId] -= 1;
    this.setState({addorremoveBtnChange: this.state.addorremoveBtnChange + 1})
   // this.checkBucketEmpty()
  }


  checkBucketEmpty = () =>{
    var empty = true
    Object.keys(ReceiptData.bucket).forEach(item =>{
      if (item != 0){
          empty = false
      }
    });
    empty ? ReceiptData.bucketEmpty = true : ReceiptData.bucket  = false;
  }

  render() {
    const env = environment;
    const bucket = ReceiptData.bucket;
   const itemId = 'item'+this.props.id;
    const disabled_val = ((itemId in bucket && bucket[itemId] == 0 ) || !(itemId in bucket));
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
              <Button onPress={()=>{this.addItem(this.props.id)}} small primary style={{borderRadius:50,width:40,height:40, backgroundColor: env['dark'].maincolor}}>
              <Text style={{textAlign:'center',width: 20,height: 20}}>+</Text>
              </Button>
              <Text note style = {{width: 60,heigt: 50, textAlign:'center',justifyContent:'center',marginTop:10}} >Qty {itemId in bucket? bucket[itemId] : 0}</Text>
              <Button disabled={disabled_val} onPress={()=>{this.removeItem(this.props.id)}} small primary style={{borderRadius:50, width:40, height:40, backgroundColor: env['dark'].maincolor}} >
                 <Text style={{textAlign:'center',width:20,height: 20}}>-</Text>
              </Button>
              </View>
            </Right> 
          </ListItem>
        </List>
    );
  }
}