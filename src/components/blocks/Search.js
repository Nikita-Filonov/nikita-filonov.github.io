import React, {useRef, useState} from "react";
import {AsyncTypeahead} from 'react-bootstrap-typeahead'
import {SearchRefs} from "../../utils/search";
import {HashLink as Link} from 'react-router-hash-link';
import {connect} from "react-redux";
import {setRoute} from "../../redux/reducer/meActions";


const Search = ({setRoute}) => {
  const searchInput = useRef(null)
  const {Refs} = SearchRefs();
  const [options, setOptions] = useState([]);

  const handleSearch = (query) => {
    setOptions(
      Refs.filter(ref => ref.title.toLowerCase().includes(query.toLowerCase()))
    )
  };

  const filterBy = () => true;

  return (
    <AsyncTypeahead
      ref={searchInput}
      filterBy={filterBy}
      id="async-example"
      isLoading={false}
      labelKey="title"
      minLength={2}
      className={'w-100'}
      onSearch={handleSearch}
      options={options}
      placeholder="Поиск"
      renderMenuItemChildren={(option, props) => (
        <Link to={option.ref} onClick={() => setRoute(option.ref)}>{option.title}</Link>
      )}
    />
  );
};


export default connect(null,
  {
    setRoute
  },
)(Search);
