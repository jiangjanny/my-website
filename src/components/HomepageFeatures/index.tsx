import clsx from 'clsx'
import Heading from '@theme/Heading'
import styles from './styles.module.css'

type FeatureItem = {
    title: string
    Svg: React.ComponentType<React.ComponentProps<'svg'>>
    description: JSX.Element
}

const FeatureList: FeatureItem[] = [
    {
        title: '關於我',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: <>過去經歷....</>,
    },
    {
        title: '文章分享',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: <>目前所見所聞包含前端學習、旅遊、其他</>,
    },
    {
        title: '面試準備',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: <>目前面試所需要做的準備包含基本Html、CSS、SCSS、JS、 TypeScript、vue3、Nuxt3、React、Next、前端的需知道的一些事情...等</>,
    },
]

function Feature({ title, Svg, description }: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    )
}
