import Reach, { useState } from 'react';
import Collection from '/Components/Collection/Collection/'

const CollectionList = (props) => {
    let collections = props.collections.map(collection => {
        return <Collection collection={collection} />;
    });
    return <div>{collections}</div>
}


export default CollectionList;