import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import theme from "./theme";


export default function ThemeProviderWrapper({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <AppRouterCacheProvider>
      {/* <StyledEngineProvider  > */}
        {/* <ThemeProvider theme={theme}> */}
          <CssBaseline />
          {children}
        {/* </ThemeProvider> */}
      {/* </StyledEngineProvider> */}
     </AppRouterCacheProvider>
  );
}
