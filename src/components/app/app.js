import React, {Component} from 'react'; //импорти реакт и достаем от туда еще и компонент

import AppHeader from '../app-header';//импортим часть общего проекта "хедер"
import SearchPanel from '../search-panel';//импорти часть общего проекта "панель поиска"
import PostStatusFilter from '../post-status-filter';//импорти часть проекта "фильтр постов"
import PostList from '../post-list';//импортим часть проекта "лист всех постов"
import PostAddForm from '../post-add-form';//импортим часть проекта "форма добавления нового поста"

export default class App extends Component {//при помощи компонента создаем класс и експортим его
    constructor(props){//создаем конструктор пропсов
        super(props);//создаем суперконструктор для изменения значений в стейте
        this.state = {//создаем стейт 
            data: [
                {label: 'gggggggg', important: false, like: false, id: '1'},//каждому присвоен лейбл с контентом, значение важности (фолс по дефолту) и уникальый ключ
                {label: 'eeeeeee', important: false, like: false, id: '2'},
                {label: 'zzzzzz', important: false, like: false, id: '3'},
                ],//в котором нам пришел массив твитов с их уникальными пропсами 
            term: '',//введенное значение поеска путо для отображения их всех
            filter: 'all'//фильтр так же по дефолту для отображения всех елементов
        };
        this.deleteItem = this.deleteItem.bind(this);//привязываем елемент к контексту
        this.addItem = this.addItem.bind(this);//привязываем елемент к контексту
        this.onToggleImportant = this.onToggleImportant.bind(this);//привязываем елемент к контексту
        this.onToggleLiked = this.onToggleLiked.bind(this);//привязываем елемент к контексту
        this.onUpdateSearch = this.onUpdateSearch.bind(this);//привязываем елемент к контексту
        this.onFilterSelect = this.onFilterSelect.bind(this);//привязываем елемент к контексту
        this.maxId = 4;//привязываем елемент к контексту
    }

    deleteItem(id){//метод удаления елемента, передаем в нее айди нашего елемента
        this.setState(({data}) => {//меняем наш стейт не на прямую а только для нас 
            const index = data.findIndex(elem => elem.id === id)//при помощи поиска findIndex в массиве нашли елемент и сравнили его с тем что мы хотим удалить, и если совпало передали его в переменную 

            const newArr = [...data.slice(0, index),...data.slice(index+1)]//создаем новый массив который удали наш елемент (заполнили елементы до наего удаляемого, пропустили его, и дальше заполняем)

            return{
                data: newArr//возвращаем в наш массив с сервера новый массив 
            }
        });
    }

    addItem(body){//метод добавления нашего елемента, а передаем наш текст введенный в строку
        const newItem = {//новый айтем будет нести в себе такие пропсы 
            label: body,//наш текст
            important: false,//не важный пост по дефолтку
            id: this.maxId++//наш максимальный айду увеличиться на 1
        }
            this.setState(({data}) => {//меняем стейт не на прямую 
                const newArr = [...data, newItem];//создаем новый массив в нашим новым елементов в конце
                return{
                    data: newArr//возвращаем новый массив
                }
            })
        }

    onToggleImportant(id){//включаем важность поста
        this.setState(({data}) => {//меняем стейт не на прямую 
            const index = data.findIndex(elem => elem.id === id);//ищем наш выбранный елемент по его индексу и передаем его в переменную

            const old = data[index];//наш елемент массива с нашим айди 
            const newItem = {...old, important: !old.important};//новый елемент со всеми старыми пропсами кроме важности, он теперь имеет значение правда
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)];//новый массив с измененным статусом елемента

            return{
                data: newArr//возвращаем новый массив
            }
        })    
    }
    onToggleLiked(id){//метод статуса лайк
        this.setState(({data}) => {//меняем стейт не на прямую
            const index = data.findIndex(elem => elem.id === id);//ищем елемент оп индексу

            const old = data[index];//наш елемент
            const newItem = {...old, like: !old.like};// меняем статус лайк на правду
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)];//создаем новый массив 

            return{
                data: newArr//возвращаем массив
            }
        })
    }

    searchPost(items,term){//метод поисковой панели
        if (term.length === 0){//если мы ничего не ввели то возвращаем все елементы не трогая список
            return items
        }

        return items.filter((item) => {//возвращаем елементы которые отфильтровались по введенному тексту
            return item.label.indexOf(term) > -1//различие между текстом и елементом не должно привышать 1 букву
        });
    }

    filterPost(items, filter){//метод фильтром елементов
        if(filter === 'like'){//если фильтр лайк
            return items.filter(item => item.like)//фильтруем все елементы по лайкам
        }else{
            return items//иначе если все без лайков то не трогаем
        }
    }
    onUpdateSearch(term){//обнуление строки ввода при поиске
        this.setState({term});
    }

    onFilterSelect(filter){//обнуление фильтров
        this.setState({filter});
    }
    render(){//рендерим верстку
        const {data, term, filter} = this.state;//из нашего стейта диструктуризируем все его елементы
        const liked = data.filter(item => item.like).length;//статус лайк
        const allPosts = this.state.data.length;//статус важно

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);//переменная общей видимости постов при всех возможным критериях
        return(//возвращаем нашу вурстку 
            <div className="app">
                <AppHeader
                liked = {liked}
                allPosts = {allPosts}/>
                <div className = "search-panel d-flex">
                <SearchPanel
                onUpdateSearch = {this.onUpdateSearch}/>  
                <PostStatusFilter
                filter ={filter}
                onFilterSelect ={this.onFilterSelect}/>
                </div>
                <PostList 
                posts={visiblePosts}
                onDelete={this.deleteItem}
                onToggleImportant = {this.onToggleImportant}
                onToggleLiked = {this.onToggleLiked}/>
                <PostAddForm
                onAdd={this.addItem}/>
             </div>
              )
        }
}

