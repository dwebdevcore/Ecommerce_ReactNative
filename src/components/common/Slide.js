import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';

import {
  colors,
  metrics,
  styles,
  fonts,
} from '../../themes';

export default class Slide extends PureComponent {

  static propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.any,
    onPress: PropTypes.func
  };

  static defaultProps = {
    name: " ",
    description: " ",
    image: null,
    onPress: () => { }
  };

  render() {

    const {
      name,
      description,
      image,
      onPress
      } = this.props;

    return (
      <TouchableOpacity
        style={[
          styles.row,
          style.container,
          { zIndex: 10 }
        ]}
        onPress={onPress}
        activeOpacity={0.5}
      >
        <View style={{
          flex: 1,
          backgroundColor: 'transparent',
          justifyContent: 'center'
        }}>
          <Image
            resizeMode={'contain'}
            style={{ height: 100, width: 100 }}
            source={image}
          />
        </View>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={style.name}>
            {name}
          </Text>
          <Text style={style.description}>
            {description}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const style = StyleSheet.create({

  container: {
    flex: 1,
    height: 200,
    padding: metrics.baseMargin,
  },
  name: {
    ...fonts.style.t12,
    ...fonts.style.bold,
    color: colors.black
  },
  description: {
    ...fonts.style.t8,
    color: colors.gray52
  }
})
