import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
  ActivityIndicator,
  StatusBar,
  Alert,
} from 'react-native';
import { useState } from 'react';

const logoImga = require('./assets/adaptive-icon.png');

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'plum',
      }}
    >
      <ScrollView>
        <StatusBar backgroundColor='blue' barStyle='light-content' />
        <ActivityIndicator size='large' color='red' />
        <Button
          color='midnightblue'
          title='Press me'
          // onPress={() => setModalVisible(true)}
          onPress={() =>
            Alert.alert(
              'Button pressed',
              'Do you want to continue',
              [
                { text: 'Yes', onPress: () => console.log('Yes') },
                { text: 'No', onPress: () => console.log('No') },
              ],
              { cancelable: false }
            )
          }
        />
        <Pressable
          onLongPress={() => console.log('long press')}
          onPressOut={() => console.log('press out')}
        >
          <Image source={logoImga} style={{ width: 300, height: 300 }} />
        </Pressable>
        <Modal
          visible={modalVisible}
          animationType='slide'
          onRequestClose={() => setModalVisible(false)}
          // modal should be half the screen
          transparent={true}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'lightgrey',
            }}
          >
            <Text>Modal</Text>
            <Button title='Close' onPress={() => setModalVisible(false)} />
          </View>
        </Modal>
        <Text style={{ fontSize: 30, textAlign: 'center', marginTop: 50 }}>
          {/* Very lon lorem ipsum */}
          Lorwem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Lorwem adipiscing elit. Sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Lorwem
        </Text>
        <Image source={logoImga} style={{ width: 300, height: 300 }} />
        {/* <ImageBackground source={logoImga} style={{ flex: 1 }}>
        <Text style={{ fontSize: 30, textAlign: 'center', marginTop: 50 }}>
          Weather App
        </Text>
        <Text style={{ color: 'red', margin: 10, fontSize: 20 }}>Emmanuel</Text>
      </ImageBackground> */}
      </ScrollView>
    </View>
  );
};

export default App;
