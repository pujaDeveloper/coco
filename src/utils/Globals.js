
import DeviceInfo from 'react-native-device-info';
import { setStoredData } from './store';

export default Globals = {

    isIpad: DeviceInfo.isTablet(),

    // Storage Key
    kUserData: "userData",
    kToken: "token",

    //DB keys
    favCategories: "fav_categories",
    loggedIn: "loggedIn",

    //notification types
    NOTIFICATION_TYPES: ["profile_score","video_live"],


    //KEYS
    KEY_ME : "me"


}


export const getcategories = () => {
    return [
        {
            id: 1,
            category: 'Fitness',
            image: require("../assets/Images/fitness.png")
        },
        {
            id: 2,
            category: 'Movies',
            image: require("../assets/Images/movies.png")
        },
        {
            id: 3,
            category: 'Sports',
            image: require("../assets/Images/sports.png")
        },
        {
            id: 4,
            category: 'Art',
            image: require("../assets/Images/art.png")
        },
        {
            id: 5,
            category: 'Politics',
            image: require("../assets/Images/politics.png")
        },
        {
            id: 5,
            category: 'Relationships',
            image: require("../assets/Images/relationships.png")
        }
    ]
}

export const getChat = () => {
    return  [
        {
            id: '0',
            text: 'Really Good',
            from: "abc@gmail.com",
        },
        {
            id: '1',
            text: 'am going to airport.',
            from: "me",
        },
        {
            id: '2',
            text: 'Hello I am snow',
            from: "xyz@gmail.com",
        },
        {
            id: '3',
            text: 'No, you are Aegon Targaryen , son of Lyanna Stark and Rhaegar Targaryen',
            from: "xyz@gmail.com",
        },
        {
            id: '4',
            text: 'am going to airport.',
            from: "me",
        },
        {
            id: '5',
            text: 'see you soon',
            from: "qwe@gmail.com",
        },

    ]
}

export const clearUserData = async () => {
    await setStoredData(Globals.kUserData, "")
    await setStoredData(Globals.kToken, "")
}

