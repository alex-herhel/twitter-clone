import React from 'react';//импортим реакт в приложение 

const AppHeader = ({liked, allPosts}) => {//создаем функцию которая добавит наш хедер-текст
    return (//результатом работы данной функции будет готовая верска на странице 
        <div className="app-header d-flex">
            <h1>Новые твиты</h1>
            <h2>{allPosts} записей, из них понравилось {liked}</h2>
        </div>
    )
}

export default AppHeader;//експортируем приложение 