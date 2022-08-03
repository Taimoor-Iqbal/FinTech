import { Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import React from 'react'
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
import { Strings } from '../../core/String'
import TimeLineComponent from '../../components/TimeLineComponent'


const MeetingRoomSelectedScreen = (props) => {
    const title = props.route.params.data.title
    const image = props.route.params.data.img

    const navigation = useNavigation()

    console.log('Data is ====>', title)
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
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <Button
                    labelStyle={styles.buttonText}
                    mode='contained'
                >{Strings.ProceedToAddingMembers}</Button>
            </View>
        </View>
    )
}

export default MeetingRoomSelectedScreen

