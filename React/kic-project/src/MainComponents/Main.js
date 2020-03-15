import React from "react";
import BodyUp from './BodyUp'

export default function Main(props) {
  console.log(props)
  return (
      <>        
            <BodyUp 
                slideImg={props.mainItems.body_slide_img}
                contents1_img={props.mainItems.body_contents1}
                contents2_img={props.mainItems.body_contents2}
            />
      </>
  );
}
