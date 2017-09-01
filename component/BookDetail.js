import React from 'react';
import { StyleSheet, Text, View, ListView , Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

const goToPageTwo = () => Action.pageTwo(...this.props);

const BookDetail = (props) => (
    <TouchableHighlight onPress={goToPageTwo}>
        <View style={styles.container}>
        
            <Image source={{uri: props.book_image}} style={styles.image}/>
            <View style={styles.detail}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.author}>{props.author}</Text>
            </View>
        </View>
    </TouchableHighlight>
)

const styles = StyleSheet.create({
    container: {
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 15,
      paddingRight: 15,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    image: {
        height: 200,
        width: 100,
        alignSelf: 'flex-start'
    },
    detail: {
        paddingTop: 20
    },
    title: {
        fontSize: 16,
        textAlign: 'right'
    },
    author: {
        fontSize: 10,
        textAlign: 'right'
    }
});

export default BookDetail;