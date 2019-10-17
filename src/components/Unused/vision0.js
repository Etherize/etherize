// import React, { Component, useState, useEffect } from 'react';
// // import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Rail, Grid} from 'semantic-ui-react';
// import mountain from '../assets/img/mountain-portal.jpg'
//
// import '../components/Unused/home.css';
//
//
//
// function Content() {
//   return (
//     <Grid stackable={true}>
//       <Grid.Row>
//            <Grid.Column width={3}>
//          <br/>
//          </Grid.Column>
//           <Grid.Column width={10}>
//          <div className="ui contentPanel">
//
//
//                <img src={mountain} />
//                <br/>
//              <p>A portal between the real and virtual worlds opens.</p>
//          </div>
//          <div class="ui close bottom attached left dividing rail">
//            <button class="huge pink disabled ui left labeled icon button">
//              <i class="left arrow icon"></i>
//                  Back
//              </button>
//          </div>
//          <div class="ui close bottom right dividing rail">
//            <button class="huge pink ui right labeled icon button">
//            <i class="right arrow icon"></i>
//            Next
//            </button>
//          </div>
//          </Grid.Column>
//           <Grid.Column width={3}>
//          </Grid.Column>
//       </Grid.Row>
//       <Grid.Row>
//         <Grid.Column>
//
//         </Grid.Column>
//         <Grid.Column>
//         </Grid.Column>
//         <Grid.Column>
//         </Grid.Column>
//
//         </Grid.Row>
//       </Grid>
//
//   );
// }
//
// function NavButton(props) {
//   const [icon, setIcon] = useState('coffee');
//   const [text, setText] = useState('Button');
//   const [to, setTo] = useState('/');
//   useEffect(() => {
//     setIcon(props.icon);
//     setText(props.text);
//     setTo(props.to);
//   }, [props.icon, props.text, props.to]);
//   return (
//     <Link to={to} className="navButton">
//       <span>{<FontAwesomeIcon icon={icon} />}</span>
//       <span>{text}</span>
//     </Link>
//   );
// }
//
// class Vision extends Component {
//   render() {
//     return (
//
//       <div className="">
//         <Content />
//       </div>
//     );
//   }
// }
// export default Vision;
