import React, { useState } from 'react';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import { getMessages, SupportedLanguage } from './i18n';
import { useLocalStorage } from './hooks';
import { GlobalStyle } from './global';

import Menu from './components/Menu/Menu';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Gratitude from './components/Gratitude/Gratitude';
import About from './components/About/About';

const App = () => {
  const [locale, setLocale] = useLocalStorage<SupportedLanguage>('lang', 'en');
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Router>
      <IntlProvider locale={locale} messages={getMessages(locale)}>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/thanks" component={Gratitude} />
        </Switch>
        <Menu
          open={open}
          locale={locale}
          setLocale={setLocale}
          setOpen={setOpen}
        ></Menu>
      </IntlProvider>
    </Router>
  );
};

export default App;
