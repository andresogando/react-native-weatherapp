import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

import {Card} from '@rneui/themed';
import React from 'react';

export default function CardComponent({
  mod,
  title,
  content,
  img,
  weather,
  navigation,
}) {
  const onPressFunction = prop => navigation.navigate('Details', {weather});

  return (
    <View style={[styles[mod]]}>
      <Pressable onPress={onPressFunction}>
        <Card>
          <Card.Title>
            {title}, {weather.country}
          </Card.Title>
          <Card.Divider />
          <Image
            style={{
              paddingLeft: 150,
              width: 100,
              height: 100,
            }}
            source={{uri: img}}
          />
          <Text style={{marginBottom: 10}}>{content}</Text>
          <Text style={{paddingTop: 10, fontWeight: 'bold'}}>
            Temp: {weather.temp_c}C | Wind: {weather.wind_mph} MPH | Humidity:{' '}
            {weather.humidity}%{' '}
          </Text>
        </Card>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,

    flexDirection: 'row',
  },
});
/**
 * {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"
    }

 */
