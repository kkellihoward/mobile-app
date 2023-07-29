import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  Dimensions,
} from 'react-native';
import React, { useState } from 'react';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import CustomEventInput from '../componets/CustomEventInput';

import DatePicker from 'react-native-modern-datepicker';
import { getFormatedDate } from 'react-native-modern-datepicker';

const COLORS = {
  main: '#4526a5',
  primary: '#7f44d4',
  white: '#fff',
  border: '#e8e8e8',
  toSquare: '#B28FE5',
  temp: '#82799f',
};
const { width, height } = Dimensions.get('window');
const DateTime = () => {
  const today = new Date();
  const startDate = getFormatedDate(
    today.setDate(today.getDate() + 1),
    'YYYY/MM/DD h:m'
  );
  const [slectedStartdDate, setSlectedStartdDate] = useState('');
  const [startedDate, setStartedDate] = useState('12/12/2023');

  const [openCalender, setOpenCalender] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  function handleChangeStartDate(propDate) {
    setStartedDate(propDate);
  }
  const handleOpenCalender = () => {
    setOpenCalender(!openCalender);
  };

  return (
    <SafeAreaView
      style={{
        justifyContent: 'center',
        backgroundColor: COLORS.toSquare,
      }}
    >
      <TouchableOpacity
        style={{
          width: '100%',
        }}
        onPress={() => setOpenCalender(!openCalender)}
      >
        <CustomEventInput
          name="dateTime"
          placeholder={slectedStartdDate}
          control={control}
          editable={false}
          selectTextOnFocus={false}
          pointerEvents="none"
        />
      </TouchableOpacity>
      <View>
        <Modal animationType="slide" transparent={true} visible={openCalender}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View style={styles.modalView}>
              <DatePicker
                mode="datepicker"
                mainimumDate={startDate}
                selected={startedDate}
                onDateChange={handleChangeStartDate}
                onSelectedChange={(date) => {
                  setSlectedStartdDate(date);
                }}
                options={{
                  backgroundColor: COLORS.white,
                  textHeaderColor: COLORS.main,
                  textDefaultColor: COLORS.primary,
                  selectedTextColor: '#fff',
                  mainColor: COLORS.main,
                  textSecondaryColor: COLORS.primary,
                  borderColor: 'rgba(122, 146, 165, 0.1)',
                }}
              ></DatePicker>
              <TouchableOpacity onPress={handleOpenCalender}>
                <Text
                  style={{
                    color: COLORS.primary,
                    marginTop: 5,
                    fontSize: 18,
                  }}
                >
                  Close
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: COLORS.white,
    width: '90%',
    padding: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});

export default DateTime;
