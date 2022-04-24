import {StyleSheet} from 'react-native';
import Color from "../../utils/color"
import {convertFontScale, screenHeight,screenWidth} from "../../utils/theme"

let progressStyle = {
  container: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: Color.TRANSPARENT,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10
},
centerContainer: {
    backgroundColor: Color.textColor[1],
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
},
indicatorStyle: {
    alignSelf: "center",
    // marginTop: convertFontScale(15),
    // marginBottom: convertFontScale(10),
}
}

const styles = StyleSheet.create(progressStyle);

export default styles;