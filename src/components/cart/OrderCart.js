import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TextInput
} from 'react-native';

import Separator from '../common/Separator';
import Button from '../common/Button';
import SlideBar from '../common/SlideBar';
import Icon from '../common/Icon';
import Code from './Code';

import {
  metrics,
  styles,
  colors,
  fonts
} from '../../themes';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

class OrderCart extends PureComponent {

  state = {
    zipCode: ""
  }

  static propTypes = {
    number: PropTypes.number,
    total: PropTypes.string
  };

  static defaultProps = {
    number: 0,
    total: "0,000.00",
  };

  render() {

    const { zipCode } = this.state;
    const { number, total } = this.props;

    return (
      <View style={[
        styles.radius,
        style.container
      ]}>
        <Text style={style.title}> Order Total </Text>
        <Separator />
        <Text style={style.textFree}>$1.83 away from FREE shipping </Text>
        <SlideBar width={80} />
        <Separator />

        <View style={[
          styles.row,
          styles.spaceBetween,
          { marginTop: metrics.baseMargin }
        ]}>
          <Text style={style.text}>Subtotal ( {number} items) </Text>
          <Text style={[
            style.text,
            { color: colors.red86 }
          ]}>
            $ {total}
          </Text>
        </View>

        <View style={[
          styles.row,
          styles.spaceBetween,
          { alignItems: "center" }
        ]}>
          <Text style={style.text}>Standart Shipping </Text>
          <View style={styles.row}>
            <Icon
              width={20}
              image={require("../../resources/icons/question.png")}
            />
            <Text style={style.title}>FREE</Text>
          </View>
        </View>

        <View style={[
          style.containerZip,
          styles.row
        ]}>
          <View style={{ flex: 2 }}>
            <TextInput
              style={[
                style.textInput,
                fonts.style.t12
              ]}
              placeholder={"Your ZIP Code"}
              value={zipCode}
              onChangeText={(zipCode) => this.setState({ zipCode })}
              underlineColorAndroid={'transparent'}
              textAlignVertical={"center"}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Button
              text={"CALCULATE"}
              styleButton={style.styleButton}
              styleText={style.styleButtonText}
            />
          </View>
        </View>
        <Separator />
        <Code />
        <Separator />
      </View >
    );
  }
}
export default (OrderCart);

const style = StyleSheet.create({
  container: {
    flex: 1,
    margin: metrics.baseMargin,
    paddingTop: metrics.smallMargin,
    paddingHorizontal: metrics.baseMargin,
    paddingBottom: metrics.doubleBaseMargin,
    backgroundColor: colors.white
  },
  containerZip: {
    backgroundColor: colors.gray97,
    marginVertical: metrics.baseMargin,
    padding: metrics.baseMargin,
  },
  styleButton: {
    flex: 1,
    backgroundColor: colors.gray92,
    margin: 0,
  },
  styleButtonText: {
    ...fonts.style.t12,
    ...fonts.style.bold,
    color: colors.gray58,
  },
  title: {
    ...fonts.style.t12,
    ...fonts.style.bold,
    color: colors.gray30,
    textAlign: "center",
    marginVertical: metrics.baseMargin
  },
  textFree: {
    ...fonts.style.t12,
    ...fonts.style.bold,
    color: colors.gray30,
    marginTop: metrics.baseMargin
  },
  text: {
    ...fonts.style.t14,
    color: colors.black
  },
  textInput: {
    color: colors.gray75,
    backgroundColor: colors.gray97,
    paddingLeft: metrics.baseMargin
  }
})