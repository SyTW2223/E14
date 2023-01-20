import React from 'react';
import { DateTime } from "luxon";
import "./ListPostItem.scss";

export function ListPostItem(props) {
    const {post} = props;
    const date = new Date(post.fecha);
  return (
    <div className='post-item__info'>
        <div>{post.titulo}</div>
        <div className='post-item__info-title'>{post.nickname}</div>
        <span>
            {DateTime.fromISO(date.toISOString()).setLocale("es").toFormat("dd 'de' LLLL 'del' yyyy")}
        </span>
        <div dangerouslySetInnerHTML={{__html: post.comentario}}/>
    </div>
  )
}
