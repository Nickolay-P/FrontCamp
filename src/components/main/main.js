
import React, { Component } from 'react';
import {Movie} from './Movie';

export class Main extends Component {
    render() {
        return (
            <div className="main">
                {/*<div className="mainNotFoundLabel">No films found</div>*/}
                <Movie
                    src="../../public/img/L1.jpg"
                    alt="LOTR1"
                    name="The Lord of the Rings: The Fellowship of the Ring"
                    year="2001"
                    genre="Fantasy"
                />
                <Movie
                    src="../../public/img/L2.jpg"
                    alt="LOTR2"
                    name="The Lord of the Rings: The Two Towers"
                    year="2002"
                    genre="Fantasy"
                />
                <Movie
                    src="../../public/img/L3.jpg"
                    alt="LOTR3"
                    name="The Lord of the Rings: The Return of the King"
                    year="2003"
                    genre="Fantasy"
                />
                <Movie
                    src="../../public/img/H1.jpg"
                    alt="HOBBIT1"
                    name="The Hobbit: An Unexpected Journey"
                    year="2012"
                    genre="Fantasy"
                />
                <Movie
                    src="../../public/img/H2.jpg"
                    alt="HOBBIT2"
                    name="The Hobbit: The Desolation of Smaug"
                    year="2013"
                    genre="Fantasy"
                />
                <Movie
                    src="../../public/img/H3.jpg"
                    alt="HOBBIT3"
                    name="The Hobbit: The Battle of the Five Armies"
                    year="2014"
                    genre="Fantasy"
                />
                <Movie
                    src="../../public/img/MORTALE.jpg"
                    alt="MORTALE"
                    name="Mortal Engines"
                    year="2018"
                    genre="Bad Fantasy"
                />
            </div>
        );
    }
}
