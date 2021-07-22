import React, { useState, useEffect } from 'react';
import { Alert, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Title, Form, Input, Submit, List } from './styles'; 

import api from '../services/api';
import Repositorio from '../components/repositorios';

export default function App(){

  const [input, setInput] = useState('');
  const [repositories, setRepositories] = useState([]);

  // Obtém dados do repositório
  async function loadRepository(repository){
    const data = {
      id: repository.id,
      name: repository.name,
      fullName: repository.full_name,
      description: repository.description,
      owner: repository.owner.login,
      stars: repository.stargazers_count,
      forks: repository.forks_count,
    };

    setRepositories([data]);
  }

  // Carrega dados da API
  const handleSearchButton = async() => {
    try {

      const response = await api.get(`/repos/${input}`);
      await loadRepository(response.data);

      setInput('');
      Keyboard.dismiss();
      
    } catch (error) {
      Alert.alert('Ops!','Repositório não encontrado.');
      setRepositories(''); 
    }		
	}
  
    return(
        <Container>
            <Title>Buscar Repositórios</Title>
            <Form>
                <Input
                    value={input}
                    onChangeText={setInput}
                    autoCapitalize="none"
                    placeholder="Buscar repositórios..."
                />
                <Submit onPress={handleSearchButton}>
                    <Icon name="search" size={22} color="#FFF" />
                </Submit>
            </Form>

            <List
              keyboardShouldPersistTaps="handled"
			  	    data={repositories}
              keyExtractor={item => String(item.id)}
              renderItem={({ item })=>(
                <Repositorio data={item} />
              )}
            />
        </Container>
    );
}