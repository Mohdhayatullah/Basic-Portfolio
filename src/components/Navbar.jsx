


const Navbar = () => {
  return (
    <nav style={{display:'flex', justifyContent:'space-around', alignItems:'center', padding:'10px 20px', borderBottom:'2px solid black', backgroundColor:'#f0f0f0', borderRadius:'10px'}}>
      <h1 style={{ color: 'blue', textShadow: '1px 1px 0 black'}}>My Portfolio</h1>
      <ul style={{display:'flex', gap:'20px', listStyleType:'none', margin:0, padding:0}}>
        <li style={{marginRight: '20px'}}>Home</li>
        <li style={{marginRight: '20px'}}>About</li>
        <li style={{marginRight: '20px'}}>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}
export default Navbar