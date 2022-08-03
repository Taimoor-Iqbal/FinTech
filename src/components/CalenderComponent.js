import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Calendar from '../assets/svg/Calendar.svg'
import DateTimePicker from '@react-native-community/datetimepicker';
import { FontFamilyName } from '../core/String';
import normalize from 'react-native-normalize';
import moment from 'moment';



const CalenderComponent = () => {

    const [date, setDate] = useState(new Date());
    const [modeDate, setModeDate] = useState('date');
    const [showDate, setShowDate] = useState(false);
    const [dateText, setDateText] = useState('');

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDate(false);
        setDate(currentDate);
        let tempDate = new Date(currentDate);
        let month = moment(tempDate).format('DD MMMM YYYY');
        setDateText(month)
    }
    const showDateMode = (currentMode) => {
        setShowDate(true);
        setModeDate(currentMode);
    };

    return (
        <>
            <Text style={styles.selectDateText}>Select date</Text>
            <View style={styles.datePicker}>
                <Text style={{}}>{dateText}</Text>
                <TouchableOpacity
                    onPress={() => {
                        showDateMode('date')
                    }}
                    style={styles.calenderBtn}>
                    <Calendar />
                    {showDate && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={modeDate}
                            is24Hour={true}
                            onChange={onChangeDate}
                        />
                    )}
                </TouchableOpacity>
            </View>
        </>

    )
}

export default CalenderComponent

const styles = StyleSheet.create({
    selectDateText: {
        fontFamily: FontFamilyName.MontserratMedium,
        fontSize: normalize(15),
        fontWeight: '500',
        color: 'black',
        marginTop: normalize(10)
    },
    datePicker: {
        backgroundColor: '#d6d7dc',
        width: '100%',
        height: normalize(65),
        borderRadius: 8,
        marginVertical: 10,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    calenderBtn: {
        position: 'absolute',
        top: 16,
        right: 10
    },
})