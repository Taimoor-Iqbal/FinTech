import { Modal, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import { FontFamilyName, Strings } from '../core/String';
import { Images } from '../core/Images';
import Button from '../components/Button';
const HowToBookModal = (props) => {

    const [modalVisible, setModalVisible] = useState(true);

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.visible1}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}
            style={{ margin: 0 }}
        >
            <View style={styles.centeredView}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>How to book office?</Text>
                    <TouchableOpacity
                        onPress={() => props.onClose()}
                        style={styles.iconContainer}>
                        <Entypo name='cross' color={'black'} size={20} />
                    </TouchableOpacity>
                </View>
                <View style={styles.image}>
                    <Image
                        style={{
                            width: '90%',
                            borderRadius: 10
                        }}
                        source={Images.ModalMeeting}
                    />
                </View>
                <View style={styles.btnContainer}>
                    <Button
                        onPress={() => props.onClose()}
                        labelStyle={styles.buttonText}
                    >{Strings.Skip}</Button>
                </View>
                {/* <View style={styles.modalView}>
                    <Text style={styles.modalText}>Hello World!</Text>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        // onPress={() => setModalVisible(!props.visible1)}
                        onPress={() => props.onClose()}
                    >
                        <Text style={styles.textStyle}>Hide Modal</Text>
                    </Pressable>
                </View> */}
            </View>
        </Modal>
        /* <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
        >
            <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable> */
    )
}



export default HowToBookModal

const styles = StyleSheet.create({
    centeredView: {
        width: "85%",
        height: "90%",
        backgroundColor: 'white',
        borderRadius: 20,
        elevation: 5,
        alignSelf: 'center',
        marginTop: 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15
    },
    headerText: {
        fontFamily: FontFamilyName.MontserratMedium,
        fontSize: 22,
        color: 'black'
    },
    iconContainer: {
        width: 26,
        height: 26,
        borderRadius: 13,
        borderColor: 'black',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    image: {
        justifyContent: 'center',
        alignItems: 'center',
        // alignSelf: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    btnContainer: {
        width: '90%',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 10
    }
});
