import React, { useState, useEffect } from 'react';
import { View, Image, StatusBar, Text } from 'react-native';

import BoxAlternative from "../../../components/BoxAlternative";
import BoxBackground from '../../../components/BoxBackground';
import { MultipleChoice } from '../../../components/Questions';
import { colors } from '../../../styles';
import styles from './styles';

const Level1 = ({ navigation }) => {
  const responseAll = {
    level: 1,
    questions: [
      {
        type: 'INTRO',
        id: 1,
        text:
          'Você sabia que os computadores são muitas vezes utilizados para colocar listas em algum tipo de ordem? Por exemplo, podem colocar nomes em ordem alfabética, compromissos ou e-mails por data, ou itens em ordem numérica.',
        img: null,
        enableScroll: true,
      },



      {
        type: 'INTRO',
        id: 2,
        text:
          'Classificar listas nos ajuda a encontrar as coisas rapidamente, e também facilita a identificação do maior e do menor valor de cada lista.',
        img: require('../../../assets/images/Level1/books.png'),
        enableScroll: true,
      },


      {
        id: 3,
        type: 'QUEST',
        enable: false,
        invisibleRow: -1,
        description:
          'Frequentemente, os computadores devem ordenar listas de coisas. Por que é importante colocar as coisas em ordem?',
        //img: require('../../../assets/images/.png'),
        enableScroll: false,
        paintContent: [],
        alternatives: [
          {
            id: '1',
            text: 'Para encontrar as coisas rapidamente',
            correct: true,
          },
          {
            id: '2',
            text:
              'Para identificar facilmente os valores extremos',
            correct: true,
          },
        ],
      },



    ]
  };

  const [step, setSteps] = useState(0);
  const [exercise] = useState(responseAll);
  const [question, setQuestion] = useState(exercise.questions[step]);
  const maxStep = exercise.questions.length;
  const finishLevel = step === maxStep;
  const [nextCard, setNextCard] = useState(false);

  useEffect(() => {
    if (finishLevel) {
      navigation.navigate('Congratulations', {
        level: 1,
        content: [
          'Entende a importância de ordenar informações',
        ],
      });
    } else {
      setQuestion(exercise.questions[step]);
    }
  }, [step]);

  const viewContent = () => {
    const content = exercise.questions.map((item) => (
      item.type === "INTRO" ? (
        <View style={styles.viewBoxContent}>
          <Text style={styles.contentText}>{item.text}</Text>
          <Image style={styles.statementImage} source={item.img} />
        </View>
      ) : (
        <View style={styles.viewBoxContent}>
          <Text style={styles.contentText}>{item.description}</Text>
          <Image style={styles.statementImage} source={item.img} />
        </View>
        )
    ));
    return content;
  };

  const setAnswerCorrectInQuestion = (isCorrect) => {
    if (isCorrect) {
      exercise.questions[step].enableScroll = isCorrect;
      setNextCard(true);
    }
  }

  const BoxContent = () => (
    <>
      <View style={styles.halfTopView}>
        <BoxBackground
          content={viewContent()}
          setSteps={setSteps}
          style={styles.boxContainer}
          scrollEnabled={question.enableScroll}
          nextQuestion={nextCard}
          setNextQuestion={setNextCard}
        />
      </View>
      <BoxAlternative
        alternativesContent={(
          question.type === 'QUEST' ? (
            <>
              <Text style={styles.textAnswer}>{question.finish === true ? null : "Selecione a(s) opção(ões) correta(s)"}</Text>
              <View style={styles.contentContainerStyle}>
                <MultipleChoice
                  step={step}
                  isAnswer={question.enableScroll}
                  setSteps={setSteps}
                  alternatives={question.alternatives}
                  setCorrectAnswer={setAnswerCorrectInQuestion}
                />
              </View>
            </>
          ) :
            null
        )}
        isLastPage={(question.type !== 'QUEST')}
        textInfor="Arraste o card acima para o lado para continuar." />
    </>
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.colorPrimary} />
      {BoxContent()}
    </View>
  );
};

export default Level1;