import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ModalSucesso({ visivel, dados, onConfirmar }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visivel}
      onRequestClose={onConfirmar}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.titulo}>Conta Criada com Sucesso!</Text>
          
          <View style={styles.dadosContainer}>
            <Text style={styles.textoDado}><Text style={styles.negrito}>Nome:</Text> {dados.nome}</Text>
            <Text style={styles.textoDado}><Text style={styles.negrito}>Idade:</Text> {dados.idade}</Text>
            <Text style={styles.textoDado}><Text style={styles.negrito}>Sexo:</Text> {dados.sexo}</Text>
            <Text style={styles.textoDado}><Text style={styles.negrito}>Limite:</Text> R$ {Number(dados.limite).toFixed(2)}</Text>
            <Text style={styles.textoDado}><Text style={styles.negrito}>Estudante:</Text> {dados.status ? 'Sim' : 'Não'}</Text>
          </View>

          <TouchableOpacity style={styles.botaoConfirmar} onPress={onConfirmar}>
            <Text style={styles.textoBotao}>Confirmar e Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Fundo escuro semi-transparente
  },
  modalView: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 15,
    textAlign: 'center',
  },
  dadosContainer: {
    width: '100%',
    backgroundColor: '#f1f1f1',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
    gap: 6,
  },
  textoDado: {
    fontSize: 16,
    color: '#333',
  },
  negrito: {
    fontWeight: 'bold',
  },
  botaoConfirmar: {
    backgroundColor: '#1e97ff',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});