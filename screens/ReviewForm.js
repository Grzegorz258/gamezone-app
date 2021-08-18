import React from 'react';
import { StyleSheet, Button, View, TextInput, Text } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';
import { Formik } from 'formik';
import * as yup from 'yup';

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(10),
  rating: yup
    .string()
    .required()
    .test(
      'is-num-1-5',
      'Rating must be a number 1 - 5',
      (value) => parseInt(value) < 6 && parseInt(value) > 0
    ),
});

const ReviewForm = ({ addReview }) => {
  return (
    <View style={GlobalStyles.container}>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          addReview(values);
          actions.resetForm();
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={GlobalStyles.input}
              placeholder="Review title"
              onChangeText={props.handleChange('title')}
              value={props.values.title}
            />
            <TextInput
              style={GlobalStyles.input}
              multiline
              placeholder="Review body"
              onChangeText={props.handleChange('body')}
              value={props.values.body}
            />
            <TextInput
              style={GlobalStyles.input}
              placeholder="Rating (1-5)"
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              keyboardType="numeric"
            />
            <Button
              title="Submit"
              color="maroon"
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ReviewForm;
