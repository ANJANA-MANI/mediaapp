import React, { useEffect, useState } from 'react';
import Videocar from './Videocar';
import { Col, Row } from 'react-bootstrap';
import { getAllVideo } from '../services/allapi';

function View({ uploadVideoServerResponse }) {
  const [allvideos, setallVideos] = useState([]);
  const [deletevideoStatus, setDeletevideostatus] = useState(false);

  const getalluploadedVideos = async () => {
    try {
      const { data } = await getAllVideo();
      setallVideos(data);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  useEffect(() => {
    setDeletevideostatus(false);
    getalluploadedVideos();
  }, [uploadVideoServerResponse, deletevideoStatus]);

  return (
    <>
      <Row>
        {allvideos.length > 0 ? (
          allvideos.map((video) => (
            <Col key={video.id} sm={12} md={6} lg={4} xl={3} className="d-flex justify-content-evenly">
              <Videocar displayData={video} setDeletevideostatus={setDeletevideostatus} />
            </Col>
          ))
        ) : (
          <p className='fw-bolder text-danger fs-5'>Nothing to display</p>
        )}
      </Row>
    </>
  );
}

export default View;
