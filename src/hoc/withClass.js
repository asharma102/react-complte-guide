import React from 'react';

// const withClass = props => (
//     <div className={props.classes}>
//         {props.children}
//         <div style={{
//             backgroundColor: "lightyellow",
//             width: "50%",
//             padding: "10px",
//             border: "3px solid brown",
//             margin: "0 auto",
//             marginTop: "20px"
//         }}>
//      Hello this text is Coming from HOC and this can come included anywhere
// if we warp any component with this HOC </div>
//     </div >
// );

// export default withClass;

const withClass = (WrappedComponent, className) => props => (
  <div className={className}>
    <WrappedComponent {...props} />
  </div >
);
export default withClass;
