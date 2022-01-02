import React, { useEffect } from 'react';
import { usePreferences } from 'utility/redux/slices/preferences/preferencesSlice';
import { themes } from '@multiverses/verse-css/scss';
import { Button } from './components/Button';
import { SideNavigation } from 'components/Navigation/SideNavigation';
import { Navbar } from 'components/Navigation/Navbar';

function App() {
  const { theme, actions } = usePreferences();

  useEffect(() => {
    return import(
      /* webpackChunkName: "custom-scss-chunk" */
      /* webpackMode: "lazy" */
      /* webpackPrefetch: true */
      /* webpackPreload: true */
      `@multiverses/verse-css/scss/themes${themes[theme]}.scss`
    );
  }, [theme]);

  return (
    <div className={`${theme}-theme`}>
      <Navbar />
      <SideNavigation />
      <p>
        <Button
          className="btn-alert"
          onClick={() =>
            theme === 'light'
              ? actions.setTheme('dark')
              : actions.setTheme('light')
          }
        >
          Arise
        </Button>
      </p>
    </div>
  );
}

export default App;
