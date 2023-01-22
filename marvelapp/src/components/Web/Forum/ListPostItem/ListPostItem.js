import React from 'react';
import { DateTime } from "luxon";
import "./ListPostItem.scss";

export function ListPostItem(props) {
    const {post} = props;
    const date = new Date(post.fecha);
  return (
    <div className='post-item__info'>
        <div>
          <div className='post-item__info-title'>{post.titulo}</div>
          {/* <div className='post-item__info-title'>{post.nickname}</div> */}
          <span className='post-item__info-publish'>
              Publicado por {post.nickname } el día {DateTime.fromISO(date.toISOString()).setLocale("es").toFormat("dd 'de' LLLL 'del' yyyy")}
          </span>
        </div>
        <div className='post-item__html' dangerouslySetInnerHTML={{__html: post.comentario}}/>
    </div>
  )
}
