import { NextPage, GetStaticProps } from 'next';
import Head from 'next/head'
import Link from 'next/link';
import { useRouter } from 'next/router';


type ISRProps = {
    message: string
}

const ISR: NextPage<ISRProps> = (props) => {
    const {message} = props

    const router = useRouter()

    if(router.isFallback){
        return <div>Loading...</div>
    }

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main>
                <p>このページはISRによってビルド時に生成されたページです。</p>
                <p>{message}</p>
                <Link href="/ssr">
                    <a>GO TO SSR</a>
                </Link>
            </main>
        </div>
    )
}

export const getStaticProps: GetStaticProps<ISRProps> = async (context) => {
    const timestamp = new Date().toLocaleString()
    const message = `${timestamp}`

    return {
        props: {
            message,
        },
        revalidate: 60,
    }
}

export default ISR
