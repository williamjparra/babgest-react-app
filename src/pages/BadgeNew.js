import React from 'react';

import header from '../images/platziconf-logo.svg'
import './styles/BadgeNew.css'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import PageLoading from '../components/PageLoading'
import api from '../api'

class BadgeNew extends React.Component {

  state = { 
    loading:false,
    error: null,
    form: {
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: '',
  } }

  handleChange = e => {
    this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }

  handleSubmit = async e => {
    e.preventDefault()
    this.setState({ loading: true, error : null})

    try {
      await api.badges.create(this.state.form)
      this.setState({ loading: false})

      this.props.history.push('/badges')
    } catch (error) {
      this.setState({ loading: false, error : error})
    }
  }

  render() {
    if (this.state.loading) {
      return <PageLoading />
    }
    return (
      <div>
        <div className="BadgeNew__hero">
          <img className="img-fluid BadgeNew__hero BadgeNew__hero-image" src={header} alt="logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge firstName={this.state.form.firstName || 'FRTS_NM'}
              lastName={this.state.form.lastName || 'LST-NM'}
              twitter={this.state.form.twitter || 'TWTTR'}
              jobTitle={this.state.form.jobTitle || 'JOB'}
              email={this.state.form.email || 'EMAIL'}
              avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon" />
            </div>
            <div className="col-6">
            <h1>New Attendant</h1>
              <BadgeForm 
                onChange={ this.handleChange } 
                onSubmit={this.handleSubmit}
                formValues={ this.state.form }
                error={this.state.error} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BadgeNew