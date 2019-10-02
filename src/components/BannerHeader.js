import React, { } from 'react';

import { Grid, Sticky, Button } from 'semantic-ui-react';
import "./BannerHeader.css";
import {   NavLink} from 'react-router-dom';

export default class BannerHeader extends React.Component {



  render () {
    return (
      <div className="banner fullWidth">
        <Sticky className="fullWidth">
            <Grid verticalAlign='middle'  columns={3}  className="bannerGrid fullWidth"  centered>
                  <Grid.Column  floated='left' computer={4} tablet={4} mobile={16} className="pill ">
                      <NavLink className="logoText" activeClassName="activeHeader" exact to="/">Etherize</NavLink>
                  </Grid.Column>
                  <Grid.Column   only='computer' width={4}>
                      <h1 className="subTitle "> Hybrid Entity Portal</h1>
                      <h4 className=" subSubTitle"><i>V.01: "Experimental AF" </i></h4>
                  </Grid.Column>
                  <Grid.Column only='computer' width={8}>
                    <NavLink as={Button} className="fancyButton biggerButton"  activeClassName=" activeLink" to={"/create"}><a class="nudge">CREATE</a></NavLink>
                    <NavLink as={Button} className="fancyButton biggerButton"  activeClassName=" activeLink" to={"/adopt"}><a class="nudge">REGISTRY</a></NavLink>
                    <NavLink as={Button} className="fancyButton biggerButton"  activeClassName=" activeLink" to={"/tools"}><a class="nudge">TOOLS</a></NavLink>
                    <NavLink as={Button} className="fancyButton biggerButton"  activeClassName=" activeLink" to={"/contact"}><a class="nudge">CONTACT</a></NavLink>
                  </Grid.Column>

                  <Grid.Row  only='tablet' width={6}>
                    <Grid.Column stackable centered>
                    <NavLink as={Button} className="fancyButton biggerButton"  activeClassName=" activeLink" to={"/create"}><a class="nudge">CREATE</a></NavLink>
                    <NavLink as={Button} className="fancyButton biggerButton"  activeClassName=" activeLink" to={"/adopt"}><a class="nudge">REGISTRY</a></NavLink>
                    <NavLink as={Button} className="fancyButton biggerButton"  activeClassName=" activeLink" to={"/tools"}><a class="nudge">TOOLS</a></NavLink>
                    <NavLink as={Button} className="fancyButton biggerButton"  activeClassName=" activeLink" to={"/contact"}><a class="nudge">CONTACT</a></NavLink>
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row centered columns={2} stackable only='mobile' width={12}>
                        <Grid.Column centered>
                          <NavLink as={Button} className="fancyButton smallerButton"  activeClassName=" activeLink" to={"/create"}><a class="nudge3">CREATE</a></NavLink>
                          <NavLink as={Button} className="fancyButton smallerButton"  activeClassName=" activeLink" to={"/adopt"}><a class="nudge3">REGISTRY</a></NavLink>
                          <NavLink as={Button} className="fancyButton smallerButton"  activeClassName=" activeLink" to={"/tools"}><a class="nudge3">TOOLS</a></NavLink>
                          <NavLink as={Button} className="fancyButton smallerButton"  activeClassName=" activeLink" to={"/contact"}><a class="nudge3">CONTACT</a></NavLink>
                       </Grid.Column>
                    </Grid.Row>
              </Grid>
          </Sticky>
      </div>
     )
  }
}
