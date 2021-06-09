import React from 'react';
import {View} from 'react-native';

import {PropTypes} from 'prop-types';

import ChoiceButtonAlternative from '../ChoiceButtonAlternative';
import styles from './styles';

const video = props => {
  const {step, setSteps} = props;

  return (
    <View style={styles.descriptive}>
      <ChoiceButtonAlternative
        step={step}
        correct
        text="Já Assisti"
        
        onPress={() => setSteps(step + 1)}
      />
    </View>
  );
};

video.propTypes = {
  step: PropTypes.number.isRequired,
  setSteps: PropTypes.func.isRequired,
  
};

export default video;