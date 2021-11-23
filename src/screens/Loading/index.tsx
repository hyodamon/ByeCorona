import React from "react";
import { SafeAreaView, Dimensions } from 'react-native';
import styled from 'styled-components/native'

const { width, height } = Dimensions.get('window');

const SC = {
    container: styled.View`
        background-color: #ffffff;
        display: flex;
        height: ${height}px;
        align-items: center;
        justify-content: center;
    `,
    logo: styled.View`
        width : 100px;
        height: 100px;
        background-color: #6666FF;
        border-radius: 50px;
        margin-bottom: 25px;
    `,
    textContainer: styled.View`
    `,
    mainText: styled.Text`
        font-family: 'Bold';
        font-size : 24px;
        color : #6666FF;
    `,
    subText: styled.Text`
        font-family: 'Regular';
        font-size: 20px;
        color : #6666FF;
    `,

}

const Loading = () => {
    return (
        <SafeAreaView>
            <SC.container>
                <SC.logo>
                </SC.logo>
                <SC.textContainer>
                    <SC.mainText>바이코로나</SC.mainText>
                    <SC.subText>Bye, Corona</SC.subText>
                </SC.textContainer>
            </SC.container>
        </SafeAreaView>
    )
}

export default Loading;