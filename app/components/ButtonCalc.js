import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const ButtonCalc = ({ operacao , buttonClick }) => {
    return (
        <TouchableOpacity key={operacao} style={styles.btn} onPress={() => buttonClick && buttonClick(operacao)} >
            <Text style={styles.btnText}  >
                {operacao}
            </Text>
        </TouchableOpacity>
    )
}

export default ButtonCalc

const styles = StyleSheet.create({
    btn: {
        flex: 1,
        justifyContent: 'center',
    },
    btnText: {
        textAlign: 'center',
        fontSize: 50,
        color: '#fff'
    },
});

