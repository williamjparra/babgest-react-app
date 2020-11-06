import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';

import 'bootstrap/dist/css/bootstrap.css';
import api from '../api'
import MiniLoader from '../components/MiniLoader';

class Badges extends React.Component {

  state = {
    loading: true,
    error: null,
    data: undefined,
    }

  componentDidMount() {
    this.fetchData()

    this.intervalId = setInterval(this.fetchData, 5000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  fetchData = async () => {
    this.setState({ loading:true, error: null })

    try {
      const data = await api.badges.list();
      this.setState({ loading:false, data: data });
    } catch (error) {
      this.setState({ loading:false, error: error });
    }
  }

  render () {
    if (this.state.loading === true && !this.state.data) {
      return (
        <React.Fragment>
          <div className="Badges">
            <div className="Badges__hero">
              <div className="Badges__container">
                <img className="Badges_conf-logo"src={confLogo} alt="hero-logo"/>
              </div>
            </div>
          </div>
          <PageLoading />;
        </React.Fragment>
      )     
    }

    if (this.state.error) {
      return (
        <React.Fragment>
          <div className="Badges">
            <div className="Badges__hero">
              <div className="Badges__container">
                <img className="Badges_conf-logo"src={confLogo} alt="hero-logo"/>
              </div>
            </div>
          </div>
          <PageError error={this.state.error} />
        </React.Fragment>
      )
    }

    return(
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo"src={confLogo} alt="hero-logo"/>
            </div>
          </div>
        </div>
        <div className="Badge__container container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary"> New Badge </Link>
          </div>
          <div className="Badges__list">
            <div className="Badges__container">
              <BadgesList badges={this.state.data} />

              {this.state.loading && <MiniLoader />}
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Badges 