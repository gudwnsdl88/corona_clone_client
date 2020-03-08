/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { recentStatus } from '../../types/api';
import styled from '../../typed-components';

const StatusBox = styled.div`
  background: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 184px;
  height: 167px;
  z-index: 5;
  position: absolute;
  top: 100px;
  left: 30px;
  border: 1px solid black;
`;

const TextDiv = styled.div`
  font-size: 12pt;
`;

const Map = styled.div`
  width: 100%;
  height: 100vh;
`;

interface ISpanprops {
  plus: number;
}

const GapSpan = styled.div<ISpanprops>`
  color: ${(props) => (props.plus < 0 ? 'green' : 'red')};
`;

interface ISpanReleaseProps {
  plus: number;
}

const GapSapnRelease = styled.div<ISpanReleaseProps>`
  color: ${(props) => (props.plus >= 0 ? 'green' : 'red')};
`;

interface Iprops {
  statusData: recentStatus;
}

const HomePresenter: React.FC<Iprops> = ({ statusData }) => {
  // @ts-ignore: Unreachable code error
  declare const daum: any;
  let daumMap = null;
  const markers = [];
  //지도 생성
  useEffect(() => {
    const getMyLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      }
    };

    const showPosition = (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      const el = document.getElementById('map');
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      daumMap = new daum.maps.Map(el, {
        center: new daum.maps.LatLng(lat, lng),
        level: 13
      });

      // 마커를 생성합니다
      const markerPosition = new daum.maps.LatLng(lat, lng);
      const marker = new daum.maps.Marker({
        position: markerPosition
      });
      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(daumMap);
      markers.push(marker);
    };

    getMyLocation();
  }, []); //useEffect--end

  const {
    RecentStatus: { result }
  } = statusData;

  //확진자수 갭
  const confirmationGap = result[0].confirmation - result[1].confirmation;
  //격리해제 갭
  const releaseGap = result[0].release - result[1].release;
  //사망자 갭
  const deadGap = result[0].dead - result[1].dead;
  //검사중 갭
  const inspectionGap = result[0].inspection - result[1].inspection;

  return (
    <>
      <Map className="Map" id="map"></Map>
      <StatusBox>
        <TextDiv>
          확진자수 : {result[0].confirmation}명
          <GapSpan plus={confirmationGap}>({confirmationGap})</GapSpan>
        </TextDiv>
        <TextDiv>
          격리해제 : {result[0].release}명
          <GapSapnRelease plus={releaseGap}>({releaseGap})</GapSapnRelease>
        </TextDiv>
        <TextDiv>
          사망 : {result[0].dead}명<GapSpan plus={deadGap}>({deadGap})</GapSpan>
        </TextDiv>
        <TextDiv>
          검사중 : {result[0].inspection}명
          <GapSpan plus={inspectionGap}>({inspectionGap})</GapSpan>
        </TextDiv>
      </StatusBox>
    </>
  );
};

export default HomePresenter;
