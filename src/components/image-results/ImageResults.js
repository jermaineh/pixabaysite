import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info';
import { Dialog } from '@material-ui/core';
import Button from '@material-ui/core/Button'
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';


class ImageResults extends Component {
    state = {
        open: false,
        currentImg: ''   // used to set the state of the Dialog/Detailed picture view
    }
   handleOpen = img => {
        this.setState({open: true, currentImg: img})
    }
     handleClose = () => {
        this.setState({ open: false })
    }
    
    render() {
        let imageListContent;
        const images  = this.props.images;
        
        if(images) {
            
            console.log(`${images[0].largeImageURL}`)
            imageListContent = (
                <div className="container-fluid">
                <GridList cols={5} style={{width: 'auto', height: 'auto', position: 'center'}} className='App'>
                {images.map(img =>(
                    <GridListTile
                        
                        title={img.tags}
                        key={img.id}
                        
                     >
                        <img src={img.largeImageURL} alt="" />
                        <GridListTileBar
                            title={img.tags.split(',')[0]} //turned comma seperated value into a array and then took first element
                            subtitle={<span>by: {img.user}</span>}
                            actionIcon={
                                <IconButton color="default" style={{color: 'rgba(255, 255, 255, 0.54)',}} onClick={() => this.handleOpen(img.largeImageURL) }>
                                <InfoIcon />
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
                
                </GridList>
                </div>
            );
        } else {
            imageListContent = null;  //sets the screen to blank if we delete all text from the searchbar
        }

       
      
          
        return (
            <div>
                {imageListContent}
                <Dialog
                    open={this.state.open}
                    >
                     <DialogTitle id="alert-dialog-slide-title">
                        Detailed View
                    </DialogTitle>
                    <img src={this.state.currentImg} alt='' style={{ width: '100%' }} />
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                        Done
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}
ImageResults.propTypes = {
    images: PropTypes.array.isRequired    //makes sure that we recieve the correct prop for our images, if not it will throw a error.
}
export default ImageResults;
