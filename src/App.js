import React, { Component } from 'react';
import { Helmet } from 'react-helmet'
import Section from './components/section/Section';
import BigText from './components/text/BigText';
import Subtitle from './components/text/Subtitle';
import Container from './components/container/Container';
import Logo from './assets/images/gubarcalogo.png';
import MediumText from './components/text/MediumText';
import Paragraph from './components/text/Paragraph';
import Column from './components/column/Column';
import Card from './components/card/Card';
import RegularText from './components/text/RegularText';
import Design from './assets/images/paint-palette.png';
import Web from './assets/images/www.png';
import Software from './assets/images/software.png';
import Image from './components/image/Image';
import GridContainer from './components/grid/GridContainer';
import GridBlock from './components/grid/GridBlock';
import Line from './components/line/Line';
import CircularButtonImage from './components/button/CircularButtonImage';
import Linkedin from './assets/images/linked-in-logo.png';
import Github from './assets/images/github-logo.png';
import Wrapper from './components/wrapper/Wrapper';
import Computer from './assets/images/software2.png';
import LabGenius from './assets/images/labgenius.jpg';
import Coradini from './assets/images/coradini.jpg';
import Betos from './assets/images/betos.jpg'
import Artesinai from './assets/images/artesinai.jpg';
import Mail from './assets/images/envelope.png';
import ReactLogo from './assets/images/react.png';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Gustavo Barca</title>
        </Helmet>
        <Section backgroundColor="white">
          <Container><img src={Logo} width="40"></img></Container>
          <Container>
            <BigText color="black" align="center">Designer, Web & Software developer.</BigText>
            <Subtitle align="center">Desenvolvo e crio umas coisas ai.</Subtitle>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Image align="center" path={Computer} width="400px"></Image>
          </Container>
        </Section>

        <Section backgroundGradient="50deg,#0042EB,#0087FB">
          <Container>
            <br></br>
            <br></br>
            <MediumText color="white" align="center">Olá, me chamo Gustavo, prazer em conhecê-lo!</MediumText>
            <br></br>
            <Paragraph color="white" align="center">Sempre gostei de tecnologia e computadores, e desde os meus 12 anos já revirava os computadores do avesso <br></br>para resolver problemas e aprender mais como funcionam estas obras de artes criadas pelos mais gênios. <br></br>Assim, quis me aprofundar mais no assunto, e acabei iniciando essa grande jornada no mundo da Programação. <br></br>E foi assim que comecei a estudar tudo por conta própria.</Paragraph>
          </Container> 
          <Container>

            <Column>
              <Card position="right">
                <Container>
                  <br></br>
                  <Image path={Design} width="70" align="center"></Image>
                  <RegularText mtop="10px" color="black" align="center">Design</RegularText>
                  <br></br>
                  <Paragraph color="#0042EB" align="center">Designs e Artes que gosto de criar:</Paragraph>
                  <br></br>
                  <Paragraph color="black" align="center">UI Design</Paragraph>
                  <Paragraph color="black" align="center">Websites</Paragraph>
                  <Paragraph color="black" align="center">Apps</Paragraph>
                  <Paragraph color="black" align="center">Logos</Paragraph>
                  <Paragraph color="black" align="center">Publicidades</Paragraph>
                  <br></br>
                  <Paragraph color="#0042EB" align="center">Ferramentas que uso:</Paragraph>
                  <br></br>
                  <Paragraph color="black" align="center">Adobe Photoshop</Paragraph>
                  <Paragraph color="black" align="center">Adobe Illustrator</Paragraph>
                  <Paragraph color="black" align="center">CorelDraw</Paragraph>
                </Container>
              </Card>
            </Column>

            <Column>
              <Card position="center">
                <Container>
                  <br></br>
                  <Image path={Web} width="70" align="center"></Image>
                  <RegularText mtop="10px" color="black" align="center">Desenvolvimento Web</RegularText>
                  <br></br>
                  <Paragraph color="#0042EB" align="center">Linguagens e Frameworks que uso:</Paragraph>
                  <br></br>
                  <Paragraph color="black" align="center">PHP</Paragraph>
                  <Paragraph color="black" align="center">Laravel 5.7</Paragraph>
                  <Paragraph color="black" align="center">HTML</Paragraph>
                  <Paragraph color="black" align="center">CSS</Paragraph>
                  <Paragraph color="black" align="center">Javascript</Paragraph>
                  <Paragraph color="black" align="center">JQuery</Paragraph>
                  <Paragraph color="black" align="center">Java</Paragraph>
                  <Paragraph color="black" align="center">MySQL</Paragraph>
                  <br></br>
                  <Paragraph color="#0042EB" align="center">Ferramentas que uso:</Paragraph>
                  <br></br>
                  <Paragraph color="black" align="center">Visual Studio Code</Paragraph>
                  <Paragraph color="black" align="center">Github</Paragraph>
                  <Paragraph color="black" align="center">Gitlab</Paragraph>
                </Container>
              </Card>
            </Column>

            <Column>
              <Card position="left">
              <Container padding="20">
                <br></br>
                <Image path={Software} width="70" align="center"></Image>
                <RegularText mtop="10px" color="black" align="center">Software</RegularText>
                <br></br>
                <Paragraph color="#0042EB" align="center">Linguagens e Frameworks que uso:</Paragraph>
                <br></br>
                <Paragraph color="black" align="center">Java</Paragraph>
                <br></br>
                <Paragraph color="#0042EB" align="center">Ferramentas que uso:</Paragraph>
                <br></br>
                <Paragraph color="black" align="center">Visual Studio Code</Paragraph>
                <Paragraph color="black" align="center">Eclipse</Paragraph>
                <Paragraph color="black" align="center">Github</Paragraph>
                <Paragraph color="black" align="center">Gitlab</Paragraph>
              </Container>
                
              </Card>
            </Column>

          </Container>
        </Section>
        <Section height="500px" >
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <BigText color="black" align="center">Trabalhos recentes</BigText>
          <GridContainer>
            <GridBlock Link="" backgroundImage={LabGenius} previewText="Desenvolvimento da aplicação web."/>
            <GridBlock Link="https://www.facebook.com/betoscabeleireirosnovaodessa/" backgroundImage={Betos} previewText="Identidade visual e artes publicitárias."/>
            <GridBlock Link="" backgroundImage={Artesinai} previewText="Desenvolvedor do Site."/>
            <GridBlock Link="https://www.facebook.com/coradiniimoveis/" backgroundImage={Coradini} previewText="Identidade visual e artes publicitárias."/>
          </GridContainer>
          <br></br>
          <br></br>
          <br></br>
        </Section>
        <Line/>
        <Section height="500px" >
          <MediumText marginTop="100px" color="#0042EB" align="center">Conheça mais de mim!</MediumText>
          <Subtitle align="center">Acesse minhas outras redes sociais e veja mais:</Subtitle>
          <Container>
            <Wrapper align="xcenter">
              <CircularButtonImage Link="mailto:gustavogb2@gmail.com" margin="20px" size="60px" color="#0042EB" backgroundImage={Mail}/>
              <CircularButtonImage Link="https://www.linkedin.com/in/gustavo-barca/" margin="20px" size="60px" color="#0042EB" backgroundImage={Linkedin}/>
              <CircularButtonImage Link="https://github.com/GuBarca" margin="20px" size="60px" color="#0042EB" backgroundImage={Github}/>
            </Wrapper>
            <br></br>
            <br></br>
            <br></br>
            <Paragraph color="#0042EB" align="center">Site feito por mim: Gustavo Barca</Paragraph>
            <br></br>
            <br></br>
            <Paragraph align="center">Made with</Paragraph>
            <Image align="center" path={ReactLogo} width="100px"/>
            
          </Container>
        </Section>

      </div>
    );
  }
}

export default App;
