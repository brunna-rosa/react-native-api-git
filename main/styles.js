import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient).attrs({
    colors: ['#0D9CFA', '#3CFAD8'],
    start: { x : 0 , y : 0 },
    end: { x: 1, y: 1 },
})`
    flex: 1;
    padding-top: 30px;
`;

export const Title = styled.Text`
    font-size: 32px;
    color: #FFF;
    font-weight: bold;
    padding: 0 20px;
`

export const Form = styled.View`
    flex-direction: row;
    margin-top: 10px;
    padding: 0 20px;

`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#999',
})`
    flex: 1;
    padding: 12px 15px;
    border-radius: 4px;
    font-size 16px;
    color: #333;
    background: #FFF;
`;

export const Submit = styled.TouchableOpacity`
    background: #3CFAD8;
    margin-left: 10px;
    justify-content: center;
    border-radius: 4px;
    padding: 0 14px
`;

export const List = styled.FlatList.attrs({
    contentContainerStyle:{ paddingHorizontal: 20 }
})`
    margin-top:20px;
`;