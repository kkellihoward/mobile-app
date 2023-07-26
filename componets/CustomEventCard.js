import { useCallback, useRef, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ListItem from './ListItem';

export const EVENTS = [
  {
    title: 'TechXpo 2023: Unveiling the Future',
    date: 'August 10, 2023',
    id: '0',
  },
  {
    title: 'Gastronomy Fest: A Culinary Extravaganza',
    date: 'July 28, 2023',
    id: '1',
  },
  {
    title: 'Artisanal Crafts Fair: Celebrating Creativity',
    date: 'September 17, 2023',
    id: '2',
  },
  {
    title: 'Global Sustainability Summit 2023',
    date: 'October 7, 2023',
    id: '3',
  },
  {
    title: 'Global Sustainability Summit 2023',
    date: 'October 7, 2023',
    id: '4',
  },
  {
    title: 'Global Sustainability Summit 2023',
    date: 'October 7, 2023',
    id: '5',
  },
  {
    title: 'Global Sustainability Summit 2023',
    date: 'October 7, 2023',
    id: '6',
  },
  {
    title: 'Global Sustainability Summit 2023',
    date: 'October 7, 2023',
    id: '7',
  },
  {
    title: 'Global Sustainability Summit 2023',
    date: 'October 7, 2023',
    id: '8',
  },
  {
    title: 'Global Sustainability Summit 2023',
    date: 'October 7, 2023',
    id: '9',
  },
  {
    title: 'Global Sustainability Summit 2023',
    date: 'October 7, 2023',
    id: '10',
  },
  {
    title: 'Global Sustainability Summit 2023',
    date: 'October 7, 2023',
    id: '11',
  },
];

const CustomEventCard = () => {
  const onDismiss = useCallback((event) => {
    setEvent((event) => event.filter((item) => item.id !== event.id));
  }, []);
  const [event, setEvent] = useState(EVENTS);
  const scrollRef = useRef(null);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }} ref={scrollRef}>
        {event.map((event) => (
          <ListItem
            key={event.id}
            event={event}
            onDismiss={onDismiss}
            simultaneousHandlers={scrollRef}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default CustomEventCard;
