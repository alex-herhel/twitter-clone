import React, {Component} from 'react';//импортим реакт и реакт компонент в приложение 

import './post-list-item.css';//импортим стили

export default class PostListItem extends Component {//екпортим класс  

    render() {//используем метод рендер для создание изменений компонентов
        const {label, onDelete, onToggleImportant, onToggleLiked, important, like} = this.props;//через диструктуризацию пропсов достаем нужные нам пропсы

        let classNames = "app-list-item d-flex justify-content-between";//передали классы в переменную
        if (important) {
            classNames += ' important'; //если нажата кнопка важно true, то добавляем в класс новый класс 
        }
        if (like) {
            classNames += ' like'; // если нажата кнопка лайк true, по добавляем новый класс
        }
    return (//возвращаем новую верстку
        <div className={classNames}> 
            <span 
                className="app-list-item-label"
                onClick={onToggleLiked}>
                {label}
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button 
                type="button" 
                className="btn-star btn-sm"
                onClick={onToggleImportant}>
                    <i className="fa fa-star"></i>
                </button>
                <button 
                type="button" 
                className="btn-trash btn-sm"
                onClick={onDelete}>
                    <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>
            </div>
        </div>
        )
    }
}