import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from './main';

const App = createAppContainer(createSwitchNavigator({ Main }));

export default App;