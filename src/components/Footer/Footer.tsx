import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { RootState } from 'store'

import { SearchResult } from 'store/search/types'
import { Character } from 'globalTypes/character'

import './Footer.scss'

const Footer = () => {
    const navigate = useNavigate()
    const {
        searchApi: {
            queries
        },
        profileHistorySlice: {
            profileVisitedHistory
        }
    } = useSelector((state: RootState) => state)

    const prepareRecentProfiles = () => {
        const data: any = Object.values(queries)

        if (!data) {
            return ''
        }
        const results = data.map((item: { data: SearchResult }) => item.data?.results).flat();

        return profileVisitedHistory.map(id => (
            <div className='item' key={`recent-profile-${id}`} onClick={() => navigate(`/profile/${id}`)}>{results?.find((item: Character) => item.id === id)?.['name']}</div>
        ))
    }



    return (
        <div className='footer'>
            <div className='footer-head'>Recent Profiles</div>
            <div className='footer-data'>
                <div className='footer-item'>{prepareRecentProfiles()}</div>
            </div>
        </div>
    )
}

export default Footer