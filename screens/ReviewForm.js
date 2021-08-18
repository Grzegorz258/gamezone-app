import React from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';
import { Formik } from 'formik';
import * as yup from 'yup';
import Button from '../components/Button/Button';

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
              onBlur={props.handleBlur('title')}
            />
            <Text style={GlobalStyles.errorText}>
              {props.touched.title && props.errors.title
                ? 'Title must have minimum 4 characters'
                : null}
            </Text>
            <TextInput
              style={GlobalStyles.input}
              multiline
              placeholder="Review body"
              onChangeText={props.handleChange('body')}
              value={props.values.body}
              onBlur={props.handleBlur('body')}
            />
            <Text style={GlobalStyles.errorText}>
              {props.touched.body && props.errors.body
                ? 'Body must have minimum 10 characters'
                : null}
            </Text>
            <TextInput
              style={GlobalStyles.input}
              placeholder="Rating (1-5)"
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              onBlur={props.handleBlur('rating')}
              keyboardType="numeric"
            />
            <Text style={GlobalStyles.errorText}>
              {props.touched.rating && props.errors.rating
                ? 'Rating must be a number 1-5'
                : null}
            </Text>
            <Button
              text="Submit"
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ReviewForm;
