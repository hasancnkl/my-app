import React from "react";
import { View,Text,StyleSheet } from "react-native";

const title=(props) => {
return(
<View>
    <Text> {props.number + 1} </Text>
    <Text style={[Styles.title,{ color: props.color}]}>{props.text}</Text>
    
      </View>

);


};

const Styles =StyleSheet.create({
title:{
fontSize:28,
fontWeight:"700",


},


});
export default title;