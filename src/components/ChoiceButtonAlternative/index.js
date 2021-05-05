import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import PropTypes from 'prop-types';

import {colors} from '../../styles';
import styles from './styles';

const ChoiceButtonAlternative = props => {
  const {correct, onPress, text, step} = props;
  const [backgroundColor, setbackgroundColor] = useState(colors.colorPrimary);

  useEffect(() => {
    setbackgroundColor(colors.colorBackground);
  }, [step]);

  function onPressButton() {
    if (correct) {
      setbackgroundColor(colors.colorSucess);
    } else {
      setbackgroundColor(colors.colorError);
    }
    setTimeout(() => onPress(), 350);
  }
  return (
    <View {...props} style={styles.container}>
      <TouchableOpacity
        style={[styles.button, {backgroundColor}]}
        onPress={onPressButton}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

ChoiceButtonAlternative.propTypes = {
  correct: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired,
};

ChoiceButtonAlternative.defaultProps = {
  correct: false,
};

export default ChoiceButtonAlternative;