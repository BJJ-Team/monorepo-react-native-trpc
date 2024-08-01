import { Platform, StatusBar } from "react-native";
import styled from "styled-components/native";

export const SafeAreaView = styled.SafeAreaView`
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
`;
