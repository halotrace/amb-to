/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React from 'react';
import SVG from 'react-svg';
import spinnerLogo from 'assets/svg/spinner.svg';
import './Spinner.scss';

const Spinner = () => {
  return (
    <SVG wrapper='span' className='Spinner' src={spinnerLogo} />
  );
};

export default Spinner;
