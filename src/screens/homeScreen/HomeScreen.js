import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import HowToBookModal from '../../models/HowToBookModal'
import styles from './HomeScreenStyle'
import HeaderLeftLogo from '../../assets/svg/HeaderLeftLogo.svg'
import HeaderRightLogo from '../../assets/svg/HeaderRightLogo.svg'
import Bell from '../../assets/svg/Bell.svg'
import QR from '../../assets/svg/QR.svg'
import Toll from '../../assets/svg/Toll.svg'
import Monetization from '../../assets/svg/Monetization_on.svg'
import normalize from 'react-native-normalize'
import { Images } from '../../core/Images'
import Button from '../../components/Button'
import { ScreensName, Strings } from '../../core/String'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { theme } from '../../core/theme'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const [modalVisible, setModalVisible] = useState(true);
    const navigation = useNavigation()

    const goToNextPage = (page) => {
        navigation.navigate(page)
    }


    return (
        <>
            <View style={{ position: 'absolute' }}>
                <HowToBookModal visible1={modalVisible} onClose={() => setModalVisible(!modalVisible)} />
            </View>
            <View style={styles.mainBody}>
                <View style={styles.header}>
                    <HeaderLeftLogo />
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Bell />
                        <HeaderRightLogo />
                    </View>
                </View>
                <ScrollView
                    contentContainerStyle={{ paddingBottom: 50 }}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.textContainer}>
                        <Text style={styles.textStyle}>Hi Ahmad !</Text>
                        <Text style={styles.boldText}>Welcome to Fintech Saudi</Text>
                    </View>
                    <View style={styles.meetingContainer}>
                        <Text style={styles.meetingText}>Your meetings</Text>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ paddingBottom: normalize(10), paddingRight: normalize(140) }}
                        >
                            <View style={[styles.dateTimeContainer, { backgroundColor: theme.colors.primary, marginLeft: 0 }]}>
                                <View style={styles.upcomingView}>
                                    <Text style={styles.upcomingText}>Upcoming</Text>
                                </View>
                                <Text style={{ color: 'white' }}>Today</Text>
                                <Text style={[styles.dateTimeHeadingText, { color: 'white' }]}>10:30 am - 11:30 am</Text>

                            </View>
                            <View style={styles.dateTimeContainer}>
                                <Text style={{ color: 'black' }}>5, May</Text>
                                <Text style={styles.dateTimeHeadingText}>10:30 am - 11:30 am</Text>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.meetingContainer}>
                        <Text style={[styles.meetingText, { fontSize: normalize(16) }]}>Book a meeting room</Text>
                        <View style={styles.bookMeeting}>
                            <Image
                                source={Images.MeetingRoom}
                                style={{ width: normalize(140), height: normalize(140), resizeMode: 'contain' }}
                            />
                            <View style={styles.bookInfo}>
                                <Text style={styles.bookInfoText}>For your team meetings</Text>
                                <Text style={[styles.bookInfoText, { color: 'black', fontSize: normalize(18) }]}>Meeting Rooms</Text>
                                <View style={{ width: normalize(220) }}><Text style={[styles.bookInfoText, { color: 'black', fontSize: normalize(12) }]}>A room has a big table in the middle with Smart TV</Text>
                                </View>
                                <View style={styles.meetingBtnContainer}>
                                    <Text style={styles.meetingPriceText}>SAR 80<Text style={styles.meetingHrText}>/hr</Text></Text>
                                    <Button
                                        onPress={() => goToNextPage(ScreensName.MeetingRoomScreen)}
                                        style={styles.btn}
                                        labelStyle={styles.buttonText}
                                    >{Strings.BookNow}</Button>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.priceContainer}>
                        <View style={styles.subPriceContainer}>
                            <View style={styles.priceSvg}>
                                <Toll />
                                <Text style={[styles.priceText, { paddingLeft: 5 }]}>Printing Credits</Text>
                            </View>
                            <Text style={[styles.priceText, { fontSize: normalize(18) }]}>SAR 00.00</Text>
                        </View>
                        <View style={styles.subPriceContainer}>
                            <View style={styles.priceSvg}>
                                <Monetization />
                                <Text style={[styles.priceText, { paddingLeft: 5 }]}>Money Credits</Text>
                            </View>
                            <Text style={[styles.priceText, { fontSize: normalize(18) }]}>SAR 00.00</Text>
                        </View>
                    </View>
                    <View style={styles.viewAll}>
                        <Text style={styles.viewText}>What’s happening</Text>
                        <TouchableOpacity>
                            <Text style={styles.viewBtnText}>View All</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: 50, paddingRight: normalize(160) }}>
                        <View style={styles.dateTimeContainer}>
                            <Text style={{ color: '#30B991' }}>Event</Text>
                            <Text style={styles.dateTimeHeadingText}>Start up pitch event</Text>
                            <View style={styles.dateTime}>
                                <MaterialIcons name='date-range' size={normalize(23)} color='black' />
                                <Text style={styles.dateTimeText}>June 26, 2022 - Sunday</Text>
                            </View>
                            <View style={[styles.dateTime, { justifyContent: 'space-between' }]}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Ionicons name='time' size={normalize(23)} color='black' />
                                    <Text style={styles.dateTimeText}>5 pm - 6 pm</Text>
                                </View>
                                <Text style={[styles.dateTimeText, { fontSize: normalize(20), color: 'black' }]}>SAR 00<Text style={{ fontSize: normalize(16) }}>/each</Text></Text>
                            </View>
                        </View>
                        <View style={styles.dateTimeContainer}>
                            <Text style={{ color: '#30B991' }}>Event</Text>
                            <Text style={styles.dateTimeHeadingText}>Start up pitch event</Text>
                            <View style={styles.dateTime}>
                                <MaterialIcons name='date-range' size={normalize(23)} color='black' />
                                <Text style={styles.dateTimeText}>June 26, 2022 - Sunday</Text>
                            </View>
                            <View style={[styles.dateTime, { justifyContent: 'space-between' }]}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Ionicons name='time' size={normalize(23)} color='black' />
                                    <Text style={styles.dateTimeText}>5 pm - 6 pm</Text>
                                </View>
                                <Text style={[styles.dateTimeText, { fontSize: normalize(20), color: 'black' }]}>SAR 00<Text style={{ fontSize: normalize(16) }}>/each</Text></Text>
                            </View>
                        </View>
                    </ScrollView>
                </ScrollView>
                <View style={styles.qrContainer}>
                    <QR />
                    <Text style={styles.qrText}>SCAN</Text>
                </View>
            </View>

        </>
    )
}

export default HomeScreen

