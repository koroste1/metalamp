import React, {FC} from 'react';
import classes from './HeaderAuth.module.scss';
import Button from "../../../UI/Button/Button";

type HeaderAuthProps = {
    isAuth: boolean;
    name?: string;
}

const HeaderAuth: FC<HeaderAuthProps> = ({isAuth, name}) => {
    return (
        <div className={classes.headerAuth}>
            {isAuth ?
                <p className={classes.headerAuth__user}>{name}</p>
                :
                <><Button onClick={() => {
                }} painted={false} text='Войти' type="button" disabled={false}/>
                    <Button onClick={() => {
                    }} painted={true} text='Зарегестрироваться' type="button" disabled={false}/>
                </>
            }

        </div>
    );
};

export default HeaderAuth;