import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {SearchBar} from '@rneui/themed';

const MyComponent = ({}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const onChangeSearch = query => {
    setSearchQuery(query)
    setLoading(true)
  };

  const onCancel = () => setLoading(false)

  return (
    <View style={styles.view}>
      <SearchBar
        lightTheme
        showLoading={loading}
        placeholder="Type Here..."
        onChangeText={onChangeSearch}
        onClear={onCancel}
        value={searchQuery}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    margin: 10,
  },
});

export default MyComponent;
