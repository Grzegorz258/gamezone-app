import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Keyboard, Modal as NativeModal } from 'react-native';
import ReviewForm from '../../screens/ReviewForm';
import { Wrapper, CloseModalIcon } from './Modal.styles';

const Modal = ({ setIsModalOpen, addReview }) => {
  return (
    <NativeModal visible={true} animationType="slide">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Wrapper>
          <CloseModalIcon
            name="close"
            size={24}
            onPress={() => setIsModalOpen(false)}
          />
          <ReviewForm addReview={addReview} />
        </Wrapper>
      </TouchableWithoutFeedback>
    </NativeModal>
  );
};

export default Modal;
