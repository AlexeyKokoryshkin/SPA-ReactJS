import React, { Component } from 'react'

class PageNotFound extends Component {
    render () {
        return (
            <div>
                <h1>Страница не найдена!</h1>
                <p>Error 404 =(</p>
                <p>Шаблон для ошибки 404. Так будет работать если юзер ошибется с URL (уже работает).</p>
            </div>
        )
    }
}

export default PageNotFound