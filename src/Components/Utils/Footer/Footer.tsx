import React from 'react';
import classes from './Footer.module.scss';
import logo from '../../../assets/logo.svg';
import FooterDescription from "./FooterDescription/FooterDescription";
import FooterLinks from "./FooterLinks/FooterLinks";
import FooterSubscribe from "./FooterSubscribe/FooterSubscribe";

type DataType = {
    caption: string;
    links: string[];
}

const Footer = () => {
    const data: DataType[] = [
        {
            caption: 'Навигация',
            links: ['О нас', 'Новости', 'Служба поддержки', 'Услуги']
        },
        {
            caption: 'о нас',
            links: ['О сервисе', 'Наша команда', 'Вакансии', 'Инвесторы']
        },
        {
            caption: 'Служба поддержки',
            links: ['Соглашения', 'Сообщества', 'Связь с нами']
        }
    ]

    return (
        <footer className={classes.footer}>
            <FooterDescription/>
            {data.map(({caption, links}) => <FooterLinks key={caption} caption={caption} links={links}/>)}
            <FooterSubscribe/>
        </footer>
    );
};

export default Footer;