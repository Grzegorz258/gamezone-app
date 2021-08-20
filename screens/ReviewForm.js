import React from 'react';
import { View } from 'react-native';
import {
  Container,
  ErrorText,
  StyledInput,
} from '../styles/GlobalStyles';
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
    <Container>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          addReview(values);
          actions.resetForm();
        }}
      >
        {({
          touched,
          values,
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <View>
            <StyledInput
              placeholder="Review title"
              onChangeText={handleChange('title')}
              value={values.title}
              onBlur={handleBlur('title')}
            />
            <ErrorText>
              {touched.title && errors.title
                ? 'Title must have minimum 4 characters'
                : null}
            </ErrorText>
            <StyledInput
              multiline
              minHeight={60}
              placeholder="Review body"
              onChangeText={handleChange('body')}
              value={values.body}
              onBlur={handleBlur('body')}
            />
            <ErrorText>
              {touched.body && errors.body
                ? 'Body must have minimum 10 characters'
                : null}
            </ErrorText>
            <StyledInput
              placeholder="Rating (1-5)"
              onChangeText={handleChange('rating')}
              value={values.rating}
              onBlur={handleBlur('rating')}
              keyboardType="numeric"
            />
            <ErrorText>
              {touched.rating && errors.rating
                ? 'Rating must be a number 1-5'
                : null}
            </ErrorText>
            <Button text="Submit" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </Container>
  );
};

export default ReviewForm;
