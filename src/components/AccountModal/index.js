import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  CenterContent,
  Content, SelectedContent, SideBar, Wrapper,
} from './styles';

export default function AccountModal({ isModalOpen }) {
  if (!isModalOpen) {
    return null;
  }

  return (
    <Wrapper>
      <Content>
        <SelectedContent>
          <h1>My List</h1>

          <CenterContent>
            <p>Create a list of what you want to watch.</p>
            <button type="button">What is my list?</button>
          </CenterContent>
        </SelectedContent>
        <SideBar>

          <Link to="/">My List</Link>
          <Link to="/">Continue Watching</Link>
          <hr />
          <Link to="/">Account</Link>
          <Link to="/">Subscription</Link>
          <Link to="/">Manage Devices</Link>
          <Link to="/">Parental Controls</Link>
          <Link to="/">Notifications</Link>
          <hr />
          <Link to="/">Display Language</Link>
          <Link to="/">Switch Profiles</Link>
          <Link to="/">Help</Link>
          <Link to="/">Sign Out</Link>
          <Link to="/">Privacy & Terms</Link>

        </SideBar>
      </Content>
    </Wrapper>
  );
}

AccountModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
};
