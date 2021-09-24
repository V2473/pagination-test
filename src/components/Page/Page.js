import 'bootstrap/dist/css/bootstrap.min.css';
import './Page.scss';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import UserCard from '../UserCard/UserCard';

function Page(props) {
  const emptyUser = {
    name: '', surname: '', desc: '', avatar: null
  }

  return (
    <>
      <UserCard user={emptyUser} edit={true}></UserCard>
      {props.users.map(user => (
        <UserCard user={user} key={user.id}></UserCard>
      ))}
      {[...Array(props.pagesTotal)]
        .map((e, index) => index + 1 === props.currentPage ? (
            <span key={index + 1}>{props.currentPage}</span> 
          ) : (
            <Link to={'/' + (index + 1)} key={index + 1}> {index + 1} </Link>
          )
        )
      }
    </>
  )
}

export default Page;