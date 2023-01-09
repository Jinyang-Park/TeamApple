import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { useColorScheme } from "react-native";
import { ThemeProvider } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "react-query";
import Root from "./navigation/Root";
import { darkTheme, lightTheme } from "./theme";

const queryClient = new QueryClient();

export default function App() {
  const isDark = useColorScheme() === "dark";

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
          <Root />
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
