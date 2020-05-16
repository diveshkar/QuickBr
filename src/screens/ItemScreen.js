import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import CardList from '../components/CardList';


export default class ItemScreen extends React.Component  {
    render() {

        const styles = StyleSheet.create({
            container: {
              paddingTop: 0,
            },
            stretch: {
              width: '100%',
              height: 200,
              resizeMode: 'stretch',
            },
          });
          

        const shopName = this.props.route.params.shopName
        return (
            <View style={styles.container}>
                <Image style={styles.stretch} source={{uri: "https://i0.wp.com/hmhub.me/wp-content/uploads/2019/08/61a5bc5c144dbfcb481874823cbbf9071438338557.jpg"}}/>
                <Text style={{paddingTop:18, textAlign: 'center', fontWeight: 'bold', fontSize: 24}}>{shopName}</Text>
                <CardList></CardList>
                <CardList></CardList>
                <CardList></CardList>
            </View>

            
        );
    }
}
