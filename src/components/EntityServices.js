import React, { Component } from 'react';
import { Button, Icon, Item, Label } from 'semantic-ui-react'
import ContentPanel from '../components/ContentPanel';
import {  Link } from 'react-router-dom';
import "./EntityServices.css";

import self from '../assets/img/self.webp';
import deconstruct from '../assets/img/deconstruct-beeple.webp';
import poly from '../assets/img/awaken-giant-beeple.webp';

const EntityServices = () => (
    <ContentPanel  header="SERVICES">
      <Item.Group divided>
        <Item>
          <Item.Image rounded className="topImage" src={poly} />
          <Item.Content>
            <Item.Header  class="fadePadding" as='a'>CREATE NEW HYBRID ENTITY</Item.Header>
            <Item.Meta  class="fadePadding">
              <span className='cinema'>2 ETH or $400 USD</span>
            </Item.Meta>
            <Item.Description  class="fadePadding">
                Create a Hybrid Entity, capable of traversing the "real world" of court rooms and the virtual worlds of Ethereum and other distributed networks.  <br/> <br/>  Includes Entity Formation, Thirty Minutes of Consultation, and 1 Year of Registered Agent Service. <br/> <br/> Consultation may be used towards generating an Operating Agreement, attaining EIN, or advising you and your lawyer on Hybrid Entities.
            </Item.Description>

            <Item.Extra>
              <Link to="/create">
              <Button  className="big pink buttwidth pillButton" floated='right'>
                Create
                <Icon name='right chevron' />
              </Button>
              </Link>
                <Label>Wyoming, Maine, Delaware</Label>
                <Label> LLC, Series LLC, or Non-Profit</Label>
                <Label>Ethereum (Rinkeby)</Label>
            </Item.Extra>
          </Item.Content>
        </Item>

      <Item>
        <Item.Image rounded src={self} />

        <Item.Content>
          <Item.Header as='a'>ADOPT PRE-FORMED HYBRID</Item.Header>
          <Item.Meta>
            <span className='cinema'>Starting at 1 ETH or $200 USD</span>
          </Item.Meta>
          <Item.Description>
            Want a place to park your crypto assets and don't care what to call it? WyDAO LLC has an affordable, rapid solution: Series LLC's available for adoption for applicable parents.
            <br/>
            <br/>
            This process transfers legal ownership of the Series LLC to your public key, multi-sig wallet, or DAO.
            <br/> <br/>
            Includes EIN and 1 Year of Registered Agent Service.
          </Item.Description>
          <Item.Extra>

          <Link to="/adopt">
          <Button  className="big blue buttwidth pillButton" floated='right'>
            Adopt
            <Icon name='right chevron' />
          </Button>
          </Link>


            <Label>Wyoming Series LLC</Label>
            <Label>Any Blockchain</Label>
          </Item.Extra>
        </Item.Content>
      </Item>

      <Item>
        <Item.Image rounded className="bottomImage"  src={deconstruct} />
        <Item.Content>
          <Item.Header as='a'>ROLL YOUR OWN</Item.Header>
          <Item.Meta>
            <span className='cinema'>FREE</span>
          </Item.Meta>
          <Item.Description>
            <p>Design a Hybrid Entity</p>
            <p>This will take you to Etherize's 'Full Entity' deal, a collection of templates on OpenLaw. With this single form, you will be able to draft your own Articles of Incorporation and Operating Agreement. </p>
            <p>Instructions are included for submitting the filings yourself, or for hiring Etherize to do it for you later.</p>
            <br/>
          </Item.Description>
          <Item.Extra>
          <Label>Any State LLC</Label>
          <Label>Any Blockchain</Label>

          <Link to="/draft">
          <Button  className="big white buttwidth pillButton" floated='right'>
            Draft
            <Icon name='right chevron' />
          </Button>
          </Link>

          </Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  </ContentPanel>
)

export default EntityServices;
