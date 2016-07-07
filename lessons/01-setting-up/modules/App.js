import React from 'react'
import NavLink from './NavLink'
import Home from './Home'

export default React.createClass({
  render() {
    return (
    	<div>
    		<h1>Ghetto hub issues</h1>
    		<ul role="nav">
    			<li><NavLink to='/' onlyActiveOnIndex={true}>Kainga</NavLink></li>
    			<li><NavLink to='/about'>About</NavLink></li>
    			<li><NavLink to='/repos'>Repos</NavLink></li>
    		</ul>
    		{this.props.children}
    	</div>
    )
  }
})
