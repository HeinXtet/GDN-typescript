import React from 'react';
import {Container, Card, CardItem} from 'native-base';
import {RootState} from 'typesafe-actions';
import {connect, ConnectedProps} from 'react-redux';
import {NavigationScreenProp} from 'react-navigation';
import {NavigationStackProp} from 'react-navigation-stack';
import {ImageBackground, Animated, StyleSheet, View} from 'react-native';
import {SPLASH_BG, LOGO_WHITE} from '../images';
import {Styles} from '../styles';
import {checkAvailableIp, getMasterData} from '../features/splash/actions';
import {Label} from '../components';

interface State {
  valueYForLog: Animated.Value;
  valueXForErrorCard: Animated.Value;
}

const mapStateToProps = (state: RootState) => ({
  ip: state.ip,
});

const dispatchProps = {
  checkIp: checkAvailableIp.request,
  getMasterData: getMasterData.request,
};

const connector = connect(mapStateToProps, dispatchProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export interface NavigationProps extends NavigationScreenProp<{}> {
  navigation: NavigationStackProp;
}
type Props = PropsFromRedux & NavigationProps;

class Splash extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      valueYForLog: new Animated.Value(0),
      valueXForErrorCard: new Animated.Value(-1000),
    };
  }

  componentDidMount() {
    this.props.getMasterData(undefined, undefined);
    // this.props.navigation.navigate('Login');
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.ip.errorInCheckAvailableIp != null) {
      this.startLogoYAnimate();
    } else if (this.props.ip.successInCheckAvailableIp != null) {
      this.props.navigation.navigate('Login');
    }
  }

  startLogoYAnimate() {
    Animated.parallel([
      Animated.timing(this.state.valueYForLog, {
        toValue: -50,
        useNativeDriver: true,
        duration: 1000,
      }),
      Animated.timing(this.state.valueXForErrorCard, {
        toValue: 0,
        useNativeDriver: true,
        duration: 1000,
      }),
    ]).start();
  }

  renderErrorMessageCard = () => {
    return (
      <Animated.View
        style={[{transform: [{translateX: this.state.valueXForErrorCard}]}]}>
        <Card style={[styles.cardStyle]}>
          <CardItem>
            <View style={{padding: 2}}>
              <Label
                text={'Sorry!'}
                isHeading
                style={{color: 'red', paddingBottom: 8, fontSize: 20}}
                center
              />
              <Label
                text={this.props.ip.errorInCheckAvailableIp}
                center
                isHeading
              />
            </View>
          </CardItem>
        </Card>
      </Animated.View>
    );
  };

  render() {
    return (
      <Container
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ImageBackground source={SPLASH_BG} style={Styles.fullScreenStatic} />
        <Animated.Image
          source={LOGO_WHITE}
          style={{
            transform: [{translateY: this.state.valueYForLog}],
          }}
        />
        {this.renderErrorMessageCard()}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  cardStyle: {
    borderRadius: 16,
  },
});

export default connect(mapStateToProps, dispatchProps)(Splash);
