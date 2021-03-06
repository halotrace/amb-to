/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React from 'react';

const BackgroundImage = (props: any) => {
  return (
    <div onClick={props.onChange} className='AdditionalImages-photo' style={{ 'backgroundImage': `url(${props.url})` }}>
    </div>
  );
};

export default BackgroundImage;
