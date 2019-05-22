import React, { PureComponent } from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import {
  colors,
  metrics,
  styles,
  fonts,
} from '../../themes';
 
class ImageItem extends PureComponent {

  static propTypes = {
    image: PropTypes.any
  };

  static defaultProps = {
  };

  render() {
    
    const { image } = this.props;

    return (
      <View style={style.imageContainer}>
        <Image
          source={image}
          style={styles.imageContainer}
        />
      </View>
    );
  }
}

export default ImageItem;

const style = StyleSheet.create({
  imageContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: metrics.borderRadius * 2,
  }
});
