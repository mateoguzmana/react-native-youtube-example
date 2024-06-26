import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { TestComponent, add, multiply } from 'react-native-youtube-example';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();
  const [addResult, setAddResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    multiply(3, 7).then(setResult);
    add(3, 7).then(setAddResult);
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Text>Result: {result}</Text>

        <Text>Add Result: {addResult}</Text>
      </View>

      <TestComponent />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
