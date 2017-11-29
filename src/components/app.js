import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { completeTask } from '../actions/index';
import Summary from './summary';
import Search from './search';
<<<<<<< HEAD
import Notification from './notification';
=======
import Tasks from './tasks';
>>>>>>> Add tasks
import './app.css';

function mapDispatchToProps(dispatch) {
  return ({
    completeTask: bindActionCreators(completeTask, dispatch)
  })
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
  }
}

export class App extends React.Component {
  render() {
    return (
      <div>
        <Notification />
        <Router>
          <div>
            <header className="zuto-header with-tabs">
              <div className="container">
                <div className="zuto-logo">
                  <img src="//assets.zuto.com/images/zuto-logo.svg" alt="Zuto logo" />
                </div>
                <div className="profile">
                  <a href="javascript:void(0);" className="js-primary-nav-open-trigger">
                    <span className="icon">
                      <svg className="fill-dark-grey">
                        <title>User</title>
                        <use xlinkHref="#icon-user"></use>
                      </svg>
                    </span>
                    <span className="profile-label">Joseph Smith</span>
                    <span className="icon">
                      <svg className="fill-dark-blue">
                        <title>Dropdown</title>
                        <use xlinkHref="#icon-dropdown"></use>
                      </svg>
                    </span>
                  </a>
                </div>
                <nav className="zuto-header-tabs">
                  <ul>
                    <li className="is-current">
                      <Link to="/">
                        <span className="icon">
                          <svg className="fill-dark-grey">
                            <title>Summary</title>
                            <use xlinkHref="#icon-summary"></use>
                          </svg>
                        </span>
                        <span className="tab-label">Summary</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/search">
                        <span className="icon">
                          <svg className="fill-dark-grey">
                            <title>Search</title>
                            <use xlinkHref="#icon-search"></use>
                          </svg>
                        </span>
                        <span className="tab-label">Search</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/tasks">
                        <span className="tab-label">Tasks</span>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </header>
            <section>
              <div className="container">
                <Route exact path="/" component={Summary}/>
                <Route path="/search" component={Search}/>
                <Route path="/tasks" component={Tasks} />
              </div>
            </section>
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
