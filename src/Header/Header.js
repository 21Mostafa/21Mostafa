import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText, } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import "./Header.css";
 
const Header = () => {
   
   

   
    return (
        <div className="fix  ">
       <SideNav   className="sidenav"
    onSelect={(selected) => {
      
    }}
>
    <SideNav.Toggle />    
    <SideNav.Nav      defaultSelected="home">    

     
    <NavItem eventKey="Home">
            <NavIcon>
                 
                <a href="/"><i className="fa fa-fw fa-home" style={{ fontSize: '1.3em' }} />  </a>
            </NavIcon>
            <NavText>
                Home
            </NavText>
        </NavItem>
        <NavItem eventKey="about">
            <NavIcon>
                <a href="/About"> <i className="fas fa-user-alt" style={{ fontSize: '1.3em' }} /></a>
            </NavIcon>
            <NavText>
                About
            </NavText>
            
        </NavItem>
        <NavItem eventKey="services">
            <NavIcon>
                <a href="/Services">   <i className="fas fa-briefcase" style={{ fontSize: '1.3em' }} /> </a>
            </NavIcon>
            <NavText>
            Services
            </NavText>
        </NavItem>
        <NavItem eventKey="Experience">
            <NavIcon>
              <a href="/Experience"> <i className="fas fa-hat-cowboy-side" style={{ fontSize: '1.3em' }} /></a>
            </NavIcon>
            <NavText>
            Experience
            </NavText>
            
        </NavItem>
        <NavItem eventKey="Works">
            <NavIcon>
                <a href="/Works">   <i className="fas fa-layer-group" style={{ fontSize: '1.3em' }} /> </a>
            </NavIcon>
            <NavText>
            Works
            </NavText>
        </NavItem>
        <NavItem eventKey="BloPricing Plang">
            <NavIcon>
                  <a href="/Pricing_Plan"> <i className="fas fa-edit" style={{ fontSize: '1.3em' }} /> </a>
            </NavIcon>
            <NavText>
            Pricing Plan
            </NavText>
            
        </NavItem>
        <NavItem eventKey="Contact">
            <NavIcon>
                   <a href="/Contact"> <i className="fas fa-comments" style={{ fontSize: '1.3em' }} /></a>
            </NavIcon>
            <NavText>
            Contact
            </NavText>
            
        </NavItem>

        <br /><br /><br /><br />
        <NavItem eventKey="Contact">
            <NavIcon>
                   <a href="/"> <img src="https://img.icons8.com/ios/50/000000/marker-m.png"/></a>
            </NavIcon>
            <NavText>
             
            </NavText>
            
        </NavItem>
        
        
    </SideNav.Nav>
</SideNav>        
    
   
 
   
     
 
    
        </div>
    );
};

export default Header;