import { Text, View, TouchableOpacity, ScrollView, TextComponent } from 'react-native'
import React, { useState } from 'react'
import styles from './AddParticipantScreenStyle'
import Header from '../../components/Header'
import ArrowBack from '../../assets/svg/ArrowBack.svg'
import { Divider } from 'react-native-paper'
import Input from '../../components/TextInput'
import Button from '../../components/Button'
import normalize from 'react-native-normalize'
import { ScreensName, Strings } from '../../core/String'
import { useNavigation } from '@react-navigation/native'

const AddParticipantScreen = () => {

    const [addList, setAddList] = useState([{ addMember: "" }])
    console.log(addList)
    const handleMemberAdd = () => {
        setAddList([...addList, { addMember: " " }])
    }

    const goToNextPage = (page, data) => {
        navigation.navigate(page, data)
    }

    const navigation = useNavigation()

    const handleServiceChange = (e, index) => {
        const { name, value } = e.event
        const list = [...setAddList]
        list[index][name] = value
        setAddList(list)
    }

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.headTitle}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ArrowBack />
                </TouchableOpacity>
                <Text style={styles.title}>Meeting Rooms</Text>
            </View>
            <ScrollView
                contentContainerStyle={{ paddingBottom: 100 }}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.subContainer}>
                    <Text style={styles.pageTitle}>Add participants</Text>
                    {
                        addList.map((item, index) => (
                            <View key={index}>


                                <Text style={{ fontSize: normalize(14), position: 'absolute', color: 'black' }}>Member {index + 1}</Text>
                                <Input
                                    required
                                    label='Name'
                                    value={item.addMember}
                                    onChangeText={(e) => handleServiceChange(e, index)}
                                />
                                <Input
                                    required
                                    label='Email address'
                                    autoCapitalize="none"
                                />

                                {
                                    addList.length - 1 !== index &&
                                    <Divider style={styles.divider} />}
                                {
                                    addList.length - 1 === index && addList.length < 8 &&
                                    <TouchableOpacity
                                        style={styles.btnAdd}
                                        onPress={handleMemberAdd}
                                    >
                                        <Text style={{ fontSize: normalize(20), color: 'black' }}>+  <Text>Add more</Text></Text>
                                    </TouchableOpacity>

                                }
                            </View>
                        ))
                    }
                </View>
            </ScrollView >
            <View style={styles.footer}>
                <Button
                    onPress={() => goToNextPage(ScreensName.SummaryScreen, {

                    })}
                    labelStyle={styles.buttonText}
                    mode='contained'
                >{Strings.Confirmteammates}</Button>
            </View>
        </View >
    )
}

export default AddParticipantScreen

