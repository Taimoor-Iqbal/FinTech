import { StyleSheet } from "react-native"
import { FontFamilyName } from "../../core/String"
import { theme } from '../../core/theme'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import normalize from "react-native-normalize";
export default StyleSheet.create({
    mainBody: {
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: 'white'
    },
    header: {
        backgroundColor: theme.colors.primary,
        height: hp('12%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    textContainer: {
        width: '90%',
        alignSelf: 'center',
        marginTop: normalize(20),
        flexDirection: 'column',
    },
    textStyle: {
        fontFamily: FontFamilyName.FrutigerFamily,
        fontSize: normalize(20),
        padding: 2,
        color: theme.colors.primary,
    },
    boldText: {
        fontFamily: FontFamilyName.Frutiger_Bold_Family,
        fontSize: normalize(26),
        padding: 2,
        color: theme.colors.primary,
    },
    meetingContainer: {
        marginLeft: normalize(20),
        marginVertical: normalize(10),
        width: wp('90%'),

    },
    meetingText: {
        fontSize: normalize(20),
        fontFamily: FontFamilyName.MontserratMedium,
        color: 'black'
    },
    bookMeeting: {
        flexDirection: 'row',
        marginTop: normalize(10),
    },
    bookInfo: {
        flexDirection: 'column',
        marginTop: normalize(5),
    },
    bookInfoText: {
        fontSize: normalize(14),
        marginLeft: normalize(12),
        color: theme.colors.secondary,
        paddingBottom: normalize(8),
        fontFamily: FontFamilyName.MontserratRegular
    },
    meetingBtnContainer: {
        flexDirection: 'row',
        marginLeft: normalize(12),
        alignItems: 'center',
        justifyContent: 'center'
    },
    meetingPriceText: {
        fontSize: normalize(18),
        fontFamily: FontFamilyName.MontserratMedium,
        marginTop: normalize(10),
        color: 'black'

    },
    meetingHrText: {
        fontSize: normalize(14),
        color: 'black'
    },
    btn: {
        width: wp("30%"),
        marginLeft: normalize(5),
        height: hp("7%"),
        marginRight: normalize(20)
    },
    buttonText: {
        color: 'white',
        fontSize: normalize(10),
        fontFamily: FontFamilyName.MontserratMedium
    },
    qrContainer: {
        backgroundColor: theme.colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: normalize(10),
        width: wp('30%'),
        position: 'absolute',
        bottom: 0,
        right: 0,
        borderTopLeftRadius: normalize(25)
    },
    qrText: {
        color: 'white',
        fontSize: normalize(18),
        fontFamily: FontFamilyName.MontserratMedium
    },
    priceContainer: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        alignItems: 'center',
        alignSelf: 'center',
    },
    subPriceContainer: {
        borderWidth: 1,
        borderColor: '#d6d7dc',
        padding: 15,
        borderRadius: 5,
        width: '48%'
    },
    priceSvg: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    priceText: {
        fontFamily: FontFamilyName.MontserratMedium,
        fontSize: normalize(14),
        color: 'black'
    }
})