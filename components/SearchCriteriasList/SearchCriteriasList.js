import React from 'react';
import Button from '../Button';

const SearchCriteriasList = ({ options, currentOption, changeHandler }) => {
    const searchCriterias = options.map(option => (
        <Button
            key={option}
            title={option}
            customClass={currentOption === option ? 'buttonChecked' : ''}
            onClick={() => {
                changeHandler(option);
            }}
        />
    ));

    return <React.Fragment>{searchCriterias}</React.Fragment>;
};

export default SearchCriteriasList;
