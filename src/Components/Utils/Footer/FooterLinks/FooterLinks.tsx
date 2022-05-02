import React, {FC} from 'react';
import classes from './FooterLinks.module.scss';

type FooterLinksProps = {
    caption: string,
    links: string[]
}

const FooterLinks: FC<FooterLinksProps> = ({caption, links}) => {
    return (
        <section className={classes.footerLinks}>
            <h3 className={classes.footerLinks__caption}>{caption}</h3>
            <ul>
                {
                    links.map(link =>
                        <li key={link} className={classes.footerLinks__linkItem}>
                            <a href="#" className={classes.footerLinks__link}>{link}</a>
                        </li>)
                }
            </ul>
        </section>
    );
};

export default FooterLinks;