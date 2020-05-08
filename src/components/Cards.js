import React, {Component} from 'react';
import {Image} from 'react-native';
import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Thumbnail,
    Text,
    Button,
    Icon,
    Left,
    Body,
    Right,
    View,
} from 'native-base';

import {Ionicons, Foundation, MaterialCommunityIcons} from '@expo/vector-icons';
import environment from '../../environment';
import {black} from 'color-name';

export default class Cards extends Component {
    render() {
        return (

            <Content>
                <Card>
                    <CardItem cardBody>
                        <Image
                            source={{uri: 'data:image/jpeg;base64,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'}}
                            style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Thumbnail
                                source={{uri: 'https://st4.depositphotos.com/1010386/20992/i/450/depositphotos_209926208-stock-photo-london-august-2018-carlsberg-paper.jpg'}}/>
                            <Body>
                                <Text>AnuradhaPura Santhi</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Button transparent>
                                <MaterialCommunityIcons name="car-limousine" color={environment.dark.maincolor}
                                                        size={32}></MaterialCommunityIcons>
                                <Text style={{color: black}}>5 km</Text>
                            </Button>
                        </Left>

                        <Right>
                            <Button transparent>
                                <Ionicons name="md-star" color={environment.dark.maincolor} size={32}></Ionicons>
                                <Text style={{color: black}}>5</Text>
                            </Button>
                        </Right>
                    </CardItem>
                </Card>
            </Content>

        );
    }
}
