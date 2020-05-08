import React, {Component} from 'react';
import Modal from 'react-native-modal';
import {View, Text} from 'react-native';
import {Ionicons, Entypo} from '@expo/vector-icons';
import environment from '../../environment'

export default class AddressModal extends Component {


    state = {isShowAddress: false}


    componentWillReceiveProps(nextProps) {
        this.showAddress(nextProps.show)
    }

    showAddress = (value) => {
        this.setState({isShowAddress: value});
    }

    render() {

        return (

            <Modal isVisible={this.state.isShowAddress}
                   onBackdropPress={() => {
                       this.showAddress(false)
                   }}
                   onSwipeComplete={() => {
                       this.showAddress(false)
                   }}
                   swipeDirection="right"
                   transparent={true}
                   animationIn="slideInLeft"
                   animationOut="slideOutRight"
            >

                <View style={{
                    flex: 0.25,
                    borderRadius: '20%',
                    backgroundColor: '#ffffff',
                    flexDirection: 'column',
                    width: '100%'
                }}>
                    <View style={{
                        borderTopLeftRadius: '20%',
                        borderTopRightRadius: '20%',
                        height: 35,
                        backgroundColor: environment['dark'].maincolor
                    }}>
                        <Text style={{
                            marginTop: 7,
                            flexDirection: 'row',
                            textAlign: 'center',
                            color: '#ffffff'
                        }}> Delivery Address</Text>
                    </View>
                    <View style={{
                        marginTop: '10%',
                        alignItems: 'center'
                    }}>
                        <Text><Entypo name="address" size={24} color={environment['dark'].maincolor}/> No : 422, Ambal
                            street, Anpuvalipuram</Text>
                    </View>
                </View>
            </Modal>

        );
    }
}
