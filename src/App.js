import React, { Component } from 'react';
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
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Section backgroundColor="white">
          <Container><img src={Logo} width="40"></img></Container>
          <Container>
            <BigText color="black" align="center">Designer, Web & Software developer.</BigText>
            <Subtitle align="center">Desenvolvo e crio umas coisas ai.</Subtitle>
          </Container>
        </Section>

        <Section backgroundGradient="50deg,#0042EB,#0087FB">
          <Container>
            <br></br>
            <br></br>
            <MediumText color="white" align="center">Olá, me chamo Gustavo, prazer em conhecê-lo!</MediumText>
            <br></br>
            <Paragraph color="white" align="center">Sempre gostei de tecnologia e computadores, e desde os meus 12 anos já revirava os computadores do avesso <br></br>para resolver problemas e aprender mais como funcionam estas obras de artes criadas pelos mais gênios. <br></br>Assim, quis me aprofundar mais no assunto, e acabei iniciando essa grande jornada no mundo da Programação. <br></br>E foi assim que comecei a estudar tudo por conta própria</Paragraph>
          </Container> 
          <Container>

            <Column>
              <Card position="right">
                <br></br>
                <Image path={Design} width="70" align="center"></Image>
                <br></br>
                <RegularText color="black" align="center">Design</RegularText>
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
              </Card>
            </Column>

            <Column>
              <Card position="center">
                <br></br>
                <Image path={Web} width="70" align="center"></Image>
                <br></br>
                <RegularText color="black" align="center">Desenvolvimento Web</RegularText>
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
              </Card>
            </Column>

            <Column>
              <Card position="left">
                <br></br>
                <Image path={Software} width="70" align="center"></Image>
                <br></br>
                <RegularText color="black" align="center">Software</RegularText>
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
              </Card>
            </Column>

          </Container>
        </Section>
      </div>
    );
  }
}

export default App;
