import React, { useState } from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({ articles }) {

    const [sortedVotes, setSortedVotes] = useState(articles.sort(upvoteFunc))

    function upvoteFunc(a, b) {
        return b.upvotes - a.upvotes
    }

    function sortUpvotes() {
        articles.sort(upvoteFunc)
        setSortedVotes(articles)
    }

    function sortDate() {
        const aux = [...articles.sort((a, b) => {

            const ad = new Date(a.date)
            const bd = new Date(b.date)
            if (ad > bd) {
                return -1
            }
            if (ad < bd) {
                return 1
            }
            return 0

        })]
        setSortedVotes(aux)
    }
    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link" className="small" onClick={() => { sortUpvotes() }}>Most Upvoted</button>
                <button data-testid="most-recent-link" className="small" onClick={() => { sortDate() }}>Most Recent</button>
            </div>
            <Articles articles={sortedVotes} />
        </div>
    );

}

export default App;
