import { useEffect, useState } from 'react';
import { ReactComponent as SearchIcon } from '../../assets/icons/magnifying-glass-solid.svg';
import { ReactComponent as CrossIcon } from '../../assets/icons/circle-xmark-solid.svg';

interface SearchBarProps {
    returnSearchCriteria: (crtieria: string) => void;
    appliedSearchTerm: string;
}

function SearchBar(props: SearchBarProps) {
    const { appliedSearchTerm, returnSearchCriteria } = props;
    const [searchCriteria, setSearchCriteria] = useState<string>('');

    useEffect(() => {
        if(searchCriteria !== appliedSearchTerm) setSearchCriteria(appliedSearchTerm);
    }, [appliedSearchTerm]);
    
    return (
        <div className="search-container">
            <div className="search-form">
                <h3 className="search-title">Search</h3>
                <span style={{ position: 'relative' }}>
                    <input
                        className="search-bar"
                        type="text"
                        style={{ margin: 0 }}
                        value={searchCriteria}
                        onChange={(e) => setSearchCriteria(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter')
                                returnSearchCriteria(searchCriteria);
                        }}
                    />
                    {searchCriteria.length > 0 && (
                        <span
                            className="search-clear"
                            onClick={() => {
                                setSearchCriteria('');
                                returnSearchCriteria('');
                            }}
                        >
                            <CrossIcon
                                height={'0.75em'}
                                fill={'lightGrey'}
                            />
                        </span>
                    )}
                </span>
                <div
                    className="search-btn"
                    onClick={() => returnSearchCriteria(searchCriteria)}
                >
                    <SearchIcon
                        height={'1em'}
                        fill={'white'}
                    />
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
