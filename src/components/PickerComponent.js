import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import { theme } from '../core/theme';
import normalize from 'react-native-normalize';

const PickerComponent = ({ setValue, value, items }) => {
    const pickerData = (data) => {
        return (data?.length > 0) && (
            data.map((val, index) => <Picker.item
                style={val == value ? styles.activeText : styles.inActiveText}
                label={val} value={val} key={index} />)
        )
    }
    return (
        <Picker
            selectedValue={value}
            onValueChange={(itemValue, itemIndex) =>
                setValue(itemValue)
            }
            style={styles.pickerStyle}
        >
            {pickerData(items)}
        </Picker>
    )
}
export default PickerComponent
const styles = StyleSheet.create({
    pickerStyle: {
        width: '100%',
    },
    textStyle: {
        color: theme.colors.primary,
    },
    activeText: {
        color: theme.colors.primary,
        backgroundColor: "#d6d7dc",
        fontSize: normalize(14)
    },
    inActiveText: {
        // color: theme.colors.primary,
        fontWeight: 'bold',
        fontSize: normalize(14)
    }
})