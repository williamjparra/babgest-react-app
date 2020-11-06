import React from 'react';
import Pageloading from '../components/PageLoading'
import PageError from '../components/PageError'
import Api from '../api'
import BadgeDetails from '../components/BadgeDetails'
import api from '../api';


class BadgeDetailsContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false,
  };

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({loading: true, error:null})

    try{
      const data = await Api.badges.read(this.props.match.params.badgeId)
      this.setState({ loading: false, error: null, data:data })
    } catch {
      this.setState({ loading: false, error: true })
    }
  }

  handleOpenModal = e => {
    this.setState({ modalIsOpen: true })
  }

  handleCloseModal = e => {
    this.setState({ modalIsOpen: false })
  }

  handleDeleteBadge = async e => {
    this.setState({ loading: true, error: null })
    try {
      await api.badges.remove(
        this.props.match.params.badgeId
      ) 
      this.props.history.push('/badges')
    } catch (error) {
      this.setState({ loading:false, error: error })
    }
  }

  render () {
    if (this.state.loading) {
      return <Pageloading />
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />
    }

    return (
      <BadgeDetails badge={this.state.data} onCloseModal={this.handleCloseModal} onOpenModal={this.handleOpenModal}
      modalIsOpen={this.state.modalIsOpen} onDeleteBadge={this.handleDeleteBadge} />
    )
  }
}

export default BadgeDetailsContainer