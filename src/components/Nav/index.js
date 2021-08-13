import React, { useState, useEffect } from 'react';
import { RiMenu2Fill, RiSearchLine } from 'react-icons/ri';

import logoImg from '../../assets/images/logo.svg';
import profileImg from '../../assets/images/profileImage.png';

import AccountModal from '../AccountModal';

import { Container, ImgContainer, ProfileContainer } from './styles';

export default function Nav() {
  const [navScroll, setNavScroll] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setNavScroll(true);
      } else {
        setNavScroll(false);
      }
    });
    window.removeEventListener('scroll', null);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      window.document.body.style.overflow = 'hidden';
    } else {
      window.document.body.style.overflow = 'auto';
    }
  }, [isModalOpen]);

  return (
    <Container scroll={navScroll}>
      <div>
        <button type="button">
          <RiMenu2Fill size={24} color="#DDD" />
        </button>
        <button type="button">
          <RiSearchLine size={24} color="#DDD" />
        </button>
      </div>

      <div>
        <button type="button">
          <img src={logoImg} alt="Logo" />
        </button>
      </div>

      <ProfileContainer>
        <button type="button" onClick={() => setIsModalOpen(!isModalOpen)}>

          <ImgContainer>
            <img src={profileImg} alt="Profile" />
          </ImgContainer>

          <h3>John Doe</h3>

        </button>

      </ProfileContainer>
      <AccountModal isModalOpen={isModalOpen} />
    </Container>
  );
}
