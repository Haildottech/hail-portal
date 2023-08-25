"use client"
import React from 'react';
import { Row, Col } from "react-bootstrap";

const LatestReleases = () => {
  return (
    <div>
        <Row>
            <Col md={12}>
                <div className='software-release-row'>
                    <a href="https://drive.google.com/file/d/1d6uh4AerGrS9Z38cge7sN6YN6y5LI_Ig/view?usp=drive_link" target="_blank">
                    <Row>
                        <Col md={10}>
                        Version 1.0.1
                        </Col>
                        <Col md={2}>
                            <div style={{fontSize:11}}>Date: 24-Aug-2023</div>
                            Click to Download
                        </Col>
                    </Row>
                    </a>
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default LatestReleases