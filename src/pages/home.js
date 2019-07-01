import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './home.css';



function IntroText() {
  return (
    <div className="introText">
      Ready to take advantage of ...
    </div>
  );
}

function NavButton(props) {
  const [icon, setIcon] = useState('coffee');
  const [text, setText] = useState('Button');
  const [to, setTo] = useState('/');
  useEffect(() => {
    setIcon(props.icon);
    setText(props.text);
    setTo(props.to);
  }, [props.icon, props.text, props.to]);
  return (
    <Link to={to} className="navButton">
      <span>{<FontAwesomeIcon icon={icon} />}</span>
      <span>{text}</span>
    </Link>
  );
}

function NavWrapper() {
  return (
    <div className="navWrapper">
      <NavButton icon="plus-circle" text="Incorporate Entity" to="/create" />
      <NavButton icon="question-circle" text="Check Status" to="/" />
      <NavButton icon="wrench" text="Manage Entity" to="/" />
      <NavButton icon="search" text="Lookup Entity" to="/" />
      <NavButton icon="info-circle" text="Information" to="/" />
    </div>
  );
}

class Home extends Component {
  render() {
    return (
      <>
        <IntroText />
        <NavWrapper />
      </>
    );
  }
}
export default Home;
