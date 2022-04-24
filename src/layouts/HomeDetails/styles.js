import {
  StyleSheet,
  Dimensions
} from 'react-native';
import color from '../../utils/color';
import {
  screenHeight,
  screenWidth
} from "../../utils/theme"
import Globals from "./../../utils/Globals";

let userList = {
  container: {
    flex: 1, paddingVertical: 35, paddingHorizontal: 20 
  },
  headerLeftImg: {
    width: 22, height: 22, borderRadius: 11,
  },
  interestRow:{
    display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 12
  },
  checkBoxText:{
    fontSize: 14, color: color.BLACK, textAlignVertical: 'center', fontWeight: 'bold', marginLeft : 8
  },
  checkBox:{
    width: 22, height : 22, 
  },
  modalSubView: {
    flex: 1,
    alignItems: "center",
  },
  userRow: {
    width: '98%', borderRadius: 10, alignItems: 'center', borderWidth: 1, borderColor: color.Grey, backgroundColor: color.WHITE,
    padding: 20, marginBottom: 20, justifyContent: 'center', 
  },
  rowImg:{
    width: 50, height: 50 
  },
  rowText:{
    fontSize: 14, color: color.BLACK, textAlignVertical: 'center', fontWeight: 'bold'
  },
  listColumn : {
    justifyContent: 'space-between'
  },
  centeredView: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    width : '70%', alignItems: 'center'
  },
  headerText:{
    fontSize: 16
  },
  headerRightimg:{
    width: 22, height: 22, 
  },
  headerLeft: {
    width: 28, height: 28, borderRadius: 14, borderWidth: 1, borderColor: 'grey', alignItems: 'center', justifyContent: 'center'
  },
  headerLeftImg: {
    width: 22, height: 22, borderRadius: 11,
  },
  modalView: {
    width: '70%',
    marginTop: 70,
    // paddingVertical: 10,
    // marginRight: 16,
    backgroundColor: color.WHITE,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 5,
    textAlign: "center"
  }
}

const styles = StyleSheet.create(userList);

export default styles;
