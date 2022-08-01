import { StyleSheet } from 'react-native'
import normalize from 'react-native-normalize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { FontFamilyName } from '../../core/String';


export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },

    headerContainer: {
        marginTop: 10,
        paddingHorizontal: 15
    },
    headerText: {
        fontSize: normalize(26),
        color: 'black'
    },
    text: {
        padding: 20,
        fontSize: normalize(13),
        color: 'black'
    },
    inputContainer: {
        width: wp('90%'),
        alignSelf: 'center',
    },
    footer: {
        position: 'absolute',
        bottom: 15,
        width: wp('90%'),
        alignSelf: 'center',
    },
    forgetPassword: {
        marginTop: 10,
        alignSelf: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: normalize(16),
        fontFamily: FontFamilyName.MontserratMedium

    },

});