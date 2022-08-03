import { FlatList, ScrollView, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import styles from './MeetingRoomScreenStyle'
import Header from '../../components/Header'
import Calendar from '../../assets/svg/Calendar.svg'
import Clock from '../../assets/svg/Clock.svg'
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import normalize from 'react-native-normalize'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import BookingProgresSteps from '../../components/BookingProgresSteps'
import { useNavigation } from '@react-navigation/native'
import { ScreensName } from '../../core/String'
import CalenderComponent from '../../components/CalenderComponent'
import TimePickerComponent from '../../components/TimePickerComponent'


const MeetingRoomScreen = (props) => {

    // const [date, setDate] = useState(new Date());
    // const [modeDate, setModeDate] = useState('date');
    // const [showDate, setShowDate] = useState(false);
    // const [dateText, setDateText] = useState('');

    const [time, setTime] = useState(new Date())
    const [modeTime, setModeTime] = useState('onTime')
    const [showTime, setShowTime] = useState(false)
    const [timeText, setTimeText] = useState('');

    const [timeEnd, setTimeEnd] = useState(new Date())
    const [modeTimeEnd, setModeTimeEnd] = useState('endTime')
    const [showTimeEnd, setShowTimeEnd] = useState(false)
    const [timeTextEnd, setTimeTextEnd] = useState('');

    const navigation = useNavigation()

    const goToNextPage = (page, data) => {
        navigation.navigate(page, data)
    }


    // const onChangeDate = (event, selectedDate) => {
    //     const currentDate = selectedDate || date;
    //     setShowDate(false);
    //     setDate(currentDate);
    //     let tempDate = new Date(currentDate);
    //     let month = moment(tempDate).format('DD MMMM YYYY');
    //     setDateText(month)
    // }

    const onChangeOnTime = (event, selectedTime) => {
        const currentTime = selectedTime || time;
        setShowTime(false);
        setTime(currentTime);
        let tempDate = new Date(currentTime);
        let startTime = moment(tempDate).format('h:mm a');
        setTimeText(startTime)

    }
    const onChangeEndTime = (event, selectedTime) => {
        const currentTime = selectedTime || time;
        setShowTimeEnd(false);
        setTimeEnd(currentTime);
        let tempDate = new Date(currentTime);
        let EndTime = moment(tempDate).format('h:mm a');
        setTimeTextEnd(EndTime)

    }

    // const showDateMode = (currentMode) => {
    //     setShowDate(true);
    //     setModeDate(currentMode);
    // };
    const showTimeStartMode = (currentMode) => {
        setShowTime(true);
        setModeTime(currentMode);
    };
    const showTimeEndMode = (currentMode) => {
        setShowTimeEnd(true);
        setModeTimeEnd(currentMode);
    };

    const arr = [
        {
            img: require('../../assets/image/meeting1.png'),
            title: 'Meeting Room 1'
        },
        {
            img: require('../../assets/image/meeting1.png'),
            title: 'Meeting Room 2'
        }
    ]

    return (
        <View style={styles.container}>
            <Header />
            <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
                <View style={styles.subContainer}>
                    <Text style={styles.headingText}>Meeting room</Text>
                    <View style={{ marginBottom: 20 }}>
                        <BookingProgresSteps isFocused={1} />
                    </View>
                    <Text style={styles.dateTimeText}>Search by date and time</Text>
                    <CalenderComponent />
                    <View style={styles.timeContainer}>
                        <View style={{ width: '48%' }}>
                            <Text style={styles.timePickerText}>From</Text>
                            <TimePickerComponent />
                        </View>
                        <View style={{ width: '48%' }}>
                            <Text style={styles.timePickerText}>To</Text>
                            <TimePickerComponent />
                        </View>
                    </View>
                    <View style={[styles.timeContainer, { marginVertical: normalize(40) }]}>
                        <View style={{ width: '48%' }}>
                            <Text style={styles.timePickerText}>Recurring</Text>
                            <View style={styles.timePicker}>
                                <TouchableOpacity style={styles.clockSvg}>
                                    <MaterialIcons name='keyboard-arrow-down' color={'black'} size={normalize(25)} />
                                </TouchableOpacity>

                            </View>
                        </View>
                        <View style={{ width: '48%' }}>
                            <Text style={styles.timePickerText}>Recurring for</Text>
                            <View style={styles.timePicker}>
                                <TouchableOpacity style={styles.clockSvg}>
                                    <MaterialIcons name='keyboard-arrow-down' color={'black'} size={normalize(25)} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <Text style={styles.meetingText}>Select a meeting room</Text>
                    <View style={{ width: "100%" }}>
                        <FlatList
                            data={arr}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) => {
                                return (
                                    <View style={styles.flatListScreen}>
                                        <TouchableOpacity
                                            onPress={() => {
                                                goToNextPage(ScreensName.MeetingRoomSelectedScreen, {
                                                    data: item
                                                })
                                                // navigation.navigate(ScreensName.MeetingRoomSelectedScreen, {
                                                //     data: item
                                                // })
                                            }}
                                            style={styles.imgContainer}>
                                            <Image source={item.img} style={{ borderRadius: 15, width: '100%' }} />
                                        </TouchableOpacity>
                                        <View style={styles.titleConainer}>
                                            <Text style={styles.titleText}>{item.title}</Text>
                                            <View style={styles.iconContainer}>
                                                <Feather name='users' color={'black'} size={23} />
                                                <Text style={{ fontSize: 18, color: 'black' }}> X8</Text>
                                            </View>
                                        </View>
                                    </View>
                                )
                            }}
                        />
                    </View>
                </View >
            </ScrollView>
        </View >
    )
}

export default MeetingRoomScreen

