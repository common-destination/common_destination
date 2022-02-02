import React from "react";
import img from "../assets/images/image1.png";

function About(props) {
  return (
    <div className={props.className}>
      <div className="image">
        <img src={img} alt="" />
      </div>
      <div className="description">
        <h2>About us</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
          aliquid dolorum non minus magni vel officiis adipisci, saepe magnam
          laborum asperiores. Voluptatum ad quis eaque earum iusto nisi sint
          maxime veritatis quaerat nesciunt. Corrupti, quod alias nemo
          temporibus ducimus voluptate pariatur dolor corporis delectus ex at
          mollitia fuga excepturi beatae! Quia vel quisquam perspiciatis dicta
          alias nisi nam magni totam voluptatum perferendis quos dignissimos
          veniam culpa et laborum, sed quis nulla? Dolorem modi ipsum, amet
          tenetur laboriosam odio fugiat at aliquam quam esse tempora
          repudiandae recusandae ullam vero corrupti pariatur, ex ab temporibus?
          Dolor in, cupiditate eligendi placeat expedita repudiandae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum id porro
          magnam, debitis deleniti numquam doloribus commodi amet doloremque
          sint corporis dolor provident quas temporibus voluptas iusto, animi
          nostrum vel ex modi, eum quidem accusamus saepe tenetur! Veniam dolore
          dolor quae, temporibus nisi non deleniti quos placeat repudiandae
          sapiente eos officiis ratione saepe id recusandae aliquid et commodi,
          voluptate nesciunt doloribus facilis odio! Tenetur numquam nihil
          veritatis modi, atque natus libero pariatur iusto tempora earum! Eius,
          nulla. Laudantium culpa asperiores, accusamus expedita commodi eveniet
          quasi quas ab minus assumenda, hic beatae, dolor magni esse odio
          neque. Aspernatur facilis velit delectus.
        </p>
      </div>
    </div>
  );
}

export default About;
