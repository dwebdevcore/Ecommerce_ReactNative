import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  FlatList,
  Image,
  Text
} from 'react-native';
import Swiper from 'react-native-swiper'

import CardItem from '../components/catalog/CardItem';
import Separator from '../components/common/Separator';
import Logo from '../components/common/Logo';
import HeaderRight from "../components/common/HeaderRight";
import Icon from '../components/common/Icon';
import Slide from '../components/common/Slide';
import { Products } from '../dummyData/index';

import {
  colors,
  metrics,
  styles,
  fonts,
} from '../themes';

export default class ShowcaseViewcreen extends Component {
  state = {
    visible: true
  }

  _keyExtractor = (item) => item.id;



  render() {

    const { visible } = this.state;

    return (
      <ScrollView style={style.container}>
        <Swiper
          style={style.wrapper}
          showsButtons={false}
          loop={true}
          scrollEnabled={true}
          paginationStyle={style.pagination}
          dot={<View style={style.dot} />}
          activeDot={<View style={style.activeDot} />}
        >
          {
            [0, 2, 3].map(s => (<Slide
              image={require('../resources/products/9.png')}
              name={"New life of AC motors"}
              description={"Available Now"}
              key={s}
            />))
          }

        </Swiper>
        <CardItem
          title={"New Items"}
          products={Products}
          type={"center"}
          onPressProduct={(product) => this.props.navigation.navigate('ProductDetail', { product })}
          
        />
        <CardItem
          title={"Featured Items"}
          products={Products}
          buttonVisible={true}
          buttonText={"Open Catalog"} 
          type={"center"}
          onPressProduct={(product) => this.props.navigation.navigate('ProductDetail', { product })}
          
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
  },
  wrapper: {
    height: 200,
    width: metrics.deviceWidth,
    backgroundColor: colors.orange,
  },
  text: {
    color: "red",
    fontSize: 30,
    fontWeight: 'bold',
  },
  pagination: {
    height: 20,
    top: 120,
    left: metrics.deviceWidth / 2,
  },
  dot: {
    backgroundColor: colors.gray80,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 12,
    marginBottom: 5,
    borderWidth: 0,
  },
  activeDot: {
    backgroundColor: colors.gray53,
    width: 10,
    height: 10,
    borderRadius: 5,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 10,
    marginBottom: 3
  }
});