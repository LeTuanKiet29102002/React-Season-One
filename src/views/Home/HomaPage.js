import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Color from '../HOC/Color';

class HomePage extends React.Component {

    render() {
        return (
            <div style={{fontWeight:700}}>
                Hello Home page
                    Go to TODO
            </div>
        )
    }
}

















// const HomePage = () => {
//     const navigate = useNavigate();

//     useEffect(() => {
//         const timeoutId = setTimeout(() => {
//             navigate('/todo');
            
//         }, 3000);
        

//         // Hủy bỏ timeout nếu component bị unmount trước khi timeout hoàn thành
//         return () =>{ clearTimeout(timeoutId)};
//     }, [navigate]);

//     const goToTodo = () => {

//         navigate('/todo'); // Đảm bảo rằng đường dẫn bắt đầu bằng '/'
//     };

//     return (
//         <div>
//             <div>Hello Home page</div>
//             <button onClick={goToTodo}>
//                 Go to TODO
//             </button>
//         </div>
//     );
// };
export default Color(HomePage);