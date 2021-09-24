import 'bootstrap/dist/css/bootstrap.min.css';
import './PaginationWindow.scss';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import * as actions from "../../redux/actions";
import Page from '../Page/Page'

function PaginationWindow() {
  const dispatch =  useDispatch();
  const updateUsersList = () => dispatch(actions.updateUsersList())
  const usersList = useSelector(state => state.usersList);
  const location = useLocation();
  const currentPage = +location.pathname.slice(1);
  const pagesTotal = Math.floor(usersList.length / 5);
  const currenUsersList = usersList.slice(currentPage * 5, (currentPage * 5) + 5);

  useEffect(() => {
    updateUsersList();
    console.log(location)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Page
        users={currenUsersList}
        pagesTotal={pagesTotal}
        currentPage={currentPage} 
      />
    </>
  )
}

export default PaginationWindow;