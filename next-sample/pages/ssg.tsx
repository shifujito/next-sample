// 型のために導入
import {NextPage} from 'next'
import Head from 'next/head'

type SSGProps = {}

const SSG: NextPage<SSGProps> = () => {
    return (
        <div>
            <Head>
                <title>Static Site Generation</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main>
                <p>
                    このページは静的サイト生成によってビルドじに生成されたページです。
                </p>
            </main>
        </div>
    )
}
export default SSG
