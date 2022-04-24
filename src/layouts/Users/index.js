import React, { Component } from 'react';
import { Safe, View, Text, Button, TextInput, Image, TouchableOpacity, Modal, StyleSheet, Pressable, FlatList, StatusBar, } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { newNotif, readNotif } from '../../redux/notificationSlice'
import color from '../../utils/color';
import Globals from '../../utils/Globals';
import { getStoredData, setStoredData } from '../../utils/store';
import LottieView from 'lottie-react-native';
import { Message } from '../../utils/message';
import database from '@react-native-firebase/database';
import { firebase } from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import CheckBox from '@react-native-community/checkbox';
import _ from 'lodash';
import { Chip } from 'react-native-paper';
import NoData from '../../components/NoData';
import { screenHeight } from '../../utils/theme';
const profile_img = require('../../assets/Images/profile.png')

export class Users extends Component {


    constructor(props) {
        super(props);
        this.state = {
            interests: [],
            users: [],
            isFilterModalVisible: false,
            count: 2,
            filteredUsers: [],
            selectedInterests: [],
            currentPage: 0,
            limit: 10,
            isPageEnd: false
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
            }} style={styles.header}>
                <Text style={styles.headerText}>{this.getHeaderTitle()}</Text>

            </TouchableOpacity>),
        });
    }


    interestRow = ({ index, item }) => (
        <TouchableOpacity onPress={() => this.onSelectInterest(item, !this.state.selectedInterests.includes(item))} style={styles.interestRowContainer} >
            <View style={styles.interestRow}>
                <CheckBox
                    disabled={false}
                    value={this.state.selectedInterests.includes(item)}
                    style={styles.checkBox}
                // onValueChange={(newValue) => this.onSelectInterest(item, newValue)}
                />
                <Text style={styles.checkBoxText}>{item}</Text>
            </View>

        </TouchableOpacity>
    );


    userRow = ({ index, item }) => {
        let cInterests = _.intersectionWith(this.state.selectedInterests, item.interests);
        return (
            <TouchableOpacity onPress={() => {
            }} style={[styles.userRowContainer, { backgroundColor: item.selectable ? color.LightGreen : color.WHITE }]}>
                <View style={styles.userRow}>
                    <Image source={require('../../assets/Images/avatars/me.png')} style={styles.userRowImg}></Image>
                    <Text style={styles.rowText}>{item.name}</Text>
                </View>
                <View style={styles.userInetrestContainer}>
                    {
                        cInterests.map(item => (<View style={styles.ineterestChip}>
                            <Text>{item}</Text>
                        </View>))
                    }

                </View>
            </TouchableOpacity>
        )
    };

    render() {
        let { users, filteredUsers, count, interests, isFilterModalVisible, currentPage } = this.state
        return (
            <View style={styles.container}>
                <View style={styles.subConatiner}>
                    {this.state.selectedInterests.map(item => (
                        <Chip style={{
                            margin: 5,
                            maxHeight: 30
                        }}>{item}</Chip>
                    ))}
                </View>

                {users ? <View style={{height: screenHeight - 150}}><FlatList
                    ref={ref => this.list = ref}
                    data={users}
                    renderItem={this.userRow}
                    keyExtractor={item => item.key}
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                        this.getUsers()
                    }}
                    ListFooterComponent={() => <Text style={{alignSelf: 'center', margin: 10}}>End of List</Text>}
                /></View> :
                    <View style={styles.noDataContainer}>
                        <NoData label={Message.no_user} />
                    </View>}

                
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={isFilterModalVisible}
                    style={{ backgroundColor: 'black' }}
                    onRequestClose={() => {
                        this.setState({ isFilterModalVisible: !this.state.isFilterModalVisible })
                    }}>
                    <SafeAreaView style={{ height: '100%', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <View style={styles.modalSubView} onPressOut={() => {
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
                                    backgroundColor: color.PRIMARY,
                                    padding: 5,
                                    paddingHorizontal: 20,
                                    borderRadius: 20,
                                    marginBottom: 10
                                }} onPress={async() => {
                                    this.setHeader()
                                    // this.onFilter()
                                    await this.setState({ isFilterModalVisible: !this.state.isFilterModalVisible, users: [], isPageEnd: false, currentPage: 0 })
                                    this.getUsers()

                                }}>
                                    <Text style={{
                                        color: color.WHITE,
                                        padding: 10,
                                        fontWeight: '600'
                                    }}>{Message.confirm}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </SafeAreaView>
                </Modal>
            </View>


        );
    }


    async getUsers() {      
        
        let { currentPage, limit, selectedInterests = [], users, isPageEnd } = this.state;
        let epochLimit = users.length ? users[users.length - 1].epoch: Date.now();
        console.log("getting users", { currentPage, limit, selectedInterests, isPageEnd }, epochLimit);
        
        if (isPageEnd) {
            return;
        }
        if (!_.isEmpty(selectedInterests)) {
            firestore().collection('Users').where("interests", "array-contains-any", selectedInterests).orderBy('epoch', 'desc').startAfter(epochLimit).limit(limit).get().then(querySnapshot => {
                console.log('Total users: ', querySnapshot.size);
    
                var returnArr = [];
                querySnapshot.forEach(documentSnapshot => {
                    console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                    var item = documentSnapshot.data();
                    item.key = documentSnapshot.key;
                    returnArr.push(item);
                });
                if (querySnapshot.size == limit) {
                    currentPage++;
                } else {
                    isPageEnd = true
                }
                this.setState({ users: [...users, ...returnArr], isPageEnd, currentPage })    
            });
        } else {
            firestore().collection('Users').orderBy('epoch','desc').startAfter(epochLimit).limit(limit).get().then(querySnapshot => {
                console.log('Total users: ', querySnapshot.size);
    
                var returnArr = [];
                querySnapshot.forEach(documentSnapshot => {
                    console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                    var item = documentSnapshot.data();
                    item.key = documentSnapshot.key;
                    returnArr.push(item);
                });
                if (querySnapshot.size == limit) {
                    currentPage++;
                } else {
                    isPageEnd = true
                }
                this.setState({ users: [...users, ...returnArr], currentPage, isPageEnd })                
            });
        }
    }

    getInterests() {
        firestore().collection('Interests').onSnapshot((QuerySnapshot) => {
            // console.log('Got Users collection result.', QuerySnapshot);
            var returnArr = [];
            QuerySnapshot.forEach(documentSnapshot => {
                // console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                var item = documentSnapshot.data().name;
                returnArr.push(item);
            });
            this.setState({ interests: returnArr })

        }, (error) => {
            console.error(error);
        });

    }

    onSelectInterest(item, newValue) {
        if (newValue && !this.state.selectedInterests.includes(item)) {
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

    }
    getHeaderTitle() {
        return this.state.selectedInterests.length > 0 ? this.state.selectedInterests.length + " " + Message.selected : Message.select_inetrests
    }

    onFilter() {
        if (this.state.selectedInterests.length <= 0) {
            this.setState({ filteredUsers: this.state.users })
        } else {
            let fUsers = this.state.users.filter(x => {
                let obj = x.interests.filter(i => this.state.selectedInterests.includes(i));
                return obj && obj.length > 0
            });
            this.setState({ filteredUsers: fUsers })
        }

    }

}
