import React, { Component } from 'react';//импортим реакт и рекат компонент

export default class PostStatusFilter extends Component {//создаем и сразу експортим класс при помощи компонента
    constructor(props) {//создаем конструктор входных елементов пропс
       super(props);//создаем суперконструктор
       this.buttons = [//создаем метод в котором есть две кнопки
           {name: 'all', label: 'Все'},
           {name: 'like', label: 'Понравилось'}
       ];
    }
   render() {//дендерим нашу верстку

       const buttons = this.buttons.map(({name, label}) => {//для нашей кнопки создаем новый массив елементов и передаем значения конпки
           const {filter, onFilterSelect} = this.props;//диструктуризируем наши елементы из пропсов
           const active = filter === name;//переменная активности 
           const clazz = active ? 'btn-info' : 'btn-outline-secondary'
           return (
               <button type='button'
                    className={`btn ${clazz}`}
                   key={name}
                   onClick={() => onFilterSelect(name)}>
                   {label}</button>
           )
       });

       return (
           <div className="btn-group">
               {buttons}
           </div>
       )
   }
}


