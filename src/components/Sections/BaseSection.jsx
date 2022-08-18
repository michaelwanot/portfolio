/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';


export const BaseSection = (props) => (
  <section id={props.section} className="h-screen">
    <a name={props.section} href="#"/>
    <div className='container h-full'>
      {props.children}
    </div>
  </section>
);
