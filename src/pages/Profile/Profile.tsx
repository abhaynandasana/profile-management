import { useParams, useNavigate } from 'react-router-dom'
import { Badge, Col, Row, Spin } from 'antd';
import { LeftOutlined } from '@ant-design/icons'

import { useProfileQuery } from 'store/profile/profile.slice'
import { profileStatus } from 'helpers/profileStatus';
import './Profile.scss'

const Profile = () => {
    const navigate = useNavigate()
    const { character_id } = useParams()

    const { data,  isFetching } = useProfileQuery(character_id)

    const breadCrumbElement = () => (
        <div onClick={() => navigate('/')} className='breadcrumb-text'>
            <LeftOutlined /> Home
        </div>
    )

    if (!data && !isFetching) {
        return <div>
            {breadCrumbElement()}
            <div className='profile-no-found-text'>No Data Found</div>
        </div>
    }


    return (
        <div className='profile-wrap'>
            {isFetching && (
                <div className='spin-wrap'>
                    <Spin />
                </div>
            )}
            {data &&
            <Row>
                <Col span={24}>
                    <div className='profile-img-wrap'>
                        <div className='breadcrumb-wrap'>{breadCrumbElement()}</div>
                        <div className='cover-img'></div>
                        <div className='profile-img'>
                            <img src={data.image} alt={`character-${data.id}`} />
                            <Badge status={profileStatus(data.status)} />
                        </div>
                    </div>
                </Col>
                <Col span={24}>
                    <div className='profile-data'>
                        <Row>
                            <Col span={24}>
                                <div className='profile-data-list'>
                                    <div className='profile-name'>{data.name}</div>
                                </div>
                            </Col>
                            <Col span={24}>
                                <div className='profile-data-list'>
                                    <span>Species: </span>
                                    <span>{data.species}</span>
                                </div>
                            </Col>
                            <Col span={24}>
                                <div className='profile-data-list'>
                                    <span>Type: </span>
                                    <span>{data.type}</span>
                                </div>
                            </Col>
                            <Col span={24}>
                                <div className='profile-data-list'>
                                    <span>Gender: </span>
                                    <span>{data.gender}</span>
                                </div>
                            </Col>
                            <Col span={24}>
                                <div className='profile-data-list'>
                                    <span>Location: </span>
                                    <span>{data.location.name}</span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            }


        </div>
    )
}

export default Profile