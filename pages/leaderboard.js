import Layout from "../components/Layout"
import Head from "next/head"
import Link from "next/link"

export default class Leaderboard extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      loaded: false,
      leaderboard: []
    }
  }

  parseLeaderboard(e){
    e.preventDefault()

    var id = document.getElementById('server-id').value
    this.getLeaderboard(id).then((leaderboard)=>{
      if (typeof leaderboard != 'object'){
        // alert('Unknown Error, please contact us on our support server.')
      }else{
        this.setState({
          loaded: true,
          leaderboard: leaderboard
        })
      }
    })
  }

  componentDidMount(){
    if(this.state.loaded){
      return
    }

    var id = new URLSearchParams(new URL(window.location.href).search).get('id')

    if(id){
      document.getElementById('server-id').value = id
      this.parseLeaderboard({
        preventDefault: ()=>{}
      })
    }
  }

  async getLeaderboard(id){
    var b = await fetch(`https://bread.pdaniely.repl.co/leaderboard?id=${id}`, {
      method: 'GET'
    })

    var j = await b.json()

    if(j.ok == false){
      alert(j.message)
      return
    }

    return j.leaderboard
  }


  render(){

  return (
    <Layout style={{ textAlign: 'center'}}>

      <style jsx>{`
        .server{
          display: inline-block;
          border: 2px solid;
          border-radius: 10px 10px;
          width: 230px;
          height: 320px;
          padding: 10px 10px;
          margin-left: 5px;
        }

        .user{
          display: inline-block;
          border: 2px solid;
          border-radius: 10px 10px;

          width: 230px;
          height: 320px;

          padding: 5px 5px;

          margin-left: 9px;
          transition: 0.5s;

          margin-bottom: 9px;
          cursor: pointer;
        }

        .user:hover{
          box-shadow: 9px 9px;
        }

        .user img{
          border-radius: 50%;
          width: 120px;
          height: 120px;
        }
      `}</style>
      <Head>
        <title>Bread - Leaderboard</title>
      </Head>
      
      <br/>
      <form onSubmit={this.parseLeaderboard.bind(this)}>
        <input type="search" placeholder="Server Name/ID" required id="server-id" />
      </form><br/>
      
      <div id="leaderboard">
        {this.state.loaded ? (

          !this.state.leaderboard[0] ? (
            <p>No one was found in the leaderboard</p>
          ) : (
            this.state.leaderboard.map((l)=>{
            return (
              <div className="user">
                <img src={l.user.image}/>
                <h2>{l.user.username}</h2>

                <p>Games Played: {l.gamesPlayed}</p>
                <p>Games Won: {l.gamesWon}</p>
                <p>Games Controlled: {l.gamesControlled}</p>
              </div>
            )
          })
          )

        ) : (
         <p>Enter server id in the textbox to get server</p>
        )}
      </div>
    </Layout>
  )
  }
}