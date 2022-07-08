import {Avatar, ListItem} from '@rneui/themed';
import {Pressable, View} from 'react-native';

import LinearGradient from 'react-native-linear-gradient'; // Only if no expo
import React from 'react';
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale

export default function List({img, country, weather, navigation}) {
  const onPressFunction = prop => navigation.navigate('Details', {weather});

  return (
      <ListItem
        Component={TouchableScale}
        friction={90} //
        tension={100} // These props are passed to the parent component (here TouchableScale)
        activeScale={0.95} //
        linearGradientProps={{
          colors: ['#0c0b53', '#04b8f0'],
          start: {x: 1, y: 0},
          end: {x: 0.2, y: 0},
        }}
        ViewComponent={LinearGradient} // Only if no expo
      >
          <Avatar rounded source={{uri: img}} />
        <Pressable onPress={onPressFunction}>
          <ListItem.Content>
            <ListItem.Title style={{color: 'white', fontWeight: 'bold'}}>
              {country}
            </ListItem.Title>
            <ListItem.Subtitle style={{color: 'white'}}>
              Temp: {weather.temp_c}C | Wind: {weather.wind_mph} MPH | Humidity:{' '}
              {weather.humidity}%
            </ListItem.Subtitle>
          </ListItem.Content>
        </Pressable>
          <ListItem.Chevron color="white" />
      </ListItem>
  );
}
