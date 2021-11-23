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
    formInput: styled.TextInput`
        width : ${width * 0.875}px;
        border-bottom-width : 0.5px;
        font-family : 'Light';
        font-size : 18px;
    `
}

interface Props {
    title: string;
    placeHolder: string;
    type: 'text' | 'pw';
}
const SignUpInputForm = ({ title, placeHolder, type }: Props) => {
    const [text, onChangeText] = React.useState<string>("");

    return (
        <SC.container>
            <SC.formTitle>
                {title}
            </SC.formTitle>
            {
                type == 'pw' ?
                    <SC.formInput
                        onChangeText={onChangeText}
                        value={text}
                        placeholder={placeHolder}
                        placeholderTextColor={'gray'}
                        secureTextEntry={true}
                    /> :
                    <SC.formInput
                        onChangeText={onChangeText}
                        value={text}
                        placeholder={placeHolder}
                        placeholderTextColor={'gray'}
                    />
            }
        </SC.container>
    )
}

export default SignUpInputForm;