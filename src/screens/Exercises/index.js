import React, {useState, useEffect, useLayoutEffect} from 'react';
import {
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  WebView
} from 'react-native';


import BoxAlternative from "../../components/BoxAlternative";


import {ProgressBar} from 'react-native-paper';

import {useRoute} from '@react-navigation/native';


import CustomBackground from '../../components/CustomBackground';
import {
  Explanation,
  MultipleChoice,
  Video

} from '../../components/Questions';

import Tooltip from '../../components/Tooltip';
import {general, colors} from '../../styles';
import styles from './styles';

//import Video from 'react-native-video';
//import VideoPlayer from 'react-native-video-controls';

import YouTube from 'react-native-youtube';


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
    //imagens missão 1
    l3q1: require('../../assets/images/Level1/books.png'),
    
    //imagens missão 2
    l4q1: require('../../assets/images/Level2/tela2-n2.png'),
    l4q2: require('../../assets/images/Level2/tela3-n2.png'),
    l4q3: require('../../assets/images/Level2/tela4-n2.png'),
    l4q4: require('../../assets/images/Level2/tela5-n2.png'),
    
    //imagens missão 3
    l5q1: require('../../assets/images/Level3/tela2-n3.png'),
    l5q2: require('../../assets/images/Level3/tela3-n3.png'),
    l5q3: require('../../assets/images/Level3/tela4-n3.png'),
    l5q4: require('../../assets/images/Level3/tela5-n3.png'),
    l5q5: require('../../assets/images/Level3/tela6-n3.png'),
    l5q6: require('../../assets/images/Level3/tela7-n3.png'),
    l5q7: require('../../assets/images/Level3/tela8-n3.png'),
    l5q8: require('../../assets/images/Level3/tela9-n3.png'),
    l5q9: require('../../assets/images/Level3/tela10-n3.png'),
    l5q10: require('../../assets/images/Level3/tela11-n3.png'),
    l5q11: require('../../assets/images/Level3/tela12-n3.png'),
    l5q12: require('../../assets/images/Level3/tela13-n3.png'),
    l5q13: require('../../assets/images/Level3/tela14-n3.png'),
    l5q14: require('../../assets/images/Level3/tela15-n3.png')
  };

  const videos = {
    //vídeo missão 2
    //l4q5: require('../../assets/videos/Level2/video-insertion.mp4')
    //l4q5: {uri: 'https://vjs.zencdn.net/v/oceans.mp4'} //talvez colocar o link aqui
    l4q5: 'RhaEEE551i8'
  };


  const handleTips = () => setShowTips(!showTips);

  const getImagens = type => imagens[type] || null;

  const getVideos = type => videos[type] || null;


  useLayoutEffect(() => {
    navigation.setOptions({
      title: response.title
    });
  }, [navigation]);

  useEffect(() => {
    if (finishLevel) {
      navigation.navigate('Congratulations', {level: exercise.level, content: [exercise.content]});
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
//testando melhor forma de chamar os vídeos
  const showVideo = url => {
    if (url) {
      //return <VideoPlayer disableBack resizeMode= 'contain' source={getVideos(url)} style={styles.statementVideo}/>;
      //return <VideoPlayer disableBack source={getVideos(url)} style={styles.statementVideo} />;
      //return <YouTube apikey='YOUR_API_KEY' play source={getVideos(url)} style={styles.statementVideo} />;
     //return <WebView
        //style={{flex:1}}
        //javaScriptEnabled={true}
       //source={getVideos(url)} style={styles.statementVideo}/>;
       
       
       return <YouTube
       //source={getVideos(url)}
       apiKey= 'YOUR_API_KEY'
       videoId={getVideos(url)} // The YouTube video ID
       play // control playback of video with true/false
       //fullscreen // control whether the video should play in fullscreen or inline
       loop // control whether the video should loop when ended
       //onReady={e => this.setState({ isReady: true })}
       //onChangeState={e => this.setState({ status: e.state })}
       //onChangeQuality={e => this.setState({ quality: e.quality })}
       //onError={e => this.setState({ error: e.error })}
       style={styles.statementVideo}
       //style={{ alignSelf: 'stretch', height: 300 }}
     />
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
        {showImage(question.image.url)}
        {showVideo(question.video.url)}
      </View>
    );

    return content;
  };

  function chooseQuestionRender() {
    switch (question.type) {
    //  case 'MULTIPLECHOICE':
     //   return (
      //    <MultipleChoice
       //     step={step}
        //    setSteps={setSteps}
            
         // />
        //);

      


      

      case 'EXPLANATION':
        return <Explanation step={step} setSteps={setSteps} />;
        
      case 'VIDEO':
        return <Video step={step} setSteps={setSteps} />;
     

      default:
        return null;
    }
  }

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
              chooseQuestionRender() )||(
            
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