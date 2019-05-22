import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Icon from "./Icon";
import {
  styles,
  colors,
  fonts,
  metrics,
} from '../../themes';

export default class Switch extends PureComponent {

  static propTypes = {
    type: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    type: "list",
  };

  render() {
    const {
      type,
      onChange, 
    } = this.props;

    return (
      <View style={[
        style.container,
        styles.row
      ]}>
        <Icon
          width={35}
          image={require("../../resources/icons/grid.png")}
          iconStyle={type === "grid" ? style.enable : style.disable}
          onPress={() => onChange('grid')}
        />
        <Icon
          width={35}
          image={require("../../resources/icons/list.png")}
          iconStyle={type === "list" ? style.enable : style.disable}
          onPress={() => onChange('list')}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: metrics.smallMargin
  },
  enable: {
    borderWidth: 1,
    borderRadius: metrics.radius,
    borderColor: colors.gray96,
    backgroundColor: colors.white,
    marginRight: metrics.smallMargin
  },
  disable: {
    marginRight: metrics.smallMargin
  }
});