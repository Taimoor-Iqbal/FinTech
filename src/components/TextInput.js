import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const Input = (props) => {
    const { label, error } = props

    return (
        <>
            <View style={styles.mainContainer}>
                <Text style={{ fontSize: 12 }}>{label}</Text>
                {error ? <Text style={{ color: 'red', fontSize: 12 }}>{error}</Text> : null}
            </View>
            <TextInput
                {...props}
                style={styles.input}
            />
        </>
    )
}

export default Input

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginBottom: 5,
        marginTop: 20
    },
    input: {
        borderWidth: 1,
        backgroundColor: '#f5f5f5',
        borderColor: '#dbdbdb',
        height: 60,
        borderRadius: 8,
        fontSize: 21,
        paddingHorizontal: 15,
        alignItems: 'center',
    }
})