import clsx from 'clsx'
import Heading from '@theme/Heading'
import styles from './styles.module.css'
import React, { useEffect, useRef } from 'react';

type FeatureItem = {
    workTime: string
    companyName: string
    description: string
}

const FeatureList: FeatureItem[] = [
    {
        workTime: '2023/08-至今',
        companyName: '資拓宏宇-前端工程師',
        description: '中華電信官網、桃園機捷後台系統前端切版串接、中華電信客服系統前端串接',
    },
    {
        workTime: '2022/02-2023/08',
        companyName: '1111人力銀行-前端工程師',
        description: '主網、活動網頁 前端串接',
    },
    {
        workTime: '2021/08-2022/02',
        companyName: '哲煜科技股份有限公司-前端工程師',
        description: '寶島鐘錶前端串接',
    },
    {
        workTime: '2020/03-2021/05',
        companyName: '貝爾網站-網頁設計組長',
        description: '形象網站、一頁式網站、購物網站...等',
    },
    {
        workTime: '2017/08-2020/02',
        companyName: '1111人力銀行-網頁設計',
        description: '活動網頁設計切版、雜誌編輯、月曆...等設計',
    },
    {
        workTime: '2015/07-2017-08',
        companyName: '霹靂國際多媒體-視覺設計師',
        description: '設計光碟封面、紙袋、海報、周邊商品印刷設計',
    },
    {
        workTime: '2015/02-2015-07',
        companyName: '旭連科技-網頁實習生',
        description: '製作活動網頁切版',
    },
    {
        workTime: '2014/06-2014-07',
        companyName: '七頂創意',
        description: '在畫郎製作周邊商品',
    },
]

function Feature({ workTime, companyName, description }: FeatureItem) {
    return (
        <li className={styles['timeline-item']}>
            <div className={styles['timeline-info']}>
                <span>{workTime}</span>
            </div>
            <div className={styles['timeline-marker']}></div>
            <div className={styles['timeline-content']}>
                <h3 className={styles['timeline-title']}>{companyName}</h3>
                <p>{description}</p>
            </div>
        </li>
    )
}

const Marquee = ({ selector, speed }) => {
    const marqueeRef = useRef(null);

    useEffect(() => {
        const parentElement = marqueeRef.current;
        const clone = parentElement.innerHTML;
        const firstElement = parentElement.children[0];
        let i = 0;

        parentElement.insertAdjacentHTML('beforeend', clone);
        parentElement.insertAdjacentHTML('beforeend', clone);

        const intervalId = setInterval(() => {
            firstElement.style.marginLeft = `-${i}px`;
            if (i > firstElement.clientWidth) {
                i = 0;
            }
            i = i + speed;
        }, 16); // Use a frame rate interval of approximately 60 FPS

        return () => clearInterval(intervalId); // Clean up interval on component unmount
    }, [speed]);

    return (
        <div className={styles.marquee} ref={marqueeRef}>
            <div className={styles['marquee-content']}>
                Experience
            </div>
        </div>
    );
};


export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <Marquee selector=".marquee" speed={0.5} />
            <div className="container">
                <ul className={styles.timeline}>
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </ul>
            </div>
        </section>
    )
}
