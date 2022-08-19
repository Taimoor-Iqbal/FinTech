import { FlatList, ScrollView, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import styles from './MeetingRoomScreenStyle'
import Header from '../../components/Header'
import normalize from 'react-native-normalize'
import Feather from 'react-native-vector-icons/Feather'
import BookingProgresSteps from '../../components/BookingProgresSteps'
import { useNavigation } from '@react-navigation/native'
import { ScreensName } from '../../core/String'
import CalenderComponent from '../../components/CalenderComponent'
import TimePickerComponent from '../../components/TimePickerComponent'
import PickerComponent from '../../components/PickerComponent'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


const MeetingRoomScreen = () => {

    var dataRecurring = ['Yes', 'No']
    var dataRecurringFor = ['Every Day', 'Every Week', 'Every Month', 'Every Year', 'Custom']

    const [pickerValue, setPickerValue] = useState("No")
    const [pickerValueFor, setPickerValueFor] = useState("Every Day")

    const navigation = useNavigation()

    const goToNextPage = (page, data) => {
        navigation.navigate(page, data)
    }

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
                                <PickerComponent
                                    value={pickerValue}
                                    setValue={setPickerValue}
                                    items={dataRecurring}
                                />
                            </View>
                        </View>
                        <View style={{ width: '48%' }}>
                            {
                                pickerValue == 'No' ?
                                    <>
                                        <Text style={[styles.timePickerText, { color: 'black' }]}>Recurring for</Text>
                                        <View style={[styles.timePicker, { backgroundColor: '#d6d7dc' }]}>
                                            <PickerComponent
                                                disabled={true}
                                                value={pickerValueFor}
                                                setValue={setPickerValueFor}
                                                items={dataRecurringFor}
                                            />
                                        </View>
                                        <View style={[styles.timePicker, { backgroundColor: '#f6f6f6', position: 'absolute', top: 17 }]}>
                                            <Text style={[styles.timePickerText, { color: '#b3b3b3', position: 'absolute', top: -25 }]}>Recurring for</Text>
                                            <View style={styles.disabledPicker}>
                                                <Text style={{ color: '#b3b3b3' }}>Every Day</Text>
                                                <MaterialIcons name="arrow-drop-down" size={23} color="#b3b3b3" />
                                            </View>
                                        </View>
                                    </>
                                    :
                                    <>
                                        <Text style={styles.timePickerText}>Recurring for</Text>
                                        <View style={styles.timePicker}>
                                            <PickerComponent
                                                enabled={true}
                                                value={pickerValueFor}
                                                setValue={setPickerValueFor}
                                                items={dataRecurringFor}
                                            />
                                        </View>
                                    </>
                            }
                        </View>
                    </View>
                    <Text style={styles.meetingText}>Select a meeting room</Text>
                    <View style={{ width: "100%" }}>
                        {
                            arr.map((item, index) => {
                                return (
                                    <View style={styles.flatListScreen}>
                                        <TouchableOpacity
                                            onPress={() => {
                                                goToNextPage(ScreensName.MeetingRoomSelectedScreen, {
                                                    data: item
                                                })
                                            }}
                                            style={styles.imgContainer}>
                                            <Image source={item.img} style={{ borderRadius: 15, width: '100%' }} />
                                        </TouchableOpacity>
                                        <View style={styles.titleConainer}>
                                            <Text style={styles.titleText}>{item.title}</Text>
                                            <View style={styles.iconContainer}>
                                                <Feather name='users' color={'black'} size={normalize(20)} />
                                                <Text style={{ fontSize: normalize(20), color: 'black' }}> X8</Text>
                                            </View>
                                        </View>
                                    </View>
                                )
                            })
                        }
                        {/* <FlatList
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
                        /> */}
                    </View>
                </View >
            </ScrollView>
        </View >
    )
}

export default MeetingRoomScreen

