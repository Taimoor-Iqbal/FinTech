import { View, ScrollView, Text, Image } from 'react-native'
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
import { Strings } from '../../core/String'

const HomeScreen = () => {
    const [modalVisible, setModalVisible] = useState(true);


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
                <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
                    <View style={styles.textContainer}>
                        <Text style={styles.textStyle}>Hi Ahmad !</Text>
                        <Text style={styles.boldText}>Welcome to Fintech Saudi</Text>
                    </View>
                    <View style={styles.meetingContainer}>
                        <Text style={styles.meetingText}>Your meetings</Text>
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
