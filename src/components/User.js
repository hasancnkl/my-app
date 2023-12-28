import React from "react";
import { View, Text, StyleSheet } from "react-native";

const User = (props) => {
  return (
    <View>
      <Text>{JSON.stringify(props.data, null, 2)}</Text>
    </View>
  );
};


export default User;
