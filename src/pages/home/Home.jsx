import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import TagInput from '../../components/Tag/Tag';
import SearchInput from '../../components/search-input/SearchInput';

const Home = () => {

    const dispatch = useDispatch()
    const data = useSelector(state => state.name)

    console.log(data);

    let n = 5;

    for(let i = 1; i<=n; i++){
        let str = "* ";
        let space=" ";
        let line = space.repeat(n-1);
        let stars = str.repeat(2*i-1);
        console.log(line + stars);
    }
    for (let i = 1; i <= n; i++) {
        let spacesBefore = " ".repeat(n - i); // Spaces before the stars
        let stars = "*".repeat(i * 2 - 1); // Stars for the current row
        console.log(spacesBefore + stars);
    }

  return (
    <div>Home

        {/* <h1>this is redux value {data}</h1> */}

        {/* <TagInput/> */}
        <SearchInput/>
    </div>
  )
}

export default Home