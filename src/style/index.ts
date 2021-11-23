import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("window");

export const SC = {
  container: styled.View`
    background-color: #6666ff;
    height: ${height}px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  introduceText: styled.Text`
    font-family: "Regular";
    font-size: 24px;
    color: #ffffff;
  `,
};
