import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import ImageItem from "../common/ImageItem";
import SliderEntry from "../common/SliderEntry";

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native';

import {
  colors,
  metrics,
  styles,
  fonts,
} from '../../themes';

const SLIDER_1_FIRST_ITEM = 1;

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const slideHeight = viewportHeight * 0.4;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

const sliderWidth = viewportWidth;
const itemWidth = slideWidth + itemHorizontalMargin * 2;


class ProductSwiper extends PureComponent {

  state = {
    slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
    slider1Ref: null
  }

  static propTypes = {
    listImage: PropTypes.array,
  };

  _renderItemWithParallax({ item, index }, parallaxProps) {
    return ( 
      <SliderEntry
        data={item}
        even={(index + 1) % 2 === 0}
        parallax={true}
        parallaxProps={parallaxProps}
      />
    );
  }
  render() {

    const { slider1ActiveSlide, slider1Ref } = this.state;
    const { listImage } = this.props;

    return (
      <View style={style.container}>
        <Carousel
          ref={(c) => { if (!this.state.slider1Ref) { this.setState({ slider1Ref: c }); } }}
          data={listImage}
          renderItem={this._renderItemWithParallax}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          hasParallaxImages={true}
          firstItem={SLIDER_1_FIRST_ITEM}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.6}
          enableMomentum={false}
          containerCustomStyle={style.sliderContainer}
          contentContainerCustomStyle={style.sliderContentContainer}
          scrollEndDragDebounceValue={Platform.OS === 'ios' ? 0 : 100}
          onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index })}
        /> 
          <Pagination
            dotsLength={listImage.length}
            activeDotIndex={slider1ActiveSlide}
            containerStyle={style.paginationContainer}
            dotColor={colors.primaryColor}
            dotStyle={style.paginationDot}
            inactiveDotColor={colors.black}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            carouselRef={slider1Ref}
            tappableDots={!!slider1Ref}
          />  
      </View>
    );
  }
}
export default ProductSwiper;

const style = StyleSheet.create({
  container: {
    marginBottom: metrics.baseMargin,
  },
  sliderContainer: {
    marginTop: 1
  },
  sliderContentContainer: {
  },
  paginationContainer: {
    paddingVertical: -150
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8
  },
});
