import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const DisplayCalc = ({ display, result }) => [
    <Text key='display'  style={styles.display}>{display}</Text>,
    <Text key='calc' style={styles.result}>{result}</Text>
]

export default DisplayCalc

const styles = StyleSheet.create({
    display: {
        flex: 1,
        backgroundColor: '#EFEFEF',
        fontSize: 80,
        textAlign: 'right',
        padding: 10,
        alignItems: 'center',
    },
    result: {
        flex: 0.4,
        fontSize: 40,
        backgroundColor: '#EFEFEF',
        textAlign: 'right',
        paddingRight: 10,
        paddingBottom: 10
    },
});