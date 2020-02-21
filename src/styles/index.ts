import {StyleSheet, Dimensions, Platform} from 'react-native';

const Colors = {
  colorPrimary: '#d61c5b',
  colorWhite: 'white',
  colorFacebook: '#3b5998',
};

export const HEIGHT = Dimensions.get('window').height;
export const WIDTH = Dimensions.get('window').width;
export const margin16 = 16;
export const margin8 = 8;

const defaultContainerMargin = {
  marginLeft: margin16,
  marginRight: margin16,
};

const NavigationStyle = {
  navigationOptions: {
    headerShown: true,
    headerTintColor: Colors.colorWhite,
    headerBackTitle: null,
    headerStyle: {
      backgroundColor: Colors.colorPrimary,
    },
  },
};

const Styles = StyleSheet.create({
  fullScreenStatic: {
    position: 'absolute',
    height: '100%',
    backgroundColor: Colors.colorPrimary,
    width: '100%',
  },
});

const Static = StyleSheet.create({
  right: {
    position: 'absolute',
    right: 16,
  },
  left: {
    position: 'absolute',
    left: 16,
  },
});

const ViewStyles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

const appFont = Platform.select({
  ios: {
    fontFamily: 'SourceSansPro-Regular',
  },
  android: {
    fontFamily: 'source_sans_pro_regular',
  },
});

const AppTextStyle = StyleSheet.create({
  baseText: {
    ...Platform.select({
      ios: {
        fontFamily: 'SourceSansPro-Regular',
      },
      android: {
        fontFamily: 'source_sans_pro_regular.ttf',
      },
    }),
    fontSize: 16,
  },
  heading: {
    fontSize: 16,
  },
  label: {
    fontSize: 16,
  },
  subLabel: {
    fontSize: 14,
  },

  headingText: {
    ...Platform.select({
      ios: {
        fontFamily: 'SourceSansPro-Bold',
      },
      android: {
        fontFamily: 'source_sans_pro_bold',
      },
    }),
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export {
  Colors,
  NavigationStyle,
  Styles,
  AppTextStyle,
  ViewStyles,
  defaultContainerMargin,
  appFont,
};
