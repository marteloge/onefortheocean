import React, { useState } from "react";

import  {Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import { IntlProvider } from 'react-intl';
import { Menu } from './components/Menu/Menu';
import { Burger } from './components/Burger/Burger';

import { getMessage, SupportedLanguage } from './i18n';
import { useLocalStorage } from './hooks';
import { Home } from "./components/Home/Home";
import { GlobalStyle } from './global';

const App = () => {
  const [locale] = useLocalStorage<SupportedLanguage>('lang', 'en');
  const [open, setOpen] = useState(false);

  return (
    <Router>
      <IntlProvider locale={locale} messages={ getMessage(locale) }>
        <GlobalStyle/>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} />
      </IntlProvider>
    </Router>
  );
};

export default App;
