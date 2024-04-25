import { AppPropsWithLayout } from "../types"
import { Hydrate, QueryClientProvider } from "@tanstack/react-query"
import { RootLayout } from "src/layouts"
import { queryClient } from "src/libs/react-query"
import { Analytics } from "@vercel/analytics/react"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignUpContainer from "../components/Newsletter/SignUpContainer";
import SuccessComponent from "../components/Newsletter/SuccessComponent";

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
          <BrowserRouter>
              <RootLayout>
                  {getLayout(<Component {...pageProps} />)}
                  <Analytics />
              </RootLayout>
              <Routes>
                  <Route path='/newsletter-sign-up-main' element={<SignUpContainer />} />
                  <Route path='/newsletter-sign-up-main/success' element={<SuccessComponent />} />
              </Routes>
          </BrowserRouter>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default App
