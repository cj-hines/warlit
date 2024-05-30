import React from 'react';

const Search = ({ onSearch }) => {
    return (
        <div id="searchContainer" style={{ textAlign: 'center', marginBottom: '20px' }}>
            <input type="text" id="searchInput" placeholder="type type type literature stuff or history stuff..." style={{ padding: '8px', width: '25%' }} />
            <button onClick={onSearch}>Search</button>
        </div>
    );
};

export default Search;
