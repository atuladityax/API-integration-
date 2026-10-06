
import "../components/Usercard.css"
const Usercard = ({user}) => {
  return (
   <div className="user-card">
      <h3 className="user-card__name">
        {user.firstName} {user.lastName}
      </h3>

      <div className="user-card__info">
        <p>
          <span className="label">Age </span>
          <span>{user.age}</span>
        </p>
        <p>
          <span className="label">Gender </span>
          <span>{user.gender}</span>
        </p>
        <p>
          <span className="label">Birthdate </span>
          <span>{user.birthDate}</span>
        </p>
        <p>
          <span className="label">Location </span>
          <span>{user.address.city}, {user.address.state}</span>
        </p>
      </div>
    </div>
  )
}

export default Usercard