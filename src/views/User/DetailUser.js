import React, { useEffect, useState } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import axios from "axios";
import { Button } from 'antd';


const withDetailUser = (WrappedComponent) => {
    return () => {
        const { id } = useParams();
        const [userData, setUserData] = useState(null);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await axios.get(`https://reqres.in/api/users/${id}`);
                    // console.log('check response', response.data);
                    setUserData(response.data.data);
                } catch (error) {
                    setError(error);
                } finally {
                    setLoading(false);
                }
            };

            fetchData();
        }, [id]);

        if (loading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error.message}</div>;
        }

        return <WrappedComponent id={id} userData={userData} />;
    };
};

const DetailUser = ({ id, userData }) => {
    let isEmptyObj = Object.keys(userData).length === 0;
    const navigate = useNavigate();
    const handleBack = () => {

        navigate(`/user`); // Đảm bảo rằng đường dẫn bắt đầu bằng '/'
    };

    return (
        <div>
            {isEmptyObj === false &&
                <>
                    <div>Hello world from detail user with id: {id}</div>
                    <div>User's name: {userData.first_name} {userData.last_name}</div>
                    <div>Gmail: {userData.email} </div>
                    <div>
                        <img src={userData.avatar} style={{ height: '300px', width: '300px', borderRadius: '6px' }} />
                    </div>
                    <Button onClick={handleBack}>Back</Button>
                </>
            }
            {/* <div>User Data: {userData && JSON.stringify(userData)}</div> */}
        </div>
    );
};

export default withDetailUser(DetailUser);
