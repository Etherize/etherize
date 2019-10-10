import React, { } from 'react';
import {
  MDBBtn,
  MDBCardText,
  MDBContainer,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle, MDBBadge, MDBRow, MDBCol, MDBJumbotron, MDBIframe, MDBAnimation

} from "mdbreact";

import "./EntityServices.css";

import self from '../assets/img/self.webp';
import deconstruct from '../assets/img/deconstruct-beeple.webp';
import poly from '../assets/img/awaken-giant-beeple.webp';

const EntityServices = () => (
<>
  <MDBJumbotron fluid className={"text-center"} >
    {/*<MDBJumbotron fluid className={"jumbo-background"}/>*/}
    <MDBContainer className={"jumbo-container"}>

    <MDBCardTitle className="h1-responsive pt-3 m-5 jumbo-title">
            Welcome to the Etheric Entity Portal
          </MDBCardTitle>
    <p className="mx-5 mb-5 h3">
      Enjoy the legal protections of a Wyoming LLC for your DAO or any member of a DAO
    </p>
    </MDBContainer>
  </MDBJumbotron>

<MDBContainer>
  {/*spacing*/}
  <MDBRow className={"mt-2"} />


  {/*spacing*/}
  <MDBRow className={"mt-2"} >
    <MDBCol className={"text-center"}>
    <MDBCardTitle className="h1-responsive pt-3 m-5 white-text">
      Choose Your Destiny
    </MDBCardTitle>
    </MDBCol>
  </MDBRow>

  {/*begin cards row*/}
  <MDBRow center className={"mt-2"}>

    <MDBCol lg="4" className="mb-4">
      <MDBAnimation reveal type="fadeInUp">
      <MDBCard cascade >
          <MDBCardImage cascade
              src={poly}
              alt=""
              top
              hover
              overlay="white-slight"
          />
          <MDBCardBody cascade>
            <MDBCardTitle className="text-center" tag="h3">Create New Hybrid Entity</MDBCardTitle>
            <MDBCardText>
              Create a Hybrid Entity, capable of traversing the "real world" of court rooms and the virtual worlds of Ethereum and other distributed networks.
              <br/> <br/>
              Includes Entity Formation, Thirty Minutes of Consultation, and 1 Year of Registered Agent Service.
              <br/> <br/>
              Consultation may be used towards generating an Operating Agreement, attaining EIN, or advising you and your lawyer on Hybrid Entities.
            </MDBCardText>
            <h4><MDBBadge className="mr-2 mt-2"> Wyoming, Maine, Delaware </MDBBadge>
            <MDBBadge className="mr-2 mt-2">  LLC, Series LLC, or Non-Profit </MDBBadge>
            <MDBBadge className="mr-2 mt-2"> Ethereum (Rinkeby) </MDBBadge></h4>
            <MDBBtn size="md" href={"/create"} className={"btn-primary"}>
              Create
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBAnimation>
    </MDBCol>

    {/*<MDBContainer>*/}
    {/*<MDBRow center className={"mt-2"}>*/}

    <MDBCol lg="4" className="mb-4">
      <MDBAnimation reveal type="fadeInUp">

      <MDBCard cascade >
          <MDBCardImage
              cascade
              src={self}
              alt=""
              top
              hover
              overlay="white-slight"
          />
          <MDBCardBody cascade>
            <MDBCardTitle tag="h3" className="text-center">Adopt Pre-Formed Hybrid</MDBCardTitle>
            <MDBCardText>
              Want a place to park your crypto assets and don't care what to call it? WyDAO LLC has an affordable, rapid solution: Series LLC's available for adoption for applicable parents.
              <br/> <br/>
              This process transfers legal ownership of the Series LLC to your public key, multi-sig wallet, or DAO.
              <br/> <br/>
              Includes EIN and 1 Year of Registered Agent Service.
            </MDBCardText>
            <h4><MDBBadge className="mr-2 mt-2"> Wyoming Series LLC </MDBBadge>
            <MDBBadge className="mr-2 mt-2"> Any blockchain </MDBBadge></h4>

            <MDBBtn size="md" href={"/adopt"} className={"btn-primary"}>
              Adopt
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBAnimation>
    </MDBCol>

    <MDBCol lg="4" className="mb-4">
      <MDBAnimation reveal type="fadeInUp">

      <MDBCard cascade >
          <MDBCardImage cascade
              src={deconstruct}
              alt=""
              top
              hover
              overlay="white-slight"
          />
          <MDBCardBody cascade>
            <MDBCardTitle className="text-center" tag="h3">Roll Your Own</MDBCardTitle>
            <MDBCardText>
              Design a Hybrid Entity
              <br/> <br/>
              This will take you to Etherize's 'Full Entity' deal, a collection of templates on OpenLaw. With this single form, you will be able to draft your own Articles of Incorporation and Operating Agreement.
              <br/> <br/>
              Instructions are included for submitting the filings yourself, or for hiring Etherize to do it for you later.
            </MDBCardText>
            <h4><MDBBadge className="mr-2 mt-2"> Any state LLC </MDBBadge>
            <MDBBadge className="mr-2 mt-2"> Any blockchain </MDBBadge></h4>
            <MDBBtn size="md" href={"/draft"} className={"btn-primary"}>
              Draft
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBAnimation>
    </MDBCol>
    {/*</MDBRow>*/}
    {/*</MDBContainer>*/}
  </MDBRow>
</MDBContainer>
</>
  //
  //   <ContentPanel  header="SERVICES">
  //     <Item.Group divided>
  //       <Item>
  //         <Item.Image rounded className="topImage" src={poly} />
  //         <Item.Content>
  //           <Item.Header  class="fadePadding" as='a'>CREATE NEW HYBRID ENTITY</Item.Header>
  //           <Item.Meta  class="fadePadding">
  //             <span className='cinema'>2 ETH or $400 USD</span>
  //           </Item.Meta>
  //           <Item.Description  class="fadePadding">
  //               Create a Hybrid Entity, capable of traversing the "real world" of court rooms and the virtual worlds of Ethereum and other distributed networks.  <br/> <br/>  Includes Entity Formation, Thirty Minutes of Consultation, and 1 Year of Registered Agent Service. <br/> <br/> Consultation may be used towards generating an Operating Agreement, attaining EIN, or advising you and your lawyer on Hybrid Entities.
  //           </Item.Description>
  //
  //           <Item.Extra>
  //             <Link to="/create">
  //             <Button  className="big pink buttwidth pillButton" floated='right'>
  //               Create
  //               <Icon name='right chevron' />
  //             </Button>
  //             </Link>
  //               <Label>Wyoming, Maine, Delaware</Label>
  //               <Label> LLC, Series LLC, or Non-Profit</Label>
  //               <Label>Ethereum (Rinkeby)</Label>
  //           </Item.Extra>
  //         </Item.Content>
  //       </Item>
  //
  //     <Item>
  //       <Item.Image rounded src={self} />
  //
  //       <Item.Content>
  //         <Item.Header as='a'>ADOPT PRE-FORMED HYBRID</Item.Header>
  //         <Item.Meta>
  //           <span className='cinema'>Starting at 1 ETH or $200 USD</span>
  //         </Item.Meta>
  //         <Item.Description>
  //           Want a place to park your crypto assets and don't care what to call it? WyDAO LLC has an affordable, rapid solution: Series LLC's available for adoption for applicable parents.
  //           <br/>
  //           <br/>
  //           This process transfers legal ownership of the Series LLC to your public key, multi-sig wallet, or DAO.
  //           <br/> <br/>
  //           Includes EIN and 1 Year of Registered Agent Service.
  //         </Item.Description>
  //         <Item.Extra>
  //
  //         <Link to="/adopt">
  //         <Button  className="big blue buttwidth pillButton" floated='right'>
  //           Adopt
  //           <Icon name='right chevron' />
  //         </Button>
  //         </Link>
  //
  //
  //           <Label>Wyoming Series LLC</Label>
  //           <Label>Any Blockchain</Label>
  //         </Item.Extra>
  //       </Item.Content>
  //     </Item>
  //
  //     <Item>
  //       <Item.Image rounded className="bottomImage"  src={deconstruct} />
  //       <Item.Content>
  //         <Item.Header as='a'>ROLL YOUR OWN</Item.Header>
  //         <Item.Meta>
  //           <span className='cinema'>FREE</span>
  //         </Item.Meta>
  //         <Item.Description>
  //           <p>Design a Hybrid Entity</p>
  //           <p>This will take you to Etherize's 'Full Entity' deal, a collection of templates on OpenLaw. With this single form, you will be able to draft your own Articles of Incorporation and Operating Agreement. </p>
  //           <p>Instructions are included for submitting the filings yourself, or for hiring Etherize to do it for you later.</p>
  //           <br/>
  //         </Item.Description>
  //         <Item.Extra>
  //         <Label>Any State LLC</Label>
  //         <Label>Any Blockchain</Label>
  //
  //         <Link to="/draft">
  //         <Button  className="big white buttwidth pillButton" floated='right'>
  //           Draft
  //           <Icon name='right chevron' />
  //         </Button>
  //         </Link>
  //
  //         </Item.Extra>
  //       </Item.Content>
  //     </Item>
  //   </Item.Group>
  // </ContentPanel>
)

export default EntityServices;
