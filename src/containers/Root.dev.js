
import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import DevTools from './DevTools'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import App from './App'
// import Login from "./Authentication/Login"
import { UserLoginContainer } from "./Authentication/Login";
import UserRegistration from "./Authentication/UserRegistration";
import ItemListView from "./Items/ItemListView";
// import UserPage from './UserPage'
// import RepoPage from './RepoPage'

const Root = ({ store }) => (
  <Provider store={store}>
    <Switch>
        <Route path="/" exact component={App} />
      <Route path="/login" component={UserLoginContainer} />
        <Route path="/registration" component={UserRegistration} />
        <Route path="/itemList" component={ItemListView} />

      <DevTools />
    </Switch>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root