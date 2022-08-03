import React, { useEffect, useState } from 'react';
import {
    SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Platform, TextInput
} from 'react-native';
import normalize from 'react-native-normalize';
import { Divider } from 'react-native-paper';
import { FontFamilyName } from '../core/String';




const useForceUpdate = () => {
    const [, updateState] = React.useState();
    return React.useCallback(() => updateState({}), []);
}

const TimeLineComponent = () => {

    const forceUpdate = useForceUpdate();
    const [loading, setLoading] = useState(false);
    const [time, setTime] = useState("");
    const [data, setData] = useState([

        {
            "timeHours": "02:15 am",
            "timeNumber": 2.15,
            "isAvailableForBooking": true,
            "isLocationClosed": false
        },
        {
            "timeHours": "02:30 am",
            "timeNumber": 2.3,
            "isAvailableForBooking": true,
            "isLocationClosed": false
        },
        {
            "timeHours": "02:45 am",
            "timeNumber": 2.45,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "03:00 am",
            "timeNumber": 3,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "03:15 am",
            "timeNumber": 3.15,
            "isAvailableForBooking": true,
            "isLocationClosed": false
        },
        {
            "timeHours": "03:30 am",
            "timeNumber": 3.3,
            "isAvailableForBooking": true,
            "isLocationClosed": false
        },
        {
            "timeHours": "03:45 am",
            "timeNumber": 3.45,
            "isAvailableForBooking": true,
            "isLocationClosed": false
        },
        {
            "timeHours": "04:00 am",
            "timeNumber": 4,
            "isAvailableForBooking": true,
            "isLocationClosed": false
        },
        {
            "timeHours": "04:15 am",
            "timeNumber": 4.15,
            "isAvailableForBooking": true,
            "isLocationClosed": false
        },
        {
            "timeHours": "04:30 am",
            "timeNumber": 4.3,
            "isAvailableForBooking": true,
            "isLocationClosed": false
        },
        {
            "timeHours": "04:45 am",
            "timeNumber": 4.45,
            "isAvailableForBooking": true,
            "isLocationClosed": false
        },
        {
            "timeHours": "05:00 am",
            "timeNumber": 5,
            "isAvailableForBooking": true,
            "isLocationClosed": false
        },
        {
            "timeHours": "05:15 am",
            "timeNumber": 5.15,
            "isAvailableForBooking": true,
            "isLocationClosed": false
        },
        {
            "timeHours": "05:30 am",
            "timeNumber": 5.3,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "05:45 am",
            "timeNumber": 5.45,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "06:00 am",
            "timeNumber": 6,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "06:15 am",
            "timeNumber": 6.15,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "06:30 am",
            "timeNumber": 6.3,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "06:45 am",
            "timeNumber": 6.45,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "07:00 am",
            "timeNumber": 7,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "07:15 am",
            "timeNumber": 7.15,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "07:30 am",
            "timeNumber": 7.3,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "07:45 am",
            "timeNumber": 7.45,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "08:00 am",
            "timeNumber": 8,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "08:15 am",
            "timeNumber": 8.15,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "08:30 am",
            "timeNumber": 8.3,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "08:45 am",
            "timeNumber": 8.45,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "09:00 am",
            "timeNumber": 9,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "09:15 am",
            "timeNumber": 9.15,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "09:30 am",
            "timeNumber": 9.3,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "09:45 am",
            "timeNumber": 9.45,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "10:00 am",
            "timeNumber": 10,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "10:15 am",
            "timeNumber": 10.15,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "10:30 am",
            "timeNumber": 10.3,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "10:45 am",
            "timeNumber": 10.45,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "11:00 am",
            "timeNumber": 11,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "11:15 am",
            "timeNumber": 11.15,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "11:30 am",
            "timeNumber": 11.3,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "11:45 am",
            "timeNumber": 11.45,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "12:00 pm",
            "timeNumber": 12,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "12:15 pm",
            "timeNumber": 12.15,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "12:30 pm",
            "timeNumber": 12.3,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "12:45 pm",
            "timeNumber": 12.45,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "01:00 pm",
            "timeNumber": 1,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "01:15 pm",
            "timeNumber": 1.15,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "01:30 pm",
            "timeNumber": 1.3,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "01:45 pm",
            "timeNumber": 1.45,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "02:00 pm",
            "timeNumber": 2,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "02:15 pm",
            "timeNumber": 2.15,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "02:30 pm",
            "timeNumber": 2.3,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "02:45 pm",
            "timeNumber": 2.45,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "03:00 pm",
            "timeNumber": 3,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "03:15 pm",
            "timeNumber": 3.15,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "03:30 pm",
            "timeNumber": 3.3,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "03:45 pm",
            "timeNumber": 3.45,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "04:00 pm",
            "timeNumber": 4,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "04:15 pm",
            "timeNumber": 4.15,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "04:30 pm",
            "timeNumber": 4.3,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "04:45 pm",
            "timeNumber": 4.45,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "05:00 pm",
            "timeNumber": 5,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "05:15 pm",
            "timeNumber": 5.15,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "05:30 pm",
            "timeNumber": 5.3,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "05:45 pm",
            "timeNumber": 5.45,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "06:00 pm",
            "timeNumber": 6,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "06:15 pm",
            "timeNumber": 6.15,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "06:30 pm",
            "timeNumber": 6.3,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "06:45 pm",
            "timeNumber": 6.45,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "07:00 pm",
            "timeNumber": 7,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "07:15 pm",
            "timeNumber": 7.15,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "07:30 pm",
            "timeNumber": 7.3,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "07:45 pm",
            "timeNumber": 7.45,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "08:00 pm",
            "timeNumber": 8,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "08:15 pm",
            "timeNumber": 8.15,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "08:30 pm",
            "timeNumber": 8.3,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "08:45 pm",
            "timeNumber": 8.45,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "09:00 pm",
            "timeNumber": 9,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "09:15 pm",
            "timeNumber": 9.15,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "09:30 pm",
            "timeNumber": 9.3,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "09:45 pm",
            "timeNumber": 9.45,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "10:00 pm",
            "timeNumber": 10,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "10:15 pm",
            "timeNumber": 10.15,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "10:30 pm",
            "timeNumber": 10.3,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "10:45 pm",
            "timeNumber": 10.45,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "11:00 pm",
            "timeNumber": 11,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "11:15 pm",
            "timeNumber": 11.15,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "11:30 pm",
            "timeNumber": 11.3,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "11:45 pm",
            "timeNumber": 11.45,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        },
        {
            "timeHours": "12:00 am",
            "timeNumber": 12,
            "isAvailableForBooking": false,
            "isLocationClosed": false
        }

    ])




    function colorTheSlots(startTime, endTime) { // CALL THIS FUNCTION WHEN YOU GET START TIME AND END TIME FROM DATETIMEPICKER, 

        setLoading(true);
        let searchStartTime = data.find(v => v.timeHours == startTime);
        let searchEndTime = data.find(v => v.timeHours == endTime);
        let startTimeIndex = data.indexOf(searchStartTime);
        let endTimeIndex = data.indexOf(searchEndTime);
        let arr = data;
        for (let key in arr) {
            if (key >= startTimeIndex && key <= endTimeIndex) { //THIS IS THE MAIN LOGIC OF COLOR
                arr[key].color = true;
            }
            else arr[key].color = false;
        }

        setData(arr)
        forceUpdate();
        setLoading(false);

    }


    useEffect(() => {
        colorTheSlots("03:15 am", "04:45 am");
    }, [])

    useEffect(() => {

        var date = new Date()
        var hours = new Date().getHours()
        var minutes = new Date().getMinutes()
        setTime(hours + ":" + minutes)

    }, [])


    return (
        <SafeAreaView style={{ marginVertical: 10 }}>
            <Text style={{ color: 'black', fontWeight: 'bold' }}>Time Line</Text>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >

                {
                    data?.map((v, i) => {

                        let nextIndex = data[i + 1]?.isAvailableForBooking
                        let prevIndex = data[i - 1]?.isAvailableForBooking
                        let currentIndex = data[i]?.isAvailableForBooking

                        const showData = currentIndex ? !(currentIndex && prevIndex && nextIndex) : false


                        return (
                            <View key={i}>
                                {/* <View style={{ marginVertical: 10 }}>
                                    <Text style={{}}>{time}</Text>
                                </View> */}
                                <View style={{ backgroundColor: v.color ? '#d6d7dc' : 'white', borderColor: v.color ? 'red' : 'white', padding: 8, marginTop: 10 }}>
                                    <View style={{ width: 8, borderRadius: 12, height: 17, backgroundColor: v.isAvailableForBooking ? '#4BE173' : '#FF6B6B' }}>
                                    </View>
                                </View>
                                {
                                    v.isAvailableForBooking &&
                                    (i === 0 || showData) &&
                                    <View style={{}}>
                                        {/* <Divider style={{ height: normalize(30), width: normalize(5), justifyContent: 'space-evenly' }} /> */}
                                        {/* <Text style={{ fontSize: 10 }}>{v.timeHours}</Text> */}
                                    </View>
                                }
                            </View>
                        ) // borderWidth: v.color ? 0.5 : 0,
                    })
                }
            </ScrollView>

        </SafeAreaView >
    );
};



export default TimeLineComponent;
