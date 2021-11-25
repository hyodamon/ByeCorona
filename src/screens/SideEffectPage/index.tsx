import React from 'react';
import { Dimensions, SafeAreaView, View, Animated } from 'react-native';
import styled from 'styled-components/native';
import { PieChart, LineChart } from "react-native-chart-kit";

import { FontAwesome } from '@expo/vector-icons';

import HeaderBar from '../../components/HeaderBar';
const { width, height } = Dimensions.get('window');


const SC = {
    container: styled.View`
        display : flex;
        height : ${height}px;
        align-items: center;
        background-color : white;
    `,
    topContainer: styled.View`
        padding : 20px;
        display : flex;
        flex-direction : row;
        justify-content: space-around;
        align-items: center;
        width : ${width * 0.75}px;
    `,
    leftContainer: styled.View`
        align-items: center;
    `,
    rightContainer: styled.View`
        
    `,
    regularText: styled.Text`
        font-family: 'Regular';
        font-size : 18px;
    `,
    boldText: styled.Text`
        font-family : 'Bold';
        font-size : 18px;
    `,
    br: styled.View`
        background-color : #f1f3f5;
        width : ${width}px;
        height : 15px;
    `,
    bottomContainer: styled.ScrollView`
        padding : 20px;
    `,
    symptom: styled.Text`
        font-family : 'Bold';
        font-size : 24px;
        color : #6666FF;
    `,
    percentage: styled.Text`
        font-family : 'Regular';
        font-size : 24px;
        color : #555555;
        width : ${width * 0.8}px;
        margin : 5px 0;
    `
}

const data = [
    {
        name: '두통 및 편두통',
        population: 5.37,
        color: '#FC5330',
        legendFontColor: '#7F7F7F',
        legendFontSize: 12,
    },
    {
        name: '어지럼증',
        population: 4.96,
        color: '#FFE917',
        legendFontColor: '#7F7F7F',
        legendFontSize: 12,
    },
    {
        name: '피로',
        population: 4.49,
        color: '#5624FF',
        legendFontColor: '#7F7F7F',
        legendFontSize: 12,
    },
    {
        name: '발진 및 홍반',
        population: 4.08,
        color: '#24FFAB',
        legendFontColor: '#7F7F7F',
        legendFontSize: 12,
    },
    {
        name: '오한 및 추위',
        population: 3.60,
        color: '#FF24FF',
        legendFontColor: '#7F7F7F',
        legendFontSize: 12,
    },
    {
        name: '기타',
        population: 77.5,
        color: '#999999',
        legendFontColor: '#7F7F7F',
        legendFontSize: 12,
    },
];

const SideEffectPage = ({ navigation }: any) => {
    return (
        <SafeAreaView style={{ backgroundColor: '#ffffff' }}>
            <HeaderBar title="부작용 확률" navigation={navigation}> </HeaderBar>
            <SC.container>
                <SC.topContainer>
                    <SC.leftContainer>
                        <FontAwesome name="user-circle" size={74} color="#666666" />
                        <SC.regularText>양효준</SC.regularText>
                    </SC.leftContainer>

                    <SC.rightContainer>
                        <SC.regularText>20대 / 남자</SC.regularText>
                        <SC.regularText>1차 <SC.boldText>화이자</SC.boldText></SC.regularText>
                        <SC.regularText>2차 <SC.boldText>화이자</SC.boldText></SC.regularText>
                        <SC.regularText>복용 약 <SC.boldText>유</SC.boldText></SC.regularText>
                        <SC.regularText>질명 <SC.boldText>무</SC.boldText></SC.regularText>
                    </SC.rightContainer>
                </SC.topContainer>
                <SC.br></SC.br>
                <PieChart
                    data={data}
                    width={width * 0.8}
                    height={220}
                    chartConfig={{
                        backgroundColor: '#1cc910',
                        backgroundGradientFrom: '#eff3ff',
                        backgroundGradientTo: '#efefef',
                        decimalPlaces: 2,
                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        style: {
                            borderRadius: 16,
                        },
                        useShadowColorFromDataset: false
                    }}
                    style={{
                        marginVertical: 8,
                        borderRadius: 16,
                    }}
                    accessor="population"
                    backgroundColor="transparent"
                    paddingLeft="15"
                    absolute //for the absolute number remove if you want percentage
                />
                <SC.br></SC.br>
                <SC.bottomContainer>
                    <SC.percentage><SC.symptom>두통 및 편두통</SC.symptom> 5.37%</SC.percentage>
                    <SC.percentage><SC.symptom>어지럼증</SC.symptom> 4.96%</SC.percentage>
                    <SC.percentage><SC.symptom>피로</SC.symptom> 4.49%</SC.percentage>
                    <SC.percentage><SC.symptom>발진 및 홍반</SC.symptom> 4.08%</SC.percentage>
                    <SC.percentage><SC.symptom>오한 및 추위</SC.symptom> 3.6%</SC.percentage>
                    <SC.percentage><SC.symptom>기타</SC.symptom> 77.5%</SC.percentage>
                </SC.bottomContainer>
            </SC.container>
        </SafeAreaView>
    )
}


export default SideEffectPage;