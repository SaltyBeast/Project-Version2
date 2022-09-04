import React from 'react';
import { Primary as BlockPrimary} from '../components/Block';
import { Avatar as InputAvatar } from '../components/Input';
import { User as FormUser } from '../components/Form';



class Main extends React.Component {
  render = () => {
    return  <>
    <BlockPrimary>
      <InputAvatar />
      <FormUser />
    </BlockPrimary>
      </>
  }
};

 export default Main








