
import React, { Component } from 'react';

export class Main extends Component {
    render() {
      return (
        <div className="main"> 
        {/*<div className="mainNotFoundLabel">No films found</div>*/}
          <div className="ticket">
              <div className="ticketImage">
                  <img src="../../public/img/L1.jpg" alt="LOTR1"/>
              </div>
              <div className="ticketName">The Lord of the Rings: The Fellowship of the Ring</div>
              <div className="ticketYear">2001</div>
              <div className="ticketGenre">Fantasy</div>
          </div>
          <div className="ticket">
              <div className="ticketImage">
                  <img src="../../public/img/L2.jpg" alt="LOTR2"/>
              </div>
              <div className="ticketName">The Lord of the Rings: The Two Towers</div>
              <div className="ticketYear">2002</div>
              <div className="ticketGenre">Fantasy</div>
          </div>
          <div className="ticket">
              <div className="ticketImage">
                  <img src="../../public/img/L3.jpg" alt="LOTR3"/>
              </div>
              <div className="ticketName">The Lord of the Rings: The Return of the King</div>
              <div className="ticketYear">2003</div>
              <div className="ticketGenre">Fantasy</div>
          </div>
          <div className="ticket">
              <div className="ticketImage">
                  <img src="../../public/img/H1.jpg" alt="HOBBIT1"/>
              </div>
              <div className="ticketName">The Hobbit: An Unexpected Journey</div>
              <div className="ticketYear">2012</div>
              <div className="ticketGenre">Fantasy</div>
          </div>
          <div className="ticket">
              <div className="ticketImage">
                  <img src="../../public/img/H2.jpg" alt="HOBBIT2"/>
              </div>
              <div className="ticketName">The Hobbit: The Desolation of Smaug</div>
              <div className="ticketYear">2013</div>
              <div className="ticketGenre">Fantasy</div>
          </div>
          <div className="ticket">
              <div className="ticketImage">
                  <img src="../../public/img/H3.jpg" alt="HOBBIT3"/>
              </div>
              <div className="ticketName">The Hobbit: The Battle of the Five Armies</div>
              <div className="ticketYear">2014</div>
              <div className="ticketGenre">Fantasy</div>
          </div>
          <div className="ticket">
              <div className="ticketImage">
                  <img src="../../public/img/MORTALE.jpg" alt="MORTALE"/>
              </div>
              <div className="ticketName">Mortal Engines</div>
              <div className="ticketYear">2018</div>
              <div className="ticketGenre">Fantasy</div>
          </div>
        </div>
      );
    }
  }
  