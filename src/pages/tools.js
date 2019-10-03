import React, { Component } from 'react';
import { Grid, List } from 'semantic-ui-react'
import ContentPanel from '../components/ContentPanel';
import './home.css';


class Tools extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column only='tablet computer' computer={5} tablet={1}>

          </Grid.Column>
          <Grid.Column  computer={6} tablet={14} mobile={16}>

          <ContentPanel  className="listText" header="TOOLS">
                  <List>
                    <List.Item icon='rocket' className="biggerText listHeader" content='Other Hybrid Entities' />

                    <List.Item
                      content={<a href='https://medium.com/openlawofficial/the-lao-a-for-profit-limited-liability-autonomous-organization-9eae89c9669c'>LAO (Moloch Fork/ Delaware LLC)</a>}
                    />
                    <List.Item
                      content={<a href='http://openesq.tech'>OpenESQ (Aragon DAO/ NY LLC)</a>}
                    />
                    <List.Item
                      content={<a href='https://github.com/dOrgTech/LL-DAO'>dORG (LL-DAO, Vermont)</a>}
                    />

                  </List>

                  <List>
                    <List.Item  className="biggerText listHeader" icon='file alternate outline' content='OpenLaw Agreements' />
                    <List.Item
                      content={<a href='https://etherizeit.openlaw.io/template/deal-entity'>Full Entity Creation Deal</a>}
                    />
                    <List.Item
                      content={<a href='https://etherizeit.openlaw.io/template/service-argreement-organizer'>Service Agreement: Entity Organizer</a>}
                    />
                    <List.Item
                      content={<a href='https://etherizeit.openlaw.io/template/bylaws-dao-non-profit'>Service Agreement: Registered Agent</a>}
                    />
                    <List.Item
                      content={<a href='https://app.openlaw.io/template/LLC-DAO%20Operating%20Agreement%20(NY)'>Operating Agreement: DAO/LLC (NY)</a>}
                    />
                    <List.Item
                      content={<a href='https://etherizeit.openlaw.io/template/bylaws-dao-non-profit'>Operating Agreement: DAO/Series LLC (WY)</a>}
                    />

                  </List>

            { /* https://etherizeit.openlaw.io/template/bylaws-dao-non-profit */}
                  <List>
                    <List.Item className="biggerText listHeader" icon='code' content='Code' />

                    <List.Item
                      content={<a href='https://hack.aragon.org/docs/getting-started'>Aragon (DAO Platform)</a>}
                    />
                    <List.Item
                      content={<a href='https://github.com/open-esq'>OpenESQ Github (Legal Engineering)</a>}
                    />

                    <List.Item
                      content={<a href='http://github.com/jierdin/etherize'> Etherize Github</a>}
                    />
                  </List>


                  <List>
                    <List.Item  className="biggerText listHeader" icon='telegram' content='Telegram' />
                    <List.Item
                      content={<a href='https://t.me/etherize'>Etherize Announcements</a>}
                    />

                    <List.Item
                          content={<a href='https://t.me/hybridentities'>Hybrid Entities Discussion</a>}
                    />

                    <List.Item
                              content={<a href='https://t.me/OpenEsquire'>Open ESQ Announcements</a>}
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


    );
  }
}
export default Tools;
