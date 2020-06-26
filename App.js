import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import AsyncStorage from "@react-native-community/async-storage";
import { InMemoryCache } from "apollo-cache-inmemory";
import { persistCache } from "apollo-cache-persist";
import ApolloClient from "apollo-boost";
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "react-apollo-hooks";
import apolloClientOptions from "./apollo";
import styles from "./styles";
import NavController from "./components/NavController";
import { AuthProvider } from "./AuthContext";

export default App = () => {
  const [loaded, setLoaded] = useState(false);
  const [client, setClient] = useState(null);

  const preLoad = async () => {
    try {
      /* Load Font */
      await Font.loadAsync({
        ...Ionicons.font,
      });

      /* Load Asset */
      await Asset.loadAsync([require("./assets/logo.png")]);

      /* apollo-cache-persist */
      const cache = new InMemoryCache();
      await persistCache({
        cache,
        storage: AsyncStorage,
      });
      const apolloClient = new ApolloClient({
        cache,
        ...apolloClientOptions,
      });

      /* Set State */
      setLoaded(true);
      setClient(apolloClient);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    preLoad();
  }, []);

  return loaded && client ? (
    <ApolloProvider client={client}>
      <ThemeProvider theme={styles}>
        <AuthProvider>
          <NavController />
        </AuthProvider>
      </ThemeProvider>
    </ApolloProvider>
  ) : (
    <AppLoading />
  );
};
