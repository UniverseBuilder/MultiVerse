import React, { useEffect } from 'react';

import { themes } from '@multiverses/verse-css/scss';

import { ButtonGroup } from 'components/ButtonGroup';
import { Navbar } from 'components/Navigation/Navbar';
import { SideNavigation } from 'components/Navigation/SideNavigation';
import { Contents } from 'contents';
import { usePreferences } from 'utility/redux/slices/preferences/preferencesSlice';

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
  console.log(`theme`, theme);
  return (
    <div className={`${theme}-theme`}>
      <Navbar>
        <Navbar.NavItem>
          <b className="navitem-title">Verse React</b>
        </Navbar.NavItem>
        <Navbar.NavItemRight>
          <React.Fragment>
            {/* <div className="m-r-8 w-400">
              <div className="gcse-search"></div>
            </div> */}
            <ButtonGroup
              activeClass={`radio secondary`}
              activeGroup={theme}
              groups={['light', 'dark']}
              inactiveClass={`radio secondary-outline`}
              onClick={group => actions.setTheme(group)}
            />
          </React.Fragment>
        </Navbar.NavItemRight>
      </Navbar>
      <div className="flex">
        <div className="flex-25 side-nav">
          <SideNavigation
            contents={[
              'Login',
              'Accordion',
              'Alert',
              'Badge',
              'Button',
              'ButtonGroup',
              'Card',
              'Carousel',
              'Datagrid',
              'Form',
              'Icons',
              'Image',
              'List',
              'Loading',
              'Modal',
              'Overlay',
              'RenderHTML',
              'RichTextEditor',
              'Tabs',
            ]}
          />
        </div>
        <div className="flex-75 contents">
          <Contents />
        </div>
      </div>
    </div>
  );
}

export default App;
