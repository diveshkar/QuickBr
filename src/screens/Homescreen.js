import React from 'react';
import {ScrollView} from 'react-native';
import {Container} from 'native-base';
import Cards from '../components/Cards';
import Search from '../components/Search';

export default class HomeScreen extends React.Component {

    data = [{
        id: 1,
        shopName: "Lucky Pharmacy",
        rating: 4,
        distance: 5,
        mainImage: "https://colombotimes.net/wp-content/uploads/2020/04/big-pharmacy.jpg",
        logo: "https://www.tailorbrands.com/wp-content/uploads/2020/01/beer-city-logo.png",
    }, {
        id: 2,
        shopName: "Linganagar beer",
        rating: 5,
        distance: 7,
        mainImage: "https://i0.wp.com/hmhub.me/wp-content/uploads/2019/08/61a5bc5c144dbfcb481874823cbbf9071438338557.jpg",
        logo: "https://www.tailorbrands.com/wp-content/uploads/2020/01/beer-city-logo.png",
    },
        {
            id: 3,
            shopName: "orrshill beer",
            rating: 3,
            distance: 8,
            mainImage: "https://i0.wp.com/hmhub.me/wp-content/uploads/2019/08/61a5bc5c144dbfcb481874823cbbf9071438338557.jpg",
            logo: "https://www.tailorbrands.com/wp-content/uploads/2020/01/beer-city-logo.png",
        }
    ]


    render() {
        const navigation = this.props.navigation;
        return (
            <Container>
                <Search></Search>
                <ScrollView style={{marginTop: 80}}>
                    {this.data.map(item => <Cards navigation={navigation} shopName={item.shopName} rating={item.rating}
                                                  distance={item.distance}
                                                  mainImage={item.mainImage} logo={item.logo}></Cards>)}
                </ScrollView>


            </Container>
        );

    }
}
