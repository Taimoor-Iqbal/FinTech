import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SummaryScreen = (props) => {
    let name = props.route.params
    console.log('data==>', name)
    return (
        <View>
            <Text>{name}</Text>
        </View>
    )
}

export default SummaryScreen

const styles = StyleSheet.create({})