
import React, { Component } from "react";
import { View, ActivityIndicator, Text } from "react-native";
import PropTypes from 'prop-types';
import color from "../../utils/color";
import styles from './styles';
// import { PopBold } from "../../utils/Fonts";
import { convertFontScale } from "../../utils/theme";

export default class Progress extends Component {
    render() {
        const { text } = this.props;
        return (
            <View style={styles.container}>
                {/* <View style={styles.centerContainer}> */}
                    <ActivityIndicator
                        style={styles.indicatorStyle}
                        animating={true}
                        color={'grey'}
                        size="large" />
                    {/* <Text style={{ color: Color.WHITE, marginBottom: convertFontScale(10), marginLeft: convertFontScale(10), marginRight: convertFontScale(10) }}>
                        {text}
                    </Text> */}
                {/* </View> */}
            </View>
        );
    }
}

Progress.defaultProps = {
    text: "Please Wait...",
};

Progress.propTypes = {
    text: PropTypes.string
};