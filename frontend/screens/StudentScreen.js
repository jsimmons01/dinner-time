import React from 'react';
import RenderStudent from '../features/students/RenderStudent'


const StudentScreen = ({ route }) => {
  const { student } = route.params;

  return (
    <RenderStudent student={student} />
  )
}

export default  StudentScreen
