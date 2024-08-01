import React from "react";
import { MD3LightTheme, PaperProvider } from "react-native-paper";
import { Slot } from "expo-router";
import { SafeAreaView } from "@/components";
import { ApiProvider } from "@/providers";

const App = () => (
  <ApiProvider>
    <PaperProvider theme={MD3LightTheme}>
      <SafeAreaView>
        <Slot />
      </SafeAreaView>
    </PaperProvider>
  </ApiProvider>
);

export default App;
