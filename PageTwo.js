import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Action } from 'react-native-router-flux';

export default class PageTwo extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={StyleSheet.container}>
                <Image source={{uri: this.props.book_image}}/>
                <Text>{this.props.title}</Text>
                <Text>Author: {this.props.author}</Text>
                <Text>Amezon URL: {this.props.amazon_product_url}</Text>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#967140',
        justifyContent: 'center'
    }
})