import {useState} from 'react';
import styles from './SearchBar.module.css';

interface iSearchBar  {
	handleClick : (searchValue: string)=> any;
}

const SearchBar = ({handleClick} : iSearchBar) => {

	const [searchValue, setSearchValue] = useState('');

  const onClick = () => {
    handleClick(searchValue);
  }

	return (
		<div data-testid="search-bar" className={styles.wrapper}>				
			<label className="label" htmlFor="search">Search Books:</label>
			<div className={styles.wrapper}>
				<input id="search" className={styles.input} onChange={e => setSearchValue(e.target.value)} placeholder="Search Books" type="search"/>
				<button data-testid="search-button" className={styles.btn} onClick={()=> onClick()}>Search</button>
			</div>
		</div>
	);
  
}

export default SearchBar;

