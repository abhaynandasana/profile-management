import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Badge, Card, Col } from "antd";

import { manageHistory } from "store/profileHistory/profileHistory.slice";

import { profileStatus } from "helpers/profileStatus";
import "./ProfileCard.scss";

export type ProfileCardProps = {
  id: number;
  name: string;
  image: string;
  status: string;
};
const ProfileCard = ({ name, image, id, status }: ProfileCardProps) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
    
  return (
    <Col>
      <div className="profile-card-wrap">
        <div className="profile-user-cover"></div>
        <Card
          cover={
            <div className="user-profile">
              <img alt={`character-${id}`} src={image} />
              <Badge status={profileStatus(status)} />
            </div>
          }
        >
          <div>
            <div
              className="user-name"
              onClick={() => {
                navigate(`/profile/${id}`);
                dispatch(manageHistory(id));
              }}
            >
              {name}
            </div>
          </div>
        </Card>
      </div>
    </Col>
  );
};

export default ProfileCard;
