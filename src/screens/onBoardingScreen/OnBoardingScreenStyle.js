import { StyleSheet } from 'react-native'
import normalize from 'react-native-normalize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { FontFamilyName } from '../../core/String';
import { theme } from '../../core/theme';


export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: theme.colors.primary
    },
    btnContainer: {
        marginTop: 250,
        width: wp('90%'),
        alignSelf: 'center',
    },
    subBtnContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btn: {
        width: wp("44%"),
        backgroundColor: 'transparent',
        borderColor: '#30b890',
        borderWidth: 2
    },
    buttonText: {
        color: 'white',
        fontSize: normalize(20),
        fontFamily: FontFamilyName.MontserratMedium
    },
    subButtonText: {
        color: '#30b890',
        fontSize: normalize(8),
        fontFamily: FontFamilyName.MontserratMedium
    }
});