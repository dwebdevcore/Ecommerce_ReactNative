import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  FlatList,
  Image
} from 'react-native';

import CatalogItem from '../components/catalog/CatalogItem';
import CardItem from '../components/catalog/CardItem';
import Separator from '../components/common/Separator';
import Logo from '../components/common/Logo';
import Icon from '../components/common/Icon';
import HeaderRight from "../components/common/HeaderRight";
import { Products, Catalogs } from '../dummyData/index';

import {
  colors,
  metrics,
  styles,
  fonts,
} from '../themes';

export default class CatalogListScreen extends Component {

  state = {
    visible: true
  }
  _keyExtractor = (item) => item.id;

  render() {

    const { visible } = this.state;

    return (
      <ScrollView style={style.container}>
        <FlatList
          data={Catalogs}
          contentContainerStyle={style.list}
          numColumns={3}
          keyExtractor={this._keyExtractor}
          renderItem={({ item }) => (<CatalogItem
            item={item}
            onPress={() => this.props.navigation.navigate('CatalogDetail', { catalog: item })}
          />)}
        />
        <Separator />
        <CardItem
          title={"Popular Items"}
          products={Products}
          onPressProduct={(product) => this.props.navigation.navigate('ProductDetail', { product })}
          buttonVisible={true}
          buttonText={"Show More Items"}
        />
        <View style={styles.center}>
          <Image
            resizeMode={'contain'}
            style={style.image}
            source={require("../resources/images/money.png")}
          />
        </View>
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingVertical: metrics.baseMargin
  },
  list: {
    paddingHorizontal: metrics.baseMargin,
    marginVertical: metrics.baseMargin
  },
  image: {
    width: metrics.deviceWidth * 2 / 3,
    marginVertical: metrics.baseMargin
  }
});