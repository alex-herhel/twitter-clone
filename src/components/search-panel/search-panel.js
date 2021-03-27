import React, { Component } from 'react';//импортим реакт и реакт компонент в приложение 
import './search-panel.css';//импортим стили

export default class SearchPanel extends Component {//создаем и експорти класс при помощи рекат компонента
    constructor(props){//создаем конструктор 
        super(props);//создаем суперконструктор
        this.state = {//создаем стейт со своим значением 
            term: ''
        }
       this.onUpdateSearch = this.onUpdateSearch.bind(this);//привязываем елемент к контексту
    }

    onUpdateSearch(e){//метод который отвечает за поиск введенного значения 
        const term = e.target.value;//ссылаемся на введенное значение
        this.setState({term});//не на прямую меняем значение стейта на то что ввели
        this.props.onUpdateSearch(term);//и непосредственно в наш пропс передаем новый статус term
    }
    render(){//рендерим верстку 
    return (//возвращаем отрендеренную верстку
        <input
            className="form-control search-input"
            type="text"
            placeholder="Поиск по записям"
            onChange = {this.onUpdateSearch}
        />
    )
  }
}


