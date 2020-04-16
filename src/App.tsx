import React, { useState } from 'react';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import { IntlProvider } from 'react-intl';
import { Menu } from './components/Menu/Menu';
import { Burger } from './components/Burger/Burger';

import { getMessage, SupportedLanguage } from './i18n';
import { useLocalStorage } from './hooks';
import { Home } from './components/Home/Home';
import { GlobalStyle } from './global';
import Contact from './components/Contact/Contact';
import Gratitude from './components/Gratitude/Gratitude';
import About from './components/About/About';

const App = () => {
  const [locale] = useLocalStorage<SupportedLanguage>('lang', 'en');
  const [open, setOpen] = useState(false);

  return (
    <Router>
      <IntlProvider locale={locale} messages={getMessage(locale)}>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/thanks" component={Gratitude} />
        </Switch>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} />
      </IntlProvider>
    </Router>
  );
};

export default App;
