import React, { Component } from 'react';

export class FilmInfo extends Component {
    render() {
        return (
            <div>
                <div className="headerTop">
                 <div className="rouletteLabel">netflixroulette</div>
                 <button className="headerSearchButton">SEARCH</button>
             </div>
             <div className="headerMiddle">
                 <div className="headerTitleImage">
                     <img src="../../public/img/L1.jpg" alt="LOTR1"/>
                 </div>
                 <div className="headerTitleDetails">
                     <div className="headerTitleName">The Lord of the Rings</div>
                     <div className="headerTitleCategory">No requirements so f... ...</div>
                     <div className="headerTitleYearAndDuration">
                         <div className="headerTitleYear">2001</div>
                         <div className="headerTitleDuration">228 min</div>
                     </div>
                     <div className="headerTitleDescription">The Lord of the Rings: The Fellowship of the Ring is a New Zealand-American 2001 epic fantasy adventure film directed by Peter Jackson based on the first volume of J. R. R. Tolkien's The Lord of the Rings. It is the first instalment in The Lord of the Rings series, and was followed by The Two Towers (2002) and The Return of the King (2003), based on the second and third volumes of The Lord of the Rings.
                     </div>
                 </div>
             </div>
            </div>
        );
    }
}