import { Image, Text, View } from "react-native";
import React, { useState } from 'react';

import { Button } from "@rneui/themed";
import { getForecast } from "../../utils/API";

export default function DetailsScreen({ navigation, route }) {
  const [current, setCurrent] = useState(true)


  //TODO:  handle this on the fetch function. 
  const weather = Object.assign(route.params.weather, {
    condition: "",
    ...route.params.weather.condition
  });


  const onPressTomorrow = async () => {
      
    const { current, location, nextDay } = await getForecast()
    weather.nextDay = nextDay
    setCurrent(false)
  }

  const onPressCurrent = () => setCurrent(true)



  if (!current) {
    const next = weather.nextDay;
    return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image     style={{
        width: 100,
        height: 100,
      }} source={{uri: next.img}} />
    

      <Text h2>Location: {weather.name}, {" "}{ weather.country}</Text>
      <Text>Max Wind: {next.maxwind_mph} MPH</Text>
      <Text>Avg Humidity: {next.avghumidity}%</Text>
      <Text>Avg Temperature: {next.avgtemp_c}C</Text>
      <Text>UV index: {next.uv}</Text>
    


      <Button title="Current" onPress={onPressCurrent}  />      
    </View>
  );
  }



  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image     style={{
        width: 100,
        height: 100,
      }} source={{uri: weather.img}} />
    

      <Text h2>Location: {weather.name}, {" "}{ weather.country}</Text>
      <Text>Wind: {weather.wind_mph} MPH</Text>
      <Text>Humidity: {weather.humidity}%</Text>
      <Text>Temperature: {weather.temp_c}C</Text>
      <Text>Feels like: {weather.feelslike_c}C</Text>
      <Text>UV Index: {weather.uv}</Text>
    


      <Button title="Tomorrow" onPress={onPressTomorrow}  />      
             

    </View>
  );
}