import 'bootstrap/dist/css/bootstrap.min.css';
import './UserCard.scss';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from "../../redux/actions";


const UserCard = (props) => {
  const [user, setUser] = useState({ ...props.user })
  const [editMode, setEditMode] = useState(props.edit)

  const dispatch =  useDispatch();
  const deleteUser = () => dispatch(actions.deleteUser(user.id))
  const editUser = () => dispatch(actions.editUser(user))
  const createUser = () => dispatch(actions.createUser(user))

  const inputHandler = (e) => {
    setUser(prev => ({ ...prev, [e.target.name]: e.target.value  }))
  }

  useEffect(() => {
    setUser({ ...props.user })
  }, [props.user])


  return (
    <div className="userCard">
      <div className="userCard-avatar">
        {user.avatar ? (
          <div className="userCard-avatar-img"/>
        ) : (
          <div className="userCard-avatar-none" />
        )}
      </div>
      <div className="userCard-id">
        <span className="userCard-id-text">ID: 
          {user ? user.id : ''} 
        </span>

        {user.id ? (
          <>
          {editMode ? '' : (
              <button onClick={deleteUser}>DELETE</button>
            )}
          
            {editMode ? (
              <>
                <button onClick={() => {
                  setEditMode(false)
                  setUser({...props.user})
                }}>CANCEL</button>
                <button onClick={() => {
                  editUser();
                  setEditMode(false)
                  setUser({...props.user})
                }}>SAVE</button>
              </>
            ) : (
              <button onClick={() => setEditMode(true)}>EDIT</button>
            )}
          </>
        ) : (
          <>
            <button onClick={() =>{
            createUser();
            setUser(prev => ({...prev, name: '', surname: '', desc: ''}))
            }}>CREATE USER</button>
          </>
        )}
      </div>
      <div className="userCard-info">
        {editMode ? (
          <form>
          <label htmlFor="name">
            <span className="userCard-info-name">Name: 
          </span>
            <input
              type='text'
              name='name'
              value={user.name}
              onChange={inputHandler}
            ></input>
          </label>
          <br />
          <label htmlFor="surname">
            <span className="userCard-info-surname">Surname: </span>
            <input
              type='text'
              name='surname'
              value={user.surname}
              onChange={inputHandler}
            ></input>
          </label>
          <br />
          <label htmlFor="desc">
            <span className="userCard-info-desc">Desc: </span>
            <input
              type='text'
              name='desc'
              value={user.desc}
              onChange={inputHandler}
            ></input>   
          </label>
        </form>
        ) : (
          <form>
          <label htmlFor="name">
            <span className="userCard-info-name">Name: {user.name} 
          </span>
          </label>
          <br />
          <label htmlFor="surname">
            <span className="userCard-info-surname">Surname: {user.surname}  
        </span>
          </label>
          <br />
          <label htmlFor="desc">
            <span className="userCard-info-desc">Desc: {user.desc} 
        </span> 
          </label>
        </form>
        )}
        
      </div>

    </div>
  )
}

export default UserCard;