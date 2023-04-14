import { useEffect } from "react";
import ProfileClass from './ProfileClass';
import UserContext from '../../utils/UserContext';
const AboutClass = () => {
    useEffect(() => {
    console.log('parent - useeffecft')
    });
  return (
    <div>
        {console.log('parent - render')}
      <h1>AboutClass</h1>
      <UserContext.Consumer>
        {
          ({user})=>(
          <h4>{user.name}</h4>
          )
        }
      </UserContext.Consumer>
      <ProfileClass name={'Ajay1'}/>
      <ProfileClass name={'Ajay2'}/>
    </div>
  );
};

export default AboutClass;
