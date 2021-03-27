import React from 'react';//импортим реакт в приложение 

import PostListItem from '../post-list-item';//импортим наше приложение которое создаем один елемент листа в виде верстки
import './post-list.css'//импортим стили

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {//создаем функцию и диструктуризируем наши пропсы

    const elements = posts.map( (item) => {//с помощью метода Map создаем новый массив наших елементов листа который виден только нам
        // Простой способ проверки на объект + содержится ли в нем информация
        if ( typeof item === 'object' && isEmpty(item)){//если тип елемента обьект или 
            const {id, ...itemProps} = item;//диструктуризируем наши пропсы и берем id как отдельный пропс для использования и все остальные 
            return (//рендерим нашу верстку
                <li key = {id} className='list-group-item'>
                    <PostListItem {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLiked={() => onToggleLiked(id)}/>
                </li>
            )
        }
    })

    function isEmpty(obj) {//функция проверки на оьект
        for(let key in obj)// если есть ключ в елементе 
        {
            return true;//то это обьект и возвращаем ответ правду
        }
        return false;//значит обьект не пуст так как в нем есть как минимум 1 ключ
    }

    return (//рендерим весь наш лист
        <ul className="app-list list-group">
           {elements}
        </ul>
    )
}

export default PostList;//експортим преложение 