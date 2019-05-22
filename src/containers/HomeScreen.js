import React, { PureComponent } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import {
  TabViewAnimated,
  TabBar,
  SceneMap
} from 'react-native-tab-view';

import CatalogView from './CatalogListScreen';
import ShowcaseView from './ShowcaseListScreen';
import Logo from '../components/common/Logo';
import Icon from '../components/common/Icon';
import HeaderRight from "../components/common/HeaderRight";

import {
  colors,
  metrics,
  styles,
  fonts,
} from '../themes';


export default class Home extends PureComponent {
  static navigationOptions = {
    headerTitle: (<Logo />),
    headerRight: (<HeaderRight />),
    headerLeft: (
      <Icon
        width={30}
        color={colors.primaryColor}
        image={require('../resources/icons/menu.png')}
        styleIcon={{ marginHorizontal: metrics.baseMargin }}
      />
    ),
  };

  state = {
    index: 0,
    routes: [
      { key: '1', title: 'Catalog' },
      { key: '2', title: 'Showcase' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => (
    <TabBar
      {...props}
      indicatorStyle={style.indicator}
      style={style.tabbar}
      tabStyle={style.tab}
      labelStyle={style.label}
    />
  );

  _renderScene = ({ route }) => {
    if (route.key === '1')
      return (
        <CatalogView
          navigation={this.props.navigation}
          {...route}
        />);
    else
      return (
        <ShowcaseView
          navigation={this.props.navigation}
          {...route}
        />
      )
  };

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  indicator: {
    height: 2,
    backgroundColor: colors.primaryColor,
  },
  tab: {
    backgroundColor: colors.transparent,
  },
  tabbar: {
    backgroundColor: colors.transparent,
    height: 50,
  },
  label: {
    ...fonts.style.t12,
    color: colors.gray30,
  },
  selectedLabel: {
    ...fonts.style.t12,
    color: colors.primaryColor,
  },
  selectedContainerStyle: {
    borderBottomWidth: 2,
    borderBottomColor: colors.primaryColor,
  },
});