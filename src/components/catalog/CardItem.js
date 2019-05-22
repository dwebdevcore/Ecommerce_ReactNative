import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';

import Button from '../common/Button';
import Icon from '../common/Icon';
import ProductItem from '../product/ProductItem';
import {
  colors,
  metrics,
  styles,
  fonts,
} from '../../themes';

class CardItem extends PureComponent {

  state = {
    visible: true
  }

  static propTypes = {
    title: PropTypes.string,
    products: PropTypes.array,
    buttonVisible: PropTypes.bool,
    buttonText: PropTypes.string,
    onPressProduct: PropTypes.func.isRequired,
    cart: PropTypes.bool,
    see: PropTypes.bool,
    promo: PropTypes.bool
  };

  static defaultProps = {
    title: "",
    products: [],
    buttonVisible: false,
    buttonText: "",
    type: "left",
    cart: false,
    see: true,
    promo: false
  };

  changeState(value) {
    this.setState({ visible: value });
  }

  _keyExtractor = (item) => item.id;

  render() {

    const {
      title,
      products,
      buttonVisible,
      buttonText,
      type,
      cart,
      see,
      promo,
      onPressProduct,
    } = this.props;

    const { visible } = this.state;

    return (
      <View style={style.container}>
        <View style={[
          styles.row,
          styles.spaceBetween,
          { marginHorizontal: type === "center" ? metrics.smallMargin : metrics.baseMargin }
        ]}>
          {
            type === "center" ?
              <Icon
                image={require("../../resources/icons/arrowLeft.png")}
                width={30}
                onPress={() => this.changeState(!visible)}
              />
              :
              null
          }
          <View style={[
            type === "center" ? styles.center : null,
            styles.row,
            style.containerTitle
          ]}>
            <Text style={style.title}>
              {title}
            </Text>
            {
              see &&
              <Button
                text={"See All"}
                styleButton={style.button}
                styleText={style.textButtonSee}
                onPress={() => { }}
              />
            }
          </View>
          {
            type === "center" ?
              <Icon
                image={require("../../resources/icons/arrowRight.png")}
                width={30}
                onPress={() => this.changeState(!visible)}
              />
              :
              <Icon
                image={
                  visible ?
                    require("../../resources/icons/arrowTop.png")
                    :
                    require("../../resources/icons/arrowRight.png")
                }
                width={30}
                onPress={() => this.changeState(!visible)}
              />
          }
        </View>
        {
          visible &&
          <View>
            <FlatList
              data={products}
              horizontal={true}
              contentContainerStyle={style.list}
              keyExtractor={this._keyExtractor}
              renderItem={({ item }) => (<ProductItem
                type={"vertical"}
                item={item}
                cart={cart}
                promo={promo}
                onPressItem={() => onPressProduct(item)}
              />)}
            />
            {
              buttonVisible &&
              <Button
                text={buttonText}
                styleButton={[
                  styles.button,
                  { marginHorizontal: metrics.baseMargin }
                ]}
                styleText={style.textButtonShow}
                onPress={() => { }}
              />
            }
          </View>
        }
      </View>
    );
  }
}

export default (CardItem);

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTitle: {
    flex: 1,
    alignItems: 'center',
    marginVertical: metrics.smallMargin
  },
  list: {
    paddingHorizontal: metrics.smallMargin,
    marginVertical: metrics.baseMargin
  },
  button: {
    ...styles.border,
    width: 80,
    height: 40,
    marginHorizontal: metrics.doubleBaseMargin,
    backgroundColor: colors.white,
  },
  title: {
    ...fonts.style.t14,
    color: colors.gray30
  },
  textButtonSee: {
    ...fonts.style.t12,
    color: colors.black
  },
  textButtonShow: {
    ...fonts.style.t16,
    color: colors.white
  }
})