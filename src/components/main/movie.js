
import React, { Component } from 'react';

export function Movie({ src, alt, name, year, genre }) {
    return (
        <div className="ticket" >
            <div className="ticketImage">
                <img src={src} alt={alt} />
            </div>
            <div className="ticketName">{name}</div>
            <div className="ticketYear">{year}</div>
            <div className="ticketGenre">{genre}</div>
        </div>
    );
}