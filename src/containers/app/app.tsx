import React from 'react';
import UserRouter from '../../routers/user';
import GuestRouter from '../../routers/guest';

const AppViewWeb = () => {
    return (
        <div>
            {false
                ? <UserRouter />
                : <GuestRouter />
            }
        </div>
    );
};

export default AppViewWeb;