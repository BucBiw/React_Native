import React , {Component} from 'react';
import { Rounter, Scene } from 'react-native-router-flux';
import { StyleSheet, View, Text, ListView } from 'react-native';
import { Actions } from 'react-native-router-flux';

import PageOne from './PageOne';
import PageTwo from './PageTwo';

export default class App extends Component {
  render() {
    return (
      <Rounter>
        <Scene key="root">
          <Scene key="pageOne" component={PageOne} title="Book Menu" initial={true}/>
          <Scene key="pageTwo" component={PageTwo} title="Book Detail" />
        </Scene>
      </Rounter>
    );
  }
}



