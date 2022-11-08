import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Button } from '@ui-kitten/components';
import { observer } from 'mobx-react-lite';
import { SafeAreaView, useColorScheme } from 'react-native';
import React from 'react';

import { Provider, rootStore, useMst } from './models/Root';

const HomeScreen = observer(() => {
  const { system } = useMst();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button
          style={{ marginVertical: 4 }}
          onPress={() => {
            system.setThemeAutomatic();
          }}>
          AUTO THEME
        </Button>
        <Button
          style={{ marginVertical: 4 }}
          onPress={() => {
            system.setTheme('dark');
          }}>
          DARK THEME
        </Button>
        <Button
          style={{ marginVertical: 4 }}
          onPress={() => {
            system.setTheme('light');
          }}>
          LIGHT THEME
        </Button>
      </Layout>
    </SafeAreaView>
  );
});

const App = observer(() => {
  const { system } = rootStore;
  const colorScheme = useColorScheme();

  const theme = system.automaticTheme ? colorScheme ?? 'light' : system.theme;

  return (
    <Provider value={rootStore}>
      <ApplicationProvider
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...eva}
        theme={eva[theme]}>
        <HomeScreen />
      </ApplicationProvider>
    </Provider>
  );

  // return (
  //   <SafeAreaView style={styles.container}>
  //     <TimelineCalendar
  //     renderEventContent={EventComponent}
  //     allowPinchToZoom
  //     initialTimeIntervalHeight={60}
  //     maxTimeIntervalHeight={120}
  //     theme={{backgroundColor: '#FFFFFF', todayTextColor: '#F00'}}
  //     start={8}
  //     end={19}
  //     viewMode="threeDays"
  //     onPressEvent={onEventClick}
  //     events={exampleEvents} />
  //     <StatusBar hidden={true} />
  //     <Modal
  //       animationType="slide"
  //       transparent={true}
  //       visible={modalVisible}>
  //         <View style={styles.centeredView}>
  //           <View style={styles.modalView}>
  //           <Text>{selectedEvent?.title}</Text>

  //           <Pressable
  //             style={[styles.button, styles.buttonClose]}
  //             onPress={() => setModalVisible(!modalVisible)}>
  //             <Text>Hide Modal</Text>
  //           </Pressable>
  //           </View>
  //         </View>
  //       </Modal>
  //   </SafeAreaView>
  // );
});

export default App;
