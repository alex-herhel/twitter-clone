import React, {Component} from 'react';//импортируем реакт и реакт компонент в приложение

export default class PostAddForm extends Component {//создаем класс и сразу его експортируем при помощи компонента
    constructor(props) {//создаем конструктор для пропсов - все входные данные ввиде обьекта для дальнейшей работы 
        super(props);//вызываем суперконструктор для определения я this елементов в классе
        this.state = {//прописываем стейт нашего класса который по умолчанию хранит какое то значение-состояние 
            text: ''
        };
        this.onValueChange = this.onValueChange.bind(this);//привязываем this елемент к нашему контексту
        this.onSubmit = this.onSubmit.bind(this);//привязываем this елемент к нашему контексту 
    }
    onValueChange(e) {//метод ответственный за изменение пустого свойста текст на то которое мы введем в поле поиска
        this.setState({//обращаемся к нашему стейту
            text: e.target.value//меняем на неше значение 
        });
    }
    onSubmit(e) {//метод ответственный за подтверждение ввода информации при нажатии на кнопку
        e.preventDefault();//обнуляем дефолтное поведение браузера для отмены перезагрузки
        this.props.onAdd(this.state.text);//вызвали обработчик нажатия для передачи введеного значения
        this.setState({//заново обнуляем наш стейт для следующего ввода
            text: ''
        });
    }
    render() {//вызвали метод рендер для нашей верстки
        return (
            <form 
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="О чем вы думаете сейчас?"
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary">
                    Добавить
                    </button>
            </form>
        )
    }
}