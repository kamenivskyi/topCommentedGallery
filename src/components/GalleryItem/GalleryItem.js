import React, { memo } from 'react';
import './GalleryItem.css';

const GalleryItem = ({ item: { title, thumbnail, num_comments, url } }) => (
  <li className='gallery-item col-md-4 col-lg-3 mb-5'>
    <img src={thumbnail} alt='' className='mb-3' />
    <h4> {title} </h4>
    <p>Number of comments: {num_comments} </p>
    <a href={url} target='_blank' rel='noopener noreferrer'>
      Link
    </a>
  </li>
);

export default memo(GalleryItem);
