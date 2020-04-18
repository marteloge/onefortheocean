import React, { useState, useRef } from 'react';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import { getMessages, SupportedLanguage } from './i18n';
import { useLocalStorage, useOnClickOutside } from './hooks';
import { GlobalStyle } from './global';

import Menu from './components/Menu/Menu';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Gratitude from './components/Gratitude/Gratitude';
import About from './components/About/About';

const App = () => {
  const [locale, setLocale] = useLocalStorage<SupportedLanguage>('lang', 'en');
  const [open, setOpen] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);

  useOnClickOutside(node, () => setOpen(false));

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
          ref={node}
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
