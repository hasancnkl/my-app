
import { StyleSheet, View } from 'react-native';
import Title from "./src/components/Title";
import User from "./src/components/User";
import Users from "./src/components/Users";

const App = () => {
  return (
    <View style={Styles.container}>
      <Title text="React Native" color="red" number={1} />
      <Title text="React Native" color="green" number={2} />
      <Title text="React Native" color="blue" number={3} />

      <User data={{ id: 1, name: "mehmet" }} />

      <Users data={['ahmet', 'mehmet']} />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
