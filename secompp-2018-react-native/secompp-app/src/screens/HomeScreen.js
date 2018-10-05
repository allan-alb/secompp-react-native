import React, { Component } from 'react';
import { View, ScrollView, Image } from 'react-native';

import Colors from '../theme/colors';

import {
  Text,
} from '../components'

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: '#f7f7f7', flex: 1, padding: 16 }}>
        <Text size={25} fontWeight='bolder'> Listagem </Text>
        <ScrollView horizontal>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 5,
              padding: 8,
              width: 195,
              height: 356,
              marginRight: 8,
              ...Colors.shadows.card,
            }}>
            <View>
              <Image source={require('../../assets/images/react-native-banner.png')}
              style={{
                width: '100%',
                height: 131,
              }}
            />
              <Text>lorem ipsum dolor sit amet</Text>
              <Text>lorem ipsum dolor sit amet</Text>
              <Text>lorem ipsum dolor sit amet</Text>
              <Text>lorem ipsum dolor sit amet</Text>
              <Text>lorem ipsum dolor sit amet</Text>
              <Text>lorem ipsum dolor sit amet</Text>
            </View>
          </View>
          
          <View
            style={{ flex:1, flexDirection: 'row', flexWrap:'wrap', }}>
            <View 
              style={{
                backgroundColor: 'white', 
                paddingHorizontal: 12,
                paddingVertical: 4,
                borderRadius: 12,
              }}>
              <Text numberOfLines={1} fontWeight='bold'>Como descascar batatas</Text>
              <Text numberOfLines={2}>João Casca</Text>
            </View>
            </View>
            <View style={{flex:1, flexDirection: 'row', flexWrap: 'wrap'}}>
              <View
                style={{
                  paddingHorizontal: 12,
                  paddingVertical: 4,
                  borderRadius: 12,
                  backgroundColor: Colors.badgeColors.color1,
                  alignSelf: 'flex-start',
                }}>
                <Text numberOfLines={1} fontWeight='bold'>Como entender essas views</Text>
                <Text numberOfLines={2}>Só Deus sabe</Text>
              </View>
          </View>

        </ScrollView>
      </ScrollView>
    );
  }
}

export default HomeScreen;
