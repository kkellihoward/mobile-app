import { useState } from 'react';
import {
  Text,
  SafeAreaView,
  FlatList,
  Dimensions,
  View,
  ImageBackground,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useForm, Controller, FormProvider } from 'react-hook-form';

import ModalEvent from '../componets/ModalEvent';
import CustomEventInput from '../componets/CustomEventInput';
import CustomButton from '../componets/CustomButton';
import DateTime from '../componets/DateTime';

const COLORS = {
  primary: '#7f44d4',
  white: '#fff',
  toSquare: '#B28FE5',
  brownColor: '#433E3E',
};

const { width, height } = Dimensions.get('window');

const Post = () => {
  const [openCalender, setOpenCalender] = useState(false);

  const handleOpenCalender = () => {
    setOpenCalender(!openCalender);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const onPostPressed = (data) => {
    console.log(data);
  };
  return (
    <View style={styles.topContainer}>
      <SafeAreaView>
        <Text
          style={{
            fontSize: 60,
            fontWeight: '800',
            color: COLORS.toSquare,
            marginLeft: 30,
            marginTop: 30,
            letterSpacing: 3,
            marginBottom: 20,
          }}
        >
          Post
        </Text>
        <CustomEventInput
          name="title"
          placeholder="Enter event title"
          control={control}
        />
        <CustomEventInput
          name="EventDescription"
          placeholder="Enter event description"
          control={control}
          multiline={true}
          type="textArea"
        />
        <CustomEventInput
          name="invitees"
          placeholder="Enter invitees' names"
          control={control}
          multiline={true}
          type={'textInvitees'}
        />

        <DateTime control={control} watch={watch} handleSubmit={handleSubmit} />
        <View style={{ alignItems: 'center' }}>
          <CustomButton
            type="POST"
            text="Post"
            onPress={handleSubmit(onPostPressed)}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  topContainer: {
    backgroundColor: COLORS.white,
    height: height,
    padding: 20,
  },
  input: {},
});

export default Post;
