import {ActivityIndicator, Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getBulkWeather, getWeather} from '../../utils/API';

import CardComponent from '../../components/Card';
import List from '../../components/ListItem';
import {SearchBar} from '@rneui/themed';
import {useDebounce} from 'use-debounce';

export default function HomeScreen({navigation}) {
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [value] = useDebounce(searchQuery, 1500);
  const [bulk, setBulk] = useState({})
  const [searchState, setSearchState] = useState(false)


  useEffect(() => {
    (async function getBulk() {
      const res =  await getBulkWeather();
      setBulk(res)
    })()
  }, [])
  


  const onCancel = () => setSearchState(false);
  const onChangeSearch = query => { setSearchQuery(query); setSearchState(true) };
  

  useEffect(() => {
    setTimeout(() => {
      (async function fetchWeather() {
        const {current, location} = await getWeather(value);
        setWeather({
          ...current,
          ...location,
          img: `https:${current?.condition?.icon}`,
        });
        setLoading(false);
      })();
    }, 2000);
  }, [value]);

  if (loading) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={{justifyContent: 'center'}}>
      <SearchBar
        lightTheme
        showLoading={searchState}
        placeholder="Type Here..."
        onChangeText={onChangeSearch}
        onClear={onCancel}
        value={searchQuery}
        onEndEditing={onCancel}
      />

      <CardComponent
        title={weather?.name}
        img={weather?.img}
        content={weather?.condition?.text + ' Feels Like: ' + weather?.feelslike_c + 'C'}
        weather={weather}
        navigation={navigation}
      />

      <Text style={styles.subMenu}> Other cities  </Text>
      {
        bulk.map((e) => {
          const element = { ...e.current, ...e.location,  img: 'https:' + e.current.condition.icon };
          return <List  key={element.country} country={element.country} img={element.img} weather={element} navigation={navigation} />
        })
      }

      
    </View>
  );
}

const styles = StyleSheet.create({
  subMenu: {
    paddingTop: 10,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
