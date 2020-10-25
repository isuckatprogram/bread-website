import Layout from "../components/Layout"
import Head from "next/head"

export default function HomePage(){
  return (
    <Layout style={{ textAlign: 'center'}}>

      <Head>
        <title>Bread - Home</title>
      </Head>
      
      <br/>
      <img src="/static/bread.png" style={{ width: '220px', height: '220px'}}/>
      <h3>Bread - free games for your server</h3>

      <br/>
      <button>Learn More</button>
      <button>Invite</button>
    </Layout>
  )
}