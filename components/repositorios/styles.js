import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 20px;
    border-radius: 4px;
    background: #FFF;
    margin-bottom: 15px;
`;

export const Id = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-bottom: 5px;
`;

export const Name = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-bottom: 5px;
`;

export const Description = styled.Text.attrs({
    numberOfLines: 2,  
  })`
    color: #666;
    margin-vertical: 5px;
    line-height: 20px;
    font-size: 18px;
`;

export const Fullname = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-bottom: 5px;
`;

export const Owner = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-bottom: 5px;
`;

export const Stats = styled.View`
  flex-direction: row;
  margin-top: 15px;
`;

export const Stars = styled.View`
    margin-right: 15px;
    flex-direction: row;
    align-items: center;
`;

export const StarCount = styled.Text`
  margin-left: 6px;
`;

export const Forks = styled.View`
    margin-right: 15px;
    flex-direction: row;
    align-items: center;

`;

export const ForksCount = styled.Text`
    margin-left: 6px;
`;
