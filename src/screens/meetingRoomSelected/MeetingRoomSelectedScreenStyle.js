import { StyleSheet } from 'react-native'
import normalize from 'react-native-normalize';
import { FontFamilyName } from '../../core/String'


export default StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    subContainer: {
        width: '90%',
        alignSelf: 'center'
    },
    headTitle: {
        marginTop: normalize(15),
        flexDirection: 'row',
        alignItems: "center",
        width: '90%',
        alignSelf: 'center'
    },
    title: {
        paddingLeft: normalize(20),
        fontSize: normalize(20),
        color: 'black',
        fontFamily: FontFamilyName.MontserratMedium
    },
    imgContainer: {
        marginTop: normalize(20),
        width: '100%',
        height: normalize(200)
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
    disabledPicker: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    clockSvg: {
        position: 'absolute',
        top: 20,
        right: 10
    },
    footer: {
        position: 'absolute',
        bottom: 15,
        width: '90%',
        alignSelf: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: normalize(16),
        fontFamily: FontFamilyName.MontserratMedium

    },
});