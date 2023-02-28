/**
 * The SearchBar component will take a text
 * input and use it to search over the products
 */
function SearchBar() {
    return (
        <>
            Search{' '}
            <input
                className="search-bar"
                type="text"
            />
        </>
    );
}

export default SearchBar;
