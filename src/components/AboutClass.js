import { useEffect } from "react";
import ProfileClass from './ProfileClass';
const AboutClass = () => {
    useEffect(() => {
    console.log('parent - useeffecft')
    });
  return (
    <div>
        {console.log('parent - render')}
      <h1>AboutClass</h1>
      <ProfileClass name={'Ajay1'}/>
      <ProfileClass name={'Ajay2'}/>
    </div>
  );
};

export default AboutClass;
