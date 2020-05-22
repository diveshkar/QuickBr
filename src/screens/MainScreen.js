import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import MainCardList from '../components/MainCardList';
import CommonData from '../common/CommonData';

export default class MainScreen extends React.Component  {
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
          const navigation = this.props.navigation;
          const category = CommonData.category;

        return (
            <View style={styles.container}>
                <Text style={{marginTop: 15, textAlign:'center', fontSize: 28, fontStyle: 'bold'}} >What do you want to order?</Text>
                <Text style={{paddingTop:10, textAlign: 'center', fontWeight: 'bold', fontSize: 24}}></Text>
          
              {category.map(item=> <MainCardList navigation={navigation} name={item.name} image={item.image} ></MainCardList>)}
            </View> 
        );
    }
}
