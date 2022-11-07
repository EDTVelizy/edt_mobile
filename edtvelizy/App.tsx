import { StyleSheet, View, Modal, Text, Pressable } from 'react-native';
import { TimelineCalendar, EventItem, PackedEvent } from '@howljs/calendar-kit';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

const exampleEvents: EventItem[] = [
  {
    id: '1',
    title: 'Event 1',
    start: '2022-11-06T09:00:05.313Z',
    end: '2022-11-06T11:00:05.313Z',
    color: '#7FFF7F',
    description: 'Ola!'
  },
  {
    id: '2',
    title: 'Event 2',
    start: '2022-11-06T11:00:05.313Z',
    end: '2022-11-06T14:00:05.313Z',
    color: '#BF7FFF',
  },
  {
    id: '3',
    title: 'Event 3',
    start: '2022-11-06T11:00:05.313Z',
    end: '2022-11-06T14:00:05.313Z',
    color: '#DFDFDF',
  },
];

const EventComponent = (event: EventItem) => {
  return (
    <>
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.title}>{event.description ?? "None"}</Text>
    </>
  );
}

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<null | EventItem>(null);

  const onEventClick = (eventItem: PackedEvent) => {
    const event = exampleEvents.find(e => e.id === eventItem.id);

    if (event) {
      setSelectedEvent(event);
      setModalVisible(true);
    }
  }

  return (
    <View style={styles.container}>
      <TimelineCalendar
      renderEventContent={EventComponent}
      allowPinchToZoom
      initialTimeIntervalHeight={60}
      maxTimeIntervalHeight={120}
      theme={{backgroundColor: '#FFFFFF', todayTextColor: '#F00'}}
      start={8}
      end={19}
      viewMode="threeDays"
      onPressEvent={onEventClick}
      events={exampleEvents} />
      <StatusBar hidden={true} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Text>{selectedEvent?.title}</Text>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text>Hide Modal</Text>
            </Pressable>
            </View>
          </View>
        </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F' },
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
