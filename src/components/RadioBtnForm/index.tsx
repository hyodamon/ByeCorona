import React from 'react'
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width, height } = Dimensions.get('window');

const SC = {
    container: styled.View`
        display : flex;
        padding : 0 20px;
        margin : 10px;
    `,
    formTitle: styled.Text`
        font-family : 'Bold';
        font-size : 16px;
        margin : 10px 0;
    `,
    radioForm: styled.View`
        display : flex;
        width : ${width * 0.875}px;
        flex-direction: row;
        justify-content: space-between;
    `,
    radioChecked: styled.TouchableOpacity`
        height : 40px;
        width : ${props => (100 / props.dataNum) - 3}%;
        background-color: #6666FF;
        border-radius: 5px;
        display : flex;
        justify-content: center;
        align-items: center;
    `,
    radioCheckedText: styled.Text`
        font-family: 'Regular';
        color : white;
    `,
    radioUnchecked: styled.TouchableOpacity`
        height : 40px;
        width : ${props => (100 / props.dataNum) - 3}%;
        background-color: white;
        border-radius: 5px;
        border-width: 1.5px;
        border-color: grey;
        display : flex;
        justify-content: center;
        align-items: center;
    `,
    radioUncheckedText: styled.Text`
        font-family: 'Bold';
        color : #000000;
    `,
}

interface Props {
    title: string;
    data: Array<string>;
}
const SignUpInputForm = ({ title, data }: Props) => {

    const [checked, setChecked] = React.useState(0);
    const dataNum: number = data.length;

    return (
        <SC.container>
            <SC.formTitle>
                {title}
            </SC.formTitle>
            <SC.radioForm>
                {data.map((item, index) => (
                    index == checked ?
                        <SC.radioChecked dataNum={dataNum} onPress={() => { setChecked(index) }}>
                            <SC.radioCheckedText>{item}</SC.radioCheckedText>
                        </SC.radioChecked> :
                        <SC.radioUnchecked dataNum={dataNum} onPress={() => { setChecked(index) }}>
                            <SC.radioUncheckedText>{item}</SC.radioUncheckedText>
                        </SC.radioUnchecked>
                ))}
            </SC.radioForm>
        </SC.container>
    )
}

export default SignUpInputForm;