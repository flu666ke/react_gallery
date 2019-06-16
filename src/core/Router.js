import React from 'react';
import Home from '../components/pages/Home';
import Gallery from '../components/pages/Gallery';
import { Switch, Route } from 'react-router-dom';
import Photo from '../components/pages/Photo';
import Favorite from '../components/pages/Favorite';



export default function () {
    return (
    <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/gallery' component={Gallery} />
        <Route path='/favorite' component={Favorite} />
        <Route path='/photo/:photoId' component={Photo} />
        
    </Switch>
    )
}
    