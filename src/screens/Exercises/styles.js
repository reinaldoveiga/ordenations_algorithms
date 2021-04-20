import {StyleSheet} from 'react-native';

import {general, colors, metrics} from '../../styles';

const styles = StyleSheet.create({
  container: {
    ...general.defaultContainer,
    height: metrics.screenHeight,
    backgroundColor: colors.colorPrimary,
  },
  halfView: {
    flex: 1,
    
  },
  halfViewKeyBoard: {
    flex: 1.22,
    justifyContent: 'center',
    alignItems: 'center',
     //
  },
  info: {
    marginTop: metrics.baseMargin,
  },
  contentText: {
    textAlign: 'center',
    color: colors.textColorPrimary,
  },
  statementImageConteiner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  statementImage: {
    resizeMode: 'contain',
    justifyContent: 'flex-end',
    width: Math.round((metrics.screenWidth * 14) / 16),
    height: metrics.screenHeight * 0.17,
    marginTop: 30,

  },
  icon: {
    color: colors.colorPrimary,
    margin: metrics.basePadding,
  },
  defaultText: {
    marginLeft: metrics.baseMargin,
    marginRight: metrics.baseMargin,
    height: metrics.screenHeight / 4,
    textAlign: 'center',
    color: colors.colorBackground,
  },
  contentContainerStyle: {//
    justifyContent: 'center',
    alignItems: 'center',
    margin: metrics.baseMargin,
    color: colors.colorBackground,
  },
  textAnswer: {//
    fontSize: 17,
    textAlign: 'center',
    marginTop: metrics.baseMargin * 4,
    color: colors.colorPrimaryDark,
    
  },
});

export default styles;