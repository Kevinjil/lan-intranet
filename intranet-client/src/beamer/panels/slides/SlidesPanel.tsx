import * as React from 'react';
import { animated } from 'react-spring';

import useSlider from '../../../helpers/useSlider';
import Panel, { PanelProps } from '../Panel';
import './SlidesPanel.scss';

import prodriveLogo from '../../../logos/prodrive-logo.svg';
import letstalkLogo from '../../../logos/letstalk-logo.png';
import gepwnageLogo from '../../../logos/gepwnage-logo.png';

export type SlidesPanelProps = PanelProps;

interface Logo {
    logo: string;
    color: string;
}

const logos: Logo[] = [
    { logo: gepwnageLogo, color: '#013370' },
    { logo: prodriveLogo, color: '#ffffff' },
    { logo: letstalkLogo, color: '#ffffff' },
];

export default function SlidesPanel({ ...otherProps }: SlidesPanelProps) {
    const trans = useSlider(logos, 10000, 5000);

    return (
        <Panel className="SlidesPanel">
            {trans.map(({ item, props, key }) => (
                item && <animated.div
                    key={key}
                    className="SlidesPanel__slide"
                    style={{ ...props, backgroundColor: item.color }}
                >
                    <img className="SlidesPanel__logo" src={item.logo} />
                </animated.div>
            ))}
        </Panel>
    );
}
