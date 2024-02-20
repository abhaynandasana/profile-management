import { Routes as RoutesComponent, Route } from 'react-router-dom'

import Home from 'pages/Home/Home'
import Profile from 'pages/Profile/Profile'
import SearchResults from 'pages/SearchResults/SearchResults'

const Routes = () => {
    return (
        <RoutesComponent>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:character_id" element={<Profile />} />
            <Route path="/search" element={<SearchResults />} />
        </RoutesComponent>
    )
}

export default Routes

