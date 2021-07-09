import React, {useState} from "react";
import {AsyncTypeahead} from 'react-bootstrap-typeahead'
import {SearchRefs} from "../../utils/search";
import {HashLink as Link} from 'react-router-hash-link';
import {connect} from "react-redux";
import {setRoute} from "../../redux/reducer/meActions";
import {useTranslation} from "react-i18next";


const Search = ({setRoute}) => {
  const {Refs} = SearchRefs();
  const {t} = useTranslation();
  const [options, setOptions] = useState([]);

  const handleSearch = (query) => {
    setOptions(
      Refs.filter(ref => ref.title.toLowerCase().includes(query.toLowerCase()))
    )
  };

  const filterBy = () => true;

  return (
    <AsyncTypeahead
      filterBy={filterBy}
      id="async-example"
      isLoading={false}
      labelKey="title"
      minLength={2}
      className={'w-100'}
      onSearch={handleSearch}
      options={options}
      placeholder={t('Search')}
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
