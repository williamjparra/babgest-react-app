import React from 'react'
import '../pages/styles/BadgeDetails.css'
import 'bootstrap/dist/css/bootstrap.css'
import confLogo from '../images/platziconf-logo.svg'
import { Link } from 'react-router-dom'
import Badge from '../components/Badge'
import DeleteBadgeModal from '../components/DeleteBadgeModal'

function useIncreaseCount(max) {
  const [count, setCount] = React.useState(0)

  if (count > max) {
    setCount(0)
  }

  return [count, setCount]
}

function BadgeDetails (props) {

    const [ count, setCount ] = useIncreaseCount(4)
    const badge = props.badge;

    return (
      <React.Fragment>
        <div className="BadgeDetails__hero">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img src={confLogo} alt="logo de la conferencia2.0" />
              </div>
              <div className="col-6 BadgeDetails__hero-attendant-name">
                <h1>
                  {badge.firstName} {badge.lastName}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge 
                firstName={badge.firstName} 
                lastName={badge.lastName}
                email={badge.email}
                twitter={badge.twitter}
                jobTitle={badge.jobTitle} />
            </div>
            <div className="col-6">
              <h2 className="">Actions</h2>
              <div>
                <div className="BadgeDetails__buttons">
                  <button className="btn btn-primary mr-4" onClick={() => {
                    setCount(count + 1);
                  }} >
                    Increase Count: {count}
                  </button>
                  <button className="btn btn-primary btn mr-4 mr-4">
                    <Link className=" " to={`/badges/${badge.id}/edit`}>Edit</Link>
                  </button>
                  <button className="btn btn-danger mr-4" onClick={props.onOpenModal}>
                    Delete
                  </button>
                  <DeleteBadgeModal isOpen={props.modalIsOpen} onClose={props.onCloseModal} onDeleteBadge={props.onDeleteBadge} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
}

export default BadgeDetails