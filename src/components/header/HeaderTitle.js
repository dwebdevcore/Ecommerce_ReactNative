import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  ListView
} from 'react-native';

import {
  colors,
  metrics,
  styles,
  fonts,
} from '../../themes';

export default class HeaderTitle extends PureComponent {

  static propTypes = {
    title: PropTypes.string,
    data: PropTypes.array
  };

  static defaultProps = {
    title: "",
    data: []
  };

  render() {

    const { title, data } = this.props;

    return (
      <View style={[
        style.container,
        styles.row,
      ]}>
        <Text style={style.secondText}>
          {title}
        </Text>
        {
          /*
          data.map((item, i) => <Text
            key={i}
            style={style.text}
          >
            {item.title}
          </Text>
          )
          */
        }
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    height: 50,
    alignItems: "center",
    marginHorizontal: metrics.baseMargin
  },
  list: {
    paddingHorizontal: metrics.smallMargin,
    marginVertical: metrics.baseMargin
  },
  firstText: {
    ...fonts.style.t12,
    color: colors.gray63,
  },
  secondText: {
    ...fonts.style.t12,
    ...fonts.style.bold,
    color: colors.gray63,
    marginLeft: metrics.baseMargin
  }
})
