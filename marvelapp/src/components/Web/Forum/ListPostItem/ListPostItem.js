import React from 'react';
import { DateTime } from "luxon";
import "./ListPostItem.scss";

export function ListPostItem(props) {
    const {post} = props;
    const date = new Date(post.fecha);
  return (
    <div className='list-post-item'>
        <h2>{post.nickname}</h2>
        <span>
            {DateTime.fromISO(date.toISOString()).setLocale("es").toFormat("dd 'de' LLLL 'del' yyyy")}
        </span>
        <p>{post.comentario}</p>
    </div>
  )
}
