import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/HomepageFeatures'
import Heading from '@theme/Heading'
import contact from '../../options/contact'

import styles from './index.module.css'

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext()

    return (
        <header className={clsx('heroBbg hero--primary', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    {siteConfig.title}
                </Heading>
                <p className="hero__subtitle">
                    {siteConfig.tagline} experience : {new Date().getFullYear() - Number(contact.frontEndExperience)} year
                </p>
                <div className={styles.buttons}>
                    <Link className=" button--secondary button--lg" to="/about">
                        About Me
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext()
    return (
        <Layout title={`Home`} description="Description will go into a meta tag in <head />">
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    )
}
