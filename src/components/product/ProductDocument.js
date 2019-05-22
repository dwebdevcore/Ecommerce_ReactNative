import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import Link from "../common/Link";
import {
  metrics,
  styles,
  colors,
  fonts
} from '../../themes';

class ProductDocument extends PureComponent {

  render() {
    return (
      <View style={[style.container]}>
        <Text style={style.title}> Documents </Text>
        <View style={[
          styles.row,
          styles.spaceBetween
        ]}>
          <View style={{ alignItems: 'flex-start' }}>
            <Link
              icon={require("../../resources/icons/pdf.jpg")}
              firstTitle={"PDF Product"}
              secondTitle={"Information Packet"}
            />
            <Link
              icon={require("../../resources/icons/feature.jpg")}
              firstTitle={"Features"}
            />
          </View>
          <View style={{ alignItems: 'flex-start' }}>
            <Link
              icon={require("../../resources/icons/installation.jpg")}
              firstTitle={"Installation"}
            />
            <Link
              icon={require("../../resources/icons/specification.jpg")}
              firstTitle={"Specification"}
              secondTitle={"Sheet"}
            />
          </View>
        </View>
      </View >
    );
  }
}
export default (ProductDocument);

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: metrics.baseMargin
  },
  title: {
    ...fonts.style.t12,
    ...fonts.style.bold,
    color: colors.gray30,
    textAlign: "center",
    marginVertical: metrics.baseMargin
  },
})