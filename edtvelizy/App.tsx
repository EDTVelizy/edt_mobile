import { StyleSheet, View, Modal, Pressable, SafeAreaView } from 'react-native';
import { TimelineCalendar, EventItem, PackedEvent } from '@howljs/calendar-kit';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Button } from '@ui-kitten/components';
import { Provider, rootStore, useMst } from "./app/models/Root";
import { observer } from "mobx-react-lite";


const HomeScreen = observer(() => {
  const { system } = useMst();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button style={{ marginVertical: 4 }} onPress={() => {system.setThemeAutomatic()}}>AUTO THEME</Button>
        <Button style={{ marginVertical: 4 }} onPress={() => {system.setTheme('dark')}}>DARK THEME</Button>
        <Button style={{ marginVertical: 4 }} onPress={() => {system.setTheme('light')}}>LIGHT THEME</Button>
      </Layout>
    </SafeAreaView>
  )
});

const App = observer(() => {
  const { system } = rootStore;

  return (
    <Provider value={rootStore}>
      <ApplicationProvider {...eva} theme={eva[system.theme]}>
        <HomeScreen/>
      </ApplicationProvider>
    </Provider>
  )

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

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  title: { paddingVertical: 4, paddingHorizontal: 2, fontSize: 10 },
});

export default App;