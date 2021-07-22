import React from 'react';
import { Container, Id, Name, Fullname, Owner, Description, Stats, Stars, StarCount, Forks, ForksCount } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Repositorio({data}){
    return(
        <Container>
            <Id>ID: {data.id}</Id>
            <Name>Name: {data.name}</Name>
            <Fullname>Fullname: {data.fullName}</Fullname>
            <Owner>Owner: {data.owner}</Owner>
            <Description>{data.description}</Description>
            <Stats>
                <Stars>
                    <Icon name="star" size={16} color="#333" />
                    <StarCount>{data.stars}</StarCount>
                </Stars>
                <Forks>
                    <Icon name="code-fork" size={16} color="#333" />
                    <ForksCount>{data.forks}</ForksCount>
                </Forks>
            </Stats>
        </Container>
    );
}