
import DeviceInfo from 'react-native-device-info';
import { setStoredData } from './store';

export default Globals = {

    isIpad: DeviceInfo.isTablet(),

    // Storage Key
    kUserData: "userData",
    kToken: "token",

    //DB keys
    loggedIn: "loggedIn",
    KEY_DB_USERS : "/DB/Users",
    KEY_DB_INTEREST : "/DB/Interests",

    //notification types
    NOTIFICATION_TYPES: ["profile_score","video_live"],


    //KEYS
    KEY_ME : "me"


}



export const clearUserData = async () => {
}

