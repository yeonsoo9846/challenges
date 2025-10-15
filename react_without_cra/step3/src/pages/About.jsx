import React from 'react';

const About = () => {
    return (
        <div>
            <h1>About Page</h1>
            <p>이 페이지도 별도의 청크로 분리됩니다.</p>
            <p>필요할 때만 로드되어 초기 번들 크기를 줄입니다.</p>
        </div>
    );
};

export default About;
