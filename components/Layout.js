import Link from "next/link"

export default function Layout(props){
  return ( 
    <div>
    <style jsx>{`
      #navbar *{
        display: inline-block;
      }
      
      #navbar{
        height: 70px;
      }

      #navbar h2{
        margin-left: 9px;
      }

      #navbar #links{
        margin-left: 20px;
      }

      #navbar #links a{
        margin-left: 9px;
      }
    `}</style>
      <div id="navbar" style={{ width: '100%', position: 'absolute', top: '0', left: '0', borderBottom: '1px solid'}}> 
        <h2>Bread</h2>

        <div id="links">
          <Link href="/"><a>Home</a></Link>
          <Link href="/leaderboard"><a>Leaderboard</a></Link>
          { /* <Link href="/staff"><a>Staff</a></Link> */}
        </div>
      </div><br/><br/>
      <div id="content" style={props.style}>
        {props.children}
      </div>
    </div>
  )
}