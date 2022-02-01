import React, { useState, useMemo } from 'react'

// users information
const users = [
    {
        id: 1,
        name: "jonas"
    },
    {
        id: 2,
        name: "Zed"
    },
    {
        id: 3,
        name: "John"
    }
]

const FilterUsers = () => {
    // this state will be taking user input
    const [text, setText] = useState('');
    // this state will be holding the user we want to search since we do not want live search or filter,
    // we want to search or filter once the button get clicked.
    const [search, setSearch] = useState('')

    const handleSearch = () => {
        setSearch(text)
    }

    // filtering users now and we want to search for all cases(lower,upper and camal cases)
    /* this method works but it will be less perfoment when the numbers of users to fetch will increase,
        the issue is that this filter will be trigged every time the user input something on the keyboard(remember that our filter is controlled by react and since
            this means that it has a state and when the state change the component will be re-rendered and if the page re-renders the filter will be executed.
            )
        The alternative to this problem is to use useMemo and memoized the filtering proccess and trigger it only when the dependency changes.
        The #users array cannot change, only the #search state can change, so our dependecy must the #search, i.e the filtering process will trigged only when the seach changes
    */
    // const filteredUsers = users.filter((user) => {
    //     console.log('Filtering users')
    //     return user.name.toLowerCase().includes(search.toLowerCase())
    // })

    /**  SOLUTION : remember the value the filteredUsers array.
     * This time the filteredUsers array will be trigged only when the button get clicked, because it at time when the #search state will change
     */
    const filteredUsers = useMemo(() => 
    users.filter((user) => {
            console.log("filtering process")
            return user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        })
    , [search])

    console.log('text', text)
    console.log('search', search)
    return (
        <div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
            <button onClick={handleSearch}>Filter Users</button>
            <h1>Filtered Users</h1>
            {/* displaying the list of filtered users.
                Initially all users willl be displayed since the search initial state is an empty string -> ""
                and every strings contains an empty string -> ''. cfr the filter above
            */}
            <ul>
                {filteredUsers.map((filteredUser) => {
                    return <li key={filteredUser.id}>
                        {filteredUser.name}
                    </li>
                })}
            </ul>
        </div>
    )
}

export default FilterUsers