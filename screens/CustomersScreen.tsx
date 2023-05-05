import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';

const CustomersScreen = () => {
  const tw = useTailwind();
  return (
    <SafeAreaView>
      <Text style={tw(' text-red-400 ')}>CustomersScreen</Text>
    </SafeAreaView>
  );
};

export default CustomersScreen;

const styles = StyleSheet.create({});
