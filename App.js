import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { use, useState } from 'react';

export default function App() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState(0);
  const [limite, setLimite] = useState(0);
  const [sexo, setSexo] = useState(0);
  const [status, setStatus] = useState(false);

  const sexos = [
  { key: 1, label: 'Masculino', value: 'Masculino' },
  { key: 2, label: 'Feminino', value: 'Feminino' },
  { key: 3, label: 'Outro', value: 'Outro' },
];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.areaDados}>

        <Text style={styles.textDados}>Nome: </Text>
        <TextInput
          style={styles.inputNome}
          placeholder='Lucas Maia'
          onChangeText={ (value) => setNome(value)}
        />

        <Text style={styles.textDados}>Idade: </Text>
        <TextInput
          style={styles.inputNome}
          placeholder='16'
          keyboardType='numeric'
          onChangeText={ (value) => setIdade(value)}
        />

        <Text style={styles.textDados}>Sexo: </Text>
        <Picker
          selectedValue={sexo}
          onValueChange={(itemValue) => setSexo(itemValue)}
        >
          { sexos.map( (item) => (<Picker.Item key={item.key} value={item.value} label={item.label} /> ))}
        </Picker>

        <Text style={styles.textDados}>Limite: </Text>
        <Slider 
        value={limite}
        minimumValue={0}
        maximumValue={3000}
        step={200}
        onValueChange={ (value) => setLimite(value)}
        />
        <Text
          style={{fontSize: 16}}
        >
          {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
            limite,
        )}
        </Text>

        <Text style={styles.textDados}>Estudante: </Text>
        <Switch 
          value={status}
          onValueChange={ (value) => setStatus(value)}
        />
        
        <View style={styles.areaBtn}>
          <TouchableOpacity>
            <Text style={styles.textBtn}> Criar Conta</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  }
});
