import React from "react";
import Socials from "../Socials";
// import Link from "next/link";
// import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-20 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="tablet:m-10 text-3xl tablet:text-4xl laptop:text-5xl font-bold pb-10">CONTACT</h1>
          <div className="">
            <p className="text-xl tablet:text-3xl laptop:text-4xl laptopl:text-4xl text-bold">
              Je vous invite à découvrir ci-dessous mes coordonnées. Vous pouvez
              m&apos;envoyer un e-mail ou me contacter directement sur les
              réseaux sociaux.
            </p>
            {/* <Button type="primary">Schedule a call</Button> */}
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-xl text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Copyright © 2024 Mehdy Mimouni. All Rights Reserved.
      </h1>
    </>
  );
};

export default Footer;
