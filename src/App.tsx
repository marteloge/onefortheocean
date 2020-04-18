import React, { useState, useRef } from 'react';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import { getMessages, SupportedLanguage, languages } from './i18n';
import { useLocalStorage, useOnClickOutside } from './hooks';
import { GlobalStyle } from './global';

import Menu from './components/Menu/Menu';
import Burger from './components/Burger/Burger';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Gratitude from './components/Gratitude/Gratitude';
import About from './components/About/About';
import Translate from './components/Translate/Translate';

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

        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} locale={locale} setLocale={setLocale} />
          <Translate
            languages={Object.keys(languages)}
            locale={locale}
            setLocale={setLocale}
            open={open}
          ></Translate>
        </div>
      </IntlProvider>
    </Router>
  );
};

export default App;
