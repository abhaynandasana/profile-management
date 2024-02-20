import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

import { Row, Layout } from 'antd';

import ProfileCard from "components/ProfileCard/ProfileCard"
import Pagination from 'components/Pagination/Pagination'

import { useSearchQuery } from 'store/search/search.slice'

import { RootState } from 'store'
import { Character } from 'globalTypes/character';

import 'pages/Home/Home.scss'

const SearchResults = () => {
    const [searchParams] = useSearchParams()
    const searchValue = searchParams.get('q')


    const { filterSlice: {
        filters
    } } = useSelector((state: RootState) => state)

    const [currentPage, setCurrentPage] = useState<number>(1)
    const { data } = useSearchQuery({
        ...filters,
        name: searchValue ? searchValue.replace('-', ' ') : '',
        page: currentPage
    })

    if (!data) {
        return (
            <div className='home-page-no-found-text'>
                No Data Found
            </div>
        )
    }

    return (
        <div className='home-page'>
            <div className='home-page-wrap'>
                <h4>
                    Search Results
                </h4>
                <Layout>
                    <div className='overflow-wrap'>
                        <Row gutter={24}>
                            {data.results.map(({ id, name, image, status }: Character) =>
                                <ProfileCard
                                    key={id}
                                    id={id}
                                    name={name}
                                    status={status}
                                    image={image}
                                />)}
                        </Row>
                    </div>
                    {data.info.count > 20 && <div className="pagination-wrapper">
                        <Pagination current={currentPage} total={data.info.count} onChange={setCurrentPage} />
                    </div>}
                </Layout>
            </div>
        </div>
    )
}

export default SearchResults