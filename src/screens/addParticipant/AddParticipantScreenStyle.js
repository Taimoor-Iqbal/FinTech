import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";
import { FontFamilyName } from "../../core/String";

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
    pageTitle: {
        fontFamily: FontFamilyName.MontserratSemiBold,
        fontSize: normalize(25),
        color: 'black',
        marginVertical: normalize(15)
    },
    divider: {
        width: '100%',
        height: normalize(3),
        marginTop: 30,
        marginBottom: 20,
    },
    btnAdd: {
        borderWidth: 1,
        borderColor: 'black',
        width: '35%',
        height: normalize(40),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: normalize(20)
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
        fontFamily: FontFamilyName.MontserratBold
    },
})