import { useCallback, useRef, useState } from 'react';
import { View, StyleSheet, Text, Dimensions, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ListItem from './ListItem';
import { useFonts } from 'expo-font';

export const EVENTS = [
  {
    title: 'TechXpo 2023: Unveiling the Future',
    date: 'August,10,2023',
    description: 'TechXpo 2023: Unveiling the Future',
    id: '0',
  },
  {
    title: 'Gastronomy Fest: A Culinary Extravaganza',
    description: 'TechXpo 2023: Unveiling the Future',
    date: 'July,28,2023',
    id: '1',
  },
  {
    title: 'Artisanal Crafts Fair: Celebrating Creativity',
    description: 'TechXpo 2023: Unveiling the Future',
    date: 'September,17,2023',
    id: '2',
  },
  {
    title: 'Global Sustainability Summit 2023',
    description: 'TechXpo 2023: Unveiling the Future',
    date: 'october,7,2023',
    id: '3',
  },
  {
    title: 'Global Sustainability Summit 2023',
    date: 'October,7,2023',
    id: '4',
  },
  {
    title: 'Global Sustainability Summit 2023',
    date: 'October,7,2023',
    id: '5',
  },
  {
    title: 'Global Sustainability Summit 2023',
    date: 'October,7,2023',
    id: '6',
  },
  {
    title: 'Global Sustainability Summit 2023',
    date: 'October,7,,2023',
    id: '7',
  },
  {
    title: 'Global Sustainability Summit 2023',
    date: 'October,7,2023',
    id: '8',
  },
  {
    title: 'Global Sustainability Summit 2023',
    date: 'October,7,2023',
    id: '9',
  },
  {
    title: 'Global Sustainability Summit 2023',
    date: 'october,7,2023',
    id: '10',
  },
  {
    title: 'Global Sustainability Summit 2023',
    date: 'october,7,2023',
    id: '11',
  },
];
const { width, height } = Dimensions.get('window');
const COLORS = {
  primary: '#7f44d4',
  white: '#fff',
  toSquare: '#B28FE5',
  brownColor: '#433E3E',
};

const CustomEventCard = () => {
  const [fontsLoaded] = useFonts({
    'Robot-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
  });

  const onDismiss = useCallback((event) => {
    setEvent((event) => event.filter((item) => item.id !== event.id));
  }, []);
  const [event, setEvent] = useState(EVENTS);
  const scrollRef = useRef(null);
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.topContainer}>
        <Text style={styles.allEventText}>All {'\n'}Events</Text>
      </View>

      {/* <Text style={styles.eventText}>Events</Text> */}
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
  topContainer: {
    backgroundColor: COLORS.toSquare,
    height: height * 0.4,
    borderBottomRightRadius: 50,
  },
  eventText: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 30,
    fontWeight: 'bold',
    padding: 5,
    paddingLeft: 40,
    color: COLORS.brownColor,
    backgroundColor: 'transparent',
  },
  allEventText: {
    fontSize: 60,
    fontWeight: '800',
    color: COLORS.white,
    position: 'absolute',
    left: 40,
    letterSpacing: 3,
    top: '40%',
  },
});

export default CustomEventCard;
