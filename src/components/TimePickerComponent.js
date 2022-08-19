import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import { FontFamilyName } from '../core/String';
import normalize from 'react-native-normalize';
import moment from 'moment';
import Clock from '../assets/svg/Clock.svg'


const TimePickerComponent = ({ }) => {

    const [time, setTime] = useState(new Date())
    const [modeTime, setModeTime] = useState('onTime')
    const [showTime, setShowTime] = useState(false)
    const [timeText, setTimeText] = useState('');

    const onChangeOnTime = (event, selectedTime) => {
        const currentTime = selectedTime || time;
        setShowTime(false);
        setTime(currentTime);
        let tempDate = new Date(currentTime);
        let startTime = moment(tempDate).format('h:mm a');
        setTimeText(startTime)

    }
    const showTimeStartMode = (currentMode) => {
        setShowTime(true);
        setModeTime(currentMode);
    };

    return (
        <View style={styles.timePicker}>
            <Text>{timeText}</Text>
            <TouchableOpacity
                onPress={() => {
                    showTimeStartMode('time')
                }}
                style={styles.clockSvg}>
                <Clock />
                {showTime && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={time}
                        mode={modeTime}
                        is24Hour={false}
                        onChange={onChangeOnTime}
                    />
                )}
            </TouchableOpacity>

        </View>
    )
}

export default TimePickerComponent

const styles = StyleSheet.create({
    timePicker: {
        width: '100%',
        backgroundColor: '#d6d7dc',
        height: '100%',
        borderRadius: 8,
        marginVertical: normalize(10),
        justifyContent: 'center',
        paddingHorizontal: normalize(15)
    },
    timePickerText: {
        fontSize: normalize(15),
        color: 'black',
        fontFamily: FontFamilyName.MontserratBold,
    },
    clockSvg: {
        position: 'absolute',
        top: 20,
        right: 10
    },
})