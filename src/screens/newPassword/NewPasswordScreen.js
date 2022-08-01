import { KeyboardAvoidingView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header'
import Input from '../../components/TextInput'
import Button from '../../components/Button'
import { ScreensName, Strings } from '../../core/String'
import styles from './NewPasswordScreenStyle'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

const NewPasswordScreen = () => {
    const [showData, setShowData] = useState(true)
    const [confirmShowData, setConfirmShowData] = useState(true)

    const navigation = useNavigation()

    const goToNextPage = (page) => {
        navigation.navigate(page)
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}
            behavior={Platform.OS === 'ios' && 'padding'}
        >
            <View style={styles.mainContainer}>
                <Header />
                <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>Set up a New Password</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={[styles.text, { marginBottom: 5 }]}>Please follow these Guidelines</Text>
                        <Text style={styles.text}>. Must be a minimum of 8 characters long</Text>
                        <Text style={styles.text}>. Must contain an uppercase letter</Text>
                        <Text style={styles.text}>. Must contain a number</Text>
                    </View>

                    <View style={styles.inputContainer}>
                        <View>
                            <Input
                                label='New Password'
                                autoCapitalize="none"
                                secureTextEntry={showData}

                            />
                            <TouchableOpacity
                                onPress={() => setShowData(!showData)}
                                style={{ position: 'absolute', top: 58, right: 15 }}>
                                <Feather name='eye' color='black' size={20} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Input
                                label='Confirm New Password'
                                autoCapitalize="none"
                                secureTextEntry={confirmShowData}
                            />
                            <TouchableOpacity
                                onPress={() => setConfirmShowData(!confirmShowData)}
                                style={{ position: 'absolute', top: 58, right: 15 }}>
                                <Feather name='eye' color='black' size={20} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.footer}>
                    <Button
                        onPress={() => goToNextPage(ScreensName.HomeScreen)}
                        labelStyle={styles.buttonText}
                        mode='contained'
                    >{Strings.newPassword}</Button>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default NewPasswordScreen

