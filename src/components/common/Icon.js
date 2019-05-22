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

export default class Icon extends PureComponent {

  static propTypes = {
    width: PropTypes.number,
    image: PropTypes.any, 
    color: PropTypes.string,
    backgroundColor: PropTypes.string, 
    iconStyle: PropTypes.any, 
    styleIcon: PropTypes.any,
    onPress: PropTypes.func
  };

  static defaultProps = {
    image: null, 
    width: 20,  
    backgroundColor: colors.transparent,
    iconStyle: {},  
    styleIcon: null,
    onPress: ()=>{}
  };

  render() {

    const {
      image, 
      color,
      width,  
      backgroundColor,
      iconStyle,  
      styleIcon,
      onPress
      } = this.props;

    return (
      <View style={[
        styles.center,
        styleIcon,
      ]}>
        <TouchableOpacity
          style={[
            style.container,
            styles.center,
            {
              backgroundColor: backgroundColor,
              width: width,
              height: width,
              borderRadius: metrics.radius, 
            },
            iconStyle
          ]}
          onPress={onPress}
          activeOpacity={0.5}
        >
          <Image
            resizeMode={'contain'}
            style={[
              {
                width: width - 5,
                height: width - 5,
                tintColor: color
              }   
            ]}
            source={image}
          />
        </TouchableOpacity> 
      </View>
    );
  }
}
 
const style = StyleSheet.create({
  container: {
    justifyContent: 'center', 
  },
  text: {
    color: colors.blue,
    marginTop: metrics.baseMargin
  }
})
