import React, {useEffect} from 'react';
import { getPhoto } from '../../../utils/PhotoApiService';
import { connect } from 'react-redux';
import './style.scss';

function Photo(props) {
  const {match:{params:{photoId}}, setPhoto} = props;
  

  useEffect(() => {
    getPhoto(photoId).then(photo => {
      setPhoto(photo);
    })
  }, [photoId, setPhoto]);

  return <h1>Photo page</h1>
}




const mapStateToProps = state => ({
  photo: state.photo.data
});

const mapDispatchToProps = dispatch => ({
  setPhoto: photo => dispatch({type: 'SET_PHOTO', photo})
});

export default connect(mapStateToProps, mapDispatchToProps)(Photo);



