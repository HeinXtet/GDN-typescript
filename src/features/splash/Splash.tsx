import React from 'react';
import {Container, Grid, Col, Header} from 'native-base';
import {RootState} from 'typesafe-actions';
import {addTodo, loadTodosAsync, saveTodosAsync} from '../login/actions';
import {connect, ConnectedProps} from 'react-redux';
import {NavigationScreenProp} from 'react-navigation';

import {NavigationStackProp} from 'react-navigation-stack';

const mapStateToProps = (state: RootState) => ({
  todo: state.login,
});

const dispatchProps = {
  addTodo: addTodo,
  loadTodos: loadTodosAsync.request,
  saveTodos: saveTodosAsync.request,
};

// Menlo, Monaco, 'Courier New', monospace,'Consolas'

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
  }

  render() {
    return (
      <Container>
        <Header />
        <Grid>
          <Col style={{backgroundColor: '#635DB7', height: 200}}></Col>
          <Col style={{backgroundColor: '#00CE9F', height: 200}}></Col>
        </Grid>
      </Container>
    );
  }
}

export default connect(mapStateToProps, dispatchProps)(Splash);
