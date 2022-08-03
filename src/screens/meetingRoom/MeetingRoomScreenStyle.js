import { StyleSheet } from 'react-native'
import normalize from 'react-native-normalize';
import { FontFamilyName } from '../../core/String'


export default StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    subContainer: {
        width: '90%',
        alignSelf: 'center'
    },
    headingText: {
        fontFamily: FontFamilyName.MontserratMedium,
        fontSize: normalize(20),
        fontWeight: '700',
        color: 'black',
        marginTop: normalize(10)
    },
    dateTimeText: {
        fontSize: normalize(23),
        color: 'black',
        fontFamily: FontFamilyName.MontserratMedium,
        fontWeight: '600',
        // marginTop: normalize(10)
    },
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
    timeContainer: {
        width: '100%',
        height: normalize(65),
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignSelf: 'center',
    },
    timePicker: {
        width: '100%',
        backgroundColor: '#d6d7dc',
        height: '100%',
        borderRadius: 8,
        marginVertical: normalize(10),
        justifyContent: 'center',
        // paddingHorizontal: normalize(10)
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
    meetingText: {
        fontFamily: FontFamilyName.MontserratMedium,
        fontSize: normalize(25),
        color: 'black'
    },
    flatListScreen: {
        marginTop: 10,
    },
    imgContainer: {
        marginBottom: 10
    },
    titleConainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titleText: {
        fontFamily: FontFamilyName.MontserratMedium,
        fontSize: normalize(18),
        color: 'black'
    },
    iconContainer: {
        flexDirection: 'row',
        backgroundColor: '#d6d7dc',
        width: '20%',
        height: normalize(30),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8

    }
});