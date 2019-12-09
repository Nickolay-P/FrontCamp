import React, { Component } from 'react';

export class Search extends Component {
    render() {
        return (
            <div>
                <div className="rouletteLabel">netflixroulette</div>
                <div className="findLabel">FIND YOUR MOVIE</div>
                <div className="inputField">
                <input type="search" className="siteSearch" name="q" aria-label="Search through site content"></input>   
                <button type="submit" className="arrowButton"></button>
                </div>
                <div className="searchPanel">
                    <div className="searchTitleGenre">
                        <div className="searchLabel">SEARCH BY&nbsp;</div>
                        <button className="titleButton">TITLE</button>
                        <button className="genreButton">GENRE</button>
                    </div>
                    <button className="searchButton">SEARCH</button>
                </div>
            </div>
        );
    }
}