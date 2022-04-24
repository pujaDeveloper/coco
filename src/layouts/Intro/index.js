import React, { Component } from 'react';
import { Safe, View, Text, Button, TextInput, Image, TouchableOpacity, Modal, StyleSheet, Pressable, FlatList, StatusBar, } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { newNotif, readNotif } from '../../redux/notificationSlice'
import color from '../../utils/color';
import Globals, { getcategories } from '../../utils/Globals';
import { getStoredData, setStoredData } from '../../utils/store';
import LottieView from 'lottie-react-native';
import { Message } from '../../utils/message';
import database from '@react-native-firebase/database';
import { firebase } from '@react-native-firebase/database';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import CheckBox from '@react-native-community/checkbox';
import _ from 'lodash';
import { Chip } from 'react-native-paper';
const profile_img = require('../../assets/Images/profile.png')

export class Intro extends Component {


    constructor(props) {
        super(props);
        this.state = {
            interests: [],
            users: [],
            isFilterModalVisible: false,
            count: 2,
            filteredUsers: [],
            selectedInterests: []
        }
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.setHeader()
        this.getInterests()
        this.getUsers()

    }

    setHeader() {
        let { count, interests, isFilterModalVisible } = this.state
        this.props.navigation.setOptions({
            headerTitleAlign: 'center',
            headerTitle: () => (<TouchableOpacity onPress={async () => {
                this.setState({ isFilterModalVisible: !this.state.isFilterModalVisible })
                // await setModalVisible(!modalVisible)
                // readNotifications()
            }} style={styles.header}>
                {/* <Image style={[styles.headerRightimg, {tintColor: notifList && notifList.length > 0 ? color.Green : color.LightGrey }]}
                  source={notification_active_img} /> */}
                <Text style={styles.headerText}>{this.getHeaderTitle()}</Text>

            </TouchableOpacity>),
            // headerLeft: () => {
            //     return <TouchableOpacity >
            //         <Image style={styles.headerLeftImg}
            //             source={profile_img} />
            //     </TouchableOpacity>
            // },
        });
    }


    interestRow = ({ index, item }) => (
        <TouchableOpacity onPress={() => this.onSelectInterest(item, !this.state.selectedInterests.includes(item))} style={{ width: '100%', paddingHorizontal: 10, }} >
            <View style={styles.interestRow}>
                <CheckBox
                    disabled={false}
                    value={this.state.selectedInterests.includes(item)}
                    style={styles.checkBox}
                    onValueChange={(newValue) => this.onSelectInterest(item, newValue)}
                />
                <Text style={styles.checkBoxText}>{item}</Text>
            </View>

        </TouchableOpacity>
    );


    userRow = ({ index, item }) => {
        let cInterests = _.intersectionWith(this.state.selectedInterests, item.interests);
        return (
            <TouchableOpacity onPress={() => {
                // item['selectable'] = item.selectable ? false : true
                // let t = this.state.categories
                // t[index] = item
                // this.setState({ categories: t })
            }} style={[styles.userRow, { backgroundColor: item.selectable ? color.LightGreen : color.WHITE }]}>
                {/* <Image style={styles.rowImg}
                source={item.image} /> */}
                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center"
                }}>
                    <Image source={require('../../assets/Images/avatars/me.png')} style={{ width: 40, height: 40, marginRight: 20 }}></Image>
                    <Text style={styles.rowText}>{item.name}</Text>
                </View>
                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingLeft: 45
                }}>
                    {
                        cInterests.map(item => (<View style={{
                            backgroundColor: "#fbe9e7",
                            padding: 5,
                            paddingHorizontal: 15,
                            borderRadius: 15,
                            marginRight: 5
                        }}>
                            <Text>{item}</Text>
                        </View>))
                    }

                </View>
            </TouchableOpacity>
        )
    };

    render() {
        let { users, filteredUsers, count, interests, isFilterModalVisible } = this.state
        return (
            <View style={styles.container}>
                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    paddingHorizontal: 10,
                    flexWrap: "wrap"
                }}>
                    {this.state.selectedInterests.map(item => (
                        <Chip closeIcon={"close-circle"} onClose={() => {
                            this.onSelectInterest(item, false)
                            this.onFilter()
                        }} style={{
                            marginRight: 5
                        }}>{item}</Chip>
                    ))}
                </View>

                {users && <FlatList
                    ref={ref => this.list = ref}
                    data={filteredUsers}
                    renderItem={this.userRow}
                    keyExtractor={item => item.key}
                />}
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={isFilterModalVisible}
                    style={{ backgroundColor: 'black' }}
                    onRequestClose={() => {
                        // setModalVisible(!modalVisible);
                        this.setState({ isFilterModalVisible: !this.state.isFilterModalVisible })
                    }}>
                    <SafeAreaView style={{ height: '100%', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <View style={styles.modalSubView} onPressOut={() => {
                            // setModalVisible(!modalVisible)   
                            this.setState({ isFilterModalVisible: !this.state.isFilterModalVisible })
                        }}>
                            <View style={styles.modalView}>                            
                                {(interests && interests.length > 0) ? <FlatList
                                    ref={ref => this.interests = ref}
                                    style={{ width: '100%' }}
                                    data={interests}
                                    renderItem={this.interestRow}
                                    keyExtractor={item => item}
                                /> : (
                                    <View style={{ padding: 10 }}>
                                        {/* <NoData label={Message.no_notification}></NoData> */}
                                    </View>
                                )}
                                <TouchableOpacity style={{
                                    backgroundColor: "#f4511e",
                                    padding: 5,
                                    paddingHorizontal: 20,
                                    borderRadius: 20,
                                    marginBottom: 10
                                }} onPress={() => {
                                    this.setHeader()
                                    this.onFilter()
                                    this.setState({ isFilterModalVisible: !this.state.isFilterModalVisible })
                                }}>
                                    <Text style={{
                                        color: 'white',
                                        padding: 10,
                                        fontWeight: '600'
                                    }}>Confirm</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </SafeAreaView>
                </Modal>
            </View>


        );
    }

    async getUsers() {
        console.log("getUsers");
        await new Promise((resolve, reject) => {
            database().ref("/DB/Users").orderByChild("original")
            .on('value', (snapshot) => {
                var returnArr = [];

                console.log("snapshot", snapshot.val());
                snapshot.forEach(function (childSnapshot) {
                    console.log("childSnapshot");
                    var item = childSnapshot.val();
                    item.key = childSnapshot.key;
                    let arr = []
                    Object.keys(item.interests).map((key) => arr.push(item.interests[key]));
                    item.interests = arr

                    returnArr.push(item);
                });
                console.log("dataArray", returnArr);
                this.setState({ users: returnArr, filteredUsers: returnArr })
                resolve()
            }, (err) => {
                console.log(err, "error")
                reject()
            })
            // .on("error", err => {
            //     console.log("erro in db", err);
            //     reject();
            // })
        });
        console.log("getUsers1");
    }

    getInterests() {

        database().ref("/DB/Interests").orderByChild("original").on('value', (snapshot) => {
            var returnArr = [];

            snapshot.forEach(function (childSnapshot) {
                console.log("childSnapshot", childSnapshot);
                var item = childSnapshot.val();
                // item.key = childSnapshot.key;
                // item.selected = false;

                returnArr.push(item);
            });


            this.setState({ interests: returnArr })
        });
    }

    onSelectInterest(item, newValue) {
        console.log("newValue", newValue, item);
        if (newValue) {
            let t = this.state.selectedInterests
            t.push(item)
            this.setState({ selectedInterests: t })
        } else {
            if (this.state.selectedInterests.includes(item)) {
                let arr = this.state.selectedInterests
                arr.splice(arr.indexOf(item), 1);
                this.setState({ selectedInterests: arr })
            }
        }

        // let newArr = this.state.interests.map(x => {
        //     if (item.key == x.key) {
        //         x['selected'] = newValue
        //     }
        //     return x
        // });
        // this.setState({ interests: newArr })
    }
    getHeaderTitle() {
        return "Select Interests"
    }

    onFilter() {
        if (this.state.selectedInterests.length <= 0) {
            this.setState({ filteredUsers: this.state.users })
        } else {
            console.log("this.state.selectedInterests", this.state.selectedInterests);
            let fUsers = this.state.users.filter(x => {
                console.log("onFilter x", x);
                let obj = x.interests.filter(i => this.state.selectedInterests.includes(i));
                console.log("obj", obj);
                return obj && obj.length > 0
            });
            this.setState({ filteredUsers: fUsers })
        }

    }

}
