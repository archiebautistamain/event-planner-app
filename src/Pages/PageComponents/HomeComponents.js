import React, { Component } from "react";
import classes from "./HomeComponents.module.css";
import passion from "../../Resources/icons/passion.png";
import professional from "../../Resources/icons/professional.png";
import variety from "../../Resources/icons/variety.png";
import lowcost from "../../Resources/icons/lowcost.png";
function HomeComponents() {
  return (
    <div>
      <h1 className={classes.headerTag}>About Us</h1>
      <div className={classes.Compo}>
        <div className={classes.row}>
          <div className={classes.column}>
            <div className={classes.card}>
              <img
                className={classes.image}
                src={passion}
                alt="Icon made by Pixel perfect from www.flaticon.com"
              />
              <h2>Passionate</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
                odio sit amet sapien rhoncus tempor vel et erat. Morbi felis
                lectus, venenatis vitae nisl nec, pulvinar ultricies quam. Ut
                hendrerit, elit vitae tempor sagittis, nulla orci accumsan
                ligula, a mollis ligula leo id felis. Donec ullamcorper, sapien
                sed condimentum finibus, magna tortor condimentum nunc, nec
                rhoncus sem quam a dui. Quisque ante nunc, rutrum eu tempus a,
                ultrices vitae mi. Aliquam dapibus pellentesque hendrerit. Etiam
                fringilla ex nibh, non hendrerit felis mollis id. Morbi diam
                ligula, suscipit sit amet facilisis vel, porttitor vitae massa.
              </p>
            </div>
          </div>
          <div className={classes.column}>
            <div className={classes.card}>
              <img
                className={classes.image}
                src={professional}
                alt="Icon made by Pixel perfect from www.flaticon.com"
              />
              <h2>Professional</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
                odio sit amet sapien rhoncus tempor vel et erat. Morbi felis
                lectus, venenatis vitae nisl nec, pulvinar ultricies quam. Ut
                hendrerit, elit vitae tempor sagittis, nulla orci accumsan
                ligula, a mollis ligula leo id felis. Donec ullamcorper, sapien
                sed condimentum finibus, magna tortor condimentum nunc, nec
                rhoncus sem quam a dui. Quisque ante nunc, rutrum eu tempus a,
                ultrices vitae mi. Aliquam dapibus pellentesque hendrerit. Etiam
                fringilla ex nibh, non hendrerit felis mollis id. Morbi diam
                ligula, suscipit sit amet facilisis vel, porttitor vitae massa.
              </p>
            </div>
          </div>
          <div className={classes.column}>
            <div className={classes.card}>
              <img
                className={classes.image}
                src={variety}
                alt="Icon made by Pixel perfect from www.flaticon.com"
              />
              <h2>Wide Variety</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
                odio sit amet sapien rhoncus tempor vel et erat. Morbi felis
                lectus, venenatis vitae nisl nec, pulvinar ultricies quam. Ut
                hendrerit, elit vitae tempor sagittis, nulla orci accumsan
                ligula, a mollis ligula leo id felis. Donec ullamcorper, sapien
                sed condimentum finibus, magna tortor condimentum nunc, nec
                rhoncus sem quam a dui. Quisque ante nunc, rutrum eu tempus a,
                ultrices vitae mi. Aliquam dapibus pellentesque hendrerit. Etiam
                fringilla ex nibh, non hendrerit felis mollis id. Morbi diam
                ligula, suscipit sit amet facilisis vel, porttitor vitae massa.
              </p>
            </div>
          </div>
          <div className={classes.column}>
            <div className={classes.card}>
              <img
                className={classes.image}
                src={lowcost}
                alt="Icon made by Pixel perfect from www.flaticon.com"
              />
              <h2>Low Cost</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
                odio sit amet sapien rhoncus tempor vel et erat. Morbi felis
                lectus, venenatis vitae nisl nec, pulvinar ultricies quam. Ut
                hendrerit, elit vitae tempor sagittis, nulla orci accumsan
                ligula, a mollis ligula leo id felis. Donec ullamcorper, sapien
                sed condimentum finibus, magna tortor condimentum nunc, nec
                rhoncus sem quam a dui. Quisque ante nunc, rutrum eu tempus a,
                ultrices vitae mi. Aliquam dapibus pellentesque hendrerit. Etiam
                fringilla ex nibh, non hendrerit felis mollis id. Morbi diam
                ligula, suscipit sit amet facilisis vel, porttitor vitae massa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeComponents;
