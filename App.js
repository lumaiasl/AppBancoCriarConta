import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { use, useState } from 'react';

import ModalSucesso from './src/components/modal';

export default function App() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [limite, setLimite] = useState(0);
  const [sexo, setSexo] = useState('');
  const [status, setStatus] = useState(false);

  const [erroNome, setErroNome] = useState('');
  const [erroIdade, setErroIdade] = useState('');
  const [erroSexo, setErroSexo] = useState('');
  const [erroLimite, setErroLimite] = useState('');

  const [modalVisivel, setModalVisivel] = useState(false);
  const [dadosUsuario, setDadosUsuario] = useState({});

  const sexos = [
    { key: 1, label: 'Masculino', value: 'Masculino' },
    { key: 2, label: 'Feminino', value: 'Feminino' },
    { key: 3, label: 'Outro', value: 'Outro' },
  ];

  function criarConta(){
    let temErro = false;
    Keyboard.dismiss();

    setErroNome('');
    setErroIdade('');
    setErroSexo('');
    setErroLimite('')

    if (nome.trim() === '') {
      setErroNome('Por favor, preencha o seu nome.');
      temErro = true;
    }

    if (idade.trim() === '') {
      setErroIdade('Por favor, informe a sua idade.');
      temErro = true;
    }

    if (sexo === '') {
      setErroSexo('Por favor, selecione uma opção de sexo.');
      temErro = true;
    }

    if(limite === 0) {
      setErroLimite('Por favor, selecione um limite acima de R$0,00')
      temErro = true;
    }

    if (temErro) {
      return;
    }

    const novoUsuario = {
      nome,
      idade,
      limite,
      sexo,
      status,
    };

    setDadosUsuario(novoUsuario);

    setModalVisivel(true);
  }

  function handleFecharModal() {
    setModalVisivel(false);
    
    // Reseta todos os inputs e states
    setNome('');
    setIdade('');
    setLimite(0);
    setSexo('');
    setStatus(false);
    setDadosUsuario({});
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.areaDados}>

        <Text style={styles.textDados}>Nome: </Text>
        <TextInput
          value={nome}
          style={styles.inputNome}
          placeholder='Lucas Maia'
          onChangeText={ (value) => {
            setNome(value), 
            setErroNome(false)
          }}
        />
        {erroNome ? <Text style={styles.textoErro}>{erroNome}</Text> : null}


        <Text style={styles.textDados}>Idade: </Text>
        <TextInput
          style={styles.inputNome}
          placeholder='16'
          value={idade}
          keyboardType='numeric'
          onChangeText={ (value) => {
            setIdade(value), 
            setErroIdade(false)
          }}
        />
        {erroIdade ? <Text style={styles.textoErro}>{erroIdade}</Text> : null}
        

        <Text style={styles.textDados}>Sexo: </Text>
        <Picker
          selectedValue={sexo}
          onValueChange={(itemValue) => {
            setSexo(itemValue), 
            setErroSexo(false)
          }}
        >
        {sexo === '' && (
            <Picker.Item label="Selecione o seu sexo..." value="" color="#999" />
          )}

          {/* Mapeia o array normalmente */}
          {sexos.map((item) => (
            <Picker.Item key={item.key} value={item.value} label={item.label} />
          ))}
        </Picker>
        {erroSexo ? <Text style={styles.textoErro}>{erroSexo}</Text> : null}

        <Text style={styles.textDados}>Limite: </Text>
        <Slider 
        value={limite}
        minimumValue={0}
        maximumValue={3000}
        step={200}
        onValueChange={ (value) => {
          setLimite(value), 
          setErroLimite(false)
        }}
        />
        <Text
          style={{fontSize: 16}}
        >
          {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
            limite,
        )}
        </Text>
        {erroLimite ? <Text style={styles.textoErro}>{erroLimite}</Text> : null}


        <Text style={styles.textDados}>Estudante: </Text>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 16}}>{status ? 'Aluno' : 'Não aluno'}</Text>
          <Switch
            value={status}
            onValueChange={ (value) => {setStatus(value)}}
          />
        </View>
        
        <View style={styles.areaBtn}>
          <TouchableOpacity onPress={criarConta}>
            <Text style={styles.textBtn}> Criar Conta</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ModalSucesso 
        visivel={modalVisivel}
        dados={dadosUsuario}
        onConfirmar={handleFecharModal}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  areaDados:{
    padding: 10,
    gap: 8,
    width: '90%',
    backgroundColor: '#f9fafafa',
    borderRadius: 8,
  },
  textDados:{
    fontSize: 24,
  },
  inputNome:{
    height: 60,
    fontSize: 16,
  },
  areaBtn: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1e97ff',
    borderRadius: 8
  },
  textBtn:{
    fontSize: 24,
    color: '#faf9f9',
    fontWeight: 'bold'
  },
  textoErro:{
    fontSize: 14,
    color: '#f92323'
  }
});
