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

class PopularItem extends PureComponent {

  state = {
    visible: true
  }

  static propTypes = {
    products: PropTypes.any
  };

  changeState(value) {
    this.setState({ visible: value });
  }

  _keyExtractor = (item) => item.id;

  render() {

    const { products } = this.props;
    const { visible } = this.state;

    return (
      <View style={style.container}>
        <View style={[
          styles.row,
          styles.spaceBetween,
          { marginHorizontal: metrics.baseMargin }
        ]}>
          <View style={[
            styles.row,
            style.containerTitle
          ]}>
            <Text style={style.textPopular}>
              Popular Items
            </Text>
            <Button
              text={"See All"}
              styleButton={style.button}
              styleText={style.textButtonSee}
              onPress={() => { }}
            />
          </View>
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
              />)}
            />
            <Button
              text={"Show More Items"}
              styleButton={[
                styles.button,
                { marginHorizontal: metrics.baseMargin }
              ]}
              styleText={style.textButtonShow}
              onPress={() => { }}
            />
          </View>
        }
      </View>
    );
  }
}

export default (PopularItem);

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
    marginHorizontal: metrics.baseMargin,
    backgroundColor: colors.white,
  },
  textPopular: {
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