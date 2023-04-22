import { Hearts } from 'react-loader-spinner';
import css from './Loader.module.css';
import React from 'react';

export const Spinner = () => {
  return (
    <div className={css.loaderWrapper}>
      <Hearts
        height={100}
        width={100}
        radius={5}
        color="#4f22f1"
        ariaLabel="hearts-loading"
        visible={true}
      />
    </div>
  );
};