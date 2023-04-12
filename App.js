import { StatusBar } from 'expo-status-bar';
import React, {useState} from "react"
import { StyleSheet, Text, View, TextInput, Button, 
FlatList, ScrollView, TouchableOpacity, Alert, } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Icon from "react-native-vector-icons"
import {Feather, MaterialCommunityIcons, MaterialIcons, FontAwesome5, Fontisto,  } from '@expo/vector-icons';

export default function App() {

  const icones = [
    {icone: 'Redes', icone: <MaterialIcons name="computer" size={33} color="black" />, key: 1, 
    descricao: "REDES:  È uma área no mercado que tem um conjunto de equipamentos que podem trocar infomações e também tem a conectividade com qualquer rede."},
   
   
    {icone: 'python', icone: <Ionicons name="logo-python" size={33} color="black"/>,key: 2, 
    descricao: "PYTHON:  È uma linguagem de programação que é utilizada em muitas aplicações web mais também é utilizadoem desenvolvimento de softwares, ciencias de dados e machine learning. "},
   
   
    {icone: 'javascript', icone: <Ionicons name="ios-logo-javascript" size={33} color="black" />, key: 3, 
    descricao: "JAVASCRIPT:  È uma linguagem que é usada em aplicações web em html e também no css e pode ser ligados aos objetos pra prover um controle programático. "},
   
    {icone: 'excel', icone:  <FontAwesome5 name="file-excel" size={33} color="black" />, key: 4, 
    descricao: "EXCEL:  È um programa da empresa Microsoft, incluído no Pacote Office. e com ele é possível formatar e desenvolver planilhas, com custos de implementação de projetos, demonstração de despesas, análise de gráficos, entre muitas outras funções disponíveis. "},
   
    {icone: 'java', icone: <Fontisto name="java" size={33} color="black" />,key: 5, 
    descricao: "JAVA:   È uma linguagem de programação que pode codificar codigos, mais pode ser usado em aplicativos mobile e é caracterizada por ser simples, orientada em objetos, distribuída, multithread, dinâmica e etc.."},
   
   
    {icone: 'php' , icone: <FontAwesome5 name="php" size={33} color="black" />, key: 6, 
    descricao: "PHP:   È uma linguagem de script do tipo server-side com diversos propósitos. Porém, ela geralmente é utilizada para poder fazer conteúdos dinâmicos nos sites. Trata-se de uma linguagem altamente popular devido à sua natureza de código aberto e suas funcionalidades versáteis."},
   
   
    {icone: 'swift' , icone: <MaterialCommunityIcons name="language-swift" size={33} color="black" />, key: 7, 
    descricao: "SWIFT:   È uma linguagem rápida e eficiente, que responde em tempo real e pode ser agregada com facilidade a um código Objective-C existente e ela combina inferência de tipo poderosa e correspondência de padrões com uma sintaxe moderna e leve." },
   
   
    {icone: 'ruby', icone: <MaterialCommunityIcons name="language-ruby" size={33} color="black" />, key: 8, 
    descricao: "RUBY:   È uma linguagem de programação dinâmica, de código aberto que é orientada a objetos e reflexiva, considerado similar às linguagens Perl e Smalltalk." },
      
   
    {icone: 'React' , icone: <FontAwesome5 name='react' size={33} color="black" />, key: 9, 
    descricao: "REACT:  Podemsos dizer que o react é um tipo de biblioteca de codigo aberto que é para interfaces gráficas, que tem como foco uma só coisa: tornar a experiência do usuário com a interface mais eficiente.  " },
    ]
   
    const [title, setTitle] = useState()
    
    const [itemSelecionado, ItemSelecionado] = useState(null);
    


  return (
    <View style={styles.container}>

      <Text style={styles.username}>INFORMAÇÕES TECNOLOGICAS</Text>
   
  <FlatList
  showsVerticalScrollIndicator={false}
    numColumns={3}
      data={icones}
      keyExtractor={(item) => item.key}
      renderItem={({ item }) => (
   <TouchableOpacity style={styles.actionButton} onPress={() => ItemSelecionado(item.descricao)}>
     <View style={styles.areaButton1}>
     <Text style={styles.labelButton1}>{item.icone}</Text>
     </View>
   </TouchableOpacity>
         )}
         KeyExtractor={item => item.key}
        
        />
        <Text style={styles.itemSelecionado}>
         {itemSelecionado}
         </Text>

  <Text></Text>
    <TextInput
       multiline
       style={styles.input}
       placeholder="Entendeu tudo ou odiou"
       onChangeText={setTitle}
       value={title}
    />
  
  {
    title === 'Sim' &&
    <View style={styles.Button0}>
    <Button 
     title= '     Sim     '
     onPress={() => Alert.alert("Parabéns você conseguiu entender as explicações!")}
    />
    </View>
  }
  {
    title === 'Adorei' &&
    <View style={styles.Button1}>
    <Button
    title= '   ADOROU   '
    onPress={() => Alert.alert("Se você adorou, recomendo a continuar a utilizar o app!")}
    /> 
    </View>
  }

  {
    title === 'Não' &&
    <View style={styles.Button2}>
    <Button
     title= '     Não     '
     onPress={() => Alert.alert("Se você não conseguiu entender, estude mais!")}
    />
  </View>
  }

  {
   title === 'Odiei' &&
   <View style={styles.Button3}>
   <Button
    title= '     Odiou    '
    onPress={() => Alert.alert("Se você odiou, procure outro app pre estudar!")}
  />
   </View>
  }


  <View style={styles.icon0}>
  <Feather name='user' size={22} color='white'></Feather>
  </View>

      
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A020F0',
    alignItems: 'center',
    justifyContent: 'center',
    paddingEnd: 18,
  },
  username:{
    marginTop: 69,
    fontSize: 19,
    fontWeight: 'bold',
    color: 'white', 
    margin: 12,
    right: 30,
  },
  icon0:{
   position: 'absolute',
   top: +54,
   right: 66,
   backgroundColor: 'rgba(255,255,255, 0.5)',
   height: 60,
   width: 60,
   borderRadius: 35,
   alignItems: 'center',
   justifyContent: 'center',
   right: 16,
  },
  
   actionButton1:{
    position: 'absolute',
    left: 25,
    top: 16,
   },
   itemSelecionado:{
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
    left: 8,
    top: 521,
  },
  input:{
   position: 'relative',
   borderWidth: 1,
   borderColor: 'black',
   backgroundColor: 'white',
   borderRadius: 12,
   margin: 14,
   padding: 14,
   width: 226,
   right: 66,
   top: -14,
  },

  Button0:{
  position: 'relative',
  left: 120,
  borderColor: 'black',
  top: -73,
  },

  Button1:{
    position: 'relative',
    left: 120,
    borderColor: 'black',
    top: -73,
  },

  Button2:{
  position: 'relative',
  left: 120,
  borderColor: 'black',
  top: -73,
  },

  Button3:{
    position: 'relative',
    left: 120,
    borderColor: 'black',
    top: -73,
  },
  
  areaButton1:{
    position: 'relative',
    backgroundColor: 'white',
    height: 68,
    width: 66,
    borderRadius: 28,
    borderColor: 'black',
    fontSize: 27,
    alignItems: 'center',
    margin: +34, 
    paddingTop: 10,
    top: -8,
    left: -11,
  },
});
