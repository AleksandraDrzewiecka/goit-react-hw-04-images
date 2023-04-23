import { Hearts } from 'react-loader-spinner';
import css from './Loader.module.css';
import React from 'react';

export const Spinner = () => (
    <div className={css.loaderWrapper}>
      <Hearts
        height={100}
        width={100}
        radius={5}
        color="#0000ff"
        ariaLabel="hearts-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
        className={css.loader}
      />
    </div>
  );

