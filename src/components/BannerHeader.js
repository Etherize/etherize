import React, { Component } from 'react';

import { Grid, Sticky, Button, Menu } from 'semantic-ui-react';
import "./BannerHeader.css";
import { NavLink} from 'react-router-dom';

export default class BannerHeader extends React.Component {

  render () {
    return (
      <div className="banner fullWidth">
        <Sticky className="fullWidth">
            <Grid verticalAlign='middle'  columns={3}  className="bannerGrid fullWidth"  centered>
                  <Grid.Column  floated='left' computer={5} only='computer' className="pill ">
                      <NavLink className="logoText" activeClassName="activeHeader" exact to="/">Etherize</NavLink>
                  </Grid.Column>
                  <Grid.Column  floated='right' className="hideOnSmallDesktop" only='computer' width={4}>
                      <h1 className="subTitle "> Hybrid Entity Portal</h1>
                      <h4 className=" subSubTitle"><i>V.01: "Experimental AF" </i></h4>
                  </Grid.Column>
                  <Grid.Column only='computer'  floated='left'  width={7}>
                    <Grid>
                      <Grid.Row  floated='left'   columns={2}>
                      <Grid.Column>
                        <NavLink as={Button} className="fancyButton biggerButton "  activeClassName=" activeLink" to={"/create"}><a class="nudge">CREATE</a></NavLink>
                        <NavLink as={Button} className="fancyButton biggerButton "  activeClassName=" activeLink" to={"/registry"}><a class="nudge">REGISTRY</a></NavLink>

                        <NavLink as={Button} className="fancyButton biggerButton "  activeClassName=" activeLink" to={"/tools"}><a class="nudge">TOOLS</a></NavLink>
                        <NavLink as={Button} className="fancyButton biggerButton "  activeClassName=" activeLink" to={"/contact"}><a class="nudge">CONTACT</a></NavLink>
                      </Grid.Column>
                      </Grid.Row>
                      </Grid>
                  </Grid.Column>



                  <Grid.Row centered floated='left' columns={2} only='mobile tablet'>
                      <Grid.Column>
                      <NavLink className="logoText" activeClassName="activeHeader" exact to="/">Etherize</NavLink>
                      </Grid.Column>
                      <Grid.Column className='navColumn'>
                            <NavLink as={Menu.Item} className="fancyButton biggerButton"  activeClassName=" activeLink" to={"/create"}><a class="nudge3">CREATE</a></NavLink>
                            <NavLink as={Menu.Item} className="fancyButton biggerButton"  activeClassName=" activeLink" to={"/tools"}><a class="nudge3">TOOLS</a></NavLink>
                            <NavLink as={Menu.Item} className="fancyButton biggerButton"  activeClassName=" activeLink" to={"/contact"}><a class="nudge3">CONTACT</a></NavLink>
                      </Grid.Column>
                    </Grid.Row>
              </Grid>
          </Sticky>
      </div>
     )
  }
}
