import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
  StyleSheet
} from 'react-native';

import {
  colors,
  metrics,
  styles,
  fonts,
} from '../../themes';

import { ParallaxImage } from 'react-native-snap-carousel';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const slideHeight = viewportHeight * 0.3;
const slideWidth = wp(70);
const itemHorizontalMargin = wp(2);

const sliderWidth = viewportWidth;
const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 8;

export default class SliderEntry extends Component {

  static propTypes = {
    data: PropTypes.object.isRequired,
    even: PropTypes.bool,
    parallax: PropTypes.bool,
    parallaxProps: PropTypes.object
  };

  get image() {
    const { data, parallax, parallaxProps, even } = this.props;

    return (
      <ParallaxImage
        source={data.image}
        containerStyle={style.imageContainer}
        style={[style.image, { position: 'relative' }]}
        parallaxFactor={0.35}
        showSpinner={true}
        spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.1)'}
        {...parallaxProps}
      />
    )
  }

  render() {
    const { data, even } = this.props;

    const uppercaseTitle = data.title ? (
      <Text
        style={[style.title, even ? style.titleEven : {}]}
        numberOfLines={2}
      >
        {data.title.toUpperCase()}
      </Text>
    ) : false;

    return (
      <TouchableOpacity
        activeOpacity={1}
        style={style.slideInnerContainer}
        onPress={() => { alert(`You've clicked '${data.title}'`); }}
      >
        <View style={style.imageContainer}>
          <Image
            source={require("../../resources/icons/star.png")}
            style={[
              styles.imageContainer,
              style.icon
            ]}
          />
          {this.image}
          <View style={style.radiusMask} />
        </View>
      </TouchableOpacity>
    );
  }
}

const style = StyleSheet.create({
  slideInnerContainer: {
    width: itemWidth,
    height: slideHeight,
    paddingHorizontal: itemHorizontalMargin,
  },
  imageContainer: {
    flex: 1,
    backgroundColor: colors.black,
    borderRadius: entryBorderRadius
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    borderRadius: Platform.OS === 'ios' ? entryBorderRadius : 0,
    borderRadius: entryBorderRadius
  },
  // image's border radius is buggy on ios; let's hack it!
  radiusMask: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: entryBorderRadius,
    backgroundColor: 'white'
  },
  icon: {
    width: 25,
    height: 25,
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1
  }
})