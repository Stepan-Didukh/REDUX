import React from 'react';
import NotFoundImg from '../../assets/not-found.png';
import {Button} from '../../components/Button';

import './NotFoundPage.scss';

const CN = "not-found-page";

const NotFoundPage = (props) => {
  const onGoHomeClick = () => {
    const { history } = props;
    history.push('/doggos');
  };

  return (
    <div className={CN}>
      <img alt="not-found" src={NotFoundImg}/>
      <Button onClick={onGoHomeClick} label="Go Home" className={`${CN}__btn`}/>
    </div>
  );
};

export default NotFoundPage;