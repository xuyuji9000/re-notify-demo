import React from 'react'
import ReactDOM, { render } from 'react-dom'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Notifs, styles } from 'redux-notifications';
import { store } from './conf'
import Counter from './components/Counter'
import NotifDemo from './components/NotifDemo'
import TestSnackbar from './components/TestSnackbar'

injectTapEventPlugin();


const App = function()
{
    return (
        <MuiThemeProvider>
            <Provider store={store}>
                <div>
                    <NotifDemo></NotifDemo>
                    <Notifs />
                </div>
            </Provider>
        </MuiThemeProvider>
    )
}

render(
    <App></App>,
    document.getElementById('root')
)
