import React, { Component } from 'react';
import {Grid, List, Icon} from 'semantic-ui-react';
import ContentPanel from '../components/ContentPanel';
import BannerHeader from "../components/BannerHeader";
class Contact extends Component {
  render() {
    return (
        <div className={"mainBackground"}>
            <BannerHeader/>
      <Grid>
        <Grid.Row>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column only='tablet computer' computer={5} tablet={1}>
          </Grid.Column>
          <Grid.Column  computer={6} tablet={14} mobile={16}>
            <ContentPanel   header="CONTACT">
                <List className="contentBuffer">
                  <List.Item className="listText"
                    content={<a href='mailto:hello@etherize.io@'><Icon name='mail' />  hello@etherize.io</a>}
                   />
                  <List.Item className="listText"
                    content={<a href='https://twitter.com/aitherick'><Icon name='twitter' />  @aitherick</a>}
                   />
                  <List.Item className="listText"
                    content={<a href='https://t.me/hybridentities'> <Icon name='telegram' /> hybrid entity channel</a>}
                   />
                 </List>
            </ContentPanel>

           </Grid.Column>
            <Grid.Column  only='tablet computer' computer={5} tablet={1}>
           </Grid.Column>
        </Grid.Row>
        <Grid.Row>

          </Grid.Row>
      </Grid>
        </div>
    );
  }
}
export default Contact;
