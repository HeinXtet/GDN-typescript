import React from 'react';
import {Container, Grid, Col, Header} from 'native-base';
import {RootState} from 'typesafe-actions';
import {connect, ConnectedProps} from 'react-redux';
import {NavigationScreenProp} from 'react-navigation';

import {NavigationStackProp} from 'react-navigation-stack';
import {ImageBackground, Image} from 'react-native';
import {SPLASH_BG, LOGO_WHITE} from '../../images';
import {Styles} from '../../styles';
import {checkAvailableIp, getMasterData} from './actions';

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

class Splash extends React.Component<Props> {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Login');
    }, 3000);

    this.props.getMasterData(undefined, undefined);
  }

  render() {
    console.log('Splash Props ' + JSON.stringify(this.props.ip));
    return (
      <Container
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ImageBackground source={SPLASH_BG} style={Styles.fullScreenStatic} />

        <Image source={LOGO_WHITE} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, dispatchProps)(Splash);
