import { StyleSheet } from 'react-native'
import normalize from 'react-native-normalize';
import { theme } from '../../core/theme';


export default StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: theme.colors.primary,

    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    activityIndicator: {
        alignItems: 'center',
        height: normalize(20),
        position: 'absolute',
        bottom: normalize(100)
    },
});
