import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput
} from 'react-native';

import CheckBox from "../common/CheckBox";
import {
  colors,
  metrics,
  styles,
  fonts,
} from '../../themes';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

class ProductItemSuggested extends PureComponent {

  state = {
    selected: false,
    value: "0"
  }

  static propTypes = {
    item: PropTypes.object.isRequired,
    onPress: PropTypes.func.isRequired,
  };

  changeState(value) {
    this.setState({ selected: value });
  }

  render() {

    const { selected, value } = this.state;

    const {
      item,
      onPress
    } = this.props

    return (
      <View
        style={[
          styles.row,
          style.container,
          selected === true ? style.containerEnable : style.containerDisable
        ]}
      >
        <View style={[{ width: wp(10) }, style.col]} >
          <CheckBox
            selected={selected}
            onPress={() => this.changeState(!selected)}
          />
        </View>
        <View style={[{ width: wp(15) }, style.col]} >
          <Image
            resizeMode={'contain'}
            style={style.image}
            source={item.image}
          />
        </View >
        <View style={[{ width: wp(30) }, style.col]} >
          <Text style={style.textNumber}>{item.refs}</Text>
        </View >
        <View style={[{ width: wp(18) }, style.col]} >
          <Text style={style.textPrice}>{item.price}</Text>
        </View>
        <View style={[{ width: wp(15) }, style.col]} >
          {
            selected === true ?
              <TextInput
                style={[
                  style.block,
                  style.blockEnable,
                  fonts.style.t9,
                  {textAlign: "center"}
                ]}
                value={value}
                onChangeText={(value) => this.setState({ value })}
                underlineColorAndroid={'transparent'}
                textAlignVertical={"center"}
              />
              :
              <View style={[
                style.block,
                style.blockDisable
              ]}>
                <Text style={style.textDisable}>0</Text>
              </View>
          }
        </View >
      </View >
    );
  }
}
export default (ProductItemSuggested);

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.gray88,
    paddingHorizontal: metrics.baseMargin
  },
  col: {
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  containerEnable: {
    backgroundColor: colors.gray98
  },
  containerDisable: {
    backgroundColor: colors.white
  },
  image: {
    width: 50,
    height: 50
  },
  textNumber: {
    ...fonts.style.t12,
    color: colors.primaryColor,
    paddingHorizontal: metrics.smallMargin
  },
  textPrice: {
    ...fonts.style.t12,
    color: colors.red86,
    paddingHorizontal: metrics.smallMargin
  },
  block: {
    ...styles.radius,
    width: 50,
    height: 30,
  },
  blockEnable: {
    borderWidth: 1,
    borderColor: colors.gray86,
    backgroundColor: colors.white,
  },
  blockDisable: {
    ...styles.center,
    backgroundColor: colors.gray97,
  },
  textEnable: {
    ...fonts.style.t12,
    color: colors.black,
  },
  textDisable: {
    ...fonts.style.t12,
    color: colors.gray77,
  },
  text: {
    padding: 0,
    textAlign: 'center',
  }
})