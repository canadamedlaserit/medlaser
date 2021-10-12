import { Link } from 'gatsby';
import React, { useState } from 'react';
import Highlighter from "react-highlight-words";
import * as styles from './BlogSearchBar.module.scss';

const BlogSearchBar = ({allPosts}) => {
  
    const emptyQuery = ""
  
    const [state, setState] = useState({
      filteredData: [],
      query: emptyQuery,
    })

    const handleInputChange = event => {
        console.log(event.target.value)
        const query = event.target.value
    
        const posts = allPosts || []

        console.log(posts[0].title)
    
        const filteredData = posts.filter(post => {
            const { title } = post
            return (
                title.toLowerCase().includes(query.toLowerCase())
            )
        })
    
        //console.log('filteredData', filteredData)

        setState({
          query,
          filteredData,
        })
    }

    const { filteredData, query } = state
    const queryArr = query?.split(' ').filter(w => w !== '');

    return (
        <div className={styles.BlogSearchBar}>
            <input 
                className="searchInput"
                type="text"
                aria-label="Search"
                placeholder="Search..."
                onChange={handleInputChange}
            />
            { query !== "" && <div className={styles.BlogSearchItems}>
                <ul>
                    {
                    filteredData.length !== 0 && filteredData.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link to={`/${item.uri}`}>
                                    <Highlighter
                                        highlightClassName={styles.highlight}
                                        searchWords={queryArr}
                                        autoEscape={true}
                                        textToHighlight={item.title}
                                    />
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>}
        </div>
    )
}

export default BlogSearchBar
