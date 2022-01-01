import React, { useEffect } from 'react';
import { usePreferences } from 'utility/redux/slices/preferences/preferencesSlice';
import { themes } from '@multiverses/verse-css/scss';
import { Button } from './components/Button';

function App() {
  const { theme, actions } = usePreferences();

  useEffect(() => {
    return import(
      /* webpackMode: "lazy-once" */
      `@multiverses/verse-css/scss/themes${themes[theme]}.scss`
    );
  }, [theme]);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Button
            className="btn-alert"
            onClick={() => actions.setTheme('light')}
          >
            Arise
          </Button>
        </p>
      </header>
    </div>
  );
}

export default App;
