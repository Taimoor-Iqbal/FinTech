import { Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from './MeetingRoomSelectedScreenStyle'
import Header from '../../components/Header'
import ArrowBack from '../../assets/svg/ArrowBack.svg'
import { useNavigation } from '@react-navigation/native'
import BookingProgresSteps from '../../components/BookingProgresSteps'
import normalize from 'react-native-normalize'
import CalenderComponent from '../../components/CalenderComponent'
import TimePickerComponent from '../../components/TimePickerComponent'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Button from '../../components/Button'
import { ScreensName, Strings } from '../../core/String'
import TimeLineComponent from '../../components/TimeLineComponent'
import PickerComponent from '../../components/PickerComponent'


const MeetingRoomSelectedScreen = (props) => {
    const title = props.route.params.data.title
    const image = props.route.params.data.img
    var dataRecurring = ['Yes', 'No']
    var dataRecurringFor = ['Every Day', 'Every Week', 'Every Month', 'Every Year', 'Custom']

    const [pickerValue, setPickerValue] = useState("No")
    const [pickerValueFor, setPickerValueFor] = useState("Every Day")

    const navigation = useNavigation()

    const goToNextPage = (page) => {
        navigation.navigate(page)
    }
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.headTitle}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ArrowBack />
                </TouchableOpacity>
                <Text style={styles.title}>{title}</Text>
            </View>
            <ScrollView
                contentContainerStyle={{ paddingBottom: 100 }}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.subContainer}>
                    <BookingProgresSteps isFocused={2} />

                    <View>
                        <TimeLineComponent />
                    </View>
                    <View style={styles.imgContainer}>
                        <Image source={image} style={{ borderRadius: 15, width: '100%', height: normalize(180) }} />
                    </View>
                    <View>
                        <CalenderComponent />
                    </View>
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
                                                value={pickerValueFor}
                                                setValue={setPickerValueFor}
                                                items={dataRecurringFor}
                                            />
                                        </View>
                                    </>
                            }
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <Button
                    onPress={() => goToNextPage(ScreensName.AddParticipantScreen)}
                    labelStyle={styles.buttonText}
                    mode='contained'
                >{Strings.ProceedToAddingMembers}</Button>
            </View>
        </View>
    )
}

export default MeetingRoomSelectedScreen

