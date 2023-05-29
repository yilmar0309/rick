import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Template: React.FC<any> = () => {
  return (
    <View style={styles.container}>
      <Text>Template</Text>
    </View>
  );
};

export default Template;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});
