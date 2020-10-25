import Layout from "../components/Layout"
import Head from "next/head"

export default function HomePage(){
  return (
    <Layout style={{ textAlign: 'center'}}>

      <Head>
        <title>Bread - Not Found</title>
      </Head>
      
      <br/>
      <img src="/static/bread.png" style={{ width: '220px', height: '220px'}}/>
      <h3>Page Not Found</h3>

      <p>We couldn't find the page you were looking for</p>
    </Layout>
  )
}