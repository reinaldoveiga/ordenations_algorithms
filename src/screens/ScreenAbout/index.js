/* eslint-disable react/jsx-curly-newline */
import React from 'react';
import { Image, Text, TouchableOpacity, View, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import data from '../../../package.json';
import logo from '../../assets/images/logo_grey.png';
import CustomBackground from '../../components/CustomBackground';
import {colors} from '../../styles';
import styles from './styles';

function ScreenAbout({navigation}) {
  const viewOfContent = [
    <Text style={styles.textContent}>
      O aplicativo Computação Plugada Ordenação foi inspirado no livro de Bell, T.;
      Witten, I. e Fellows, M. (2011). “Computer Science Unplugged – Ensinando
      Ciência da Computação sem o uso do Computador”. Tradução de Luciano Porto
      Barreto, 2011.
    </Text>,
    <Text style={styles.textContent}>
      Este livro apresenta atividades práticas, lúdicas e acessíveis sobre
      diversos temas da ciência da computação. O mesmo engloba técnicas fáceis
      para seu uso, tornando-se disponível para todos. Sua prática é fácil não
      só em salas de aula, mas também fora, podendo ser administrado por
      professores e compreendido pelas crianças.
    </Text>,
    <Text style={styles.textContent}>
      O aplicativo aqui apresentado visa ensinar Algoritmos de Ordenação para
      crianças e jovens, além de buscar simplificar ainda mais a aplicação das
      atividades propostas sem a necessidade de produção de materiais adicionais.
      O aplicativo é uma grande inovação para as técnicas de aprendizagem, 
      apresentando temas complexos de uma forma elementar para o conhecimento.
    </Text>,
    <Text style={styles.textContent}>
    Fonte de Imagens e Músicas:{"\n"}{"\n"}
    "https://br.freepik.com/vetores/escolaEscola" vetor criado por macrovector - br.freepik.com{"\n"}{"\n"}
    "https://br.freepik.com/vetores/icone" Ícone vetor criado por gstudioimagen - br.freepik.com{"\n"}{"\n"}
    "https://br.freepik.com/vetores/mao" Mão vetor criado por pch.vector - br.freepik.com{"\n"}{"\n"}
    "https://www.pexels.com/pt-br/foto/mulher-com-casaco-bege-em-pe-perto-da-estante-de-livros-de-madeira-branca-4855385/" - Pexels{"\n"}{"\n"}
  </Text>,
  <Text style={styles.textContent}>
  "https://pixabay.com/pt/vectors/para-baixo-seta-curvo-inscreva-se-47585/" - Pixabay{"\n"}{"\n"}
  "https://icons8.com/music/author/ilya-truhanov-1" - Ilya Truhanov{"\n"}{"\n"}
  "https://br.freepik.com/fotos/fundo" - Fundo foto criado por jcomp - br.freepik.com{"\n"}{"\n"}
  "https://www.pexels.com/pt-br/foto/fotografia-da-pessoa-digitando-1181675/" - Foto de Christina Morillo no Pexels 
</Text>,
  <Text style={styles.textContent}>
  "https://br.freepik.com/vetores/pessoas" - Pessoas vetor criado por pikisuperstar - br.freepik.com{"\n"}{"\n"}
  "www.bensound.com" - Royalty Free Music from Bensound{"\n"}{"\n"}
</Text>,
  ];
  return (
    <LinearGradient
      colors={[colors.colorPrimary, '#242F68']}
      style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.colorPrimary}
      />
      <Image source={logo} style={styles.logo} />

      <CustomBackground content={viewOfContent} />
      <Text style={styles.credits}> version: {data.version}</Text>
      <View>
        <Text style={styles.credits}>
          Desenvolvido pelo aluno Reinaldo da Veiga Lima, Orientado pela professora Ayla Débora Rebouças da
          UFPB campus IV.
        </Text>
        <Text style={styles.credits}>Todos os Direitos Reservados © 2021.</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
          <Text style={styles.textButton}>VOLTAR</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

export default ScreenAbout;