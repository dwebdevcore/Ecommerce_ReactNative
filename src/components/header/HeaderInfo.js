import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { withNavigation } from 'react-navigation';

import Icon from "../common/Icon";
import {
  colors,
  metrics,
  styles,
  fonts,
} from '../../themes';

class HeaderInfo extends PureComponent {

  static propTypes = {
    title: PropTypes.string,
    onAlert: PropTypes.func,
    onSignin: PropTypes.func,
    onBack: PropTypes.func,
    back: PropTypes.bool,
    backText: PropTypes.string
  };

  static defaultProps = {
    title: "",
    onAlert: () => { },
    onSignin: () => { },
    onBack: () => { },
    back: false,
    backText: ""
  };

  render() {

    const {
      title,
      onAlert,
      onSignin,
      onBack,
      back,
      backText
    } = this.props;

    return (
      <View style={[
        style.container,
        styles.row,
        styles.spaceBetween
      ]}>
        <Text style={style.title}>
          {title}
        </Text>
        {
          back ?
            <View style={[
              styles.row,
              { alignItems: "center" }
            ]}>
              <Icon
                width={20}
                color={colors.gray30}
                image={require("../../resources/icons/arrowLeft.png")}
              />
              <Text style={style.textBlack}>
                {backText}
              </Text>
            </View>
            :
            <View style={[
              styles.row,
              { alignItems: "center" }
            ]}>
              <Text style={style.textAlert}>
                Already a customer ?
              </Text>
              <View style={[styles.row, { alignItems: "center" }]}>
                <Icon
                  width={20}
                  color={colors.primaryColor}
                  image={require("../../resources/icons/account.png")}
                />
                <Text style={style.textLogin}>
                  Login
                </Text>
              </View>
            </View>
        }
        {
          back === false &&
          <Icon
            onPress={() => this.props.navigation.goBack()}
            width={20}
            color={colors.gray30}
            image={require("../../resources/icons/arrowTop.png")}
          />
        }
      </View>
    );
  }
}

export default withNavigation(HeaderInfo);
const style = StyleSheet.create({
  container: {
    height: 50,
    alignItems: "center",
    marginHorizontal: metrics.baseMargin,
    marginVertical: metrics.smallMargin
  },
  title: {
    ...fonts.style.t14,
    ...fonts.style.bold,
    color: colors.gray30
  },
  textAlert: {
    ...fonts.style.t12,
    color: colors.gray30
  },
  textLogin: {
    ...fonts.style.t12,
    color: colors.primaryColor
  },
})
