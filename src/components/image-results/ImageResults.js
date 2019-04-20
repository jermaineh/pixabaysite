import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info';



class ImageResults extends Component {
    render() {
        let imageListContent;
        const images  = this.props.images;

        if(images) {
            console.log(`${images[0].largeImageURL}`)
            imageListContent = (
                <GridList cols={5} style={{width: 'auto', height: 'auto', position: 'center'}} className='App'>
                {images.map(img =>(
                    <GridListTile
                        
                        title={img.tags}
                        key={img.id}
                        
                     >
                        <img src={img.largeImageURL} alt="" />
                        <GridListTileBar
                            title={img.tags.split(',')[0]}
                            subtitle={<span>by: {img.user}</span>}
                            actionIcon={
                                <IconButton style={{color: 'rgba(255, 255, 255, 0.54)',}}>
                                <InfoIcon />
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
                
                </GridList>
            );
        } else {
            imageListContent = null;
        }
        return (
            <div>
                {imageListContent}
            </div>
        );
    }
}
ImageResults.propTypes = {
    images: PropTypes.array.isRequired
}
export default ImageResults;
