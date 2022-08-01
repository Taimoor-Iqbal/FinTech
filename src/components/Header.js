import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { theme } from '../core/theme';
import HeaderLogo from '../assets/svg/HeaderLogo.svg'


const Header = () => {
    return (
        <View style={styles.imgHeader}>
            <HeaderLogo
                width='100%'
                style={{
                    position: 'absolute',
                    top: 20,
                    left: 0,
                    right: 0,
                    bottom: 0,
                }}
            />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    imgHeader: {
        width: '100%',
        height: wp('25%'),
        backgroundColor: theme.colors.primary
    },
})