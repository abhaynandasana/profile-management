import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import SearchInput from "components/SearchInput/SearchInput"
import FilterSelect from 'components/FilterSelect/FilterSelect'

import { manageFilters } from 'store/filter/filter.slice'


import './Header.scss'

const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [searchValue, setSearchValue] = useState<string>('')
    const [filterValues, setFilterValues] = useState<string[]>([])

    const handleReduxAction = () => {
        dispatch(manageFilters(
            {
                name: searchValue,
                gender: (filterValues.find((item: string) => ['Male', 'Female'].includes(item))),
                status: (filterValues.find((item: string) => ['Alive', 'Dead'].includes(item)))
            }
        ))
    }

    useEffect(() => {
        if (searchValue || filterValues) {
            handleReduxAction()
        }
    }, [filterValues])

    const handleSearchChange = () => { 
        handleReduxAction()
    }

    const handleFilterChange = (val: string[]) => {
        setFilterValues(val)
    }

    return (
        <div className='header-wrapper'>
            <div className='logo-wrap' onClick={() => navigate('/')}>Logo</div>
            <div className='input-wrap'>
                <SearchInput
                    value={searchValue}
                    onChange={(data, _) => setSearchValue(data)}
                    onBlur={handleSearchChange}
                />
                <div className='input-list'>
                    <FilterSelect value={filterValues} onChange={handleFilterChange} />
                </div>
            </div>
        </div>
    )
}

export default Header