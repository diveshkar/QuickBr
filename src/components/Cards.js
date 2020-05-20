import React, {Component} from 'react';
import {Image} from 'react-native';
import {Body, Button, Card, CardItem, Content, Left, Right, Text, Thumbnail,} from 'native-base';

import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import environment from '../../environment';
import {black} from 'color-name';


export default class Cards extends Component {
    render() {
        //const { navigation } = this.props.navigation;
        return (

            <Content>
                <Card>

                    <CardItem cardBody>
                        <Image
                            source={{uri: this.props.mainImage}}
                            style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem button onPress={() => {this.props.navigation.navigate('Item', {shopName: this.props.shopName, mainImage: this.props.mainImage})}}>

                        <Left>
                            <Thumbnail
                                source={{uri: this.props.logo}}/>
                            <Body>

                                <Text style={{color: black, fontWeight: 'bold'}}>{this.props.shopName}</Text>

                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Button transparent>
                                <MaterialCommunityIcons name="car-limousine" color={environment.dark.maincolor}
                                                        size={32}></MaterialCommunityIcons>
                                <Text style={{color: black}}>{this.props.distance} km</Text>
                            </Button>
                        </Left>

                        <Right>
                            <Button transparent>
                                <Ionicons name="md-star" color={environment.dark.maincolor} size={32}></Ionicons>
                                <Text style={{color: black}}>{this.props.rating}</Text>
                            </Button>
                        </Right>
                    </CardItem>

                </Card>
            </Content>

        );
    }
}
