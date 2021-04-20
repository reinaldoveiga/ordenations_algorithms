import React, {useState, useEffect, useLayoutEffect} from 'react';
import {
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';


import BoxAlternative from "../../components/BoxAlternative";


import {ProgressBar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {useRoute} from '@react-navigation/native';


import CustomBackground from '../../components/CustomBackground';
import {
  Explanation,
  MultipleChoice,
  Numeric,
  ShortAnswer,
  TrueOrFalse,
} from '../../components/Questions';
import Tooltip from '../../components/Tooltip';
import {general, colors} from '../../styles';
import styles from './styles';

export default function Exercises({navigation}) {
  const [showTips, setShowTips] = useState(false);
  const [showAnswerOptions, setShowAnswerOptions] = useState(false);

  const response = useRoute().params.data;
  const [step, setSteps] = useState(0);

  const [exercise] = useState(response);
  const [question, setQuestion] = useState(response.questions[step]);

  const maxStep = exercise.questions.length;
  const progress = step / maxStep;
  const finishLevel = step === maxStep;

  const imagens = {
    l3q1: require('../../assets/images/Level1/books.png'),
    

    //l4q00: require('../../assets/images/level2/l4q00.png'),

    //l5q1: require('../../assets/images/level5/l5q1.png'),
    //l5q2: require('../../assets/images/level5/l5q2.png'),

    //l6q3: require('../../assets/images/level6/l6q3.png'),

    //l7q2: require('../../assets/images/level7/l7q2.png'),
    //l7q3: require('../../assets/images/level7/l7q3.png'),

    //l8q1: require('../../assets/images/level8/l8q1.png'),
    //l8q2: require('../../assets/images/level8/l8q2.png'),
    //l8q3: require('../../assets/images/level8/l8q3.png'),
    //l8q5: require('../../assets/images/level8/l8q5.png'),
  };

  const handleTips = () => setShowTips(!showTips);

  const getImagens = type => imagens[type] || null;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: response.title,
      headerRight: () => (
        <Icon
          name="lightbulb-on-outline"
          size={general.iconSize.bigger}
          style={styles.icon}
          onPress={handleTips}
        />
      ),
    });
  }, [navigation]);

  useEffect(() => {
    if (finishLevel) {
      navigation.navigate('Congratulations', {level: exercise.level, content: [exercise.content]});//, content: exercise.content
    } else {
      setQuestion(response.questions[step]);
    }
  }, [step]);

  const showImage = url => {
    if (url) {
      return <Image style={styles.statementImage} source={getImagens(url)} />;
    }
    return null;
  };



  const viewOfContent = () => {
    const content = exercise.introduction.map(item => (
      <View style={styles.statementImageConteiner}>
        <Text style={styles.contentText}>{item.text}</Text>
        {showImage(item.image.url)}
      </View>
    ));

    content.push(
      <View style={styles.statementImageConteiner}>
        <Text style={styles.contentText}>{question.statement}</Text>
        
      </View>,
    );

    return content;
  };

  //function chooseQuestionRender() {
   // switch (question.type) {
    //  case 'MULTIPLECHOICE':
     //   return (
      //    <MultipleChoice
       //     step={step}
        //    setSteps={setSteps}
            
         // />
        //);

      // case 'CORRESPONDENCE':
      //  return CORRESPONDENCE;


      

      //case 'EXPLANATION':
      //  return <Explanation step={step} setSteps={setSteps} />;
     

     // default:
       // return null;
   // }
 // }

  return (
    <View>
      <Tooltip
        step={step}
        content={exercise.tips}
        isVisible={showTips}
        onCancel={handleTips}
      />
      <ProgressBar color={colors.colorSucess} progress={progress} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.halfView}>
            <CustomBackground
              style={styles.info}
              content={viewOfContent()}
              isLastPage={value => setShowAnswerOptions(value)}
            />
          </View>
          
          <KeyboardAvoidingView
            style={styles.halfViewKeyBoard}
            enabled
            behavior={Platform.select({
              ios: 'padding',
              android: null,
            })}
            keyboardVerticalOffset={-145}>
            
            {showAnswerOptions ? (
              
            
            <BoxAlternative
            alternativesContent={(
              question.type === 'MULTIPLECHOICE' ?  (
                <>
                  <Text style={styles.textAnswer}>Selecione a opção correta</Text>
                  <View style={styles.contentContainerStyle}>
                    <MultipleChoice
                      step={step}
                      setSteps={setSteps}
                      alternatives={question.alternatives}
                      
                />
                  </View>
                </>
     ) : null
    )}
              
              />
              ) : (
              <Text style={styles.defaultText}>
                Leia atentamente cada questão. Em seguida, arraste a carta para o lado e verá
                as próximas instruções.
              </Text>
            )}
          </KeyboardAvoidingView>

        </View>
      </ScrollView>
    </View>
  );
}