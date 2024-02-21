import React from 'react';
import { Text, View } from 'react-native';

const Bible = ({ route }) => {
  const { Home} = route.params;

  return (
    <View  >
      <Text> {Home} this is from bible </Text>
     
    </View>
  );
};

export default Bible;