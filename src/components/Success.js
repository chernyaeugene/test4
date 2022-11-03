import React from 'react';

export const Success = ({ count }) => {
    return (
        <div class="success-block">
            <img src="https://img.icons8.com/ios/50/000000/ok--v1.png" alt="Success" />
            <h3>Успешно!</h3>
            <p>Всем {count} пользователям отправлено приглашение.</p>
            <button className="send-invite-btn">Назад</button>
        </div>
    );
};