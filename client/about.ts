import { h, VNode } from 'snabbdom';

import { _ } from './i18n';
import { model } from './main';


export function aboutView(): VNode[] {
    const untitled = [
        _("\Many Thanks to gbtami and pychess developers to derive this project."),
    ]
    return [
        h('div.about', [
            h('img.center', { attrs: { src: `${model["asset-url"]}/favicon/favicon.png` } }),
            h('h1', { attrs: { align: 'center' } }, _('About peonelectrico')),
            h('p', _('peonelectrico is a free, open-source antichess server derived from pychess.')),
            h('p', [
                // TODO Automate the generation of this list
                _("Currently supported games are "),
                h('a', { attrs: { href: 'https://peonelectrico.herokuapp.com/variants/antichess' } }, 'Antichess'),
                ", ",
                h('a', { attrs: { href: 'https://peonelectrico.herokuapp.com/variants/antichess960' } }, 'Antichess960'),
                ", ",

            h('hr'),
            h('p', [
                _('To play on peonelectrico, you need to have an open and unmarked account on Lichess. '),
                _('Regarding Privacy and Terms of Service, the rules of lichess.org are also applied here. '),
                h('a', { attrs: { href: 'https://lichess.org/privacy' } }, 'Privacy'),
                ", ",
                h('a', { attrs: { href: 'https://lichess.org/terms-of-service' } }, 'ToS'),
            ]),
            h('hr'),
            h('p', untitled.map(paragraph => h('p', paragraph))),
        ]),
    ];
}
