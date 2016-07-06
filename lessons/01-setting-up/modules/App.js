import React from 'react'
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
    	<div>
    		<h1>Ghetto hub issues</h1>
    		<ul role="nav">
    			<li><Link to='/about' activeStyle={{ color:'#c9ce06' }}>About</Link></li>
    			<li><Link to='/repos' activeStyle={{ color:'chartreuse' }}>Repos</Link></li>
    		</ul>
    		{this.props.children}
    	</div>
    )
  }
})
