import { StyleSheet } from 'react-native'
import React from 'react'
import { Button as PaperButton } from 'react-native-paper'
import { theme } from '../core/theme'


const Button = ({ mode, style, ...props }) => {
    return (
        <PaperButton style={[styles.btnContainer, style]}
            labelStyle={styles.text}
            mode={mode}
            {...props}
        >
        </PaperButton>
    )
}

export default Button

const styles = StyleSheet.create({
    btnContainer: {
        backgroundColor: '#30b890',
        borderRadius: 8,
        height: 60,
        justifyContent: 'center'
    },
    text: {
        fontSize: 10,
        color: theme.colors.secondary,
    }
})