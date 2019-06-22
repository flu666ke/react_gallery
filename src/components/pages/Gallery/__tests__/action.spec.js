
import {photos} from '../mock';

import {
    setPhotosAction, 
    setFavoriteAction, 
    SET_PHOTOS, 
    SET_FAVORITE
} from '../redux/actions';




test('should return SET_PHOTOS action', () => {
    expect(setPhotosAction(photos)).toEqual({
        type: SET_PHOTOS,
        photos
    });
  });

  test('should return SET_FAVORITE action', () => {
    expect(setFavoriteAction(photos[0])).toEqual({
        type: SET_FAVORITE,
        photo: photos[0]
    });
  });
